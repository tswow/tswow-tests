import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Item Vendor -
//
//   Vendor for all the test items in this module.
//
// ============================================================================

export const TEST_ITEM_VENDOR = std.CreatureTemplates
    .create('tswow-tessts','test-item-vendor')
    .Name.enGB.set('Test Item Vendor')
    .Models.addDefaultBear()
    .NPCFlags.VENDOR.set(true)
    .Spawns.add(
          'tswow-tests'
        , 'test-item-vendor-spawn'
        , [{map:TEST_MAP.ID,x:14743.532227,y:14451.871094,z:75.873962,o:5.573153}]
    )