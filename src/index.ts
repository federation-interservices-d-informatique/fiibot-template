import { FiiClient } from "@federation-interservices-d-informatique/fiibot-common";
import { GatewayIntentBits } from "discord.js";

new FiiClient(
    {
        intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent]
    },
    {
        managersSettings: {
            interactionsManagerSettings: {
                interactionsPaths: [],
                includeDefaultInteractions: true
            },
            eventsManagerSettings: {
                eventsPaths: []
            }
        },
        token: process.env.BOT_TOKEN
    }
);

