import { TokenInfo, Tokenomics, SocialSentiment } from '../interfaces';

export const mockTokenInfo: TokenInfo = {
    name: 'Bitcoin',
    price: 123.45,
    volume: 67890,
};

export const mockTokenomics: Tokenomics = {
    marketCap: 1000000,
    totalSupply: 500000,
    circulatingSupply: 300000,
};

export const mockSocialSentiment: SocialSentiment = {
    tweets: [
        { body: 'Token', username: 'Himanshu', date: new Date('2024-07-19').toString() },
        { body: 'Project!', username: 'Rohit', date: new Date('2024-07-19').toString() },
    ],
};
