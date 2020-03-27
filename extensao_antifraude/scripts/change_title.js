var classe = "paginator"
var testa = document.getElementsByClassName(classe)[0]

if(typeof testa === "undefined") {
  console.log("Página do super que não tem Pedidos")
} else {

  var str_pedidos = document.getElementsByClassName(classe)[0].innerHTML
  var num_pedidos = str_pedidos.trim()
  num_pedidos = num_pedidos.replace(" Pedidos", "")
  num_pedidos = num_pedidos.replace(" Pedido", "")
  
    if(num_pedidos == "0"){
      document.title = "_"
    } else {
      document.title = num_pedidos + " pedido(s)"
    }
  
}
