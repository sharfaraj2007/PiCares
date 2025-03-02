// Select the login button and user info area from the HTML
const loginButton = document.getElementById("loginButton");
const userInfo = document.getElementById("userInfo");

// Access the Pi SDK
const Pi = window.Pi;

// Function to handle login with Pi Network
async function loginWithPi() {
    try {
        // Request the 'username' permission from the Pi user
        const scopes = ['username'];

        // Authenticate the user with Pi Network
        const authResult = await Pi.authenticate(scopes);

        // Display the username on the page
        console.log("Login Successful:", authResult);
        userInfo.innerHTML = `Logged in as: <b>${authResult.user.username}</b>`;

    } catch (error) {
        // Handle login errors
        console.error("Login failed:", error);
        userInfo.innerHTML = `<span style="color:red;">Login failed. Try again.</span>`;
    }
}

// Attach the login function to the button click event
loginButton.addEventListener("click", loginWithPi);
