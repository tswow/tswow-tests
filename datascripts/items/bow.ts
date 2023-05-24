import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Bows -
//
//   This file illustrates:
//     - A basic bow
//     - A basic arrow
//
//   Bows, like other ranged weapons, can use spell visuals to
//   specify how attacking with it looks, including attacker/victim effects,
//   animations and missile model/attachments.
//
//   Bows and guns also commonly uses arrows/ammo
//   that specifies its own missile as an item model.
//
// ============================================================================


const BOW_SPELL_VISUAL = 5

export const TEST_BOW = std.Items.create('tswow-tests','test-bow')
    .Name.enGB.set('Test Bow')
    .Class.BOW.set()
    .InventoryType.RANGED.set()
    .Quality.PURPLE.set()
    .Damage.addPhysical(1,100)
    .RangeMod.set(100)
    .Delay.set(100)
    .Price.set(1,1)
    .ItemLevel.set(1)
    .AmmoType.ARROW.set()
    .DisplayInfo.modRefCopy('tswow-tests','test-bow-display',disp=>{
        disp.Models.add('Bow_1H_Short_A_01.mdx','Bow_1H_Short_A_01Red')
            .Icon.set('INV_Weapon_Bow_05')
            .SpellVisual.set(BOW_SPELL_VISUAL)
    })

export const TEST_ARROW = std.Items
    .create('tswow-tests','test-arrow')
    .Class.ARROW_EQUIP.set()
    .InventoryType.AMMO.set()
    .Name.enGB.set('Test Arrow')
    .Price.set(1,1,200)
    .MaxStack.set(2000)
    .Quality.PURPLE.set()
    .ItemLevel.set(1)
    .Damage.addPhysical(1,2)
    .Delay.set(3000)
    .BagFamily.set(1)
    .DisplayInfo.modRefCopy('tswow-tests','test-arrow-display',disp=>{
        disp.Models.add('','') // first model is unused for arrows
            .Models.add('ArrowFlight_01.mdx','Arrow_A_01Brown')
            .Icon.set('INV_Ammo_Arrow_02')
    })

TEST_ITEM_VENDOR.Vendor.add(TEST_BOW.ID)
TEST_ITEM_VENDOR.Vendor.add(TEST_ARROW.ID)