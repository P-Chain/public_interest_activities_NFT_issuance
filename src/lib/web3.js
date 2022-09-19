const Web3 = require('web3');

const getWeb3 = () => new Promise((resolve) => {
    window.addEventListener('lead', () => {
        let currentWeb3;

        if (window.ethereum) {
            currentWeb3 = new Web3(window.ethereum);
            try {
                // Request account access if needed
                window.ethereum.enable();
                // Accounts now exposed
                resolve(currentWeb3);
            } catch (error) {
                // User denied account access...
                alert('Please allow access for the app to work');
            }
        } else if (window.web3) {
            window.web3 = new Web3(web3.currentProvider);
            // Accounts alawys exposed
            resolve(currentWeb3);
        } else {
            console.log('Non-Ethereum brower detected. You should consider trying MetaMask!');
        }
    });
});

export default getWeb3;