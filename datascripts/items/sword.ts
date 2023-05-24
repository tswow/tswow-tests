import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Sword -
//
//   Simple sword that specifies a model file.
//
// ============================================================================

export const TEST_SWORD = std.Items.create('tswow-tests','test-sword')
    .Name.enGB.set('Test Sword')
    .Class.SWORD_1H.set()
    .InventoryType.MAINHAND.set()
    .Quality.PURPLE.set()
    .Damage.addPhysical(1,100)
    .Delay.set(100)
    .Price.set(1,1)
    .ItemLevel.set(1)
    .DisplayInfo.modRefCopy('tswow-tests','test-sword-display',info=>{info
        .Icon.set('path')
        .Models.add(
              'Sword_1H_Short_A_02.mdx'
            , 'Sword_1H_Short_A_02Rusty'
        )
        .Icon.set('INV_Sword_04')
    })

TEST_ITEM_VENDOR.Vendor.add(TEST_SWORD.ID)