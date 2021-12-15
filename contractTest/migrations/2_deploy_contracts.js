var Marketplace = artifacts.require("Marketplace");
var Shop = artifacts.require("Shop");
var Ownable = artifacts.require("Ownable");
var Safemath = artifacts.require("Safemath");

module.exports = async function(deployer, network, accounts) {
  deployer.deploy(Marketplace);
};

// module.exports = async function(deployer, network, accounts) {
//   deployer.deploy(Shop);
// };

// module.exports = async function(deployer, network, accounts) {
//   deployer.deploy(Ownable);
// };

// module.exports = async function(deployer, network, accounts) {
//   deployer.deploy(Safemath);
// };

