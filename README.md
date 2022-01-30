# Basic Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, a sample script that deploys that contract, and an example of a task implementation, which simply lists the available accounts.

## Setup
```bash
# Yep I'm aware its in the pack
nvm install --lts
npm init -y
```

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat verify YOUR_CONTRACT_ADDRESS --network rinkeby 
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/run.js
```

## Localnet
- npx hardhat run scripts/run.js

## Rinkeby Deployment
- npx hardhat run scripts/deploy.js --network rinkeby
