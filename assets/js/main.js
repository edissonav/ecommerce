const items = [
    {
      id: 1,
      name: 'Hoodies',
      price: 14.00,
      image: 'assets/images/featured1.png',
      category: 'hoodies',
      quantity: 10
    },
    {
      id: 2,
      name: 'Shirts',
      price: 24.00,
      image: 'assets/images/featured2.png',
      category: 'shirts',
      quantity: 15
    },
    {
      id: 3,
      name: 'Sweatshirts',
      price: 24.00,
      image: 'assets/images/featured3.png',
      category: 'shirts',
      quantity: 20
    }
  ]

  document.addEventListener("DOMContentLoaded", ()=>{
    console.log("domcargado");

  })

 const themeIcon = document.getElementById("moon-btn")

 themeIcon.addEventListener("click", ()=>{
  document.body.classList.toggle("dark")
  if (themeIcon.classList.contains("bx-moon")) {
    themeIcon.classList.replace("bx-moon", "bx-sun")
  } else{
    themeIcon.classList.replace("bx-sun","bx-moon")
  }
 })

 const loader= document.getElementById("loader")

 const loading = () => {
  setTimeout(()=>{
    loader.classList.add("hide")
  }, 2000)
 }
const cart= document.getElementById("cart-container")
const openCart = () => cart.classList.remove("hide")
const closeCart =() => cart.classList.add("hide")
const shoppingBag = document.getElementById("contenedor--cart")

const shopClosebag= document.getElementById("close-cart")



document.addEventListener("DOMContentLoaded", ()=>{
   loading()
   showProducts()
}
)

shoppingBag.addEventListener("click", ()=>{
  openCart()})
shopClosebag.addEventListener("click", ()=>{
  closeCart()
})



const showProducts =() => {
  const productContainer = document.getElementById("lista-productos")
      let fragment = ``;
      items.forEach(producto => {
        fragment += `<div class="producto-tarjeta" id="${producto.id}">
        <img src="./${producto.image}" alt="">
        <div class= "product-information">
        <span> $ ${producto.price}</span>
        <span> stock : ${producto.quantity} </span>
        <h3>${producto.name}</h3>
        </div>
        <button class="add">+</button>
      </div>`
      })

    
    productContainer.innerHTML= fragment

    cartFunctionality()
}


const cartFunctionality= ()=>{
  
  const btns= document.querySelectorAll(".add")
  const cart=[]
  btns.forEach(button=> {
    button.addEventListener("click", e => {
       const id= parseInt(e.target.parentElement.id);
       const selectedProduct= items.find(item => item.id === id)
       
       let index= cart.indexOf(selectedProduct)

       if(index !== -1){
        if(cart[index].quantity <= cart[index].cantidad){
          alert("No hay stock")
        }else{
          cart[index].cantidad++
        }
        
       }else{
        selectedProduct.cantidad=1
        cart.push(selectedProduct)
       }
       showProductsinCart(cart)
    })

   
  }

  )
 
 
}

const eliminardelcarrito= (prodId)=>{
  const item= cart.find((prod) => prod.id === prodId)
  const indice= cart.indexOf(item)
  cart.splice(indice, 1)

  showProductsinCart()
}


const showProductsinCart=(cart)=>{
 let total= 0
 let contador=0
 const  counterprincipal= document.querySelector(".counter-items")
 const counterinside= document.querySelector(".counter-items_inside")
  const carritoContainer = document.getElementById("cosas--carrito")
  const totalcompras= document.querySelector(".total")

 
 let fragmentodecod =``
  cart.forEach(producto => {
    fragmentodecod += `<div class="producto-dentro" id="${producto.id}">
    <img src="./${producto.image}" alt="">
    <div class= "product-information-inside">
    <h2>${producto.name}</h2>
    <span> $ ${producto.price}</span>
    <p> cantidad ${producto.cantidad}</p>
    <button onclick="eliminardelcarrito(${producto.id})" class="boton-eliminar" ><i class='bx bxs-trash bx-md'></i></button>
    </div>
  </div>`
    contador+= producto.cantidad
  total+= producto.cantidad * producto.price
  

})

carritoContainer.innerHTML = fragmentodecod
counterprincipal.innerText = contador

counterinside.innerHTML = `${contador} Items selected`
totalcompras.innerHTML = `your total is $ ${total}`
}




