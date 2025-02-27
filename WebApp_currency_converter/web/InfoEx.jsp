<%-- 
    Document   : InfoEx
    Created on : 14 Dec 2024, 18:33:14
    Author     : apple
--%>

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%
    // Retrieve the session attribute "username" to verify if the user is logged in
    String user = (String) session.getAttribute("username");

    if (user == null) {
        // If the session does not have the user, redirect to the login page
        response.sendRedirect("Login.jsp");
        return; // Stop further processing after the redirect
    }
%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Currency Exchange</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 50px;
        }
        label {
            margin-right: 10px;
        }
        select, input {
            margin-bottom: 10px;
        }
        button {
            background-color: #007BFF;
            color: white;
            border: none;
            padding: 10px 20px;
            cursor: pointer;
        }
        button:hover {
            background-color: #0056b3;
        }
        .result {
            margin-top: 20px;
            font-size: 1.2em;
        }
    </style>
</head>
<body>
    <h1>Welcome, <%= user %>!</h1>
    <form method="post" action="InfoEx.jsp">
        <label for="amount">Amount:</label>
        <input type="number" id="amount" name="amount" required><br>
        <label for="currency">Currency:</label>
        <select id="currency" name="currency">
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="GBP">GBP</option>
        </select><br>
        <button type="submit">Convert</button>
    </form>

    <%
        // Get form values
        String amountParam = request.getParameter("amount");
        String currency = request.getParameter("currency");

        if (amountParam != null && currency != null) {
            try {
                // Parse the amount from string to double
                double amount = Double.parseDouble(amountParam);
                double result = 0.0;

                // Currency conversion logic
                if ("USD".equals(currency)) {
                    result = amount * 1.1; // Example exchange rate for USD
                } else if ("EUR".equals(currency)) {
                    result = amount * 0.9; // Example exchange rate for EUR
                } else if ("GBP".equals(currency)) {
                    result = amount * 0.8; // Example exchange rate for GBP
                }

                // Display the result
                out.println("<div class='result'>");
                out.println("<p>Converted Amount in " + currency + ": " + result + "</p>");
                out.println("</div>");

            } catch (NumberFormatException e) {
                // Handle invalid input for the amount
                out.println("<p style='color:red;'>Please enter a valid number for the amount.</p>");
            }
        }
    %>

    <!-- Link to log out -->
    <br>
    <a href="Logout.jsp">Log out</a>
</body>
</html>
