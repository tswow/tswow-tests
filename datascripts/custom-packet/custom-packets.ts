import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

// ============================================================================/
//
// - Custom Packets -
//
//   This module demonstrates how we can send custom network packets
//   with the tswow client extensions library.
//
// - External Scripts -
//   Livescripts: livescripts/custom-packets/custom-packet-server.ts
//   Addon: addon/custom-packet-client.ts
// ============================================================================

std.CreatureTemplates.create('tswow-tests','custom-packets')
    .Name.enGB.set('Custom Packets')
    .Models.addDefaultBear()
    .Subname.enGB.set('custom-packets/custom-packets.ts')
    .NPCFlags.GOSSIP.set(true)
    .Tags.add('tswow-tests','custom-packet-npc')
    .Gossip.modNew(gossip=>{
        gossip.Text.add({enGB:
              `When talking to me, the game will attempt to communicate`
            + ` using custom packets. For custom packets to work,`
            + ` you must enable client extensions in the dataset config file.`
            + ` By default, it is explicitly disabled.\n\n`
            + `If the system is configured correctly,`
            + ` you should see the following output in the game chat:\n\n`
            + `  [Server]: Sending custom packet\n`
            + `  [Client]: Received custom packet\n`
            + `  [Client]: UInt32: 1007688\n`
            + `  [Client]: String: Hello from LiveScript!\n`
            + `  [Client]: Sending custom packet\n`
            + `  [Server]: Received custom packet\n`
            + `  [Server]: UInt32: 8867001\n`
            + `  [Server]: String: Hello from AddOn`
        })
    })
    .Spawns.add('tswow-tests','custom-packets-spawn',[
        {map:TEST_MAP.ID,x:14765.576172,y:14452.612305,z:75.872795,o:3.919015},
    ])
    ;