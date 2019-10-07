var pedido_output = document.querySelector('#pedido_output')
var total_pedido_output = document.querySelector('#total_pedido_output')
var order_ready = localStorage.getItem('order_ready')
order_ready = JSON.parse(order_ready)
var myCart = order_ready.cart

for (let index = 0; index < myCart.length; index++) {
    var { price, product, id } = myCart[index]

    pedido_output.innerHTML += `<li> ${product} $${price} pesos</li>`
}
total_pedido_output.innerHTML = `Total: $${order_ready.total} pesos `


