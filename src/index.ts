import { CryptoDataManager } from './CryptoDataManager';

async function main() {
    const manager = new CryptoDataManager();
    const tokenName = 'Bitcoin';
    const report = await manager.generateReport(tokenName);
    console.log(JSON.stringify(report, null, 2));
}

main().catch(console.error);
