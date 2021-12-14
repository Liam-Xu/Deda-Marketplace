//const artifacts = require("truffle-artifactor");
const Contract = require("truffle-contract");
const Bookmarks = require("../build/contracts/Bookmarks.json");

const myContract = Contract(Bookmarks);

const HDWalletProvider = require('truffle-hdwallet-provider');
const mnemonic = "boring whip real wise oak park dune display siege bundle pet foot";
const provider = new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/4bdff2710c8e44919249d8d2342b50ba`);

myContract.setProvider(provider);

async function test_contract() {
  const address = "0x0cd31B8C336D6Ba5a3D8Ffc5b852df4A39766842";
  const account = "0x79f20fb947144c8c6C2f8684340B05e40aeF3Ce7";
  const instance = await myContract.at(address);
  console.log("Test on contract: " + instance.address);

  const transaction = await instance.addBookmark("test_url", "test_name", {
  from: account});

  const hash = transaction.receipt.transactionHash;
  console.log(`Transaction Hash = ${hash}`);
  console.log(`Please check the details at URL: https://rinkeby.etherscan.io/tx/${hash}`);

  const count = await instance.getBookmarksCount.call({
  from: account});
  console.log("The bookmark count = " + count.toNumber());

  provider.engine.stop();
}
//const transHash = "0x521510a889e035eecb7db4f94278b9a31b5bd973c9f00ed65e98cee4b8632b38";

//Bookmarks.setProvider(provider);
//
test_contract();




