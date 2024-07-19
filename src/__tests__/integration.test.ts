import { exec } from 'child_process';
import { promisify } from 'util';
import { mockTokenInfo, mockTokenomics, mockSocialSentiment } from '../__mocks__/mockData';

const execAsync = promisify(exec);

describe('Integration Test', () => {
    it('should generate a report from the script', async () => {
        const { stdout } = await execAsync('ts-node src/index.ts');
        const report = JSON.parse(stdout);

        expect(report.tokenInfo).toEqual(mockTokenInfo);
        expect(report.tokenomics).toEqual(mockTokenomics);
        expect(report.socialSentiment).toEqual(mockSocialSentiment);
    });
});
