import { APIApplicationCommandBasicOption, ApplicationCommandOptionType } from 'discord.js';

import { FaucetNetworkOption, FaucetTokenOption, HelpOption, InfoOption } from '../enums/index.js';
import { Language } from '../models/enum-helpers/index.js';
import { Lang } from '../services/index.js';

export class Args {
    public static readonly HELP_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.option', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.option'),
        description: Lang.getRef('argDescs.helpOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('helpOptions.commands', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptions.commands'),
                value: HelpOption.COMMANDS,
            },
            {
                name: Lang.getRef('helpOptions.permissions', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptions.permissions'),
                value: HelpOption.PERMISSIONS,
            },
            {
                name: Lang.getRef('helpOptions.faq', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('helpOptions.faq'),
                value: HelpOption.FAQ,
            },
        ],
    };
    public static readonly INFO_OPTION: APIApplicationCommandBasicOption = {
        name: Lang.getRef('arguments.option', Language.Default),
        name_localizations: Lang.getRefLocalizationMap('arguments.option'),
        description: Lang.getRef('argDescs.helpOption', Language.Default),
        description_localizations: Lang.getRefLocalizationMap('argDescs.helpOption'),
        type: ApplicationCommandOptionType.String,
        choices: [
            {
                name: Lang.getRef('infoOptions.about', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.about'),
                value: InfoOption.ABOUT,
            },
            {
                name: Lang.getRef('infoOptions.translate', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.translate'),
                value: InfoOption.TRANSLATE,
            },
            {
                name: Lang.getRef('infoOptions.dev', Language.Default),
                name_localizations: Lang.getRefLocalizationMap('infoOptions.dev'),
                value: InfoOption.DEV,
            },
        ],
    };
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
