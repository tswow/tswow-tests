import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Teleporter -
//
//   This file creates the teleporter ethereals found around demo island.
//   It is more intended to be a utility than a demo, but you can also use it
//   as a basis for generic teleporter npcs.
//
// - External Scripts -
//   LiveScripts: livescripts/teleporter/teleporter.ts
//
// ============================================================================

export const TELEPORTER = std.CreatureTemplates
    .create('tswow-tests','teleporter-creature')
    .Tags.addUnique('tswow-tests','teleporter-creature')
    .Name.enGB.set('Test Island Teleporter')
    .Models.addIds(19646)
    .Spawns.add('tswow-tests','teleporter-creature-spawns',[
        {map:TEST_MAP.ID,x:14875.448242,y:14555.168945,z:74.683937,o:1.447461},
        //{map:TEST_MAP.ID,x:14742.459961,y:14410.333008,z:53.874340,o:2.251241},
        {map:TEST_MAP.ID,x:14754.110352,y:14439.656250,z:55.174057,o:1.526323},
        {map:TEST_MAP.ID,x:14749.532227,y:14413.386719,z:53.643204,o:0.567351},
        {map:TEST_MAP.ID,x:14974.358398,y:14465.672852,z:107.038261,o:2.237521},
        {map:TEST_MAP.ID,x:14645.774414,y:14602.125977,z:61.082314,o:5.538130},
        {map:TEST_MAP.ID,x:14701.919922,y:14553.238281,z:47.832611,o:4.178196},
        {map:TEST_MAP.ID,x:14752.125000,y:14377.554688,z:56.410160,o:1.550672},
        {map:TEST_MAP.ID,x:13884.714844,y:14009.447266,z:52.753849,o:1.542037},
        {map:TEST_MAP.ID,x:15190.135742,y:15134.667969,z:44.585762,o:0.001856},
        {map:TEST_MAP.ID,x:15272.641602,y:14784.343750,z:45.364193,o:0.532005},
        {map:TEST_MAP.ID,x:14754.178711,y:14447.872070,z:75.871262,o:4.683124},
    ])
    .NPCFlags.GOSSIP.set(true)