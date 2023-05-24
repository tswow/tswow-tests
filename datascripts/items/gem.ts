import { std } from "wow/wotlk";
import { TEST_ITEM_VENDOR } from "./item-vendor";

// ============================================================================
//
// - Gems -
//
//   This file contains gems of different colors:
//   - Red gem: With a +4 str bonus
//   - Green gem: With a +2 int bonus
//   - Meta gem: With a dummy effect (todo: bonus/requirements)
//
//   There is also an example item "Socketed Shoes" that gains +5
//   stamina when socketed with one of each of the gems.
//
// ============================================================================

const GAMEMASTERS_SLIPPERS_DISPLAY = 22034;
const RED_GEM_DISPLAY = 35930;
const GREEN_GEM_DISPLAY = 35843;
const META_GEM_DISPLAY = 12310

export const RED_GEM = std.Gems
    .create('tswow-tests','tswow-gem-red')
    .Type.RED.set()
    .Name.enGB.set('Red Gem')
    .DisplayInfo.set(RED_GEM_DISPLAY)
    .EffectDescription.enGB.set('+4 Strength')
    .Effects.addMod(e=>e
        .Type.STAT.set()
        .Stat.STRENGTH.set()
        .MinStat.set(4)
    )

export const GREEN_GEM = std.Gems
    .create('tswow-tests','tswow-gem-blue')
    .Type.BLUE.set()
    .Name.enGB.set('Green Gem')
    .DisplayInfo.set(GREEN_GEM_DISPLAY)
    .EffectDescription.enGB.set('+2 Intellect & +2 Agility')
    .Effects.addMod(e=>e
        .Type.STAT.set()
        .Stat.INTELLECT.set()
        .MinStat.set(2)
    )
    .Effects.addMod(e=>e
        .Type.STAT.set()
        .Stat.AGILITY.set()
       .MinStat.set(2)
    )

// TODO: meta gem requirements

export const META_GEM = std.Gems
    .create('tswow-tests','tswow-gem-meta')
    .DisplayInfo.set(META_GEM_DISPLAY)
    .Type.META.set()
    .Name.enGB.set('Meta Gem')
    .EffectDescription.enGB.set('Dummy Effect')

//
// Socketed item
//

export const SOCKETED_SHOES = std.Items
    .create('tswow-tests','socketed-shoes')
    .Name.enGB.set('Socketed Shoes')
    .ItemLevel.set(1)
    .Class.CLOTH_EQUIP.set()
    .InventoryType.FEET.set()
    .Quality.ORANGE.set()
    .DisplayInfo.set(GAMEMASTERS_SLIPPERS_DISPLAY)
    .Socket.addMeta()
    .Socket.addRed()
    .Socket.addBlue()
    .SocketBonus.modRefCopy('tswow-tests','socket-bonus',e=>e
        .Name.enGB.set('+5 Stamina')
        .Effects.addMod(e=>e
            .Type.STAT.set()
            .Stat.STAMINA.set()
            .MinStat.set(5)
        )
    )

TEST_ITEM_VENDOR.Vendor.add(RED_GEM.Item.get().ID)
TEST_ITEM_VENDOR.Vendor.add(GREEN_GEM.Item.get().ID)
TEST_ITEM_VENDOR.Vendor.add(META_GEM.Item.get().ID)
TEST_ITEM_VENDOR.Vendor.add(SOCKETED_SHOES.ID)