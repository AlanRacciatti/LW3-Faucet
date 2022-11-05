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
    ) {
        return true;
    }

    public static async sendTokens(
        address: string,
        network: string,
        token: string
    ) {
        return "0x6864dC5998c25Db320D3370A53592E44a246FFf4";
    }
}