import { std } from "wow/wotlk";
import { TEST_HARBOR, TEST_ISLAND, TEST_MAP } from "./map";

// ============================================================================
//
// - POI -
//
//   This file creates 3 POI icons for various landmarks in the demo map:
//   - Test Harbor
//   - Test House (Lobby)
//   - Test Tower
//
// ============================================================================

std.AreaPOI
    .create()
    .Area.set(TEST_HARBOR.ID)
    .Map.set(TEST_MAP.ID)
    .Position.set({map:TEST_MAP.ID,x:15366.454102,y:14990.363281,z:49.540836})
    .Name.enGB.set('Test Harbor')
    .Importance.set(3)
    .Icons.add(6)
    .Flags.SHOW_MINIMAP_ARROW.set(true)

std.AreaPOI
    .create()
    .Area.set(TEST_ISLAND.ID)
    .Map.set(TEST_MAP.ID)
    .Position.set({map:TEST_MAP.ID,x:14875.500000,y:14557.799805,z:74.685699})
    .Name.enGB.set('Test House')
    .Importance.set(2)
    .Icons.add(5)
    .Flags.SHOW_MINIMAP_ARROW.set(true)
    .Flags.SHOW_ON_CONTINENT.set(true)
    .Flags.SHOW_ON_WORLD.set(true)
    .Flags.SHOW_ON_MAP.set(true)

std.AreaPOI
    .create()
    .Area.set(TEST_ISLAND.ID)
    .Map.set(TEST_MAP.ID)
    .Position.set({map:TEST_MAP.ID,x:14675.807617,y:13957.764648,z:109.130707,o:1.560838})
    .Name.enGB.set('Test Tower')
    .Importance.set(2)
    .Icons.add(6)
    .Flags.SHOW_MINIMAP_ARROW.set(true)