import { std } from "wow/wotlk";
import { CUSTOM_SKILL_1, CUSTOM_SKILL_2 } from "./class-skills";
import { TEST_CLASS } from "./custom-class";

// ============================================================================
//
// - Talents -
//
// This file creates two simple talent trees for our test class.
//
// ============================================================================

// ============================================================================
//                             Talent Tree 1
// ============================================================================
export const TALENT_TREE_1 = std.TalentTrees
    .create('tswow-tests','test-talenttree-1')
    .Name.enGB.set('Test Tree 1')
    .ClassMask.add(TEST_CLASS.Mask)
    .BackgroundImage.set('MageArcane')
    .OrderIndex.set(0) // <-- This is what makes it the "first" talent tree

//
// Simple Talent
//
export const SIMPLE_TALENT = TALENT_TREE_1.Talents
    .addSpellsGet('tswow-tests','simple-talent',5)
    .Position.set(0,0)
    .Spells.forEach((x,i)=>{x
        // Here, we're modifying individual spell ranks.
        .Name.enGB.set('Simple Talent')
        .Subtext.set({enGB:`Rank ${i+1}`})
        .SkillLines.add(CUSTOM_SKILL_1.ID,[TEST_CLASS.ID])
    })

//
// Requirement Talent
// - Requires 5 points in the simple talent
//
export const REQUIREMENT_TALENT = TALENT_TREE_1.Talents
    .addSpellsGet('tswow-tests','requirement-talent',5)
    .Position.set(1,0)
    .Requirements.add(SIMPLE_TALENT.ID,5)
    .Spells.forEach((x,i)=>{x
        .Name.enGB.set('Test Talent')
        .Subtext.set({enGB:`Rank ${i+1}`})
        .SkillLines.add(CUSTOM_SKILL_1.ID,[TEST_CLASS.ID])
    })

//
// Tier Talent
// - Placed in tier 1 (requires 5 talents in the previous tier)
//
export const TIER_TALENT = TALENT_TREE_1.Talents
    .addSpellsGet('tswow-tests','tier-talent',3)
    .Position.set(0,1)
    .Spells.forEach((x,i)=>{x
        .Name.enGB.set('Test Talent')
        .Subtext.set({enGB:`Rank ${i+1}`})
        .SkillLines.add(CUSTOM_SKILL_1.ID,[TEST_CLASS.ID])
    })

// ============================================================================
//                             Talent Tree 2
// ============================================================================

export const TALENT_TREE_2 = std.TalentTrees
    .create('tswow-tests','test-talenttree-2')
    .Name.enGB.set('Test Tree 2')
    .ClassMask.add(TEST_CLASS.Mask)
    .BackgroundImage.set('MageArcane')
    .OrderIndex.set(1) // <-- This is what makes it the "second" talent tree

//
// Second Tree Talent
// - Uses existing spell ids instead of creating its own spells
//
export const SECOND_TREE_TALENT = TALENT_TREE_2.Talents
    .addSpellsGet('tswow-tests','second-tree-talent',1)
    .Spells.forEach((x,i)=>{x
        .Name.enGB.set('Second Tree Talent')
        .SkillLines.add(CUSTOM_SKILL_2.ID,[TEST_CLASS.ID])
    })
    .Position.set(0,0)