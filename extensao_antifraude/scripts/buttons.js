
document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('botao_01');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      var numero = prompt("Digite o telefone celular", "");
        if (numero != null) {
          numero = "55" + numero
          numero = numero.replace("(", "")
          numero = numero.replace(")", "")
          numero = numero.replace(" ", "")
          numero = numero.replace("-", "")
          window.open("https://web.whatsapp.com/send?phone=" + numero + "&text=Ol%C3%A1%2C%20cliente%20Super!%20Para%20garantir%20a%20seguran%C3%A7a%20dos%20nossos%20clientes%2C%20fazemos%20uma%20an%C3%A1lise%20antifraude%20em%20todas%20aqueles%20que%20est%C3%A3o%20fazendo%20sua%20primeira%20compra.%20Nossa%20an%C3%A1lise%20identificou%20que%20precisamos%20confirmar%20com%20voc%C3%AA%20algumas%20informa%C3%A7%C3%B5es.%20Desde%20j%C3%A1%20pe%C3%A7o%20desculpas%20em%20nome%20do%20Super%20pelo%20incomodo%20que%20por%20ventura%20esse%20processo%20possa%20lhe%20gerar.%0A.%0AVoc%C3%AA%20poderia%20nos%20confirmar%3A%0ANome%20da%20m%C3%A3e%3A%0ASua%20data%20de%20nascimento%3A"); 
        }
    });
  }, false);

  var checkPageButton = document.getElementById('botao_02');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      // DADOS DO PEDIDO NO PAINEL
      console.log("Obter dados no painel")
      alert("teste")
    });
  }, false);

  var checkPageButton = document.getElementById('botao_03');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      // DADOS NO BIGBOOST
      console.log("Obter dados no bigboost")
    });
  }, false);

}, false);