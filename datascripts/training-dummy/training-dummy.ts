import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// Spawns a training dummy on the test island

std.CreatureInstances
    .create('tswow-tests','test-island-training-dummy')
    .Template.set(31146)
    .Position.set({map:TEST_MAP.ID,x:14862.877930,y:14593.265625,z:72.275238,o:5.699874})