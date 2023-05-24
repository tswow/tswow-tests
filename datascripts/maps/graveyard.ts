import { std } from "wow/wotlk";
import { TEST_HARBOR, TEST_ISLAND, TEST_MAP, TEST_SEA } from "./map";

// ============================================================================
//
// - Graveyard -
//
//   This file creates two basic graveyards and spirit healers.
//
//   Note: If you have GM mode on, spirit healers are visible even when
//         you're alive. This is normal.
//
// ============================================================================

// Test Island Graveyard
std.WorldSafeLocs.createGraveyard(
      [TEST_ISLAND.ID,TEST_SEA.ID]
    , 'BOTH'
    , {map:TEST_MAP.ID,x:14797.995117,y:14555.625000,z:61.920998}
)

std.CreatureInstances
    .create('tswow-tests','test-island-spirit')
    .Template.set(6491)
    .Position.set({map:TEST_MAP.ID,x:14793.072266,y:14558.047852,z:59.751156,o:5.704589})

// Test Harbor Graveyard
std.WorldSafeLocs.createGraveyard(
      [TEST_HARBOR.ID]
    , 'BOTH'
    , {map:TEST_MAP.ID,x:15561.999023,y:15226.397461,z:62.671741,o:0.252707},
)

std.CreatureInstances
    .create('tswow-tests','test-harbor-spirit')
    .Template.set(6491)
    .Position.set({map:727,x:14793.333008,y:14558.196289,z:59.866745,o:6.071220})