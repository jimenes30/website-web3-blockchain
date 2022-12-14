const connectButton = document.querySelectorAll('.connect-button');

const userWalletAddress = document.querySelector('.user-wallet')

const userBNB = document.querySelector('.user-bnb')
const userChainId = document.querySelector('.user-chainid')
const userMainnetEthereum = document.querySelector('.user-mainnet-ethereum')

const fox = document.getElementById('logo-container')

for (var i = 0; i <= 1; i++) {
  connectButton[i].addEventListener('click',  async function connectWallet() {
    fox.classList.remove('hidden')
    try {
      if (typeof window.ethereum !== 'undefined') {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const account = accounts[0];
        userWalletAddress.innerHTML = ethereum.selectedAddress
        userChainId.innerHTML = ethereum.networkVersion
        userMainnetEthereum.innerHTML = ethereum.isConnected()
      }
      else {
        alert('Metamask is not installed')
      }
    } catch (e) {}
  });
}


