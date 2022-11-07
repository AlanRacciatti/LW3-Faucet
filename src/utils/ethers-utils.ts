import { createRequire } from 'node:module';
import { ethers, providers, Wallet } from 'ethers';
import { FaucetNetworkOption } from '../enums/faucet-option.js';
import { CeloProvider, CeloWallet } from '@celo-tools/celo-ethers-wrapper';

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
        blockExplorer: string,
        nodeUri: string
    }
}

const require = createRequire(import.meta.url);
let Config = require('../../config/config.json');

const networks: Networks = Config.networks;
const privateKey = Config.privateKey;

export class EthersUtils {
    public static async sendNativeTokens(
        address: string,
        network: string,
        token: string
    ): Promise<string> {
        if (network === FaucetNetworkOption.ALFAJORES) {
            const provider = new CeloProvider(networks[network].nodeUri);
            await provider.ready;
            const signer: CeloWallet = new CeloWallet(privateKey, provider);

            const tx: providers.TransactionResponse = await signer.sendTransaction({
                to: address,
                value: ethers.utils.parseEther(networks[network].tokens[token].amount.toString())
            })

            return tx.hash;
        } else {
            const provider: providers.StaticJsonRpcProvider = new ethers.providers.StaticJsonRpcProvider(networks[network].nodeUri, networks[network].chainId);
            const signer: Wallet = new ethers.Wallet(privateKey, provider);

            const tx: providers.TransactionResponse = await signer.sendTransaction({
                to: address,
                value: ethers.utils.parseEther(networks[network].tokens[token].amount.toString())
            })

            return tx.hash;
        }
    }

    public static async sendTokens(
        address: string,
        network: string,
        token: string
    ): Promise<string> {
        return "0x24693bb515cd2c987e3eb5dd9c2ed1f95f69ae57aaa0bf1e10fb8a67d755eba6";
    }
}