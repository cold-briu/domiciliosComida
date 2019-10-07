

// document.querySelector('.card_form_btn').addEventListener("click", function (event) {
//     event.preventDefault()
//     console.log(event.srcElement.section.price.value)
//     console.log(event.srcElement.section.product.value)
// })

function handleSub(event) {
    event.preventDefault()
    var data = {
        price: event.target.price.value,
        product: event.target.product.value,
        id: event.target.itemId.value
    }

    var cart = localStorage.getItem('cart')

    if (!cart) {
        localStorage.setItem('cart', JSON.stringify([data]))
    } else {
        var cart = JSON.parse(cart)
        cart.push(data)
        localStorage.setItem('cart', JSON.stringify(cart))
    }
}