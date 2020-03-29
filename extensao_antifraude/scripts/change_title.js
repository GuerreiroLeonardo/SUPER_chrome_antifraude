var classe = "paginator"
var testa = document.getElementsByClassName(classe)[0]

if(typeof testa === "undefined") {
  console.log("Página do super que não tem Pedidos")
} else {
  
  var str_selecionada = document.getElementsByClassName("selected")[0].innerText

  if (str_selecionada == "Todos"){
    str_selecionada_fix = "Todos"
  } else if (str_selecionada == "Pagamento em análise") {
    str_selecionada_fix = "Análises"
  } else if (str_selecionada == "Pagamento autorizado") {
    str_selecionada_fix = "Autorizados"
  } else if (str_selecionada == "Pedido aceito") {
    str_selecionada_fix = "Aceitos"
  } else if (str_selecionada == "Em separação") {
    str_selecionada_fix = "Em separação"
  } else if (str_selecionada == "Pedido separado") {
    str_selecionada_fix = "Separados"
  } else if (str_selecionada == "Pedido recebido pelo entregador") {
    str_selecionada_fix = "Recebidos entregador"
  } else if (str_selecionada == "Pronto para retirada") {
    str_selecionada_fix = "Pronto p/ retirada"
  } else if (str_selecionada == "Pronto para entrega") {
    str_selecionada_fix = "Pronto p/ ntrega"
  } else if (str_selecionada == "Saiu para entrega") {
    str_selecionada_fix = "Saiu p/ entrega"
  } else if (str_selecionada == "Entregue") {
    str_selecionada_fix = "Entregues"
  } else if (str_selecionada == "Não Entregue") {
    str_selecionada_fix = "Não entregues"
  } else if (str_selecionada == "Cancelado pelo Cliente") {
    str_selecionada_fix = "Cancelados cli"
  } else if (str_selecionada == "Cancelado") {
    str_selecionada_fix = "Cancelados"
  } else if (str_selecionada == "Pedido de entrega aceito pelo entregador") {
    str_selecionada_fix = "Aceitos para entrega"
  } else if (str_selecionada == "Pagamento finalizado") {
    str_selecionada_fix = "Pagamento finalizado"
  } else {
    str_selecionada_fix = str_selecionada
  }
 
  var str_pedidos = document.getElementsByClassName(classe)[0].innerText // innerHTML
  var num_pedidos = str_pedidos.trim()
  num_pedidos = num_pedidos.replace(" Pedidos", "")
  num_pedidos = num_pedidos.replace(" Pedido", "")
  
  var n = num_pedidos.search("...");

    if(num_pedidos == "0"){
      document.title = "_" + " " + str_selecionada_fix
    } else {
      if (n == -1) {
        document.title = num_pedidos + " " + str_selecionada_fix
      } else {
        document.title = "#" + " " + str_selecionada_fix
      }
        
    }
  
}
