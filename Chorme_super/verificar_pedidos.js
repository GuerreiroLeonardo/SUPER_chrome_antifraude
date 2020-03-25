
var classe = "paginator"
var checa = document.getElementsByClassName(classe)

if(checa != null){
  var pedidos = document.getElementsByClassName(classe)[0].innerHTML
  console.log(pedidos.trim())
  document.title = pedidos.trim()
}    