import { ORMArrayDemo, SendArrayMenu } from "./orm-demo-array";
import { ORMDemoEntry, SendEntryMenu } from "./orm-demo-entry";
import { ORMGossipSelection } from "./orm-gossip-selection";

const TSWOW_TESTS_ORM_NPC : uint32 = UTAG("tswow-tests","orm-npc");

function SendMainMenu(player: TSPlayer, creature: TSCreature) {
    player.GossipClearMenu()
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Single Entry',0,ORMGossipSelection.SINGLE_ENTRY,false,'',0)
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Array Entry',0,ORMGossipSelection.ARRAY_ENTRY,false,'',0)
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Destroy All Data',0,ORMGossipSelection.DESTROY_DATA,false,'',0)
    player.GossipSendTextMenu(
          creature
        , `This menu allow you to try out the save/orm system in TSWoW.`
        + ` Please open the individual menus to try out different database classes.`
        + ` \n`
    )
}

export function RegisterORMEntryMenu(events: TSEvents) {
    events.Creature.OnGossipHello(TSWOW_TESTS_ORM_NPC,(creature,player,cancel)=>{
        cancel.set(true);
        SendMainMenu(player,creature)
    });

    events.Creature.OnGossipSelect(TSWOW_TESTS_ORM_NPC, (creature,player,menu,selection,cancel)=>{
        switch(selection) {
            case ORMGossipSelection.SINGLE_ENTRY:
                SendEntryMenu(player,creature);
                break;
            case ORMGossipSelection.ARRAY_ENTRY:
                SendArrayMenu(player,creature);
                break;
            case ORMGossipSelection.GO_BACK:
                SendMainMenu(player,creature)
                break;
            case ORMGossipSelection.DESTROY_DATA:
                ORMDemoEntry.Reset(player)
                ORMArrayDemo.Reset(player);
                SendMainMenu(player,creature)
                break;
            default:
                break;
        }
    })
}