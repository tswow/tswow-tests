// A DBEntry is the simplest type of database class.
// It maps only to a single row in a database and can
// easily be attached to entities such as players.

import { ORMGossipSelection } from "./orm-gossip-selection";

// This class maps player IDs to a simple click counter

// @CharactersTable specifies that we want to save
// this table in the Characters database.
// (This is almost always what we want)
@CharactersTable
export class ORMDemoEntry extends DBEntry {
    constructor(player: uint64) {
        super();
        this.player = player
    }

    // A primary key is the variable that uniquely identifies
    // this row in the table. Since we are mapping players,
    // we use the player GUID here.
    @DBPrimaryKey
    player: uint64 = 0

    // The @Field decorator is used to specify other class
    // variables we want to store in the database
    @DBField
    clickCounter: uint32 = 0

    // If we don't specify the @Field decorator,
    // the value is not saved to the database.
    memoryValue: uint32 = 0;

    // Helper function to get and attach a database object
    // to a player.
    static get(player: TSPlayer): ORMDemoEntry {

        // This either returns a cached version of
        // the save data from the player object (from a previous call),
        // or if it isn't found, creates a new save object
        // and stores it on the player.
        return player.GetObject('ORMDemoEntry'

            // LoadDBEntry is the normal global function
            // we use to load DBEntry classes.
            , LoadDBEntry(new ORMDemoEntry(player.GetGUID()))
        )
    }

    static Save(player: TSPlayer) {
        ORMDemoEntry.get(player).Save();
    }

    static Delete(playerGuid: uint64) {
        LoadDBEntry(new ORMDemoEntry(playerGuid)).Delete()
    }

    static Reset(player: TSPlayer){
        ORMDemoEntry.get(player).clickCounter = 0
    }

    static Increase(player: TSPlayer) {
        ORMDemoEntry.get(player).clickCounter++;
    }
}

export function RegisterEntryEvents(events: TSEvents) {
    events.Player.OnSave((player)=>{
        ORMDemoEntry.Save(player)
    });

    events.Player.OnDelete((guid)=>{
        ORMDemoEntry.Delete(guid)
    });
}

export function SendEntryMenu(player: TSPlayer, creature: TSCreature) {
    // This demonstrates basic usage of the save data.
    // We can use our helper function to retreive up-to-date
    // save data from the player object.
    let entry = ORMDemoEntry.get(player);

    // To modify the save data, we simply write to it like a normal variable.
    entry.clickCounter++;

    // == The below is just printing out the menu, unrelated to ORM system ==
    player.GossipClearMenu()
    player.GossipMenuAddItem(
          GossipOptionIcon.CHAT
        , "Go back"
        , 0,ORMGossipSelection.GO_BACK,false,'',0
    )
    player.GossipSendTextMenu(
        creature
        , `The code for this example can be found in livescripts/orm-entry.ts`
        + ` \n\nThis example attaches a simple save data object to any`
        + ` player that clicks this menu, and saves that counter to the database`
        + ` together with other player data.`
        + ` \n\nTry clicking this menu multiple times, and then log out and`
        + ` click it again. You should see that the save data is stored persistent`
        + ` even between sessions.`
        + ` \n\nYou have clicked this menu <${entry.clickCounter}> times.`
    )
}