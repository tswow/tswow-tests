import { std } from "wow/wotlk";
import { TEST_MAP } from "./map";

// ============================================================================
//
// - Teleports -
//
//   This file creates some GM teleports on the test island.
//
// ============================================================================

std.GMTeleports.create()
    .Name.set('testhouse')
    .Position.set(
        {map:TEST_MAP.ID,x:14875.500000,y:14557.799805,z:74.685699,o:1.538050}
    )

std.GMTeleports.create()
    .Name.set('testtower')
    .Position.set(
        {map:TEST_MAP.ID,x:14675.746094,y:13957.903320,z:109.130417,o:1.604811}
    )

std.GMTeleports.create()
    .Name.set('testharbor')
    .Position.set(
        {map:TEST_MAP.ID,x:15356.035156,y:14953.919922,z:49.541908,o:3.133981}
    )