const evento = () => {
  if (window.ethereum) {
    document.querySelector('.botao').addEventListener('click', async () => {
      try {
        const accounts = await ethereum.request({method:'eth_requestAccounts'});
        account = accounts[0];
        document.querySelector('span').innerHTML = account;
      } catch(e) {}
  
    })
    
  } else {
    alert('Você não tem uma carteira crypto??')
  }
}
