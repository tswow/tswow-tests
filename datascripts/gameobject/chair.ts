import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Chair -
//
//   A very simple chair game object that you can sit on.
//
//   The attachment point used to position the character on the
//   chair is written into the m2 model itself, and creating
//   one is out of scope of this demo module so we use an
//   existing chair model.
//
// ============================================================================

const BENCH_DISPLAY = std.GameObjectDisplays.create('tswow-tests','bench-display')
    .GeoBox.set(10)
    .ModelName.set('WORLD\\EXPANSION01\\DOODADS\\GENERIC\\BLOODELF\\CHAIRS\\BE_CHAIR01.MDX')

std.GameObjectTemplates.Chairs.create('tswow-tests','chair')
    .Name.enGB.set('Chair')
    .Display.set(BENCH_DISPLAY.ID)
    .Size.set(1)
    .Slots.set(1)
    .Height.set(1)
    .Spawns.add('tswow-tests','chair-spawn',[
        {map:TEST_MAP.ID,x:14755.552734,y:14390.105469,z:56.397850,o:4.167564},
    ])

