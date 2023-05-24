import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { TAGGED_SPELL_1, TAGGED_SPELL_2 } from "./tags-basic";
import { TAGGED_SPELL_UNIQUE } from "./tags-unique";

// ============================================================================
//
// - Tags Tutor -
//
//   This file creates a tutorial NPC that can teach the player
//   tagged spells.
//
// ============================================================================

export const TAGS_TUTOR = std.CreatureTemplates
    .create('tswow-tests','tags-tutor')
    .Models.addDefaultBear()
    .Name.enGB.set('Tags Tutor')
    .Subname.enGB.set('datascripts/tags/tags-tutor.ts')
    .NPCFlags.TRAINER.set(true)
    .Trainer.modRefCopy(trainer=>trainer
        .Spells.add(TAGGED_SPELL_1.ID)
        .Spells.add(TAGGED_SPELL_2.ID)
        .Spells.add(TAGGED_SPELL_UNIQUE.ID)
    )
    .Spawns.add('tswow-tests','tags-tutor-spawn',[
        {map:TEST_MAP.ID,x:14764.898438,y:14432.066406,z:75.872185,o:2.309454},
    ])