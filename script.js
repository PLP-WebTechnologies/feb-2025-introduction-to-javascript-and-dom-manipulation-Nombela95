// DOM Elements
const changeTextBtn = document.getElementById("change-text-btn");
const changeStyleBtn = document.getElementById("change-style-btn");
const addElementBtn = document.getElementById("add-element-btn");
const removeElementBtn = document.getElementById("remove-element-btn");
const toggleDarkModeBtn = document.getElementById("toggle-dark-mode");
const targetArticle = document.getElementById("target-article");
const mainTitle = document.getElementById("main-title");
const footerText = document.getElementById("footer-text");
const list = document.getElementById("list");

// 1. Change text content dynamically
changeTextBtn.addEventListener("click", () => {
    const paragraphs = targetArticle.querySelectorAll("p");
    
    paragraphs.forEach((p, index) => {
        p.textContent = `This text was changed by JavaScript at ${new Date().toLocaleTimeString()}.`;
    });
    
    mainTitle.textContent = "Text Content Updated!";
    footerText.textContent = "Text changed on: " + new Date().toDateString();
});

// 2. Modify CSS styles via JavaScript
changeStyleBtn.addEventListener("click", () => {
    targetArticle.style.backgroundColor = "#e3f2fd";
    targetArticle.style.border = "2px dashed #64b5f6";
    targetArticle.style.color = "#0d47a1";
    
    list.style.listStyleType = "square";
    list.style.paddingLeft = "2rem";
    
    document.querySelectorAll(".btn").forEach(btn => {
        btn.style.transform = "scale(1.05)";
        btn.style.boxShadow = "0 4px 8px rgba(0,0,0,0.2)";
    });
});

// 3. Add an element when button is clicked
addElementBtn.addEventListener("click", () => {
    // Check if element already exists
    if (!document.getElementById("added-element")) {
        const newDiv = document.createElement("div");
        newDiv.id = "added-element";
        newDiv.className = "highlight-box";
        newDiv.innerHTML = `
            <h3>New Element Added</h3>
            <p>This element was created and inserted using JavaScript.</p>
        `;
        
        targetArticle.insertBefore(newDiv, targetArticle.lastElementChild);
        addElementBtn.textContent = "Element Added!";
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            addElementBtn.textContent = "Add Element";
        }, 2000);
    }
});

// 4. Remove an element when button is clicked
removeElementBtn.addEventListener("click", () => {
    const elementToRemove = document.getElementById("added-element");
    if (elementToRemove) {
        elementToRemove.remove();
        removeElementBtn.textContent = "Element Removed!";
        
        // Reset button text after 2 seconds
        setTimeout(() => {
            removeElementBtn.textContent = "Remove Element";
        }, 2000);
    } else {
        removeElementBtn.textContent = "No Element to Remove";
        setTimeout(() => {
            removeElementBtn.textContent = "Remove Element";
        }, 2000);
    }
});

// 5. Toggle dark mode
toggleDarkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        toggleDarkModeBtn.textContent = "Toggle Light Mode";
    } else {
        toggleDarkModeBtn.textContent = "Toggle Dark Mode";
    }
});

// Bonus: Add a new list item when clicking on the list
list.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        const newItem = document.createElement("li");
        newItem.textContent = `New item ${list.children.length + 1}`;
        list.appendChild(newItem);
    }
});