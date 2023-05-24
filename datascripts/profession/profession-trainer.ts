import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";
import { TEST_PROFESSION, TEST_PROFESSION_APPRENTICE, TEST_PROFESSION_JOURNEYMAN, TEST_PROFESSION_MASTER } from "./profession";
import { FOCUS_RECIPE } from "./profession-recipe-focus";
import { SIMPLE_INPUT_ITEM, SIMPLE_RECIPE } from "./profession-recipe-simple";
import { TOTEM_ITEM, TOTEM_RECIPE } from "./profession-recipe-totem";

// ============================================================================
//
// - Profession Trainer-
//
//   This file creates a profession trainer/vendor from scratch.
//   that teaches the profession ranks and recipes, and sells all reagents
//   necessary for them.
//
// ============================================================================

export const TEST_PROFESSION_TRAINER_CREATURE = std.CreatureTemplates
    .create('tswow-tests','profession-trainer')
    .Models.addDefaultBear()
    .Name.enGB.set('Profession Trainer')
    .Subname.enGB.set('datascripts/profession/profession.ts')
    .NPCFlags.TRAINER.set(true)
    .NPCFlags.VENDOR.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Spawns.add('tswow-tests','profession-trainer-spawn',[
        {map:TEST_MAP.ID,x:14743.259766,y:14431.877930,z:75.872963,o:0.849769},
    ])
    .Gossip.modNew(x=>x
        .Text.add({enGB:'How can I help you?'})
        .Options.addMod(o=>o
            .Icon.TRAINER.set()
            .Action.TRAINER.setOwner()
            .Text.setSimple({enGB:'Teach me the Test Profession'})
        )
        .Options.addMod(o=>o
            .Icon.VENDOR.set()
            .Action.VENDOR.set()
            .Text.setSimple({enGB:'Let me browse your goods'})
        )
    )

export const TEST_PROFESSION_TRAINER = TEST_PROFESSION_TRAINER_CREATURE.Trainer.getRef();

// Trainer: Rank spells
TEST_PROFESSION_TRAINER.Spells
    .addGet(TEST_PROFESSION_APPRENTICE.LearnSpells()[0].ID)

TEST_PROFESSION_TRAINER.Spells
    .addGet(TEST_PROFESSION_JOURNEYMAN.LearnSpells()[0].ID)
    .RequiredSkill.set(TEST_PROFESSION.ID,50)
    .ReqAbilities.addId(TEST_PROFESSION_APPRENTICE.ProfessionSpell().ID)

TEST_PROFESSION_TRAINER.Spells
    .addGet(TEST_PROFESSION_MASTER.LearnSpells()[0].ID)
    .RequiredSkill.set(TEST_PROFESSION.ID,100)
    .ReqAbilities.addId(TEST_PROFESSION_JOURNEYMAN.ProfessionSpell().ID)

// Trainer: Recipes
TEST_PROFESSION_TRAINER.Spells
    .addGet(SIMPLE_RECIPE.ID)
    .RequiredSkill.set(TEST_PROFESSION.ID,1)

TEST_PROFESSION_TRAINER.Spells
    .addGet(FOCUS_RECIPE.ID)
    .RequiredSkill.set(TEST_PROFESSION.ID,1)

TEST_PROFESSION_TRAINER.Spells
    .addGet(TOTEM_RECIPE.ID)
    .RequiredSkill.set(TEST_PROFESSION.ID,1)

// Vendor: Items
TEST_PROFESSION_TRAINER_CREATURE
    .Vendor.add(SIMPLE_INPUT_ITEM.ID)
    .Vendor.add(TOTEM_ITEM.ID)