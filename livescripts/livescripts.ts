//import { RegisterBattlegroundEvents } from "./battleground/battleground";
import { RegisterAddonMessageEvents } from "./addon-messages/addon-messages-server";
import { RegisterBattlegroundEvents } from "./battleground/battleground";
import { RegisterCustomPacket } from "./custom-packets/custom-packet-server";
import { RegisterFunctionalEvents } from "./functional/functional-menu";
import { RegisterTaxiCheat } from "./misc/taxi-cheat";
import { RegisterMutexEvents } from "./multithreading/mutex-test";
import { RegisterArrayEvents } from "./orm/orm-demo-array";
import { RegisterEntryEvents } from "./orm/orm-demo-entry";
import { RegisterORMEntryMenu } from "./orm/orm-demo-menu";
import { RegisterSandboxEvents } from "./sandbox/sandbox";
import { RegisterSQLTests } from "./sql/sql-menu";
import { RegisterStressTests } from "./stress/stress";
import { RegisterSyntaxTestEvents } from "./syntax/SyntaxTests";
import { RegisterBasicTagEvents } from "./tags/tags-basic";
import { RegisterUniqueTagEvents } from "./tags/tags-unique";
import { RegisterTalentEvents } from "./talents/Talents";
import { RegisterTeleporterEvents } from "./teleporter/teleporter";

// This function is the main entrypoint for the livescript module.
// Here, we invoke all other registry functions and pass on the 'TSEvents' object.
export function Main(events: TSEvents) {
    RegisterCustomPacket(events);
    RegisterORMEntryMenu(events);
    RegisterEntryEvents(events);
    RegisterArrayEvents(events);
    RegisterSQLTests(events);
    RegisterBattlegroundEvents(events);
    RegisterBasicTagEvents(events);
    RegisterUniqueTagEvents(events);
    RegisterTeleporterEvents(events);
    RegisterAddonMessageEvents(events);
    RegisterFunctionalEvents(events);
    RegisterMutexEvents(events);
    RegisterSandboxEvents(events);
    RegisterStressTests(events);
    RegisterTalentEvents(events);
    RegisterSyntaxTestEvents(events);
    RegisterTaxiCheat(events);

    events.Vehicle.OnAddPassenger
}