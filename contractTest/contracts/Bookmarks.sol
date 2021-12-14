pragma solidity >= 0.5.0;

contract Bookmarks {
    address public owner;
    Entry[100] public entries;
    uint count;

    struct Entry {
        string url;
        string name;
    }

    constructor() public {
        owner = msg.sender;
    }

    modifier restricted() {
        require(
            msg.sender == owner,
            "Only owner can call this."
        );
        _;
    }

    function getBookmarksCount() public view restricted returns (uint) {
        return count;
    }

    function getBookmarkAt(uint index) public view restricted returns (string memory, string memory) {
        return (entries[index].url, entries[index].name);
    }

    function addBookmark(string memory _url, string memory _name) restricted public {
        entries[count] = Entry(_url, _name);
        count++;
    }

    function setBookmark(uint index, string memory _url, string memory _name) restricted public {
        require(index < count, "index must exist");
        entries[index] = Entry(_url, _name);
    }

    function removeBookmark(uint index) restricted public {
        require(index < count, "index must exist");
        entries[index] = Entry("", "");
        count--;
    }
}
