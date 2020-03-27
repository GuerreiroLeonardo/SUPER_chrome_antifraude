document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('botao_01');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      var numero = prompt("Digite o número da pessoa", "5591");
        if (numero != null) {
          window.open("https://web.whatsapp.com/send?phone=" + numero); 
        }
    });
  }, false);

  var checkPageButton = document.getElementById('botao_02');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      // teste
      alert("TESTA");
    });
  }, false);

  var checkPageButton = document.getElementById('botao_03');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      // teste
    });
  }, false);

}, false);