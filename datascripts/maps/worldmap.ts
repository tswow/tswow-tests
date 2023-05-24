import { std } from "wow/wotlk";
import { WorldMapContinentRegistry } from "wow/wotlk/std/Worldmap/WorldMapContinent";
import { TEST_HARBOR, TEST_ISLAND, TEST_MAP, TEST_TOWER } from "./map";

// ============================================================================
//
// - Worldmap -
//
//   This file creates worldmap data for the test island map.
//
//   Assets used:
//      Continent map:    assets/Interface/Worldmap/TestMap
//      Test Island map:  assets/Interface/WorldMap/TestIsland
//      Test Harbor map:  assets/Interface/WorldMap/TestHarbor
//
//   TODO: We do not explain very well what the boundary numbers mean
//         or how we arrived at them.
//
//   TODO: The test harbor numbers are currently wrong.
//
//   TODO: The test tower texture is slightly off
//
// ============================================================================


// ============================================================================
//                               Continent Map
// ============================================================================

// Since we're creating an overworld map, first we need to specify a continent.
// See assets/Interface/WorldMap/TestMap
export const TEST_CONTINENT_MAP = WorldMapContinentRegistry
    .create(TEST_MAP.ID)
    .ADTBoundary.set(1,1,6,6)
    .Directory.set('TestMap')
    .TaxiBoundary.setMinimapCoords([1,1,6,6],461,430,1279,1249) // measured
    .DisplayBoundary.setMinimapCoords([1,1,6,6],228,423,1481,1258) // measured
    .ContinentOffset.setSpread(70.75,70.75) // experimented
    .Scale.set(2.5) // experimented
    .World.set(1) // continent shown on azeroth worldmap

// ============================================================================
//                              Test Island Map
// ============================================================================

// See assets/Interface/WorldMap/TestIsland
export const TEST_ISLAND_WORLDMAP = std.WorldMapAreas
    .create()
    .Map.set(TEST_MAP.ID)
    .Area.set(TEST_ISLAND.ID)
    .Directory.set('TestIsland')
    .Boundary.setMinimapCoords([1,1,6,6],667,668,1300,1090) // measured

export const TEST_ISLAND_OVERLAY = TEST_ISLAND_WORLDMAP
    .Overlays.addGet()
    .Areas.addId(TEST_ISLAND.ID)
    .Texture.set('TestIslandMain',768,768)
    .HitRect.set(96,0,96+600,0+668)
    .Offset.setSpread(96,0)

export const TEST_TOWER_OVERLAY = TEST_ISLAND_WORLDMAP
    .Overlays.addGet()
    .Areas.addId(TEST_TOWER.ID)
    .Texture.set('TestTower',512,512)
    .HitRect.set(696,263,696+280,263+265)
    .Offset.setSpread(696,263)

// ============================================================================
//                              Test Harbor Map
// ============================================================================

// See assets/Interface/WorldMap/TestHarbor
export const TEST_HARBOR_WORLDMAP = std.WorldMapAreas
    .create()
    .Map.set(TEST_MAP.ID)
    .Area.set(TEST_HARBOR.ID)
    .Directory.set('TestHarbor')
    .Boundary.setMinimapCoords([1,1,6,6],416,351,1043,667)