// Smooth Scroll-to-Top Button
const scrollToTopBtn = document.getElementById("scrollToTop");

window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

scrollToTopBtn.onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};

// Dark Mode Toggle (Bee Night Mode)
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    let isDarkMode = document.body.classList.contains("dark-mode");
    
    if (isDarkMode) {
        document.body.style.backgroundColor = "#3b2f2f"; // Dark honey brown
        document.body.style.color = "#fbd46d"; // Honey gold text
    } else {
        document.body.style.backgroundColor = "#fbeec1"; // Warm honey
        document.body.style.color = "#5c3d00"; // Dark brown text
    }
}

// Real-Time Form Validation
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("All fields are required! 🐝");
        return;
    }

    if (!email.includes("@")) {
        alert("Enter a valid email address! 📧");
        return;
    }

    alert("Form submitted successfully! 🍯 We'll get back to you soon.");
});

// Smooth Scroll to Sections
document.querySelectorAll("nav a").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        let targetId = this.getAttribute("href").substring(1);
        let targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

// Apply Buzz Effect on Hover for All Buttons
document.querySelectorAll("button").forEach(button => {
    button.addEventListener("mouseenter", () => {
        button.classList.add("buzz");
    });
    button.addEventListener("mouseleave", () => {
        button.classList.remove("buzz");
    });
});
