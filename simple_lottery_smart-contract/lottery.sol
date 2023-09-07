// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;

contract lottery{
    address public manager;
    address payable [] public participants;

    constructor(){
        manager = msg.sender;
    }

    function buyTicket() external payable {
        require(msg.value >= 1e3 gwei);
        participants.push(payable(msg.sender));
    }

    function viewBal() public  view returns(uint) {
        require(msg.sender == manager);
        return address(this).balance;
    }

    function random() private view returns(uint){
        return uint(keccak256(abi.encodePacked(block.prevrandao,block.timestamp,participants.length)));
    }

    function findWinner() public {
        require(msg.sender == manager);
        require(participants.length>3);
        uint ran = random();
        ran = ran%participants.length;
        address payable winner = participants[ran];
        winner.transfer(viewBal());
        participants = new address payable [](0);
    }

}