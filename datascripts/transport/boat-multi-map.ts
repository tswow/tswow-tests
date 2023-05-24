
import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Multi-map boats -
//
//   This file creates a boat that sails between the Test Island and
//   Stormwind harbor.
//
//   Note: I did not measure carefully, so this boat will start colliding
//         with the other custom boat or the stormwind boats at some point.
//
//   See https://tswow.github.io/tswow-wiki/documentation/transports/
//
// ============================================================================

//
// Total roundtrip time: ~3m50s
// The +9 (+18 with both) on waiting time is to synchronize
// this boat with the one it could otherwise collide with in stormwind
//
std.GameObjectTemplates.Ships.createSimple('tswow-tests','boat-multimap',[

    //
    // Test Islands
    //
    {map:TEST_MAP.ID,x:15336.225586,y:14024.749023,z:39.005474,o:4.480731},
    {map:TEST_MAP.ID,x:15320.587891,y:14185.031250,z:39.005474,o:1.646978},
    {map:TEST_MAP.ID,x:15218.049805,y:14626.445313,z:39.005474,o:1.857503},
    {map:TEST_MAP.ID,x:15165.028320,y:14927.085938,z:39.005474,o:1.625026},
    // Test Harbor docks stop
    {map:TEST_MAP.ID,x:15167.568750,y:15132.998047,z:39.005474,o:1.593611,delay:60+9},
    {map:TEST_MAP.ID,x:15157.020508,y:15301.799805,z:39.002441,o:4.801174},
    {map:TEST_MAP.ID,x:15205.308594,y:15624.587891,z:39.002441,o:1.401184},
    {map:TEST_MAP.ID,x:15233.083008,y:15963.976563,z:39.002441,o:1.090166},
    {map:TEST_MAP.ID,x:15223.122070,y:15788.939453,z:40.002365,o:1.393294},

    //
    // Stormwind (Same route as the Auberdine boat)
    //
    {map:0,x:-9064.90234375,y:1516.2005615234375,z:0,o:0,delay:0},
    {map:0,x:-9020.9013671875,y:1430.217041015625,z:0,o:0,delay:0},
    {map:0,x:-8961.5107421875,y:1355.4420166015625,z:0,o:0,delay:0},
    {map:0,x:-8864.2275390625,y:1311.786865234375,z:0,o:0,delay:0},
    {map:0,x:-8746.162109375,y:1310.5523681640625,z:0,o:0,delay:0},
    // Stormwind harbor docks stop
    {map:0,x:-8650.71875,y:1346.05126953125,z:0,o:0,delay:60+9},
    {map:0,x:-8588.919921875,y:1379.8037109375,z:0,o:0,delay:0},
    {map:0,x:-8547.474609375,y:1420.058837890625,z:0,o:0,delay:0},
    {map:0,x:-8520.6357421875,y:1496.64501953125,z:0,o:0,delay:0},
    {map:0,x:-8544.171875,y:1636.4505615234375,z:0,o:0,delay:0},
    {map:0,x:-8663.5751953125,y:1853.9681396484375,z:0,o:0,delay:0},
])
