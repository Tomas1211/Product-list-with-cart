const listOfDesserts = document.querySelector("#desserts .list-of-products")


// Fetching data from data.json
fetch("./data.json")
  .then(response => response.json())
  .then(data => {
    console.log(data);
    data.forEach(item => {
      const dessertCategory = item.category.charAt(0).toUpperCase() + item.category.slice(1)
      const dessertName = item.name
      const dessertPrice = item.price.toFixed(2)
      const li = document.createElement("li")
      li.className = "dessert"
      li.innerHTML = 
      `
        <picture class="dessert__image">
          <source media="(min-width:1024px)" srcset="${item.image.desktop}">
          <source media="(min-width:760px)" srcset="${item.image.tablet}">
          <img src="${item.image.mobile}">
        </picture>
        <div class="dessert__info">
          <p class="dessert__category">${dessertCategory}</p>
          <h3 class="dessert__name">${dessertName}</h3>
          <p class="dessert__price">$${dessertPrice}</p>
        </div>
        <button class="add-to-cart-btn">Add to Cart</button>
      `

      listOfDesserts.appendChild(li)
    })
  })