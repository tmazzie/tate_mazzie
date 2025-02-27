<%-- 
    Document   : ClientTank
    Created on : 12 Dec 2024, 00:41:18
    Author     : apple
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
    <title>Tank Management</title>
</head>
<body>
    <h1>Tank Management</h1>

    <!-- Add Tank -->
    <h2>Add Tank</h2>
    <form method="post" action="TankService">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="country">Country:</label>
        <input type="text" id="country" name="country" required><br>
        <label for="gunCaliber">Gun Caliber:</label>
        <input type="number" id="gunCaliber" name="gunCaliber" required><br>
        <label for="frontArmor">Front Armor:</label>
        <input type="number" id="frontArmor" name="frontArmor" required><br>
        <label for="speed">Speed:</label>
        <input type="number" id="speed" name="speed" required><br>
        <label for="crew">Crew:</label>
        <input type="number" id="crew" name="crew" required><br>
        <button type="submit">Add Tank</button>
    </form>

    <!-- View Tanks -->
    <h2>View All Tanks</h2>
    <button onclick="fetchTanks()">View Tanks</button>
    <div id="tankList"></div>

    <script>
        function fetchTanks() {
            fetch('TankService')
                .then(response => response.json())
                .then(data => {
                    const tankList = document.getElementById('tankList');
                    tankList.innerHTML = JSON.stringify(data, null, 2);
                })
                .catch(err => console.error(err));
        }
    </script>
</body>
</html>
