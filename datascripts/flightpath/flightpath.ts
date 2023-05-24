import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ======================================================================================
//
// - Flightpaths -
//
//   This file creates three flightpath nodes and connects them all
//   with three different methods:
//
//     - createBi: Creates a new flightpath between two new nodes
//
//     - createBiFromNode: Creates a new flightpath between an existing and a new node.
//
//     - createBiBetweenNodes: Creates a new flightpath between two existing nodes.
//
// ======================================================================================

// Create a path between two new nodes
export const DEMO_HOUSE_HARBOR_PATH =
    std.Taxi.createBi('tswow-tests','demo-house-harbor-path','FLIGHTPATH',0,0,[
        {map:TEST_MAP.ID,x:14754.088867,y:14466.687500,z:75.858185,o:1.383053},
        {map:TEST_MAP.ID,x:14765.671875,y:14539.170898,z:128.565979,o:1.343783},
        {map:TEST_MAP.ID,x:15010.119141,y:14675.394531,z:125.146080,o:0.447643},
        {map:TEST_MAP.ID,x:15148.883789,y:14724.763672,z:69.158730,o:0.337688},
        {map:TEST_MAP.ID,x:15286.862305,y:14785.335938,z:45.060734,o:5.238569},
    ])
    .StartName.enGB.set('Demo House')
    .EndName.enGB.set('Test Harbor')

// Create a path between one existing and one new node
export const DEMO_HOUSE_TOWER_PATH =
    std.Taxi.createBiFromNode(
          'tswow-tests'
        , 'demo-house-tower-path'
        , 'FLIGHTPATH'
        , DEMO_HOUSE_HARBOR_PATH.StartNode.get().ID
        , 0
        , 0
        , [
            {map:TEST_MAP.ID,x:14771.642578,y:14521.688477,z:118.811844,o:0.736665},
            {map:TEST_MAP.ID,x:14883.742188,y:14676.207031,z:145.148621,o:1.245603},
            {map:TEST_MAP.ID,x:14820.496094,y:14848.414062,z:145.828964,o:1.594265},
            {map:TEST_MAP.ID,x:14819.685547,y:14887.973633,z:129.942413,o:1.690924},
        ]
        , true
    )

// Create a path between two existing nodes
export const TOWER_HARBOR_PATH =
    std.Taxi.createBiBetweenNodes(
          'tswow-tests'
        , 'tower-harbor-path'
        , DEMO_HOUSE_TOWER_PATH.EndNode.get().ID
        , DEMO_HOUSE_HARBOR_PATH.EndNode.get().ID
        , 0
        , [
            {map:TEST_MAP.ID,x:14822.804688,y:14845.857422,z:148.784485,o:4.818852},
            {map:TEST_MAP.ID,x:14925.214844,y:14761.749023,z:128.216293,o:6.172879},
            {map:TEST_MAP.ID,x:15193.566406,y:14769.645508,z:63.282257,o:0.127669},
        ]
        , true
        )

// Place a flightmaster at each endpoint
std.CreatureTemplates
    .create('tswow-tests','flightmaster')
    .Name.enGB.set('Test Flightmaster')
    .Models.addDefaultBear()
    .NPCFlags.FLIGHT_MASTER.set(true)
    .NPCFlags.GOSSIP.set(true)
    .Gossip.modNew(gossip=>{
        gossip.Text.add({enGB:'Haha'})
    })
    .Spawns.add('tswow-tests','flightmaster-test-spawns',
        [
            {map:TEST_MAP.ID,x:14819.270508,y:14891.397461,z:130.021301,o:4.681722},
            {map:TEST_MAP.ID,x:14754.532227,y:14469.682617,z:75.853745,o:4.636951},
            {map:TEST_MAP.ID,x:15289.393555,y:14781.000977,z:45.061455,o:2.038847},
        ]
    )