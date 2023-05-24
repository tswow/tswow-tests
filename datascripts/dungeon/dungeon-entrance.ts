import { std } from "wow/wotlk"
import { TEST_MAP } from "../maps/map"
import { DUNGEON_MAP } from "./dungeon-map"

// ============================================================================
//
// - Dungeon Entrance -
//
//   This file creates the area triggers used
//   to teleport between the outside and inside of the
//   instance.
//
//   We use four points for this, two source points (used to trigger a teleport)
//   and two destination points (used as teleport destinations), one of each pair
//   for the in- and outside of the instance respectively.
//
//   We need to make sure the area triggers we create around the source points
//   do not overlap with the destination points, since otherwise you'd just
//   get stuck teleporting back and forth the moment you enter the dungeon.
//
// ============================================================================

const SOURCE_RADIUS = 5
const TP_IN_SOURCE  = {map:TEST_MAP.ID, x:14633.758789, y:14610.068359, z:65.237289, o:0.838876}
const TP_IN_DEST    = {map:DUNGEON_MAP.ID,x:14621.322266,y:14616.841797,z:65.712608,o:2.553397}
const TP_OUT_SOURCE = {map:DUNGEON_MAP.ID,x:14628.325195,y:14612.317383,z:66.115196,o:5.691055}
const TP_OUT_DEST   = {map:TEST_MAP.ID,x:14640.025391,y:14604.198242,z:62.999847,o:5.397315}

std.AreaTriggers
    .createRadius('tswow-tests','dungeon-tp-in',TP_IN_SOURCE,SOURCE_RADIUS)
    .Teleport.Position.set(TP_IN_DEST)

std.AreaTriggers
    .createRadius('tswow-tests','dungeon-tp-out',TP_OUT_SOURCE,SOURCE_RADIUS)
    .Teleport.Position.set(TP_OUT_DEST)