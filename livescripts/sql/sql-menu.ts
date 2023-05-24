import { SQLMenuSelection } from "./sql-menu-selection";
import { DeleteSQLPlain, PlainSQLMenu, SetupSQLPlainTable } from "./sql-plain";
import { DeletePreparedValue, PreparedStatementMenu } from "./sql-prepared-statement";

export const TSWOW_TESTS_SQL_NPC : uint32 = UTAG("tswow-tests","sql-npc");

function SendMainSQLMenu(player: TSPlayer, creature: TSCreature) {
    player.GossipClearMenu()
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Plain SQL',0,SQLMenuSelection.PLAIN_SQL)
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Prepared Statements',0,SQLMenuSelection.PREPARED_STATEMENT)
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Delete all data',0,SQLMenuSelection.DELETE)
    player.GossipSendTextMenu(creature,`Let me help you try out raw SQL queries.`+ ` \n`)
}

export function RegisterSQLTests(events: TSEvents) {
    SetupSQLPlainTable()

    events.Creature
        .OnGossipHello(TSWOW_TESTS_SQL_NPC,(creature,player,cancel)=>{
            SendMainSQLMenu(player,creature)
            cancel.set(true);
        })
    events.Creature
        .OnGossipSelect(TSWOW_TESTS_SQL_NPC,(creature,player,menu,selection,cancel)=>{
            switch(selection) {
                case SQLMenuSelection.PLAIN_SQL:
                    PlainSQLMenu(player,creature);
                    break;
                case SQLMenuSelection.PREPARED_STATEMENT: {
                    PreparedStatementMenu(player,creature)
                    break;
                }
                case SQLMenuSelection.DELETE:
                    DeleteSQLPlain(player);
                    DeletePreparedValue(player);
                    SendMainSQLMenu(player,creature);
                    break;
                case SQLMenuSelection.BACK:
                    SendMainSQLMenu(player,creature);
                    break;
            }
        })
}