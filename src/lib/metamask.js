const optionDefinitions = [
    { name: "infuraFileToken", type: String},
    { name: "privateKey", type: String}
]

const commandLineArgs = require("command-line-args");
const options = commandLineArgs(optionDefinitions);

var Web3 = require("web3");
var Tx = require("ethereumjs-tx")
var infura_token = process.env.INFURA_TOKEN;
var private_key = process.env.MM_PRIVATE_KEY;
var node_host = `https://ropsten.infura.io/v3/${infura_token}`;

var web3 = new Web3(node_host); // 소문자 web3

const send_account = "0xF2050Aa76D860167e35D4b34CDB4Ccc841d215F6"; // sender account
const receive_account = "0x8A2fd42c47C41888FaA695cd3272Ca0B048a2eA7"; // receiver account

const privateKeyBuffer = Buffer.from(private_key, "hex");

web3.eth.getTransactionCount(send_account, (err, txCount) => { // (1)
    const txObject = {
        nonce: web3.utils.toHex(txCount),
        gasLimit: web3.utils.toHex(1000000),
        gasPrice: web3.utils.toHex(web3.utils.toWei("10", "gwei")),
        to: receive_account,
        value: "0x2C68AF0BB140000"
    };

    const tx = new Tx(txObject);
    tx.sign(privateKeyBuffer);

    const serializedTx = tx.serialize();
    const raw = "0x" + serializedTx.toString("hex");

    web3.eth
        .sendSignedTransaction(raw) // (2)
        .once("transactionHash", hash => {
            console.info("transactionHash", "https://ropsten.etherscan.io/tx/" + hash);
            // tx가 pending 되는 즉시 etherscan에서 tx 진행상태를 보여주는 링크를 제공해줍니다.
        })
        .once("receipt", receipt => {
            console.info("receipt", receipt); // 터미널에 receipt 출력
        })
        .on("error", console.error);
});