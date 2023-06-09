import { std } from "wow/wotlk";
import { BATTLEGROUND_MAP } from "./battleground-map";

// ============================================================================
//
// - Slime Creatures -
//
//   This file spawns a bunch of simple slime creatures into the battleground
//   map.
//
// ============================================================================

const SLIME_MODEL = 11137
std.CreatureTemplates
    .create('tswow-tests','battleground-slime')
    .Tags.addUnique('tswow-tests','battleground-slime')
    .Name.enGB.set('Slime')
    .FactionTemplate.NEUTRAL_HOSTILE.set()
    .Models.addIds(SLIME_MODEL)
    .Spawns.add('tswow-tests','slime-spawns',[
        {map:BATTLEGROUND_MAP.ID,x:13794.733398,y:13953.916992,z:27.363626,o:2.294934},
        {map:BATTLEGROUND_MAP.ID,x:13783.083984,y:13967.247070,z:23.227713,o:0.495586},
        {map:BATTLEGROUND_MAP.ID,x:13809.098633,y:13967.951172,z:18.291557,o:5.282587},
        {map:BATTLEGROUND_MAP.ID,x:13842.796875,y:13988.795898,z:13.882646,o:1.649336},
        {map:BATTLEGROUND_MAP.ID,x:13830.926758,y:14017.243164,z:10.331368,o:0.969966},
        {map:BATTLEGROUND_MAP.ID,x:13843.623047,y:14038.176758,z:8.250083,o:0.247400},
        {map:BATTLEGROUND_MAP.ID,x:13857.334961,y:14038.728516,z:6.358876,o:5.913262},
        {map:BATTLEGROUND_MAP.ID,x:13881.399414,y:14014.012695,z:-2.981784,o:5.090954},
        {map:BATTLEGROUND_MAP.ID,x:13889.150391,y:13995.582031,z:-1.620048,o:5.050899},
        {map:BATTLEGROUND_MAP.ID,x:13891.763672,y:13975.082031,z:-6.553061,o:5.682359},
        {map:BATTLEGROUND_MAP.ID,x:13924.350586,y:13943.585938,z:-2.478502,o:2.256202},
        {map:BATTLEGROUND_MAP.ID,x:13911.787109,y:13985.250000,z:-18.286871,o:2.358302},
        {map:BATTLEGROUND_MAP.ID,x:13849.592773,y:13969.076172,z:-19.756498,o:0.293490},

        {map:BATTLEGROUND_MAP.ID,x:13778.774414,y:13950.566406,z:26.986082,o:1.341463},
        {map:BATTLEGROUND_MAP.ID,x:13769.701172,y:13986.216797,z:24.924231,o:1.537812},
        {map:BATTLEGROUND_MAP.ID,x:13777.414063,y:14012.720703,z:27.456467,o:6.077413},
        {map:BATTLEGROUND_MAP.ID,x:13794.881836,y:14009.676758,z:29.613958,o:6.235278},
        {map:BATTLEGROUND_MAP.ID,x:13818.549805,y:14004.444336,z:34.413326,o:0.293741},

        {map:BATTLEGROUND_MAP.ID,x:13839.645508,y:14005.269531,z:38.488106,o:5.350919},
        {map:BATTLEGROUND_MAP.ID,x:13835.325195,y:13991.174805,z:43.339710,o:3.276681},
        {map:BATTLEGROUND_MAP.ID,x:13825.000000,y:14001.979492,z:48.331623,o:1.280984},
        {map:BATTLEGROUND_MAP.ID,x:13833.893555,y:14008.022461,z:51.645283,o:6.067985},
        {map:BATTLEGROUND_MAP.ID,x:13795.282227,y:13954.581055,z:14.092550,o:3.446332},
        {map:BATTLEGROUND_MAP.ID,x:13775.152344,y:13951.792969,z:12.211432,o:2.857283},
        {map:BATTLEGROUND_MAP.ID,x:13752.087891,y:13954.543945,z:8.078205,o:3.092902},
        {map:BATTLEGROUND_MAP.ID,x:13732.942383,y:13954.188477,z:5.521734,o:3.970192},
        {map:BATTLEGROUND_MAP.ID,x:13730.583984,y:13926.793945,z:0.257670,o:5.308511},
        {map:BATTLEGROUND_MAP.ID,x:13740.869141,y:13915.527344,z:-1.874987,o:6.126896},
        {map:BATTLEGROUND_MAP.ID,x:13755.065430,y:13913.290039,z:-5.729933,o:6.126896},
        {map:BATTLEGROUND_MAP.ID,x:13792.097656,y:13903.944336,z:1.832855,o:2.922471},
        {map:BATTLEGROUND_MAP.ID,x:13794.813477,y:13905.271484,z:-13.955686,o:3.542945},
        {map:BATTLEGROUND_MAP.ID,x:13778.087891,y:13896.944336,z:-18.299805,o:4.763454},
        {map:BATTLEGROUND_MAP.ID,x:13811.277344,y:13939.766602,z:-11.789277,o:0.168091},
        {map:BATTLEGROUND_MAP.ID,x:13838.759766,y:13929.500977,z:-16.815720,o:5.479741},
        {map:BATTLEGROUND_MAP.ID,x:13851.535156,y:13919.413086,z:-19.379198,o:6.264354},
        {map:BATTLEGROUND_MAP.ID,x:13877.745117,y:13924.904297,z:-18.548632,o:0.889874},
        {map:BATTLEGROUND_MAP.ID,x:13884.747070,y:13939.659180,z:-19.027737,o:1.205604},
        {map:BATTLEGROUND_MAP.ID,x:13908.291992,y:13961.625977,z:-1.471319,o:2.335797},

        {map:BATTLEGROUND_MAP.ID,x:13828.099609,y:13974.303711,z:16.880867,o:0.488520},
        {map:BATTLEGROUND_MAP.ID,x:13876.616211,y:14027.491211,z:-0.081598,o:5.048550},
        {map:BATTLEGROUND_MAP.ID,x:13907.731445,y:13962.301758,z:-19.428467,o:2.578479},
        {map:BATTLEGROUND_MAP.ID,x:13888.939453,y:13997.352539,z:-18.523989,o:4.919754},
        {map:BATTLEGROUND_MAP.ID,x:13778.961914,y:13868.768555,z:-23.254248,o:1.496197},
        {map:BATTLEGROUND_MAP.ID,x:13864.229492,y:13918.274414,z:-19.202396,o:0.455547},
        {map:BATTLEGROUND_MAP.ID,x:13875.500000,y:14027.371094,z:0.124636,o:5.088614},
        {map:BATTLEGROUND_MAP.ID,x:13838.498047,y:14000.287109,z:12.494838,o:1.918743},
    ])