<%-- 
    Document   : Login
    Created on : 14 Dec 2024, 18:33:32
    Author     : apple
--%>
<%@ page import="java.util.HashMap" %>
<%
    // Retrieve the application-scoped user map
    HashMap<String, String> users = (HashMap<String, String>) application.getAttribute("users");

    if (users == null) {
        // If the user map doesn't exist, create an empty one
        users = new HashMap<>();
        application.setAttribute("users", users);
    }

    // Retrieve form parameters
    String name = request.getParameter("name");
    String password = request.getParameter("password");

    // Check if the login credentials are provided
    if (name != null && password != null) {
        // Validate the user credentials
        if (users.containsKey(name) && users.get(name).equals(password)) {
            // Login successful: Set session attribute
            session.setAttribute("username", name);

            // Debugging: Print session username
            out.println("Session username: " + session.getAttribute("username"));

            // Redirect to InfoEx.jsp if session is set
            if (session.getAttribute("username") != null) {
                response.sendRedirect("InfoEx.jsp");  // Redirect to InfoEx.jsp
                return;  // Stop further processing after redirect
            } else {
                out.println("<p style='color:red;'>Session not created. Please try again.</p>");
            }
        } else {
            out.println("<p style='color:red;'>Invalid username or password. Please try again.</p>");
        }
    }
%>

<!DOCTYPE html>
<html>
<head>
    <title>Login</title>
</head>
<body>
    <h1>User Login</h1>
    <form method="post">
        <label for="name">Username:</label>
        <input type="text" id="name" name="name" required><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br>
        <button type="submit">Login</button>
    </form>
</body>
</html>
