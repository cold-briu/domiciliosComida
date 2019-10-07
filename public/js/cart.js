var cart_output = document.querySelector('#cart_output')
var cart = localStorage.getItem('cart')

if (!cart) {
    cart_output.innerHTML = "No items yet"
} else {
    cart = JSON.parse(cart)
    cart_output.innerHTML = ""
    var total = 0
    for (let index = 0; index < cart.length; index++) {
        var { price, product, id } = cart[index]

        total += parseInt(price)
        cart_output.innerHTML += `item ${product} $${price} with id ${id} <br/>`
    }
    cart_output.innerHTML += `total ${total}`
}

document.querySelector('#pagar_btn').addEventListener('click', function () {
    localStorage.setItem('total_fee', total)
    localStorage.setItem('order_ready', JSON.stringify({ cart, total }))
})