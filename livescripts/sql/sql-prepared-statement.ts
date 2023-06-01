import { SQLMenuSelection } from "./sql-menu-selection"

const PREPARED_STATEMENT_TABLE = '`prepared_statement_demo`'
const PREPARED_STATEMENT_PLAYER = '`player`'
const PREPARED_STATEMENT_VALUE = '`value`'

// We don't need to prepare this query,
// it's only called once and doesn't contain any user input.
let _ = QueryCharacters(`
    CREATE TABLE IF NOT EXISTS ${PREPARED_STATEMENT_TABLE}
    (
        ${PREPARED_STATEMENT_PLAYER} BIGINT,
        ${PREPARED_STATEMENT_VALUE} INT,
        PRIMARY KEY (${PREPARED_STATEMENT_PLAYER})
    );
`)

let PreparedInsert = PrepareCharactersQuery(
    `INSERT INTO
        ${PREPARED_STATEMENT_TABLE} VALUES(?,?)
        ON DUPLICATE KEY UPDATE ${PREPARED_STATEMENT_VALUE} = ?;`
)

let PreparedSelect = PrepareCharactersQuery(
    `SELECT (value)
        FROM ${PREPARED_STATEMENT_TABLE}
        WHERE ${PREPARED_STATEMENT_PLAYER} = ?;
    `
)

let PreparedDelete = PrepareCharactersQuery(
    `DELETE
        FROM ${PREPARED_STATEMENT_TABLE}
        WHERE ${PREPARED_STATEMENT_PLAYER} = ?;
    `
)

export function GetPreparedValue(player: TSPlayer): uint32 {
    const res = PreparedSelect.Create()
        .SetGUIDNumber(0, player.GetGUID())
        .Send()
    if(!res.GetRow()) {
        return 0;
    } else {
        return res.GetUInt32(0);
    }
}

export function InsertPreparedValue(player: TSPlayer, value: uint32) {
    PreparedInsert.Create()
        .SetGUIDNumber(0,player.GetGUID())
        .SetUInt32(1,value)
        .SetUInt32(2,value) // needed since we insert it in two places
        .Send()
}

export function DeletePreparedValue(player: TSPlayer) {
    PreparedDelete.Create()
        .SetGUIDNumber(0,player.GetGUID())
        .Send()
}

// Simple gossip menu for demonstrating the above functions.
export function PreparedStatementMenu(player: TSPlayer, creature: TSCreature) {
    let value = GetPreparedValue(player)
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
    InsertPreparedValue(player, value+1);
}