import { std } from "wow/wotlk"

// ============================================================================
//
// - ID Tags -
//
//   This file creates a single spell with a unique id tag.
//   Unique ID tags can be used to find a unique id in place of the
//   registry name itself.
//
// - External Scripts -
//   LiveScripts: livescripts/tags/tags-unique.ts
//
// ============================================================================

export const TAGGED_SPELL_UNIQUE = std.Spells
    .create('tswow-tests','tagged-spell-unique', 133)
    .Name.enGB.set('Uniquely Tagged Spell')
    .Description.enGB.set('Should print a message to the player when cast.')
    .Tags.addUnique('tswow-tests','unique-id-tag')

export const TAGGED_SPELL_TEACHER = std.Spells
    .create('tswow-tests','tags-tutor')
    .Name.enGB.set('ID Tags Tutorial')
    .Subtext.enGB.set('datascripts/tags/IDTags.ts')