import { std } from "wow/wotlk";
import { SUMMON_SPELL } from "../spells/basic/summon";

// ============================================================================
//
// - Explore Achievement -
//
//   A very simple achievement that is earned when you cast the "Summon Bear"
//   spell learnable by the custom class.
//
// ============================================================================

export const SPELL_ACHIEVEMENT = std.Achievements
    .create('tswow-tests','cast-spell-achievement')
    .Name.enGB.set('Summoned A Bear')
    .Category.set('GENERAL')
    .Criteria.addMod('tswow-tests','cast-spell-criteria',(crit)=>crit
        .Type.CAST_SPELL.set()
        .Description.enGB.set(`Spells cast`)
        .Flags.PROGRESS_BAR.set(true)
        .Spell.set(SUMMON_SPELL.ID)
    )