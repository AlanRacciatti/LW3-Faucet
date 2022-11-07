import { ChatInputCommandInteraction, EmbedBuilder, PermissionsString } from 'discord.js';
import { Language } from '../../models/enum-helpers/index.js';
import { EventData } from '../../models/internal-models.js';
import { Lang } from '../../services/index.js';
import { InteractionUtils, FaucetUtils } from '../../utils/index.js';
import { Command, CommandDeferType } from '../index.js';

export class FaucetCommand implements Command {
    public names = [Lang.getRef('chatCommands.faucet', Language.Default)];
    public deferType = CommandDeferType.PUBLIC;
    public requireClientPerms: PermissionsString[] = [];
    public async execute(intr: ChatInputCommandInteraction, data: EventData): Promise<void> {

        let network = intr.options.getString(
            Lang.getRef('arguments.network', Language.Default)
        )

        let token = intr.options.getString(
            Lang.getRef('arguments.token', Language.Default)
        )

        let embed: EmbedBuilder;

        let { id } = intr.user;
        let address: string | null = await FaucetUtils.getAddressFromId(id);
        let canRequestTokens: boolean = await FaucetUtils.getAddressRequestAvailability(address, network, token);
        let isTokenSupported: boolean = await FaucetUtils.isTokenSupported(network, token);

        if (!isTokenSupported) {
            embed = Lang.getEmbed('faucetEmbeds.notSupported', data.lang, {
                network,
                token
            })
        } else {
            if (canRequestTokens) {
                let faucetHasBalance: boolean = await FaucetUtils.hasBalance(network, token)
                if (faucetHasBalance) {
                    let txLink = await FaucetUtils.sendTokens(address, network, token);
                    embed = Lang.getEmbed('faucetEmbeds.transaction', data.lang, {
                        network,
                        token,
                        amount: FaucetUtils.getAmount(network, token),
                        link: txLink,
                        address
                    });
                } else {
                    embed = Lang.getEmbed('faucetEmbeds.noBalance', data.lang, {
                        network,
                        token,
                    });
                }
            } else {
                embed = Lang.getEmbed('faucetEmbeds.notAllowed', data.lang, {
                    network,
                    token,
                    nextRequest: await FaucetUtils.nextRequest(address, network, token)
                })
            }
        }


        await InteractionUtils.send(intr, embed);
    }
}
