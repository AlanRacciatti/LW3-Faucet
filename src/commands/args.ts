import { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from 'discord.js';

import { FaucetNetworkOption, FaucetTokenOption } from '../enums/index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export class Args {
    public static readonly FAUCET_NETWORK_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.network', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.network'),
        description: Lang.getRef('argDescs.network', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.network'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('faucetNetworkOptions.goerli', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetNetworkOptions.goerli'),
                value: FaucetNetworkOption.GOERLI,
            },
            {
                name: Lang.getRef('faucetNetworkOptions.mumbai', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetNetworkOptions.mumbai'),
                value: FaucetNetworkOption.MUMBAI,
            },
            {
                name: Lang.getRef('faucetNetworkOptions.alfajores', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetNetworkOptions.alfajores'),
                value: FaucetNetworkOption.ALFAJORES,
            },
        ],
    };
    public static readonly FAUCET_TOKEN_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.token', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.token'),
        description: Lang.getRef('argDescs.token', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.token'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('faucetTokenOptions.ether', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetTokenOptions.ether'),
                value: FaucetTokenOption.ETH,
            },
            {
                name: Lang.getRef('faucetTokenOptions.matic', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetTokenOptions.matic'),
                value: FaucetTokenOption.MATIC,
            },
            {
                name: Lang.getRef('faucetTokenOptions.celo', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetTokenOptions.celo'),
                value: FaucetTokenOption.CELO,
            },
            {
                name: Lang.getRef('faucetTokenOptions.link', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('faucetTokenOptions.link'),
                value: FaucetTokenOption.LINK,
            },
        ],
    };
}
