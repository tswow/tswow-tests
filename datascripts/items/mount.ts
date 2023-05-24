import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Mount -
//
//   A basic mount item using an existing bear model.
//
// ============================================================================

const BEAR_VISUAL = 9886
const BEAR_MODEL = 28428

export const TEST_MOUNT = std.Mounts
    .create('tswow-tests','mount')
    .Name.enGB.set('Test Mount')
    .Icon.setCopy('tswow-tests','test-mount-icon','Ability_Mount_PolarBear_White')
    .Models.addIds(BEAR_MODEL)
    .SpellVisual.set(BEAR_VISUAL)
    .Items.forEach(x=>TEST_ITEM_VENDOR.Vendor.add(x.ID))