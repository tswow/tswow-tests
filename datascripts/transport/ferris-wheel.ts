import { std } from "wow/wotlk";
import { GameObjectDisplay } from "wow/wotlk/std/GameObject/GameObjectDisplay";
import { TEST_MAP } from "../maps/map";

// ============================================================================
//
// - Ferris Wheel -
//
//   This is the code for the big ferris wheel on Battleground Island.
//   It is a bit more advanced than the other demos and maybe not a great
//   starting point to learn about elevators, consider looking at
//   "elevator-global.ts" or "elevator-local.ts" for that instead.
//
//   Note: The reason I set all spawn rotations to {x:0,y:0,z:0,w:1} is
//         because I accidentally used that as a default setting before and
//         adapted the models to it. It should not be needed if you decide to
//         make your own.
//
//   Note: The offsets broke a little when i converted it, the cabins can
//         line up much better to the ferris wheel itself.
//
// ============================================================================

const WAIT_TIME = 0;
const SPIN_TIME = 50000*3;
const FULL_TIME = WAIT_TIME+SPIN_TIME;
const SIZE = 1;
const CABIN_COUNT = 20;
const CABIN_OFFSET = 8.3

// Spawn location base
const SPAWN_POS = {
      map : TEST_MAP.ID
    , x   : 13891.685547-8
    , y   : 13929.247070
    , z   : 147.268524+1
    , o   : 1.560176
}

if(true) {
    // Generic gameobject display for a model we use for all components
    function makeGenericDisplay(disp: GameObjectDisplay, name: string) {
        disp
            .GeoBox.set({
                minX:-20000,minY:-20000,minZ:-20000,maxX:20000,maxY:20000,maxZ:20000
            })
            .ModelName.set(name)
            .ObjectEffectPackage.set(0)
            .Sound.clearAll()
    }

    // The rotating wheel itself
    std.GameObjectTemplates.Elevators
        .createLocalTemplate('tswow-tests','ferris-wheel',[
            {x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,rotW:1,time:0},
            {x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,rotW:1,time:WAIT_TIME},
            {rotY:0.707,rotX:0,rotZ:0,rotW:0.707},
            {rotY:1.0,rotX:0,rotZ:0,rotW:0.0},
            {rotY:0.707,rotX:0,rotZ:0,rotW:-0.707},
            {x:0,y:0,z:0,rotY:0,rotX:0,rotZ:0,rotW:-1,time:FULL_TIME},
        ])
        .Display.modRefCopy('tswow-tests','ferris-wheel',x=>makeGenericDisplay(x,'ferris\\wheel.mdx'))
        .Name.enGB.set('Ferris Wheel')
        .Size.set(SIZE)
        .Spawns.addMod('tswow-tests','ferris-wheel-spawn',[SPAWN_POS],(x)=>x.Rotation.set({x:0,y:0,z:0,w:1}))

    // The static legs (it was easier to line up if I made it an elevator too)
    std.GameObjectTemplates.Elevators
        .createLocalTemplate('tswow-tests','ferris-legs',[
            {x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,rotW:0,time:0},
            {x:0,y:0,z:0,rotX:0,rotY:0,rotZ:0,rotW:0,time:FULL_TIME},
        ])
        .Display.modRefCopy('tswow-tests','ferris-legs',x=>makeGenericDisplay(x,'ferris\\legs.mdx'))
        .Name.enGB.set('Ferris Legs')
        .Size.set(SIZE)
        .Spawns.addMod('tswow-tests','ferris-legs-spawn',[SPAWN_POS],(x)=>x.Rotation.set({x:0,y:0,z:0,w:1}))

    // The cabins
    const dist = 76.5;
    for(let i=0;i<CABIN_COUNT;++i) {
        // TODO: this is messy and hacky
        let arm_offset = (360/CABIN_COUNT)*i
        let points: {x:number,y:number,z:number,time?:number}[] = []
        for(let i=0;i<45;++i) {
            let rad = (CABIN_OFFSET+arm_offset+(i*8+270))*0.0174533
            points.push({
                x: dist*Math.cos(rad)
                , y: 0
                , z: dist*Math.sin(rad)
            });
        }
        points.reverse()
        points.unshift(Object.assign({},points[0]));
        points.push(Object.assign({},points[0]))

        points[0].time = 0;
        points[1].time = WAIT_TIME
        points[points.length-1].time = FULL_TIME;

        std.GameObjectTemplates.Elevators
            .createLocalTemplate('tswow-tests',`ferris-cabin-${i}`,[
                ...points
            ])
            .Name.enGB.set('Ferris Cabin')
            .Size.set(SIZE)
            .Display.modRefCopy('tswow-tests','ferris-cabin-'+i,x=>makeGenericDisplay(x,'ferris\\cabin.mdx'))
            .Spawns.addMod('tswow-tests',`ferris-cabin-spawn-${i}`,[SPAWN_POS],(x)=>x.Rotation.set({x:0,y:0,z:0,w:1}))
    }
}