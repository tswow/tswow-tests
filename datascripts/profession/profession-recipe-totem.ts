import { std } from "wow/wotlk";
import { TEST_PROFESSION } from "./profession";

// ============================================================================
//
// - Profession Recipe: Totem -
//
//   This file creates a profession recipe that requires a totem item to
//   craft, similar to the blacksmithing hammer and enchanting rods.
//
// ============================================================================

export const TOTEM_CATEGORY = std.TotemCategory
    .createNewType('tswow-tests','totem-category')
    .Name.enGB.set('Test Totem')

export const TOTEM_ITEM = std.Items
    .create('tswow-tests',`totem-item`)
    .Name.enGB.set(`Totem Item`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const OUTPUT_ITEM = std.Items
    .create('tswow-tests',`totem-recipe-output`)
    .Name.enGB.set(`Totem Recipe Output`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const TOTEM_RECIPE = TEST_PROFESSION.Recipes
    .addGet('tswow-tests','totem-recipe')
    .Totems.add(TOTEM_CATEGORY.ID)
    .OutputItem.set(OUTPUT_ITEM.ID)