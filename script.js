document.addEventListener("DOMContentLoaded", () => {

  

    const cartData = [
        {id:1,url:"./carts/cart1.jpg",title:"Delicious Food",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."},
        {id:1,url:"./carts/cart3.jpg",title:"Amazing Interior",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."},
        {id:1,url:"./carts/cart3.jpg",title:"the real burgers",content:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."},
    ]


    const cartDiv = document.querySelector(".carts")
    cartData.forEach(element => {
        
        const cart = document.createElement("card")
        cart.classList.add("cart")
cart.style.margin = "20px"
        const imageDiv = document.createElement("div")
        const img = document.createElement("img")
        img.src = element.url
        imageDiv.appendChild(img)
        imageDiv.style.width = "300px"
        img.style.width = "100%"
        img.style.height = "300px"

        const titleDiv = document.createElement("div")
        const textElement = document.createElement("h2")
        titleDiv.appendChild(textElement)
        titleDiv.style.padding = "10px 0"
        textElement.textContent = element.title
        textElement.style.textTransform = "uppercase"
        textElement.style.fontWeight = "bolder"
        textElement.style.fontSize = "22px"

        const contentElement = document.createElement("p")
        contentElement.textContent = element.content
        contentElement.style.color = "#7B7B7B"
        contentElement.style.padding = "3px 0"
        contentElement.style.width = "300px"
        contentElement.style.fontSize = "15px"
        contentElement.style.fontWeight = ""
        cart.appendChild(imageDiv)
      
        cart.appendChild(titleDiv)
        cart.appendChild(contentElement)
        cartDiv.appendChild(cart)
    })
  
})

var happy = new Swiper(".mySwiper-happy", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  