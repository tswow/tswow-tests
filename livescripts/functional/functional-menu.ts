import { CallFunctionalClass } from "./functional-class-member"
import { SelectRandomFunction } from "./functional-collections"

export enum FunctionalTest {
    COLLECTION,
    CLASS_MEMBER
}

export function RegisterFunctionalEvents(events: TSEvents) {
    events.Creature.OnGossipHello(
        TAG('tswow-tests','functional-npc'),
        (creature,player,cancel) => {
            cancel.set(true)
            player.GossipClearMenu()
            player.GossipMenuAddItem(GossipOptionIcon.CHAT,'Collection Tests',0,FunctionalTest.COLLECTION)
            player.GossipMenuAddItem(GossipOptionIcon.CHAT,'Class Member Test',0,FunctionalTest.CLASS_MEMBER)
            player.GossipSendTextMenu(creature,'I can help you try out the functional tests')
        })

    events.Creature.OnGossipSelect(
        TAG('tswow-tests','functional-npc'),
        (_creature,player,_menu,sel,cancel) => {
            cancel.set(true);
            switch(sel) {
                case FunctionalTest.COLLECTION:
                    SelectRandomFunction(player);
                    break;
                case FunctionalTest.CLASS_MEMBER:
                    CallFunctionalClass(player);
                    break;
            }
            player.GossipComplete();
        }
    )
}