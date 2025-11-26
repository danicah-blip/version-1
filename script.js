// Sample menu items
const menu = [
    { name: "Cheesy Burger", description: "Juicy beef patty with melted cheese, lettuce, tomato, and special sauce." },
    { name: "Spaghetti Carbonara", description: "Classic creamy pasta with bacon and parmesan." },
    { name: "Adobo Flakes Silog", description: "Crispy adobo flakes served with garlic rice and fried egg." },
    { name: "Halo-Halo Special", description: "Filipino dessert with shaved ice, sweet beans, jellies, and ice cream." },
    { name: "Pork Sinigang", description: "Savory and sour tamarind-based soup with tender pork and vegetables." }
];

// Function to load menu items
function loadMenu() {
    const container = document.getElementById("menuItems");
    container.innerHTML = ""; // Clear existing content

    menu.forEach(item => {
        const div = document.createElement("div");
        div.className = "menu-item";
        div.innerHTML = `
            <h3>${item.name}</h3>
            <p>${item.description}</p>
        `;
        container.appendChild(div);
    });
}

// Button to scroll to menu
const viewMenuBtn = document.getElementById("viewMenuBtn");
if (viewMenuBtn) {
    viewMenuBtn.addEventListener("click", () => {
        document.getElementById("menu").scrollIntoView({ behavior: "smooth" });
    });
}

// Load menu on page load
window.addEventListener("DOMContentLoaded", loadMenu);