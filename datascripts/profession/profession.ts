import { std } from "wow/wotlk";

// ============================================================================
//
// - Profession -
//
//   This is the main file for the demo profession and sets up basic
//   parameters and skill ranks.
//
// ============================================================================

export const TEST_PROFESSION = std.Professions
    .create('tswow-tests','test-profession')
    .Name.enGB.set('Test Profession')
    .setHasCrafting(true)
    .AsSkillLine.mod(x=>x.Category.SECONDARY.set())

export const TEST_PROFESSION_APPRENTICE = TEST_PROFESSION.Ranks
        .addGet('tswow-tests','profession-rank-1',75,{enGB:'Apprentice'})

export const TEST_PROFESSION_JOURNEYMAN = TEST_PROFESSION.Ranks
    .addGet('tswow-tests','profession-rank-2',125,{enGB:'Journeyman'})
export const TEST_PROFESSION_MASTER = TEST_PROFESSION.Ranks
    .addGet('tswow-tests','profession-rank-3',200,{enGB:'Master'})