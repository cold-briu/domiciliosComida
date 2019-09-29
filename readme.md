# domiciliosComida
> api de domicilios de comida chatarra

# Instructivo:

## 1. Registar User: 

(puede ser cualquier user)

    type: post
    url: /api/users/register
    body json: 
    {        
        "nombre": "Erwin Rommel",
        "email": "myUser@domain.net",
        "password": "myPass"    
    }

## 2. Login:

debe ser misma data que user registrado, 

se puede verificar via GET: /api/users/read

    type: post
    url: /api/users/login
    body json: 
    {        
        "email": "myUser@domain.net",
        "password": "myPass"    
    }

## 3. Crear nuevo Pedido:
El email debe ser el mismo que se ha loggeado

    type: post
    url: /api/users/login
    body json: 
    {        
     	"userEmail": "myUser@domain.net",
	    "orderId":"ordernum1"   
    }

## 4. Cargar carrito:

se puede ver menu via GET: /api/menu/read

**orderId** debe ser la misma de la orden que se ha creado

se puede hacer cuantas veces sea deseado

se puede verificar via GET. /api/pedidos/read


    type: get
    url: /api/menu/add/:itemId/:orderId
    ejemplo: /api/menu/add/s1/ordernum1


## 5. Checkout, pay, proceed:

**orderId** debe ser la misma de la orden que se ha creado

se puede hacer cuantas veces sea deseado

se puede verificar via GET. /api/entregas/read

    type: post
    url: /api/pedidos/proceed/:orderId
    ejemplo:/api/pedidos/proceed/ordernum1
    body json: 
    {
	"deliveryId": "delivernum1",
	"driverId": "someDriverId666",
	"distanceLeft": 900,
	"userLocation":"some location string"
    }

## 6. Completar pedido:

se puede verificar via GET. /api/entregas/read

    type: get
    url: /api/entregas/complete/:deliveryId
    ejemplo: /api/entregas/complete/delivernum1







___



### apuntes previos, ignorar
crear domiciolios de comida


restaurante envía -> menú y opciones
restaurante recibe -> pedido
restaurante recibe factura ->
restaurante modifica -> libro contable
restaurante modifica -> inventario

user envía -> pedido, factura, ubicación
user recibe -> domicilioState
user recibe -> encuesta
user envía -> respuestaEncuesta

