// 检查新版MetaMask
if (window.ethereum) {
  App.web3Provider = window.ethereum;
  try {
    // 请求用户账号授权
    await window.ethereum.enable();
  } catch (error) {
    // 用户拒绝了访问
    console.error("User denied account access")
  }
}
// 老版 MetaMask
else if (window.web3) {
  App.web3Provider = window.web3.currentProvider;
}
// 如果没有注入的web3实例，回退到使用 Ganache
else {
  App.web3Provider = new Web3.providers.HttpProvider('http://127.0.0.1:8545');
}
web3 = new Web3(App.web3Provider);

$.getJSON('Marketplace.json', function(data) {
  // Get the necessary contract artifact file and instantiate it with @truffle/contract
  var MarketplaceArtifact = data;
  App.contracts.Marketplace = TruffleContract(MarketplaceArtifact);

  // Set the provider for our contract
  App.contracts.Marketplace.setProvider(App.web3Provider);

  // Use our contract to retrieve and mark the adopted pets
  return App.markAdopted();
});

// ----------------------------------------------------------------
var marketplaceInstance;

App.contracts.Marketplace.deployed().then(function(instance) {
  marketplaceInstance = instance;
  return marketplaceInstance.getAdopters.call();
}).then(function(adopters) {
  for (i = 0; i < adopters.length; i++) {
    if (adopters[i] !== '0x0000000000000000000000000000000000000000') {
      $('.panel-pet').eq(i).find('button').text('Success').attr('disabled', true);
    }
  }
}).catch(function(err) {
  console.log(err.message);
});

var adoptionInstance;

web3.eth.getAccounts(function(error, accounts) {
  if (error) {
    console.log(error);
  }

  var account = accounts[0];

  App.contracts.Adoption.deployed().then(function(instance) {
    adoptionInstance = instance;

    // Execute adopt as a transaction by sending account
    return adoptionInstance.adopt(petId, {from: account});
  }).then(function(result) {
    return App.markAdopted();
  }).catch(function(err) {
    console.log(err.message);
  });
});