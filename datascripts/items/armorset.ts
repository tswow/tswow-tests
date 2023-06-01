import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Armor Set -
//
//   This file contains:
//
//   - A simple hood item
//   - A simple robe item
//   - An item set with a simple dummy spell that actives when both the hood
//     and the robe are equipped.
//
//   Note how you need to both specify the itemset on the items,
//   and then add the items to the item set itself.
//
// ============================================================================


const GAMEMASTER_ROBE_DISPLAY = 22033
const GAMEMASTER_HOOD_DISPLAY = 22036

std.SpellStackGroups
    .create()
    .Spells.add(10)

const TEST_SET_SPELL = std.Spells
   .create('tswow-tests','test-set-spell')
   .Name.enGB.set('Test Set')
   .Icon.setPath('Interface\\Icons\\Spell_Shadow_RagingScream')
   .Description.enGB.set('Get a funny message that you\'re wearing the set')
   .AuraDescription.enGB.set('You\'re wearing the full test set!')
   .Attributes.IS_PASSIVE.set(true)
   .Effects.addMod(eff=>{
       eff.Type.APPLY_AURA.set()
          .Aura.DUMMY.set()
          .ImplicitTargetA.UNIT_CASTER.set()
   })
   .Effects.addMod(eff=>{
       eff.Type.APPLY_AREA_AURA_RAID.set()
          .Aura.DUMMY.set()
          .Radius.set(0)
   })

export const TEST_ITEM_SET = std.ItemSet
    .create('tswow-tests','test-item-set')
    .Name.enGB.set('Test Set')
    .Spells.add(TEST_SET_SPELL.ID,2)

export const TEST_HOOD = std.Items
    .create('tswow-tests','test-hood')
    .Name.enGB.set('Test Hood')
    .Class.CLOTH_EQUIP.set()
    .InventoryType.HEAD.set()
    .DisplayInfo.set(GAMEMASTER_HOOD_DISPLAY)
    .ItemSet.set(TEST_ITEM_SET.ID)
    .Quality.ORANGE.set()

export const TEST_ROBE = std.Items
    .create('tswow-tests','test-robe')
    .Name.enGB.set('Test Robe')
    .Class.CLOTH_EQUIP.set()
    .InventoryType.ROBE.set()
    .DisplayInfo.set(GAMEMASTER_ROBE_DISPLAY)
    .ItemSet.set(TEST_ITEM_SET.ID)
    .Quality.ORANGE.set()

// also need to add items to the set itself
TEST_ITEM_SET.Items.addId(TEST_HOOD.ID)
             .Items.addId(TEST_ROBE.ID)

TEST_ITEM_VENDOR.Vendor.add(TEST_HOOD.ID)
TEST_ITEM_VENDOR.Vendor.add(TEST_ROBE.ID)