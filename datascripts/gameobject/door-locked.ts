import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Door -
//
//   This file demonstrates a simple door
//
//   TODO: Currently not working
//
// ============================================================================

const DOOR_DISPLAY = std.GameObjectDisplays
    .create('tswow-tests','locked-door-display')
    .GeoBox.set(2)
    .ModelName.set('WORLD\\AZEROTH\\KARAZAHN\\ACTIVEDOODADS\\KARAZAHN_BRIDGEDOORS.MDX')

std.GameObjectTemplates.Doors
    .create('tswow-tests','locked-door')
    .Display.set(DOOR_DISPLAY.ID)
    .Size.set(1)
    .Name.enGB.set('Locked Door')
    .StartOpen.set(0)
    .Spawns.add('tswow-tests','locked-door-spawn',[
        {map:TEST_MAP.ID,x:14751.718750,y:14382.041992,z:56.428387,o:0.524125},
    ])