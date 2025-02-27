<%-- 
    Document   : Register
    Created on : 14 Dec 2024, 18:32:39
    Author     : apple
--%>

<%@ page import="java.util.HashMap" %>
<%
    // Get the application-wide map of users from the application context
    HashMap<String, String> users = (HashMap<String, String>) application.getAttribute("users");
    if (users == null) {
        // Initialize the map if it doesn't exist
        users = new HashMap<>();
        application.setAttribute("users", users);
    }

    // Handle registration
    String name = request.getParameter("name");
    String password = request.getParameter("password");

    if (name != null && password != null) {
        if (users.containsKey(name)) {
            out.println("<p style='color:red;'>User already exists. Please choose a different username.</p>");
        } else {
            users.put(name, password); // Save username and password in the application scope
            out.println("<p style='color:green;'>Registration successful! Please <a href='Login.jsp'>Login</a>.</p>");
        }
    }
%>

<!DOCTYPE html>
<html>
<head>
    <title>Register</title>
</head>
<body>
    <h1>User Registration</h1>
    <form method="post">
        <label for="name">Username:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Register</button>
    </form>
</body>
</html>
