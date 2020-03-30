var classe = "paginator"
var testa = document.getElementsByClassName(classe)[0]

if(typeof testa === "undefined") {
  console.log("Página do super que não tem Pedidos")
  
  var supermercado = document.getElementsByClassName("field-market")[0].innerText
  supermercado = supermercado.replace("Mercado:", "")
  supermercado = supermercado.trim()

  var pedido =document.getElementsByClassName("field-order_number")[0].innerText
  pedido = pedido.replace("Número do pedido:", "")
  pedido = pedido.trim()

  var nome = document.getElementsByClassName("field-delivery_type")[0].innerText
  nome = nome.replace("Nome:", "")
  nome = nome.trim()

  var email = document.getElementsByClassName("field-delivery_type")[1].innerText
  email = email.replace("Email:", "")
  email = email.trim()
  
  var cpf = document.getElementsByClassName("field-delivery_type")[2].innerText
  cpf = cpf.replace("CPF:", "")
  cpf = cpf.replace("| checar cpf", "")
  cpf = cpf.trim()

  var numero = document.getElementsByClassName("field-delivery_type")[3].innerText
  numero = numero.replace("Telefone:", "")
  numero = numero.trim()
   
  var NumeroCartao = document.getElementsByClassName("payments__item")[0].getElementsByClassName("field-delivery_type")[2];
  NumeroCartao_txt = NumeroCartao.innerText
  NumeroCartao_txt = NumeroCartao_txt.replace("Status:", "")
  NumeroCartao_txt = NumeroCartao_txt.trim()
  
  var NomeCartao = document.getElementsByClassName("payments__item")[0].getElementsByClassName("field-delivery_type")[3];
  NomeCartao_txt = NomeCartao.innerText
  NomeCartao_txt = NomeCartao_txt.replace("Status:", "")
  NomeCartao_txt = NomeCartao_txt.trim()
  
  var ValorCompra = document.getElementsByClassName("payments__item")[0].getElementsByClassName("field-delivery_type")[5];
  ValorCompra_txt = ValorCompra.innerText
  ValorCompra_txt = ValorCompra_txt.replace("Valor:", "")
  ValorCompra_txt = ValorCompra_txt.trim()
  
  var coloca_info = document.getElementsByClassName("field-status")[0];
  var conteudo_html = coloca_info.innerHTML

  var conteudo_txt = coloca_info.innerText
  conteudo_txt = conteudo_txt.replace("PDV:", "")
  conteudo_txt = conteudo_txt.trim()
  
  var mensagem_wpp = "*@Ryann Cunha Avisar que terá que apresentar o cartão para verificação na entrega*" + "\n" + "\n" + 
                     nome + "\n" + 
                     numero + "\n" + 
                     pedido + "\n" + 
                     NumeroCartao_txt + "\n" + 
                     NomeCartao_txt + "\n" + "\n" + 
                     ValorCompra_txt + "\n" + "\n" + 
                     supermercado + "\n"

  mensagem_wpp = encodeURI(mensagem_wpp)
  
var numero_wpp =  "55" + "9191317347" // numero do ryann
numero_wpp = numero_wpp.replace("(", "")
numero_wpp = numero_wpp.replace(")", "")
numero_wpp = numero_wpp.replace(" ", "")
numero_wpp = numero_wpp.replace("-", "")

  link_wpp = "https://web.whatsapp.com/send?phone=" + numero_wpp + "&text=" + mensagem_wpp
  
  var conteudo_final = "<pre>" + 
                        supermercado + "\n" + 
                        "------" + "\n" +
                        nome + "\n" +
                        email + "\n" +
                        cpf + "\n" +
                        numero + "\n" +
                        "------" + "\n" +
                        NumeroCartao_txt + "\n" +
                        NomeCartao_txt + "\n" +
                        "------" + "\n" +
                        pedido + "\n" + 
                        ValorCompra_txt + "\n" +
                        "" + "\n" +
                        "------" + "\n" +
                        '<a href="' + link_wpp + '" target="_blank">Mandar mensagem pro Ryann</a>' + '\n' + 
                        "</pre>"


                        

  conteudo_final = conteudo_html.replace(conteudo_txt, conteudo_final)
  coloca_info.innerHTML = conteudo_final
    
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
    str_selecionada_fix = "Cancelados cliente"
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
