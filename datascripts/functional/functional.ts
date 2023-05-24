import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================/
//
// - Functioanl -
//
//   This module demonstrates how we can use functional programming with
//   tswow livescripts.
//
//   This file only contains the menu npc, all interesting scripts are in
//   the livescripts directory.
//
// - External Scripts -
//   Livescripts: livescripts/functional
// ============================================================================

std.CreatureTemplates.create('tswow-tests','functional-npc')
    .Name.enGB.set('Custom Packets')
    .Models.addDefaultBear()
    .Subname.enGB.set('datascripts/functional/functional.ts')
    .NPCFlags.GOSSIP.set(true)
    .Tags.add('tswow-tests','functional-npc')
    .Spawns.add('tswow-tests','functional-spawn',[
        {map:TEST_MAP.ID,x:14769.590820,y:14445.121094,z:75.870674,o:3.242315},
    ])
    ;