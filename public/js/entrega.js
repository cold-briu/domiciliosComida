var entrega_output = document.querySelector('#entrega_output')

var order_ready = localStorage.getItem('order_ready')
order_ready = JSON.parse(order_ready)
var myCart = order_ready.cart

for (let index = 0; index < myCart.length; index++) {
    var { price, product, id } = myCart[index]

    entrega_output.innerHTML += `<li> ${product} $${price} pesos</li>`
}