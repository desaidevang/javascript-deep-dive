<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>DOM Practice</title>
    <link rel="stylesheet" href="style.css">
</head>
<body >

<div id="card">
    <img src="https://lh3.googleusercontent.com/a/ACg8ocJ-P70xWOy1ZGuGiICXbikG57Y9aKcpQkxOCS9AVks3kjxf2cQ=s396-c-no" class="profile-img">

    <h1 id="name">Hello, I am Devang 👋</h1>

    <p id="role">Full Stack Developer</p>

    <p id="desc">
        Currently learning DOM Manipulation in JavaScript.
    </p>

    <button id="changeText">Change Background</button>
    <button id="hideBtn">Hide Card</button>
    <button id="darkMode">Dark Mode</button>

</div>


<!-- Document Object Model - DOM  -->
<script>

const bg = window.document.getElementById("card");
bg.style.backgroundColor = "red";
const t = window.document.getElementById("role");
t.style.color = "YELLOW"

window.console.log("Hello");
// window.open();

</script>

</body>
</html>
