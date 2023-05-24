// A DBArrayEntry is a more complex type of database class.
// It is recommended that you start with lviescripts/orm/orm-demo-entry.ts

import { ORMGossipSelection } from "./orm-gossip-selection";

// DBArrayEntries allow us to store multiple database rows in a managed
// collection that we can easily add and remove entries from.

@CharactersTable
export class ORMArrayDemo extends DBArrayEntry {
    constructor(player: uint64) {
        super();
        this.player = player
        this.randomValue = Math.random();
    }

    // Just like simple DBEntries, DBArrayEntries
    // must specify at least one unique primary key
    // to identify rows in this table.
    //
    // In addition to this explicit primary key,
    // the underlying DBArrayEntry class will also
    // specify an auto-incrementing index. This index
    // can be read from with the 'Index()' method, but
    // cannot be manipulated by the user as it is managed entirely
    // by MySQL.
    @DBPrimaryKey
    player: uint64 = 0

    @DBField
    randomValue: float = 0

    // Just like with simple DBEntries, we can specify
    // a getter function to make loading/storing
    // this class in memory easier
    static get(player: TSPlayer): DBContainer<ORMArrayDemo> {
        return player.GetObject('ORMDemoArray'
            , LoadDBArrayEntry(ORMArrayDemo,player.GetGUID())
        )
    }

    static Reset(player: TSPlayer) {
        ORMArrayDemo.get(player).forEach(x=>x.Delete())
    }

    static Save(player: TSPlayer) {
        ORMArrayDemo.get(player).Save()
    }

    // If we change rows at any point, we must mark them as dirty
    // to ensure they are saved the next time we save the entire array
    static Modify(player: TSPlayer) {
        ORMArrayDemo.get(player).forEach(x=>{
            x.randomValue = Math.random();
            x.MarkDirty();
        })
    }

    static DeletePlayer(player: uint64) {
        let arr = LoadDBArrayEntry(ORMArrayDemo,player)
        arr.forEach(x=>x.Delete())
        arr.Save()
    }

    static AddRow(player: TSPlayer) {
        ORMArrayDemo.get(player).Add(new ORMArrayDemo(player.GetGUID()))
    }
}

// Saving works just the same for array entries as for normal entries.
export function RegisterArrayEvents(events: TSEvents) {
    events.Player.OnSave((player)=>{
        ORMArrayDemo.Save(player)
    });

    events.Player.OnDelete((guid)=>{
        ORMArrayDemo.DeletePlayer(guid)
    })
}

export function SendArrayMenu(player: TSPlayer, creature: TSCreature) {
    player.SendBroadcastMessage(`Yes its reloaded`);
    // When we access DBArrayEntries, we receive a collection
    // of rows instead of just an individual row.
    let entry = ORMArrayDemo.get(player);

    // We can add, iterate and remove from this collection.
    // Results are automatically tracked and saved whenever
    // we call the 'Save()' method
    entry.Add(new ORMArrayDemo(player.GetGUID()))

    // == The below is just printing out the menu, unrelated to ORM system ==

    player.GossipClearMenu()
    player.GossipMenuAddItem(
          GossipOptionIcon.CHAT
        , "Go back"
        , 0,ORMGossipSelection.GO_BACK,false,'',0
    )
    player.GossipSendTextMenu(
        creature
        , `The code for this example can be found in livescripts/orm-demo-array.ts`
        + ` \n\nThis example attaches an array save data object to any`
        + ` player that clicks this menu, and adds a new row to it every time the player`
        + ` clicks.`
        + ` \n\nTry clicking this menu multiple times, and you should see `
        + ` that for every click it will print out another random number`
        + ` \n\nThese are the rows you've saved so far:\n\n`
        + ` ${entry.reduce<string>((old,cur)=>`${old}\n<${cur.randomValue}>`,'')}`
        )
}
