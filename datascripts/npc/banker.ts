import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Banker -
//
//   This file creates a simple banker npc.
//
// ============================================================================

export const BANKER = std.CreatureTemplates
    .create('tswow-tests','banker')
    .NPCFlags.BANKER.set(true)
    .Name.enGB.set('Banker')
    .Subname.enGB.set('datascripts/npc/banker.ts')
    .Models.addDefaultBear()
    .Spawns.add('tswow-tests','banker-spawn',[
        {map:TEST_MAP.ID,x:14760.878906,y:14446.722656,z:55.173595,o:3.547024},
    ])
