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
if (window.location.pathname.includes("home.html")) {
    try {
        let email = localStorage.getItem("userEmail");
        let loginTime = localStorage.getItem("loginTime");

        if (!email) {
            throw "Unauthorized access! Please login first.";
        }

        // STRING manipulation
        document.getElementById("welcomeMsg").innerText =
            "Hello " + email.toLowerCase();

        // ARRAY display
        let list = document.getElementById("productList");
        products.forEach(product => {
            let li = document.createElement("li");
            li.innerText = product;
            list.appendChild(li);
        });

        // DATE display
        document.getElementById("loginTime").innerText =
            "Login Time: " + new Date(loginTime).toLocaleString();

    } catch (error) {
        alert(error);
        window.location.href = "index.html";
    }
}