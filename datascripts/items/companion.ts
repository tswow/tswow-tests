import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Companion -
//
//   This file contains a very simple companion pet
//   that uses the default bear model.
//
// ============================================================================

export const TEST_COMPANION = std.Companions
    .create('tswow-tests','companion')
    .Name.enGB.set('Test Companion')
    .Icon.setCopy('tswow-tests','test-companion-display','Ability_Mount_PolarBear_White')
    .Models.addDefaultBear()
    .Items.forEach(x=>TEST_ITEM_VENDOR.Vendor.add(x.ID))