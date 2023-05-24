import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Bag -
//
//   A simple bag with 36 slots (the highest possible number for a bag).
//
// ============================================================================

const MAXIMUM_BAG_SLOTS = 36

export const TEST_BAG = std.Items
    .create('tswow-tests','test-bag')
    .Name.enGB.set('Test Bag')
    .Price.set(1,1)
    .Class.BAG.set()
    .InventoryType.BAG.set()
    .ContainerSlots.set(MAXIMUM_BAG_SLOTS)
    .DisplayInfo.setSimpleIcon('tswow-tests','test-bag-display','INV_Misc_Bag_10')

TEST_ITEM_VENDOR.Vendor.add(TEST_BAG.ID)