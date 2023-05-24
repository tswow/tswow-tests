import { ARMOR_SPELL } from "../spells/basic/armor";
import { AURA_SPELL } from "../spells/basic/aura";
import { BLESSING_SPELL } from "../spells/basic/blessing";
import { BOLT_SPELL } from "../spells/basic/bolt";
import { DOT_SPELL } from "../spells/basic/dot";
import { REJUVENATION } from "../spells/basic/rejuvenation_spell";
import { SUMMON_SPELL } from "../spells/basic/summon";
import { CUSTOM_SKILL_1, CUSTOM_SKILL_2 } from "./class-skills";
import { TEST_CLASS } from "./custom-class";
import { CUSTOM_TRAINER } from "./custom-class-trainer";

// ============================================================================
//
// - Custom Class Spells -
//
// This file demonstrates how we can create trainer and autolearned spells
// for our custom class.
//
// The spells used here come from the "spell" module.
//
// ============================================================================

// ============================================================================
//                           Learning Methods
// ============================================================================

// Autolearn
BOLT_SPELL.AutoLearn.add(1,[TEST_CLASS.Mask])
ARMOR_SPELL.AutoLearn.add(1,[TEST_CLASS.Mask])

// Trainer Spells
CUSTOM_TRAINER.Spells.addGet(BLESSING_SPELL.ID)
   .RequiredSkill.set(CUSTOM_SKILL_1.ID)
   .RequiredLevel.set(1)

CUSTOM_TRAINER.Spells.addGet(DOT_SPELL.ID)
   .RequiredSkill.set(CUSTOM_SKILL_1.ID)
   .RequiredLevel.set(1)

CUSTOM_TRAINER.Spells.addGet(REJUVENATION.ID)
   .RequiredSkill.set(CUSTOM_SKILL_1.ID)
   .RequiredLevel.set(1)

CUSTOM_TRAINER.Spells.addGet(SUMMON_SPELL.ID)
   .RequiredSkill.set(CUSTOM_SKILL_1.ID)
   .RequiredLevel.set(1)

CUSTOM_TRAINER.Spells.addGet(AURA_SPELL.ID)
   .RequiredSkill.set(CUSTOM_SKILL_2.ID)
   .RequiredLevel.set(1)