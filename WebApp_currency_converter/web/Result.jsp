<%-- 
    Document   : Result
    Created on : 14 Dec 2024, 18:32:53
    Author     : apple
--%>

<%@page import="java.util.ArrayList"%>
<%@page import="java.util.List"%>
<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="tate.CurrencyCalculator" %>

<%
    // Retrieve the CurrencyCalculator from the application context
    CurrencyCalculator calculator = (CurrencyCalculator) application.getAttribute("currencyCalculator");

    // Initialize history as an empty list if the calculator is null
    List<String> history = (calculator != null) ? calculator.getCalculationHistory() : new ArrayList<>();
%>

<!DOCTYPE html>
<html>
<head>
    <title>History</title>
</head>
<body>
    <h1>Calculation History</h1>
    
    <% if (history.isEmpty()) { %>
        <p>No calculation history available.</p>
    <% } else { %>
        <ul>
            <% for (String record : history) { %>
                <li><%= record %></li>
            <% } %>
        </ul>
    <% } %>

    <a href="InfoEx.jsp">Back to Exchange</a>
</body>
</html>
