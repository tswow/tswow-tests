import { std } from "wow/wotlk";
import { TEST_CLASS } from "./custom-class";

// ============================================================================
//
// - Custom Class Skills -
//
// This file creates two class skill lines for the test class,
// used by the spells in custom-class-spells.ts and custom-class-talents.ts
//
// ============================================================================

export const CUSTOM_SKILL_1 = std.SkillLines
    .create('tswow-tests','test-skill-1')
    .Name.enGB.set('Test Skill 1')
    .Description.enGB.set('First class skill for the Test Class')
    .Category.CLASS.set()
    .RaceClassInfos.add([TEST_CLASS.Mask],[])

export const CUSTOM_SKILL_2 = std.SkillLines
    .create('tswow-tests','test-skill-2')
    .Name.enGB.set('Test Skill 2')
    .Description.enGB.set('First class skill for the Test Class')
    .Category.CLASS.set()
    .RaceClassInfos.add([TEST_CLASS.Mask],[])