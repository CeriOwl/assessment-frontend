const button = document.getElementById("display-menu-mobile")
button.addEventListener("click", () => {
    const navbar = document.getElementById("nav-bar-visible")
    navbar.classList.toggle("nav-bar-visible")
})

function generate_data(){
    const route = "https://fakestoreapi.com/products?limit=20"
    const container_first_10 = document.getElementById("first-10")
    const container_second_10 = document.getElementById("second-10")
    fetch(`${route}`)
    .then(res => res.json())
    .then(data => {
        generate_first_10(container_first_10, data)
        generate_second_10(container_second_10, data)
    })
}

function generate_first_10(container_first_10, data){
    for(let i = 0; i < 10; i++){
        itemsGenerator(container_first_10, data[i], i)
    }
}

function generate_second_10(container_second_10, data){
    for(let i = 10; i < 20; i++){
        itemsGenerator(container_second_10, data[i], i)
    }
}

function itemsGenerator(container_first_10, iterator, number_iteration){
    let div_container = document.createElement("div")
    div_container.className = "container-item"
    let modelo = document.createElement("h3")
    modelo.className = "item-title"
    modelo.innerHTML = `${iterator.title}`
    let img_container = document.createElement("div")
    img_container.className = "container-img-item"
    let img = document.createElement("img")
    img.className = "img-item"
    img.src = `${iterator.image}`
    let div_container_text = document.createElement("div")
    div_container_text.className = "container-text"
    let precio = document.createElement("p")
    precio.className = "precio-item"
    precio.innerHTML = `Precio: $${iterator.price}`
    let description = document.createElement("p")
    description.className = "description-item"
    description.innerHTML = `${iterator.description}`
    let button = document.createElement("a")
    button.className = "button-item"
    button.href = "html/individual.html"
    button.innerHTML = "Ver producto"


    container_first_10.appendChild(div_container)
    div_container.appendChild(modelo)
    div_container.appendChild(img_container)
    img_container.appendChild(img)
    div_container.appendChild(div_container_text)
    div_container_text.appendChild(precio)
    div_container_text.appendChild(description)
    div_container.appendChild(button)
}

generate_data()

