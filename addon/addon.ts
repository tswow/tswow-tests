import { InitializeAddonMessagesClient } from "./addon-messages-client";
import { InitializeCustomPacketClient } from "./custom-packet-client";
import { InitializeCustomPacketSharedClient } from "./custom-packet-shared-client";
import { InitializeCustomPacketTests } from "./custom-packet-tests";

InitializeCustomPacketClient();
InitializeCustomPacketSharedClient();
InitializeCustomPacketTests()
InitializeAddonMessagesClient();