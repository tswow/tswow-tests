// ============================================================================/
//
// - Addon Messages -
//
//   This module demonstrates how we can send addon message packets
//
// - External Scripts -
//
// ============================================================================

import { std } from "wow/wotlk";
import { TEST_MAP } from "../maps/map";

std.CreatureTemplates
    .create('tswow-tests','addon-messages')
    .Name.enGB.set('AddOn Messages')
    .Models.addDefaultBear()
    .Subname.enGB.set('addon-messages/addon-messages.ts')
    .NPCFlags.GOSSIP.set(true)
    .Tags.add('tswow-tests','addon-messages-npc')
    .Gossip.modNew(gossip=>{
        gossip.Text.add({enGB:
              `When talking to me, the game will attempt to communicate`
            + `If the system is configured correctly,`
            + ` you should see the following output in the game chat:\n\n`
            + `  [Server]: Sending addon message: "Hello from Server"\n`
            + `  [Client]: Received addon message: "Hello from Server"\n`
            + `  [Client]: Sending addon message: "Hello from Client"\n`
            + `  [Server]: Received addon message: "Hello from Client"\n`
        })
    })
    .Spawns.add('tswow-tests','addon-messages-spawn',[
        {map:TEST_MAP.ID,x:14768.715820,y:14448.298828,z:75.872345,o:3.306297},
    ])
    ;