import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Currency -
//
//   Currencies is an item that shows up in the "Currency" tab of
//   the character window.
//
//   This file illustrates:
//     - A currency category (used for sections in the currency tab)
//     - A currency item under this category
//     - How to use our currency to purchase items with a vendor using
//       an "extended cost" object.
//
//   Notes:
//     - It is not possible to use currency items
//       to learn spells with a trainer without core/lua mods
//     - *Any* item can be used as an "extended cost" with a vendor,
//       not just those created or listed as currencies.
//
// ============================================================================

export const CURRENCY_CATEGORY = std.CurrencyCategory.create()
    .Name.enGB.set('Test Currency Category')

export const CURRENCY = std.Currency.create('tswow-tests','test-currency')
    .Name.enGB.set('Test Currency')
    .Description.enGB.set('Custom Currency')
    .Category.set(CURRENCY_CATEGORY.ID)
    .ItemDisplay.setSimpleIcon('tswow-tests','currency-display','Spell_Shadow_SoulGem')
    .Item.modRef(x=>x.Tags.addUnique('mod','name'))

export const TEST_JUNK_ITEM = std.Items
    .create('tswow-tests','test-junk-item')
    .Name.enGB.set('Test Junk Item')
    .Quality.GRAY.set()

TEST_ITEM_VENDOR.Vendor.add(CURRENCY.Item.get())

// Using the currency to sell something
// requires us to first create an "extended cost" object
// note that *any* item can be used as a currency,
// not just those that are listed as a currency
const CURRENCY_EXTENDED_COST = std.ExtendedCost
    .create()
    .Items.add(CURRENCY.Item.get(),5)

TEST_ITEM_VENDOR.Vendor.add(TEST_JUNK_ITEM.ID,CURRENCY_EXTENDED_COST.ID)