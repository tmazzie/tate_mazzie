<%-- 
    Document   : Logout
    Created on : 14 Dec 2024, 18:49:19
    Author     : apple
--%>

<%@ page contentType="text/html" pageEncoding="UTF-8" %>
<%
    // Invalidate the session to log the user out
    session.invalidate(); 
    // Redirect the user to the login page
    response.sendRedirect("Login.jsp"); 
%>

<!-- The following HTML will not be processed due to the redirect -->
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Log out</title>
    </head>
    <body>
        <p>You have been logged out. Redirecting to login...</p>
    </body>
</html>
