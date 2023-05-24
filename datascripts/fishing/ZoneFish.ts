import { std } from "wow/wotlk";
import { TEST_ISLAND, TEST_LAKE } from "../maps/map";

// ============================================================================
//
// - ZoneFish -
//
//   Sets the fishing level required and items fished in a zone,
//   and then overrides the settings in a subzone.
//
// ============================================================================

export const TEST_ISLAND_FISH = std.Items
    .create('tswow-tests','test-island-fish')
    .Name.enGB.set('Test Island Fish')
    .Quality.WHITE.set()
    .Price.set(0,0)

export const TEST_LAKE_FISH = std.Items
    .create('tswow-tests','test-lake-fish')
    .Name.enGB.set('Test Lake Fish')
    .Quality.WHITE.set()
    .Price.set(0,0)

// Fishing skill and loot for "Test Island"
TEST_ISLAND.Fishing.Skill.set(1)
export const ZONE_FISH_LOOT = std.Loot.Fishing
    .create(TEST_ISLAND.ID)
    .addItem(TEST_ISLAND_FISH.ID,[100,'[0-100]'],1,1)

// Fishing skill and loot for "Test Lake"
TEST_LAKE.Fishing.Skill.set(50)
export const SUBZONE_FISH_LOOT = std.Loot.Fishing
    .create(TEST_LAKE.ID)
    .addItem(TEST_LAKE_FISH.ID,[100,'[0-100]'],1,1)