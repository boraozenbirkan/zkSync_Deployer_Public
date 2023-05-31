//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.17;

contract Greeter {
    string private greeting;

    constructor() {
        greeting = "1";
    }

    function greet() public view returns (string memory) {
        return greeting;
    }

    function setGreeting(string memory _greeting) public {
        greeting = _greeting;
    }
}
