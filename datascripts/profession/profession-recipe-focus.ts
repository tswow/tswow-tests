import { std } from "wow/wotlk"
import { TEST_MAP } from "../maps/map"
import { TEST_PROFESSION } from "./profession"

// ============================================================================
//
// - Profession Recipe: Focus -
//
//   This file creates a profession recipe that requires a spell focus
//   object, similar to an anvil or a campfire.
//
// ============================================================================

// This is the spell focus "type"
export const PROFESSION_FOCUS = std.SpellFocus
    .create()
    .Name.enGB.set('Test Focus')

// A GameObject that can serve as this spell focus
std.GameObjectTemplates.SpellFocus
    .create('tswow-tests','spell-focus-object')
    .Name.enGB.set('Test Focus Object')
    .Focus.set(PROFESSION_FOCUS.ID)
    .Spawns.add('tswow-tests','spell-focus-spawn',[
        {map:TEST_MAP.ID,x:14869.544922,y:14552.571289,z:74.650185,o:0.755297},
    ])

export const FOCUS_OUTPUT_ITEM = std.Items
    .create('tswow-tests',`focus-recipe-output`)
    .Name.enGB.set(`Focus Recipe Output`)
    .Quality.WHITE.set()
    .Price.set(0,0)

export const FOCUS_RECIPE = TEST_PROFESSION.Recipes
    .addGet('tswow-tests','test-recipe-focus')
    .OutputItem.set(FOCUS_OUTPUT_ITEM.ID)
    .SpellFocus.set(PROFESSION_FOCUS.ID)