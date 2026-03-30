// ARRAY: Sample users (simulating database)
const users = [
    { email: "user1@gmail.com", password: "12345" },
    { email: "user2@gmail.com", password: "abcde" }
];

// ARRAY: Product list
const products = ["T-Shirts", "Jeans", "Jackets", "Shoes"];

// STRING + VALIDATION FUNCTION
function validateEmail(email) {
    return email.includes("@") && email.includes(".");
}

// LOGIN LOGIC
const form = document.getElementById("loginForm");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        try {
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let errorMsg = document.getElementById("errorMsg");

            errorMsg.innerText = "";

            // VALIDATIONS
            if (email === "" || password === "") {
                throw "All fields are required!";
            }

            if (!validateEmail(email)) {
                throw "Invalid email format!";
            }

            if (password.length < 5) {
                throw "Password must be at least 5 characters!";
            }

            // CHECK USER (ARRAY SEARCH)
            let userFound = users.find(user => 
                user.email === email && user.password === password
            );

            if (!userFound) {
                throw "Invalid credentials!";
            }

            // DATE: Store login time
            let loginTime = new Date();
            localStorage.setItem("loginTime", loginTime);

            // STRING: Store email
            localStorage.setItem("userEmail", email.toUpperCase());

            // REDIRECT
            window.location.href = "home.html";

        } catch (error) {
            document.getElementById("errorMsg").innerText = error;
        }
    });
}

// HOME PAGE LOGIC
// PRODUCT DATA (ARRAY with images)
const product = [
    {
        name: "Stylish T-Shirt",
        price: "$20",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab"
    },
    {
        name: "Denim Jacket",
        price: "$50",
        image: "https://images.unsplash.com/photo-1516826957135-700dedea698c"
    },
    {
        name: "Casual Shoes",
        price: "$35",
        image: "https://images.unsplash.com/photo-1528701800489-20be3c5c01b3"
    },
    {
        name: "Jeans",
        price: "$40",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246"
    }
];

// HOME PAGE LOGIC
if (window.location.pathname.includes("home.html")) {
    try {
        let email = localStorage.getItem("userEmail");
        let loginTime = localStorage.getItem("loginTime");

        if (!email) {
            throw "Unauthorized access! Please login first.";
        }

        document.getElementById("welcomeMsg").innerText =
            "Hi, " + email.toLowerCase();

        let container = document.getElementById("productContainer");

        products.forEach(product => {
            let card = document.createElement("div");
            card.classList.add("product-card");

            card.innerHTML = `
                <img src="${product.image}">
                <h3>${product.name}</h3>
                <p>${product.price}</p>
            `;

            container.appendChild(card);
        });

        document.getElementById("loginTime").innerText =
            "Last Login: " + new Date(loginTime).toLocaleString();

    } catch (error) {
        alert(error);
        window.location.href = "index.html";
    }
}