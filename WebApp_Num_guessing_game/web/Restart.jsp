<%-- 
    Document   : restart
    Created on : 15 Dec 2024, 01:03:15
    Author     : apple
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%
    // Remove the current GuessGame instance from the session
    session.removeAttribute("game");

    // Redirect to Guess.jsp to start a new game
    response.sendRedirect("Guess.jsp");
%>

<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP</title>
    </head>
    <body>
    </body>
</html>
