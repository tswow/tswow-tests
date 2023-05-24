import { std } from "wow/wotlk";
import { TEST_ISLAND, TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Custom Class -
//
// This file illustrates the creation of a simple custom class.
//
// ============================================================================

export const TEST_CLASS = std.Classes
    .create('tswow-tests','customclass','MAGE')
    .Name.enGB.set('Test Class')
    .Tags.addUnique('tswow-tests','customclass')
    .Races.add([
          'BLOODELF','DRAENEI','DWARF','GNOME','HUMAN'
        , 'NIGHTELF','ORC','TAUREN','TROLL','UNDEAD'
    ])

    // Race/Class Info
    .Races.forEach(raceClass=>{raceClass
      .SpawnPosition.set(
        TEST_ISLAND.ID
      , {map:TEST_MAP.ID,x:14875.500000,y:14557.799805,z:74.685699,o:1.538050})
      raceClass.Outfits.both(gear=>{gear
        .Items.clearAll()
        .Items.add(6129,undefined,'ROBE')
      })
    })

    // No cinematic sequence
    .CinematicSequence.set(-1)

    // LFG Dungeon Roles
    .Roles.clear()
    .Roles.Damage.set(true)
    .Roles.Healer.set(true)

    // Stats
    .Stats.MeleeCrit.set((old,index)=>old*1.1)
    .Stats.MeleePowerType.MAGE.set()

    // UI Settings
    .UI.setIcon(std.Image.readFromModule(
        'tswow-tests'
      , 'assets/ClassIcons/test-class-icon.blp'
    ))

// Equip Skills
std.EquipSkills.Axes1H.enableAutolearnClass(TEST_CLASS.Mask)
std.EquipSkills.Axes2H.enableAutolearnClass(TEST_CLASS.Mask)
std.EquipSkills.Swords2H.enableAutolearnClass(TEST_CLASS.Mask)
std.EquipSkills.Swords1H.enableAutolearnClass(TEST_CLASS.Mask)
std.EquipSkills.Wands.enableAutolearnClass(TEST_CLASS.Mask)
std.EquipSkills.Bows.enableAutolearnClass(TEST_CLASS.Mask)
std.EquipSkills.Cloth.enableAutolearnClass(TEST_CLASS.Mask)

// These are not autolearned
std.EquipSkills.Leather.enableClass(TEST_CLASS.Mask)
std.EquipSkills.Guns.enableClass(TEST_CLASS.Mask)