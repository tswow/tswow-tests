import { std } from "wow/wotlk";
import { TEST_ISLAND_OVERLAY, TEST_TOWER_OVERLAY } from "../maps/worldmap";

// ============================================================================
//
// - Explore Achievement -
//
//   This file creates exploration achievements for the discoverable areas
//   in the test map.
//
// ============================================================================

const SCHOLAZAR_BASIN_SPELL_ICON = 3335;
const WORLD_EXPLORER_ID = 46
const WORLD_EXPLORER_UI_INDEX = 5

// The category used to hold the (single) test island achievement
export const TEST_MAP_ACHIEVEMENTS = std.AchievementCategory
    .create()
    .Name.enGB.set('Test Map')
    .Parent.set('EXPLORATION') // exploration category
    .UIOrder.set(12)

// Achievement for exploring Test Island and Test Tower
export const TEST_ISLAND_ACHIEVEMENT = std.Achievements
    .create('tswow-tests','explore-test-island')
    .Points.set(15)
    .Faction.Both.set()
    .Name.enGB.set('Explore Test Island')
    .Description.enGB.set('Explore Test Island, revealing the covered areas of the world map.')
    .Criteria.addMod('tswow-tests','explore-test-island',crit=>{
        crit.Type.EXPLORE_AREA.set()
            .WorldMapOverlay.set(TEST_ISLAND_OVERLAY.ID)
            .Description.enGB.set('Test Island')
    })
    .Criteria.addMod('tswow-tests','explore-test-tower',crit=>{
        crit.Type.EXPLORE_AREA.set()
            .WorldMapOverlay.set(TEST_TOWER_OVERLAY.ID)
            .Description.enGB.set('Test Tower')
    })
    .Category.set(TEST_MAP_ACHIEVEMENTS.ID)
    .Icon.set(SCHOLAZAR_BASIN_SPELL_ICON)

// The achievement for exploring the entire continent
export const TEST_MAP_ACHIEVEMENT = std.Achievements
    .create('tswow-tests','explore-test-map')
    .Category.set('EXPLORATION')
    .UIOrder.set(5)
    .Points.set(25)
    .Faction.Both.set()
    .Name.enGB.set('Explore Test Map')
    .Description.enGB.set('Explore the regions of Test Map')
    .Criteria.addMod('tswow-tests','explore-test-map-crit',crit=>{
        crit.Type.COMPLETE_ACHIEVEMENT.set()
            .CompletedAchievement.set(TEST_ISLAND_ACHIEVEMENT.ID)
    })
    // we'll move the old one just down below
    .UIOrder.set(WORLD_EXPLORER_UI_INDEX)
    .Icon.set(SCHOLAZAR_BASIN_SPELL_ICON)

// Adds the continent achievement as a requirement to 'World Explorer'
std.Achievements.load(WORLD_EXPLORER_ID)
    // move it down so we can fit Test Map above it
    .UIOrder.set(WORLD_EXPLORER_UI_INDEX+1)
    .Criteria.addMod('tswow-tests','world-explorer-test-map',crit=>{
        crit.Type.COMPLETE_ACHIEVEMENT.set()
            .CompletedAchievement.set(TEST_MAP_ACHIEVEMENT.ID)
    })