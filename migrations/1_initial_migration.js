const NFT = artifacts.require("DigitalaxGenesisNFT");
const Staking = artifacts.require("DigitalaxGenesisStaking");

module.exports = async function (deployer) {
  await deployer.deploy(NFT,"0x9A162d24D7e3BF601a412F1a8eAf9D7D892a4742","0x9A162d24D7e3BF601a412F1a8eAf9D7D892a4742","1649167559","1649253959","https://ipfs.io/ipfs/ruban");
  await deployer.deploy(Staking);
};
