## Smart contract details

#### Application structure

1. Manager -> lottery manager who deploys the smart contract on the testnet

2. Participants -> who buy ticket and pay ethers to the smart contract

** To Note :
* participants can buy ticket any number of times
* ticket buy possible only after thresold ether value
* get balance can only be accessed by manager
* participant array log to be removed once winner is declared, i.e. participants array must be re-assigned to empty array once winner is declared
* though here for randomised evaluation of winner participant, keccak256 is used. For real applications other better measures must be utilised
* Winner is declared only if there are more than 3 participants (imaginary case)

#### Deployment
1. while development, tested on remix IDE's virutal machines where we get multiple accounts with 100 free test Ethers in each account
2. at the end stage, deployed in Sepolia testnet where we created multiple accounts for testing purposes, and added test SepoliaEths from Sepolia faucet

[![Video](https://img.youtube.com/vi/aFI_XPll_mg/maxresdefault.jpg)](https://www.youtube.com/watch?v=aFI_XPll_mg)