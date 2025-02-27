<%-- 
    Document   : executor
    Created on : 12 Dec 2024, 00:29:37
    Author     : apple
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>JSP Page</title>
    </head>
   <body>
    <h1>SOAP Web Service Client</h1>
    <form method="post" action="MySoapWebService">
        <label for="name">Enter Name:</label>
        <input type="text" id="name" name="name">
        <button type="submit">Call Web Service</button>
    </form>
</body>
</html>
