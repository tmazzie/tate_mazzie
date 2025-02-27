<%-- 
    Document   : Guess
    Created on : 15 Dec 2024, 00:52:33
    Author     : apple
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<%@ page import="tate.GuessGame" %>
<%
    // Retrieve the GuessGame instance from the session
    GuessGame game = (GuessGame) session.getAttribute("game");

    // If the game doesn't exist in the session, initialize a new game
    if (game == null) {
        game = new GuessGame();
        session.setAttribute("game", game);
    }

    // Variables for feedback and user input
    String feedback = "";
    int trials = game.getTrials();
    String status = game.getStatus();

    // Check if the user has submitted a guess
    String guessParam = request.getParameter("guess");
    if (guessParam != null) {
        try {
            // Process the user's guess
            int guess = Integer.parseInt(guessParam);
            feedback = game.processGuess(guess);
            trials = game.getTrials();
            status = game.getStatus();
        } catch (NumberFormatException e) {
            feedback = "Invalid input. Please enter a valid number.";
        }
    }
%>

<!DOCTYPE html>
<html>
<head>
    <title>Guess the Number Game</title>
</head>
<body>
    <h1>Welcome to the Guess the Number Game!</h1>
    <form action="Guess.jsp" method="POST">
        <label for="guess">Enter your guess (1-20):</label>
        <input type="number" id="guess" name="guess" min="1" max="100" required />
        <button type="submit">Submit Guess</button>
    </form>

    <!-- Feedback Section -->
    <%
        // Display feedback only if the user has made a guess
        if (guessParam != null) {
    %>
        <p><%= feedback %></p>
        <p>Attempts: <%= trials %> of 6</p>
    <% } %>

    <!-- Display results based on the game's status -->
    <%
        if ("won".equals(status)) {
%>
    <h2>Congratulations! You guessed the number!</h2>
    <div style="width: 100%; height: 400px; position: relative;">
        <img src="https://media.istockphoto.com/id/520652592/photo/pug-dog-with-man-hands-in-headphones-showing-thumbs-up.jpg?s=612x612&w=0&k=20&c=ab1eM_haOKi2OD94amfo5V0JMwesMcB7ewUqn7x-32g=" 
             alt="Winner" 
             style="width: 100%; height: 100%; object-fit: cover; position: absolute; top: 0; left: 0;" />
    </div>
    <a href="Restart.jsp">Play Again</a>
<%
        } else if ("lost".equals(status)) {
    %>
        <h2>Game Over!</h2>
        <p>The correct number was: <%= game.getNumberToGuess() %></p>
        <a href="Restart.jsp">Play Again</a>
    <%
        }
    %>
</body>
</html>
