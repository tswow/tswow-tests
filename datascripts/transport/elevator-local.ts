import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Local Elevator -
//
//   This file creates an elevator that uses local coordinates for its route.
//
// ============================================================================

std.GameObjectTemplates.Elevators
    .createLocalTemplate('tswow-tests','local-elevator',[
          {x:0,y:0,z:0,o:0,time:0}
        , {x:0,y:0,z:0,o:0,time:2000}
        , {x:0,y:0,z:10,o:3.14159,time:3000}
        , {x:0,y:0,z:10,o:3.14159,time:5000}
        , {x:0,y:0,z:0,o:0,time:6000}
    ])
    .Name.enGB.set('Local Elevator')
    .Spawns.add('tswow-tests','local-elevator-spawn',[
        {map:TEST_MAP.ID,x:13907.690430,y:13948.241211,z:59.691685,o:1.357512},
    ])