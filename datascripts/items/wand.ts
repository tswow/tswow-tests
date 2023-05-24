import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Wand -
//
//   Simple wand that borrows its visuals from lesser magic wand.
//
//   Wands, just like other ranged weapons, use spell visuals to control how
//   fighting with them looks, from caster/target animations and effects
//   to the missile model.
//
// ============================================================================

const LESSER_MAGIC_WAND_SPELL_VISUAL = 2799

export const TEST_WAND = std.Items.create('tswow-tests','test-wand')
    .Name.enGB.set('Test Wand')
    .Class.WAND.set()
    .InventoryType.WAND_GUN.set()
    .Quality.PURPLE.set()
    .Damage.addPhysical(1,100)
    .RangeMod.set(100)
    .Delay.set(100,'MILLISECONDS')
    .Price.set(1,1)
    .ItemLevel.set(1)
    .DisplayInfo.modRefCopy('tswow-tests','test-wand-display',disp=>{
        disp.Models.add('WAND_1H_Standard_A_02.mdx','WAND_1H_Standard_A_02Brown')
            .Icon.set('INV_Staff_02')
            .SpellVisual.set(LESSER_MAGIC_WAND_SPELL_VISUAL)
    })

TEST_ITEM_VENDOR.Vendor.add(TEST_WAND.ID)