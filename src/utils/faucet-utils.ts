import { createRequire } from 'node:module';
import { EthersUtils } from './index.js';

interface Networks {
    [network: string]: {
        chainId: number,
        tokens: {
            [token: string]: {
                amount: number,
                address?: string,
                isNativeToken?: boolean
            }
        },
        blockExplorer: string
    }
}

const require = createRequire(import.meta.url);
let Config = require('../../config/config.json');

const networks: Networks = Config.networks;

export class FaucetUtils {
    public static async getAddressFromId(
        id: string
    ): Promise<string | null> {
        // TODO: Connect to LW3 backend plz

        return "0x6864dC5998c25Db320D3370A53592E44a246FFf4"; // chiin.eth :)
    }

    public static async getAddressRequestAvailability(
        address: string,
        network: string,
        token: string
    ): Promise<boolean> {
        return true;
    }

    public static async sendTokens(
        address: string,
        network: string,
        token: string
    ): Promise<string> {
        let txHash: string;

        if (networks[network].tokens[token].isNativeToken) {
            txHash = await EthersUtils.sendNativeTokens(address, network, token);
        } else {
            txHash = await EthersUtils.sendTokens(address, network, token);
        }

        return `${networks[network].blockExplorer}${txHash}`
    }

    public static async hasBalance(
        network: string,
        token: string
    ): Promise<boolean> {
        return true;
    }

    public static getAmount(
        network: string,
        token: string
    ): string {
        return networks[network].tokens[token].amount.toString();
    }

    public static async nextRequest(
        address: string,
        network: string,
        token: string
    ): Promise<string> {
        return "2022-06-07 22:00";
    }

    public static isTokenSupported(
        network: string,
        token: string
    ): boolean {
        return networks[network].tokens[token] ? true : false;
    }
}