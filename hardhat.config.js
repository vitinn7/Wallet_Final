require("@nomicfoundation/hardhat-toolbox");


const HOLESKY_RPC_URL = "https://eth-holesky.g.alchemy.com/v2/IHBlT7EEssM029mpCmleAS6LPm1VRvPg";
const PRIVATE_KEY = "e89e80781406226db1235c0ef2db8cd13916f8637a879c72487d94b35c642ba4"; // Chave privada da conta deployer


/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    holesky: {
      url: HOLESKY_RPC_URL,
      accounts: [PRIVATE_KEY] // Inclua ambas as contas
    }
  }
};
