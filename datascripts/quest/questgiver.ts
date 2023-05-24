import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Questgiver -
//
//   This file creates a basic questgiver npc that starts/completes other
//   quests in this module.
//
// ============================================================================

export const QUESTGIVER = std.CreatureTemplates
    .create('tswow-tests','questgiver')
    .Models.addDefaultBear()
    .Name.enGB.set('Questgiver')
    .Subname.enGB.set('datascripts/quest/questgiver.ts')
    .NPCFlags.QUEST_GIVER.set(true)
    .Spawns.add('tswow-tests','questgiver-spawn',[
        {map:TEST_MAP.ID,x:14740.633789,y:14416.110352,z:54.194477,o:6.268132},
    ])