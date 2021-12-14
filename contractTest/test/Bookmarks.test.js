const Bookmarks = artifacts.require("Bookmarks");

contract("Bookmarks", accounts => {
  it("Basic write test", async function () {
    const instance = await Bookmarks.deployed();
    console.log("Test on contract: " + instance.address);

    const transaction = await instance.addBookmark("test_url", "test_name");
    console.log("transaction = " + JSON.stringify(transaction));
  });

  it("Basic read test", async function () {
    const instance = await Bookmarks.deployed();
    console.log("Test on contract: " + instance.address);

    const count = await instance.getBookmarksCount.call();
    console.log("The bookmark count = " + count.toNumber());
  });
});
