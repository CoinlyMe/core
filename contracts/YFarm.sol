pragma solidity 0.5.0 >= 0.8.0;

import "./CLY.sol";

contract YFarm {
    string public name = "Coinly Token Farm";
    CoinlyToken public coinlyToken;
    
    constructor(CLY _coinlyToken) public {
        coinlyToken = _coinlyToken
    }
}