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
        return "https://goerli.etherscan.io/tx/0x24693bb515cd2c987e3eb5dd9c2ed1f95f69ae57aaa0bf1e10fb8a67d755eba6";
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
        return "1";
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
        return true;
    }
}