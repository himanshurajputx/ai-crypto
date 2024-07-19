# Crypto Data Manager

## Description

This project fetches cryptocurrency data from multiple APIs, consolidates the data into a report, and prints the report.

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd ai-crypto
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

3. Run the script:
    ```sh
    npx ts-node src/index.ts
    ```

4. Run tests:
    ```sh
    npm test
    ```

## Interfaces

- `TokenInfo`: Represents basic token information.
- `Tokenomics`: Represents tokenomics data.
- `SocialSentiment`: Represents social sentiment data.
- `TokenReport`: Represents the consolidated report.

## Class Methods

- `fetchTokenInfo(tokenName: string): Promise<TokenInfo>`
- `fetchTokenomics(tokenName: string): Promise<Tokenomics>`
- `fetchSocialSentiment(tokenName: string): Promise<SocialSentiment>`
- `generateReport(tokenName: string): Promise<TokenReport>`

## Testing

- Unit tests cover individual methods.
- Integration tests verify the script functionality.

## Code Coverage Tools

- NPX is a package runner tool that comes with Node.js.