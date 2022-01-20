# HR-Blockchain
## Project Information:

Human Capital Management (HCM) system. Currently the system allows users to record and view their attendance. This is a work in progress and additional functionality will be implemented in near future.

## Technology Stack
- [React](https://reactjs.org/)
- [Solidity](https://github.com/ethereum/solidity)
- [Truffle](https://trufflesuite.com/)
- [Ganache](https://trufflesuite.com/ganache/)

## How to run the project
### Windows
1. Download and install the latest version of [node](https://nodejs.org/en/download/)
2. Download and install [truffle](https://trufflesuite.com/)
3. Download and install [Ganache](https://trufflesuite.com/ganache/)
4. Open Ganache > New Workplace (Ethereum) > Name your "Workspace Name" to your liking
5. Add a truffle project file located in root/client/src/blockchain/truffle-config.js and then run the local test net with ganache
6. Open google chrome and install [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en). This is an ethereum wallet. In MetaMask switch to any test network and get test Ethereum from a test faucet. I would recommend Rinkeby Test Network and use [faucet](https://faucet.rinkeby.io/) to get test Ethereum.
7. Navigate to root/client folder and run the following command in terminal:
`npm run start`
8. Open local address where npm starts the server and you are all set. Use Metamask wallet to interact with the system.
