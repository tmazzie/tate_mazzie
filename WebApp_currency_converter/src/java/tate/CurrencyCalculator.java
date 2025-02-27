/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package tate;

/**
 *
 * @author apple
 */

import java.util.ArrayList;
import java.util.List;

public class CurrencyCalculator {
    private List<String> calculationHistory;

    public CurrencyCalculator() {
        calculationHistory = new ArrayList<>();
    }

    public double calculate(double amount, double rate) {
        return amount * rate;
    }

    public void addCalculation(String calculation) {
        calculationHistory.add(calculation);
    }

    public List<String> getCalculationHistory() {
        return calculationHistory;
    }
}
