import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - NPC: Arena Organizer-
//
//   This file creates a creature serving as an arena organizer.
//
//   Note: An arena organizer CANNOT also be a tabard designer. enabling the
//         tabard designer flag will turn the npc into a guildmaster.
//
//         This is due to a quirk in that blizzard represents guildmasters as
//         arena organizers that are also tabard designers. Fixing this
//         requires a core edit.
//
// ============================================================================

export const ARENA_MASTER = std.CreatureTemplates
    .create('tswow-tests','arena-organizer')
    .NPCFlags.PETITIONER.set(true)
    .Name.enGB.set('Arena Organizer')
    .Subname.enGB.set('datascripts/npc/arena-organizer.ts')
    .Models.addDefaultBear()
    .Spawns.add('tswow-tests','arena-organizer-spawn',[
        {map:TEST_MAP.ID,x:14758.114258,y:14436.731445,z:55.173462,o:2.126634},
    ])