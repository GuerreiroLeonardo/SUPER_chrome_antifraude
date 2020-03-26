document.addEventListener('DOMContentLoaded', function() {

  var checkPageButton = document.getElementById('botao_01');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      alert("Botão 01");
    });
  }, false);

  var checkPageButton = document.getElementById('botao_02');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      alert("Botão 02");
    });
  }, false);

  var checkPageButton = document.getElementById('botao_03');
  checkPageButton.addEventListener('click', function() {

    chrome.tabs.getSelected(null, function(tab) {
      alert("Botão 03");
    });
  }, false);

}, false);