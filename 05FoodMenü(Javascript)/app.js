const menu = [
    {
      id: 1,
      title: "Classic Burger",
      category: "Meat",
      price: 8.99,
      img: "https://www.unileverfoodsolutions.com.sg/dam/global-ufs/mcos/SEA/calcmenu/recipes/SG-recipes/vegetables-&-vegetable-dishes/%E7%BB%8F%E5%85%B8%E8%8A%9D%E5%A3%AB%E6%B1%89%E5%A0%A1/main-header.jpg",
      desc: `Juicy beef patty with cheese, lettuce, and tomato, served in a toasted bun.`,
    },
    {
      id: 2,
      title: "Vegan Burrito",
      category: "Vegan",
      price: 7.99,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzgKi6QePpCWwtnNrw3LrtXlkBLoy7642FQxZMrgCnKUh6sVCuzXu7wlOkDf9whkLbL78&usqp=CAU",
      desc: `Filled with beans, rice, and fresh veggies, topped with vegan sauce.`,
    },
    {
      id: 3,
      title: "Vegetarian Pizza",
      category: "Vegetarian",
      price: 10.99,
      img: "https://www.tasteofhome.com/wp-content/uploads/2018/02/Grilled-Veggie-Pizza_EXPS_LSBZ18_48960_D01_18_6b.jpg?fit=300,300&webp=1",
      desc: `Loaded with mozzarella, bell peppers, olives, and mushrooms.`,
    },
    {
      id: 4,
      title: "Chicken Wings",
      category: "Meat",
      price: 9.99,
      img: "https://images.getrecipekit.com/20240103192542-buffalo-chicken-wings.jpg?width=650&quality=90&",
      desc: `Crispy wings with your choice of hot sauce or BBQ.`,
    },
    {
      id: 5,
      title: "Falafel Wrap",
      category: "Vegan",
      price: 6.99,
      img: "https://www.simply-v.de/volumes/recipe/recipes/7dc90789c13b17802e8356adebb8b7a1.jpg?v=1649698169",
      desc: `Chickpea falafel balls in a wrap with lettuce and tahini sauce.`,
    },
    {
      id: 6,
      title: "Vegetarian Salad",
      category: "Vegetarian",
      price: 5.99,
      img: "https://detoxinista.com/wp-content/uploads/2015/06/cobb-salad-1.jpg",
      desc: `Mixed greens, cherry tomatoes, and cucumbers with a balsamic dressing.`,
    },
    {
      id: 7,
      title: "Doner",
      category: "Meat",
      price: 11.99,
      img: "https://www.antalya-urlaub.com/wp-content/uploads/2023/03/doener-kebab-1024x683.jpg",
      desc: `Traditional Turkish doner kebab with thinly sliced meat, served in pita bread.`,
    },
    {
      id: 8,
      title: "Vegan Burger",
      category: "Vegan",
      price: 9.49,
      img: "https://veganland.de/wp-content/uploads/2024/06/VeganBurger.webp",
      desc: `Plant-based patty with vegan cheese, lettuce, and tomato.`,
    },
    {
      id: 9,
      title: "Vegetable Stir-Fry",
      category: "Vegetarian",
      price: 7.49,
      img: "https://natashaskitchen.com/wp-content/uploads/2020/08/Vegetable-Stir-Fry-2.jpg",
      desc: `Sautéed seasonal vegetables with soy sauce and sesame seeds.`,
    },
  ];
  
  
// Function to display menu items based on the selected category
function displayMenu(category = "All") {
    const sectionCenter = document.querySelector(".section-center");
    sectionCenter.innerHTML = ""; // Clear the existing menu items
  
    // Filter menu items based on the selected category
    const filteredMenu = category === "All" ? menu : menu.filter(item => item.category === category);
  
    // Display each filtered item
    filteredMenu.forEach(item => {
      const menuItem = document.createElement("div");
      menuItem.classList.add("menu-items", "col-lg-6", "col-sm-12");
  
      menuItem.innerHTML = `
        <img src="${item.img}" alt="${item.title}" class="photo">
        <div class="menu-info">
          <div class="menu-title">
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </div>
          <div class="menu-text">${item.desc}</div>
        </div>
      `;
  
      sectionCenter.appendChild(menuItem);
    });
  }
  
  // Function to display category filter buttons
  function displaybutton() {
    const btncontainer = document.querySelector(".btn-container");
    btncontainer.innerHTML = ""; // Clear any existing content in the container
  
    // Create an array of unique categories, starting with "All"
    const categories = ["All", ...new Set(menu.map(item => item.category))];
  
    // Iterate through the unique categories array and create buttons
    categories.forEach(category => {
      const btnItem = document.createElement("button");
      btnItem.classList.add("btn", "btn-item", "btn-outline-dark");
      btnItem.textContent = category;
  
      // Add an onclick event listener to each button to filter the menu
      btnItem.onclick = () => {
        displayMenu(category); // Call displayMenu with the selected category
      };
  
      btncontainer.appendChild(btnItem); // Append the button to the container
    });
  }
  
  // Display the buttons and the full menu when the document content is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    displaybutton();
    displayMenu(); // Show all items by default
  });