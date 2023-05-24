import { std } from "wow/wotlk";

// ============================================================================
//
// - Map -
//
//   This file creates a continent map and generates a 6x6 adt template
//   that you can load directly into noggit.
//
//   It also creates the following zones and areas:
//
//   * Test Sea
//   * Test Harbor
//   * Test Island
//      - Test Tower
//      - Test Lake
//
// ============================================================================

// Map
export const TEST_MAP = std.Maps
    .create('tswow-tests','test-map')
    .Directory.set('testmap')
    .Name.enGB.set('Test Map')
    .LoadingScreen.setSimple('LoadingScreen\\LoadingScreen.blp')
    .Tiles.add('tswow-tests',[[1,1,6,6,'testmap']])
    .Flags.set(std.Maps.load(0).Flags.get())
    .Tags.addUnique('tswow-tests','test-map')

// Zones
export const TEST_ISLAND = std.Areas
    .create('tswow-tests','test-island')
    .Name.enGB.set('Test Island')
    .Map.set(TEST_MAP.ID)
    .ExplorationLevel.set(1)

export const TEST_HARBOR = std.Areas.create('tswow-tests','test-harbor')
    .Name.enGB.set('Test Harbor')
    .Map.set(TEST_MAP.ID)
    .ExplorationLevel.set(1)

export const TEST_SEA = std.Areas.create('tswow-tests','test-sea')
    .Name.enGB.set('Sea of Test')
    .Map.set(TEST_MAP.ID)
    .ExplorationLevel.set(1)

// Subzones
export const TEST_LAKE = std.Areas.create('tswow-tests','test-lake')
    .Name.enGB.set('Test Lake')
    .Map.set(TEST_MAP.ID)
    .ParentArea.set(TEST_ISLAND.ID)
    .ExplorationLevel.set(1)

export const TEST_TOWER = std.Areas.create('tswow-tests','test-tower')
    .Name.enGB.set('Test Tower')
    .Map.set(TEST_MAP.ID)
    .ParentArea.set(TEST_ISLAND.ID)
    .ExplorationLevel.set(1)