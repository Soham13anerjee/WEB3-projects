let ABC = artifacts.require("./ABC.sol");

module.exports = function (deployer) {
  deployer.deploy(ABC);
};
