import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Sword Spells -
//
//   An advanced sword item with 3 magical effects.
//
//   - On Equip: Casts frost armor on the wielder
//   - Chance on hit: Casts fireball on the target
//   - On use: casts Dragons Breath in a cone in front of the wielder
//
// ============================================================================

const FIREBALL_ID = 133
const FROST_ARMOR_ID = 168
const DRAGONS_BREATH_ID = 31661

export const TEST_MAGIC_SWORD = std.Items
    .create('tswow-tests','test-magic-sword')
    .Name.enGB.set('Frostfire Test Sword')
    .Class.SWORD_1H.set()
    .InventoryType.MAINHAND.set()
    .Quality.PURPLE.set()
    .Damage.addFrost(1,10)
    .Delay.set(100)
    .Price.set(1,1)
    .ItemLevel.set(1)
    .DisplayInfo.modRefCopy('tswow-tests','test-magic-sword',d=>d
        .Models.add(
              'Sword_1H_Short_A_02.mdx'
            , 'Sword_1H_Short_A_02Rusty'
        )
        .Icon.set('INV_Sword_04')
    )
    .Spells.addMod(s=>s
        .Spell.set(FROST_ARMOR_ID)
        .Trigger.ON_EQUIP.set()
    )
    .Spells.addMod(s=>s
        .Spell.set(FIREBALL_ID)
        .Trigger.CHANCE_ON_HIT.set()
        .ProcsPerMinute.set(60)
        .Cooldown.set(0)
    )
    .Spells.addMod(s=>s
        .Spell.set(DRAGONS_BREATH_ID)
        .Trigger.ON_USE.set()
        .Cooldown.set(0)
    )

TEST_ITEM_VENDOR.Vendor.add(TEST_MAGIC_SWORD.ID)