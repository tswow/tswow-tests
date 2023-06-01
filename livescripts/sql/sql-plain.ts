import { SQLMenuSelection } from "./sql-menu-selection";

const PLAIN_TABLE = '`plain_sql_demo`'
const PLAIN_PLAYER = '`player`'
const PLAIN_VALUE = '`value`'

export function GetValuePlainSQL(player: TSPlayer): uint32 {
    const res = QueryCharacters(`
        SELECT (${PLAIN_VALUE})
            FROM ${PLAIN_TABLE}
            WHERE ${PLAIN_PLAYER} = ${player.GetGUID().GetLow()};
    `)
    if(!res.GetRow()) {
        return 0;
    }
    return res.GetUInt32(0);
}

export function InsertValuePlainSQL(player: TSPlayer, value: uint32) {
    QueryCharacters(`
        INSERT INTO ${PLAIN_TABLE}
            VALUES (${player.GetGUID().GetLow()},${value})
            ON DUPLICATE KEY UPDATE ${PLAIN_VALUE} = ${value};
    `)
}

export function SetupSQLPlainTable() {
    QueryCharacters(`
        CREATE TABLE IF NOT EXISTS ${PLAIN_TABLE}
        (
            ${PLAIN_PLAYER} BIGINT,
            ${PLAIN_VALUE} INT,
            PRIMARY KEY (${PLAIN_PLAYER})
        );
    `)
}

export function DeleteSQLPlain(player: TSPlayer) {
    QueryCharacters(`
        DELETE FROM ${PLAIN_TABLE}
            WHERE ${PLAIN_PLAYER} = ${player.GetGUID().GetLow()};
    `)
}

// Simple gossip menu for demonstrating the above functions.
export function PlainSQLMenu(player: TSPlayer, creature: TSCreature) {
    let value = GetValuePlainSQL(player)
    player.GossipClearMenu()
    player.GossipMenuAddItem(
        GossipOptionIcon.CHAT,'Back',0,SQLMenuSelection.BACK
    )
    player.GossipSendTextMenu(
        creature
        , `I queried the database for a value`
        + ` paired with your character.`
        + `\n\nI found this value: <${value}>.`
        + `\n\nI will now increase it and write it back to the database.`
    );
    InsertValuePlainSQL(player, value+1);
}