import { ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';

import { FaucetNetworkOption } from '../../enums/index.js';
import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils } from '../../utils/index.js';
import { FaucetUtils } from '../../utils/faucet-utils.js';
import { Command, CommandDeferType } from '../index.js';

export class FaucetCommand implements Command {
    public names = [Lang.getRef('chatCommands.faucet', Language.Default)];
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];
    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {
        let args = {
            network: intr.options.getString(
                Lang.getRef('arguments.network', Language.Default)
            ),
            token: intr.options.getString(
                Lang.getRef('arguments.token', Language.Default)
            ),
        };

        let { id } = intr.user
        let address: string | null = await FaucetUtils.getAddressFromId(id)

        let embed: EmbedBuilder;
        switch (args.network) {
            case FaucetNetworkOption.GOERLI: {
                embed = Lang.getEmbed('displayEmbeds.commands', data.lang);
                break;
            }
            case FaucetNetworkOption.MUMBAI: {
                embed = Lang.getEmbed('displayEmbeds.permissions', data.lang);
                break;
            }
            case FaucetNetworkOption.ALFAJORES: {
                embed = Lang.getEmbed('displayEmbeds.faq', data.lang);
                break;
            }
            default: {
                return;
            }
        }

        await InteractionUtils.send(intr, embed);
    }
}
