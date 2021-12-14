const ethers = require('ethers');
const config = require('../ether_config.json');

// Import the json file from build to get the abi
const erc_json = require('../solc_build/ERC20.json'); //import the json of the contract which you want to interact
const address = config["ERC20"];
const abi = erc_json.abi;

const infuraProvider = new ethers.providers.InfuraProvider(config.network);
let wallet = ethers.Wallet.fromMnemonic(config.mnemonic);
wallet = wallet.connect(infuraProvider);
console.log(`Loaded wallet ${wallet.address}`);

erc20 = new ethers.Contract(address, abi, wallet);

(async () => {
    let tx = await erc20.functions.transfer(address, "1000000000000000000");
    let tx_hash = tx.hash;
    console.log(tx_hash);

})();

// document.getElementById("send").onsubmit = async function (e) {
//     e.preventDefault();
//     let address = document.getElementById("address").value;
//     document.getElementById("status").innerText = "Waiting for transaction to get published...";
//     let node = document.createElement("LI");
//     let link = document.createElement("A");
//     link.target = "_blank";
//     link.href = `https://${config["network"]}.etherscan.io/tx/` + tx_hash;
//     let textnode = document.createTextNode(tx_hash);
//     link.appendChild(textnode);
//     node.appendChild(link);
//     document.getElementById("transactions").appendChild(node);
//     document.getElementById("status").innerText = "Waiting for transaction to be mined...";
//     await tx.wait();
//     document.getElementById("status").innerText = "Transaction confirmed";
//     return false;
// };