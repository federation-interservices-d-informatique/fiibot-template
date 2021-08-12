import { CommandInteraction } from "discord.js";
import {
    fiiClient,
    Command
} from "@federation-interservices-d-informatique/fiibot-common";
export default class PingCommand extends Command {
    constructor(client: fiiClient) {
        super(client, {
            name: "ping",
            description: "Get bot ping"
        });
    }
    async run(inter: CommandInteraction): Promise<void> {
        inter.reply("Heeeello");
    }
}
