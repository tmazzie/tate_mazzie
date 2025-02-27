/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tate;

/**
 *
 * @author apple
 */

import java.util.Random;

public class GuessGame {
    private int numberToGuess;
    private int trials;
    private String feedback;
    private String status;

    public GuessGame() {
        Random rand = new Random();
        numberToGuess = rand.nextInt(20) + 1; // Generate random number between 1 and 100
        trials = 0;
        feedback = "";
        status = "playing";
    }

    public String processGuess(int guess) {
        trials++;
        if (guess == numberToGuess) {
            feedback = "Congratulations! You guessed the number!";
            status = "won";
        } else if (guess < numberToGuess) {
            feedback = "Too low! Try again.";
        } else {
            feedback = "Too high! Try again.";
        }

        if (trials >= 6 && status.equals("playing")) {
            feedback = "Sorry! You've reached the maximum number of attempts. The number was " + numberToGuess + ".";
            status = "lost";
        }

        return feedback;
    }

    public int getTrials() {
        return trials;
    }

    public String getFeedback() {
        return feedback;
    }

    public String getStatus() {
        return status;
    }

    public int getNumberToGuess() {
        return numberToGuess;
    }
}
