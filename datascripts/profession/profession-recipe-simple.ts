import { std } from "wow/wotlk";
import { TEST_PROFESSION } from "./profession";
// ============================================================================
//
// - Profession Recipe: Simple -
//
//   This file creates a simple profession recipe that takes a single input
//   item.
//
// ============================================================================

export const SIMPLE_INPUT_ITEM = std.Items
    .create('tswow-tests',`basic-recipe-input`)
    .Name.enGB.set(`Recipe Input`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const SIMPLE_OUTPUT_ITEM = std.Items
    .create('tswow-tests',`basic-recipe-output`)
    .Name.enGB.set(`Recipe Output`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const SIMPLE_RECIPE = TEST_PROFESSION.Recipes
    .addGet('tswow-tests','test-recipe-simple')
    .OutputItem.set(SIMPLE_OUTPUT_ITEM.ID)
    .Reagents.add(SIMPLE_INPUT_ITEM.ID,1)
    .Ranks.Yellow.set(5)
    .Ranks.Gray.set(10)