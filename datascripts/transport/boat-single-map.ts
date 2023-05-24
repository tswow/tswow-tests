import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Single-map boats -
//
//   This file creates a boat that sails around the Test Island, stopping
//   at the Battleground Island and the Test Harbor.

//   Note: The boat does not currently loop perfectly, but the looping
//         teleport isn't too bad.
//
//   Note: I did not measure roundtrip-times carefully, so this boat will
//         start colliding with the other custom boat at some point.
//
//   See https://tswow.github.io/tswow-wiki/documentation/transports/
//
// ============================================================================

std.GameObjectTemplates.Ships.createSimple('tswow-tests','boat-singlemap',[
    // Middle point
    {map:TEST_MAP.ID,x:14548.157227,y:15093.003906,z:40.001904,o:3.145934},
    {map:TEST_MAP.ID,x:14548.157227,y:15093.003906,z:40.001904,o:3.145934},

    // Middle Second half
    {map:TEST_MAP.ID,x:14458.499023,y:15091.489258,z:40.001522,o:3.157715},
    {map:TEST_MAP.ID,x:14359.264648,y:15084.877930,z:40.002499,o:3.161642},

    {map:TEST_MAP.ID,x:14082.042969,y:14881.369141,z:40.001167,o:3.723987},
    {map:TEST_MAP.ID,x:13630.652344,y:14650.518555,z:40.001167,o:4.818046},
    {map:TEST_MAP.ID,x:13641.186523,y:14353.275391,z:40.001167,o:5.147909},
    {map:TEST_MAP.ID,x:13764.466797,y:14179.488281,z:40.003262,o:6.212115},

    // Battleground Island
    {map:TEST_MAP.ID,x:13924.880859,y:14165.671875,z:40.004143,o:0.050657,delay:5},

    {map:TEST_MAP.ID,x:14138.623047,y:14172.879883,z:40.002518,o:5.638767},
    {map:TEST_MAP.ID,x:14284.693359,y:14049.308594,z:40.001064,o:5.454197},
    {map:TEST_MAP.ID,x:14399.666016,y:13859.470703,z:40.000496,o:5.623059},
    {map:TEST_MAP.ID,x:14506.958984,y:13792.580078,z:40.002296,o:0.113489},
    {map:TEST_MAP.ID,x:14761.792969,y:13820.887695,z:40.001713,o:0.718243},
    {map:TEST_MAP.ID,x:14920.721680,y:13952.792969,z:40.002735,o:0.376595},
    {map:TEST_MAP.ID,x:15144.680664,y:14085.875977,z:40.001125,o:0.671119},
    {map:TEST_MAP.ID,x:15312.789063,y:14301.540039,z:40.002552,o:1.401541},
    {map:TEST_MAP.ID,x:15327.577148,y:14641.086914,z:40.004066,o:2.120180},

    // Test Harbor
    {map:TEST_MAP.ID,x:15257.116211,y:14776.818359,z:40.003101,o:2.128820,delay:5},
    {map:TEST_MAP.ID,x:15154.956055,y:14938.792969,z:39.997803,o:2.385645},
    {map:TEST_MAP.ID,x:14973.120117,y:15091.853516,z:39.997803,o:3.119992},

    // Knot
    {map:TEST_MAP.ID,x:14730.961914,y:15092.611328,z:40.002102,o:3.177350},
    {map:TEST_MAP.ID,x:14643.920898,y:15092.949219,z:40.002102,o:3.071321},
    {map:TEST_MAP.ID,x:14548.157227,y:15093.003906,z:40.001904,o:3.145934},
    {map:TEST_MAP.ID,x:14548.157227,y:15093.003906,z:40.001904,o:3.145934},
])