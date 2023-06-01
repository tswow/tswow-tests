let MAP_ID: uint32 = UTAG('tswow-tests','test-map')
let TELEPORTER_ID: uint32 = UTAG('tswow-tests','teleporter-creature')

const DESCRIPTION_MENU = 0;
const MAIN_MENU = 1;
const TELEPORT_BEGIN = 2;

export class TeleporterLocation {
    name: string;
    map: uint32;
    x: uint32;
    y: uint32;
    z: uint32;
    o: uint32;

    constructor(name: string, map: uint32, x: uint32, y: uint32, z: uint32, o: uint32) {
        this.name = name;
        this.map = map;
        this.x = x;
        this.y = y;
        this.z = z;
        this.o = o;
    }
}

export let TEST_ISLAND_LOCATIONS = CreateArray<TeleporterLocation>([
    new TeleporterLocation("Lobby",MAP_ID,14875.349609,14558.000977,74.683388,4.714717),
    new TeleporterLocation("NPC Demos",MAP_ID,14754.089844,14443.707031,55.174057,4.671839),
    new TeleporterLocation("Quest Demos",MAP_ID,14747.719727,14415.860352,53.722031,3.044494),
    new TeleporterLocation("GameObject Demos",MAP_ID,14752.205078,14382.826172,56.432423,4.792007),
    new TeleporterLocation("Elevator Demos",MAP_ID,13884.235352,14016.975586,52.229774,4.734667),
    new TeleporterLocation("Transport Demo #1",MAP_ID,15196.324219,15134.679688,44.714706,3.143453),
    new TeleporterLocation("Transport Demo #2",MAP_ID,15279.641602,14788.185547,45.364193,3.653962),
    new TeleporterLocation("Dungeon Demo",MAP_ID,14650.355469,14598.750977,59.188084,2.651793),
    //new TeleporterLocation("Raid Demo",MAP_ID,14972.610352,14468.019531,105.425201,5.353979),
    new TeleporterLocation("Fishing Demo",MAP_ID,14699.834961,14549.713867,48.128563,0.980053),
    new TeleporterLocation("Misc Demos",MAP_ID,14754.130859,14442.928711,75.871262,1.533679),
])

function SendMainMenu(creature: TSCreature, player: TSPlayer)
{
    player.GossipClearMenu();
    player.GossipMenuAddItem(GossipOptionIcon.CHAT,'What is this island?',0,DESCRIPTION_MENU)
    TEST_ISLAND_LOCATIONS
        .forEach((x,i)=>player.GossipMenuAddItem(GossipOptionIcon.TAXI,x.name,0,TELEPORT_BEGIN + i))
    for(let i = 0; i < 20; ++i)
    {
        player.GossipMenuAddItem(GossipOptionIcon.TAXI,`Idiot ${i}`,0,100+1)
    }
    player
        .GossipSendTextMenu(creature,'I can help teleport you around Test Island.')

}

export function RegisterTeleporterEvents(events: TSEvents) {
    events.Creature.OnGossipHello(TELEPORTER_ID,(creature,player,cancel)=>{
        cancel.set(true)
        SendMainMenu(creature,player);
    });

    events.Creature.OnGossipSelect(TELEPORTER_ID,(creature,player,_,selection,cancel)=>{
        console.log('The selection is ',selection)
        console.log('The teleport begin is ',TELEPORT_BEGIN)
        cancel.set(true);
        player.GossipClearMenu();
        if(selection == MAIN_MENU)
        {
            SendMainMenu(creature,player);
        }
        else if(selection == DESCRIPTION_MENU)
        {
            player.GossipMenuAddItem(GossipOptionIcon.CHAT,'Where can you take me?',0,MAIN_MENU);
            player.GossipSendTextMenu(creature,
                  'These islands are a testing area to illustrate various TSWoW scripts and\n'
                + 'conventions in practice.\n'
                + '\n'
                + 'Feel free to look around at various examples and see what currently works and not.'
                + '\n'
                + 'This island is a work in progress, and a lot of examples are a little barebones at the moment. You can find more code examples on our wiki and discord channels.\n'
            )
        }
        else
        {
            player.GossipComplete();
            if(selection < TEST_ISLAND_LOCATIONS.length) {
                let loc = TEST_ISLAND_LOCATIONS[selection - TELEPORT_BEGIN]
                player.Teleport(loc.map,loc.x,loc.y,loc.z+0.65,loc.o);
            }
        }
    })
}