const Bookmarks = artifacts.require("Bookmarks");

module.exports = function(deployer) {
  deployer.deploy(Bookmarks);
};
