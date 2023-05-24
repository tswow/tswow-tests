import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Enchantment -
//
//   This file contains a simple enchantment that adds
//   +5 spirit to a melee weapon.
//
// ============================================================================

std.Enchantments.create('tswow-tests','enchantment')
    .Name.enGB.set('Test Enchantment')
    .EnchantSpells.addMod('tswow-tests','enchantment-spell',true,spell=>{spell
        .SpellName.enGB.set('Test Enchantment')
        .ItemName.enGB.set('Scroll of Test Enchantment')
        .ValidTarget.setMeleeWeapon()
        .SpellDescription.enGB.set(
           'Permanently enchant a melee weapon to increase Spirit by 5'
        );
        TEST_ITEM_VENDOR.Vendor.add(spell.Item.get())
    })
    .Effects.addMod(eff=>{eff
        .Type.STAT.set()
        .Stat.SPIRIT.set()
        .MinStat.set(5)
    })