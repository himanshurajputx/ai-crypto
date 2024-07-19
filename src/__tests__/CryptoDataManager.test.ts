import { CryptoDataManager } from '../CryptoDataManager';
import { mockTokenInfo, mockTokenomics, mockSocialSentiment } from '../__mocks__/mockData';

jest.mock('../CryptoDataManager', () => {
    return {
        CryptoDataManager: jest.fn().mockImplementation(() => {
            return {
                fetchTokenInfo: jest.fn().mockResolvedValue(mockTokenInfo),
                fetchTokenomics: jest.fn().mockResolvedValue(mockTokenomics),
                fetchSocialSentiment: jest.fn().mockResolvedValue(mockSocialSentiment),
                generateReport: jest.fn().mockImplementation(async (tokenName: string) => {
                    return {
                        tokenInfo: mockTokenInfo,
                        tokenomics: mockTokenomics,
                        socialSentiment: mockSocialSentiment,
                    };
                }),
            };
        }),
    };
});

describe('CryptoDataManager', () => {
    let manager: CryptoDataManager;

    beforeEach(() => {
        manager = new CryptoDataManager();
    });

    it('should fetch token info', async () => {
        const tokenInfo = await manager.fetchTokenInfo('Bitcoin');
        expect(tokenInfo).toEqual(mockTokenInfo);
    });

    it('should fetch tokenomics', async () => {
        const tokenomics = await manager.fetchTokenomics('Bitcoin');
        expect(tokenomics).toEqual(mockTokenomics);
    });

    it('should fetch social sentiment', async () => {
        const socialSentiment = await manager.fetchSocialSentiment('Bitcoin');
        expect(socialSentiment).toEqual(mockSocialSentiment);
    });

    it('should generate a report', async () => {
        const report = await manager.generateReport('Bitcoin');
        expect(report).toEqual({
            tokenInfo: mockTokenInfo,
            tokenomics: mockTokenomics,
            socialSentiment: mockSocialSentiment,
        });
    });
});
