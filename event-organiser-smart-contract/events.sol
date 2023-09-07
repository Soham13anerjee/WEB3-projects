// SPDX-License-Identifier: MIT
pragma solidity >=0.5.0 <0.9.0;


contract event_smart_contract{
    struct Event{
        address organizer;
        string name;
        uint date;
        uint price;
        uint ticketvol;
        uint ticketremain;
    }

    mapping(uint=>Event) public events;
    mapping(address=>mapping(uint=>uint)) public tickets;
    uint eventid=0;

    function addEvent(string memory _name,uint _date, uint _price, uint _ticketvol) external {
        require(block.timestamp<_date,"You can organize event for future date only");
        require(_ticketvol>0,"ticket volume cannot be zero or less for an event");
        Event memory new_event = Event(msg.sender,_name,_date,_price,_ticketvol,_ticketvol);
        events[eventid]=new_event;
        eventid++;
    }

    function buyTicket(uint id, uint vol) external payable{
        require(id<=eventid,"Event does not exist");
        require(events[id].date>block.timestamp,"Event has already occured");
        require(vol<=events[id].ticketremain,"Enough tickets not there");
        require(msg.value>=events[id].price*vol,"Insufficient Ethers");
        tickets[msg.sender][id]+=vol;
        events[id].ticketremain-=vol;
    }

    function freeGiftTickets(address dest, uint id, uint vol) external{
        require(id<=eventid,"Event does not exist");
        require(block.timestamp<events[id].date,"Event ended already");
        require(vol<=events[id].ticketremain,"Enough tickets not there");
        tickets[msg.sender][id]-=vol;
        tickets[dest][id]+=vol;        
    }
}