const dessertsList = document.getElementById("desserts")

fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data)
    data.forEach(item => {
      const price = item.price.toFixed(2)
      const li = document.createElement('li')
      li.className = "dessert"
      li.innerHTML = 
      `
        <div class="product__image-wrapper">
          <picture class="product__image">
            <source media="(min-width:1024px)" srcset="${item.image.desktop}">
            <source media="(min-width:760px)" srcset="${item.image.tablet}">
            <img src="${item.image.mobile}" alt="">
          </picture>
          
          <button class="product__add-to-cart-btn">
            <svg class="icon" width="21" height="20" aria-hidden="true">
              <use href="./assets/images/icon-add-to-cart.svg"></use>
            </svg>
            <span>Add to Cart</span>
          </button>
        </div>

        <div class="product__info">
          <span class="product__category">${item.category}</span>
          <h3 class="product__name">${item.name}</h3>
          <data class="product__price" value="${price}">$${price}</data>
        </div>
      `

      dessertsList.appendChild(li)
    })
  })