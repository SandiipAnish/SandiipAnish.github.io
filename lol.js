
    function login() {
        // display login form
        document.getElementById("RegForm").style.display = "none";
        document.getElementById("LoginForm").style.display = "block";
        document.getElementById("Indicator").style.marginLeft = "0px";
    }

    function register() {
        // display registration form
        document.getElementById("LoginForm").style.display = "none";
        document.getElementById("RegForm").style.display = "block";
        document.getElementById("Indicator").style.marginLeft = "130px";
    }

    function validateLoginForm() {
        var username = document.forms["LoginForm"]["Username"].value;
        var password = document.forms["LoginForm"]["Password"].value;

        if (username == "") {
            alert("Please enter your username.");
            return false;
        }

        if (password == "") {
            alert("Please enter your password.");
            return false;
        }
    }

    function validateRegForm() {
        var username = document.forms["RegForm"]["Username"].value;
        var email = document.forms["RegForm"]["Email"].value;
        var password = document.forms["RegForm"]["Password"].value;
        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (username == "") {
            alert("Please enter your username.");
            return false;
        }

        if (email == "") {
            alert("Please enter your email address.");
            return false;
        } else if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return false;
        }

        if (password == "") {
            alert("Please enter your password.");
            return false;
        }
    }

    document.getElementById("LoginForm").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateLoginForm()) {
            alert("Login successful!");
        }
    });

    document.getElementById("RegForm").addEventListener("submit", function(event) {
        event.preventDefault();
        if (validateRegForm()) {
            alert("Registration successful!");
        }
    });

