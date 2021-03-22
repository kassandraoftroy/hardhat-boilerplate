module.exports = async (hre) => {
    if (hre.network.name === "mainnet") {
        console.log(`!!! Deploying ExampleToken to mainnet !!!. Hit ctrl + c to abort`);
        await new Promise(r => setTimeout(r, 30000));
    }
  
    const { deployments } = hre;
    const { deploy } = deployments;
    const { deployer } = await hre.getNamedAccounts();
  
    await deploy("ExampleToken", {
        from: deployer,
        args: [
            "Example Token Name",
            "SYBMOL",
        ],
        gasLimit: 3000000,
    });
};

module.exports.skip = async (hre) => {
const skip = hre.network.name === "mainnet";

return skip ? true : false;
};

module.exports.tags = ["ExampleToken"];