const getWeb3 = require('lib/web3/getWeb3');

// call function
getWeb3().then((result) => {
    this.web3 = result; // we instantiate our contract next
})

// needed an account for signing to a transaction 
this.web3.eth.getAccounts().then((accounts) => {
    this.account = accounts[0];
})

// contract instancify
const myContractInstance = new this.web3.eth.Contract(myContractAbi, myContractAddress);

//how to call call() function (which does not change contract statue)
this.myContractInstance.methods.myMethod(myParams)
.call()
.then(
    // do stuff with returned value
)

// how to call send() function (which does change contract statue)
this.myContractInstance.methods.myMethod(myParams)
.send({
    from: this.account, gasPrice: 0
})
.then (
    (receipt) => {
        //returns a transaction receipt
    }
)