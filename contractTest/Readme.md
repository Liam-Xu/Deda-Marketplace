# Truffle-Rinkeby

This project demonstrates how to deploy a smart contract to [Rinkeby testnet](https://www.rinkeby.io/#stats), and how to interacts with the deployed contracts.

This project use [Truffle suits](https://www.trufflesuite.com/) to develop and deploy the smart contracts.

## Configuration

This project demonstrates how to operate on Ethereum public networks. All the configuration can be found in file *truffle-config.js*. In the test, we creates an [Infura](https://infura.io/) account as a web3 provider (the access point of the Ethereum networks) so that we don't need to setup a geth node by ourselves. Once we get an Ethereum account, we can topup some testing eth from [Faucet](https://faucet.rinkeby.io/) for our test.

If we deploy the private ethereum network, then we need add relevant configuration section to *truffle-configi.js*. 

## Install

npm install

## Recommend node & nvm version

node: v8.12.0
nvm: 6.4.1

## Deploy smart contract

```shell
truffle migrate --network infura_rinkeby
```

The output:

```

Compiling your contracts...
===========================
> Compiling ./contracts/Bookmarks.sol
> Compiling ./contracts/Migrations.sol
> Compiling ./contracts/erc20.sol
> Artifacts written to /Users/Lin/workspace/truffle_rinkeby/build/contracts
> Compiled successfully using:
   - solc: 0.5.0+commit.1d4f565a.Emscripten.clang


Starting migrations...
======================
> Network name:    'infura_rinkeby'
> Network id:      4
> Block gas limit: 10000889


1_initial_migration.js
======================

   Deploying 'Migrations'
   ----------------------
   > transaction hash:    0x2b575ee0b488704d335689c6cee98572a1c246b48ecb930f6dd8fc5d520e26ba
   > Blocks: 2            Seconds: 26
   > contract address:    0x246FcF9F767AC6889529e202DFf7b53633f8DAE5
   > account:             0x79f20fb947144c8c6C2f8684340B05e40aeF3Ce7
   > balance:             36.92605494
   > gas used:            244636
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.00489272 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:          0.00489272 ETH


2_bookmarks_migration.js
========================

   Deploying 'Bookmarks'
   ---------------------
   > transaction hash:    0x05a434ec98931323f6fc4dca1fb82cdaedb046fcd2858ab149f1003f2d4815c9
   > Blocks: 1            Seconds: 22
   > contract address:    0xabAdDbC307DF23626BCe94d00c22897288a2Fe45
   > account:             0x79f20fb947144c8c6C2f8684340B05e40aeF3Ce7
   > balance:             36.90568466
   > gas used:            976140
   > gas price:           20 gwei
   > value sent:          0 ETH
   > total cost:          0.0195228 ETH


   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0195228 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.02441552 ETH
```

We can see there are two contracts deployed in total, **Migrations** and **Bookmarks**. Contract **Migrations** is used to maintain the contracts deployed by truffle toolkit, and can be omitted here. Contract **Bookmarks** is the sample contract and could be extended per our requirement.

## Re-deploy the modified contract

The contract is immutable once it is deployed, say we have no way to change it. So we need to redeploy.

```
 truffle migrate --reset --compile-all --network infura_rinkeby
```



## Interact with deployed contract

```shell
truffle test
```

And the output:

```
Using network 'test'.


Compiling your contracts...
===========================
> Everything is up to date, there is nothing to compile.



  Contract: Bookmarks
Test on contract: 0x345cA3e014Aaf5dcA488057592ee47305D9B3e10
transaction = {"tx":"0xbc04f704e87cd7e99d2f65a34295357fb50bc8b427052e490656739c6e043c95","receipt":{"transactionHash":"0xbc04f704e87cd7e99d2f65a34295357fb50bc8b427052e490656739c6e043c95","transactionIndex":0,"blockHash":"0xe6c7a5a2789b61626fefb0a677ded9398cb5387fe34ca91a35abebfa77ad0445","blockNumber":5,"from":"0x627306090abab3a6e1400e9345bc60c78a8bef57","to":"0x345ca3e014aaf5dca488057592ee47305d9b3e10","gasUsed":86298,"cumulativeGasUsed":86298,"contractAddress":null,"logs":[],"status":true,"logsBloom":"0x00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000","v":"0x1c","r":"0x09c012303ca4432f462df78d86f947f8f8633ddf1cc42df8acc01c36dee255a9","s":"0x7dd63e0ffc3125516cb5ff8cfc99e3e37d52548aa472ed27b27707fcd9febde6","rawLogs":[]},"logs":[]}
    ✓ Basic write test (77ms)
Test on contract: 0x345cA3e014Aaf5dcA488057592ee47305D9B3e10
The bookmark count = 1
    ✓ Basic read test


  2 passing (121ms)
```

There are two tests, the first one write a record to the smart contract and the second one read the changed state from the contract.

