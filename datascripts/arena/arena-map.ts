import { std } from "wow/wotlk"

// ============================================================================
//
// - Arena-
//
//   This file creates a simple arena map and start doors.
//
//   Note: Since arenas are usually simpler than battlegrounds, they rarely
//         require any livescripts.
//
// ============================================================================

export const ARENA_MAP = std.Maps
    .createArena('tswow-tests','arena-map')
    .Name.enGB.set('Test Arena')
    .Directory.set('testarena')
    .Tiles.add('tswow-tests',[[0,0,0,0,'testarena']])
    .HordeStart.set(
        {x:16786.580078,y:16754.636719,z:0.001013,o:1.661115},
    )
    .AllianceStart.set(
        {x:16786.154297,y:16871.431641,z:0.001013,o:4.711604},
    )
    .Description.enGB.set('Very simple test arena.')
    .PlayersPerTeam.set(0,2)
    .Brackets.add('tswow-tests','arena-bracket',0,80,0)

// Doors to hold players
std.GameObjectTemplates.Doors
    .create('tswow-tests','arena-doors',183978)
    .BattlegroundStates.add(ARENA_MAP.ID,'OPENS_ON_START')
    .Spawns.add('tswow-tests','arena-doors-spawn',[
        {map:ARENA_MAP.ID,x:16786.535156,y:16864.433594,z:0.000988,o:3.165154},
        {map:ARENA_MAP.ID,x:16786.359375,y:16762.468750,z:0.000379,o:0.044750},
    ])