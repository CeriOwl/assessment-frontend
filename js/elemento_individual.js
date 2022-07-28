const button = document.getElementById("display-menu-mobile")
button.addEventListener("click", () => {
    const navbar = document.getElementById("nav-bar-visible")
    navbar.classList.toggle("nav-bar-visible")
})

const button_searching = document.getElementById("button-search")
button_searching.addEventListener("click", () =>{
    const input_search = document.getElementById("input_search")
    if(input_search.className == "input-appear"){
        input_search.className = "input-disappear"
    }else{
        input_search.className = "input-appear"
    }
})

function getData(){
    const route = "https://fakestoreapi.com/products/1"
    fetch(`${route}`)
    .then(res => res.json())
    .then(data => {
        printDataDOM(data)
    })
}

function printDataDOM(data){
    console.log(data)
    const item_name = document.getElementById("item-name")
    item_name.innerHTML = `${data.title}`
    const description = document.getElementById("description")
    description.innerHTML = `${data.description}`
    const price = document.getElementById("price")
    price.innerHTML = `Precio: $${data.price}`
    const img = document.getElementById("img-individual-product")
    img.src = `${data.image}`
}

getData()