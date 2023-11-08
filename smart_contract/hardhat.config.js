require('dotenv').config();
require('@nomiclabs/hardhat-waffle');

const { ALCHEMY_API_URL, PRIVATE_KEY } = process.env;

if (!ALCHEMY_API_URL || !PRIVATE_KEY) {
  throw new Error("ALCHEMY_API_URL and PRIVATE_KEY must be provided in the .env file");
}

module.exports = {
  solidity: '0.8.0',
  networks: {
    sepolia: {
      url: ALCHEMY_API_URL,
      accounts: [PRIVATE_KEY].filter(Boolean),
    },
  },
};

