import { std } from "wow/wotlk";
import { Position } from "wow/wotlk/std/Misc/Position";
import { TEST_MAP } from "./map";

// ============================================================================
//
// - Signposts -
//
//   This file creates signpost objects for various landmarks in the test map.
//   It is more intended as a utility than a demo.
//
//   It also demonstrates (see the signpost function) how you can use
//   functions to easily create templates of objects in tswow without
//   copypasting entire sections when you only want to change a small amount
//   of parameters.
//
// ============================================================================

const SIGNPOST_DISPLAY = std.GameObjectDisplays.create('tswow-tests','signpost-display')
    .GeoBox.set(
        {
              minX:-0.066269
            , minY:-0.838019
            , minZ:-0.309121
            , maxX:0.066269
            , maxY:0.622048
            , maxZ:0.309121
        }
    )
    .GeoBox.set({
        minX:-10,minY:-10,minZ:-10,maxX:10,maxY:10,maxZ:10
    })
    .ModelName.set(`World\\Expansion01\\doodads\\eversong\\signpost\\be_signpost_eversong.mdx`)
    .ObjectEffectPackage.set(0)
    .Sound.clearAll()

function signpost(id: string, name: string, pos: Position) {
    std.GameObjectTemplates.Generic.create('tswow-tests',`signpost-${id}`)
        .Name.enGB.set(name)
        .Display.set(SIGNPOST_DISPLAY.ID)
        .Size.set(1)
        .Data0.set(1)
        .Data1.set(1)
        .Spawns.addMod('tswow-tests',`signpost-${id}-spawn`,[pos],(go)=>{
        })
}

signpost( 'demo-lounge'
        , 'Demo Lounge'
        , {map:TEST_MAP.ID,x:14747.295898,y:14478.167969,z:53.401749,o:1.358972}
        )

signpost( 'regression-tests'
        , 'Raid Demo'
        , {map:TEST_MAP.ID,x:14948.741211,y:14488.928711,z:87.334358,o:2.168715},
        )

signpost( 'profession'
        , 'Profession Demo'
        , {map:TEST_MAP.ID,x:14694.016602,y:14545.037109,z:50.186543,o:4.176980},
        )

signpost( 'dungeon'
        , 'Demo Dungeon'
        , {map:TEST_MAP.ID,x:14641.962891,y:14598.187500,z:61.018185,o:5.414765},
        )

signpost( 'graveyard'
        , 'Graveyard'
        , {map:TEST_MAP.ID,x:14792.500000,y:14544.887695,z:61.119545,o:6.185401},
        )

signpost( 'vacant'
        , 'Vacant'
        , {map:TEST_MAP.ID,x:14838.212891,y:14867.666992,z:77.593468,o:5.555355},
        )