import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Global Elevator -
//
//   This file creates an elevator that uses global coordinates for its route.
//
//   TODO: It just makes a simple up-down motion for the moment, it should
//         probably be more interesting.
//
// ============================================================================

std.GameObjectTemplates.Elevators
    .createGlobalInstance('tswow-tests','global-elevator',[
        {map:TEST_MAP.ID,x:13861.413086,y:13949.931641,z:60.037086,o:1.487102, time: 0},
        {map:TEST_MAP.ID,x:13861.413086,y:13949.931641,z:77.607086,o:1.487102},
        {map:TEST_MAP.ID,x:13861.413086,y:13949.931641,z:60.038280,o:1.487102, time: 2000},
    ])