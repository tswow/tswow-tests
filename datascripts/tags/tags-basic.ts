import { std } from "wow/wotlk"

// ============================================================================
//
// - ID Tags -
//
//   This file creates two basic spells both belonging to a single id tag
//   that can be used to easily register livescript events to both.
//
//   Note: ID tags do not just apply to spells, but to *anything*
//         with persistent ID generation.
//
// - External Scripts -
//   LiveScripts: livescripts/tags/tags-basic.ts
//
// ============================================================================

export const TAGGED_SPELL_1 = std.Spells
    .create('tswow-tests','tagget-spell-1', 133)
    .Name.enGB.set('Tagged Spell 1')
    .Description.enGB.set('Should print a message to the player when cast.')
    .Tags.add('tswow-tests','test-spell-tag')

export const TAGGED_SPELL_2 = std.Spells
    .create('tswow-tests','tagget-spell-2', 133)
    .Name.enGB.set('Tagged Spell 2')
    .Tags.add('tswow-tests','test-spell-tag')