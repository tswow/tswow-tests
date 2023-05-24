import { std } from "wow/wotlk";

// ============================================================================
//
// - Battleground Map -
//
//   This file creates the map, area and starting doors for the demo
//   battleground.
//
// - External Scripts -
//   livescripts/battleground/battleground.ts
//
// ============================================================================

export const BATTLEGROUND_MAP = std.Maps
    .createBattleground('tswow-tests','battleground-map')
    .Tags.addUnique('tswow-tests','battleground-map')
    .Name.enGB.set('Test Battleground')
    .Description.enGB.set('Very simple battleground taking place in a large arena.')
    .Directory.set('testbattleground')
    //.Stats.Count.set(1)
    //.Stats.CustomAttr1.set({enGB:'Slimes'},undefined,{enGB:'How many slimes you have killed'})
    .Tiles.add('tswow-tests',[[5,5,6,6,'testbattleground']])
    .HordeStart.set(
        {x:13819.582031,y:13892.679688,z:1.904109,o:2.674281},
    )
    .StartMaxDist.set(10)
    .AllianceStart.set(
        {x:13813.343750,y:13931.875977,z:22.067255,o:2.283938},
    )
    .PlayersPerTeam.set(0,40)
    .Brackets.add('tswow-tests','battleground-bracket',0,80,0)

export const BATTLEGROUND_AREA = std.Areas
    .create('tswow-tests','battleground-area')
    .Name.enGB.set('Slime Pit')

    // This is the common flag set on battleground areas.
    .Flags.IS_PVP_OBJECTIVE.set(true)
    .Map.set(BATTLEGROUND_MAP.ID)

// Doors
export const BATTLEGROUND_DOORS = std.GameObjectTemplates.Doors
    .create('tswow-tests','bg-doors',177203)
    // Causes the doors to open only when the battleground starts
    .BattlegroundStates.add(BATTLEGROUND_MAP.ID,'OPENS_ON_START')
    .Spawns.add('tswow-tests','bg-doors-spawn',[
        // Alliance
        {map:BATTLEGROUND_MAP.ID,x:13811.337891,y:13898.375000,z:3.056040,o:2.582612},
        // Horde
        {map:BATTLEGROUND_MAP.ID,x:13807.279297,y:13939.045898,z:23.181999,o:2.260691},
    ])