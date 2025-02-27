/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/WebServices/WebService.java to edit this template
 */
package dcs.lab9;

import javax.jws.WebService;
import javax.jws.WebMethod;
import javax.jws.WebParam;
import java.util.Random;
import java.util.List;
import java.util.ArrayList;


/**
 *
 * @author apple
 */
@WebService(serviceName = "FirstWS")
public class FirstWS {

    /**
     * This is a sample web service operation
     */
    @WebMethod(operationName = "hello")
    public String hello(@WebParam(name = "name") String txt) {
        return "Hello " + txt + " !";
        
    }
    
      @WebMethod(operationName = "add")
    public int add(@WebParam(name = "a") int a, @WebParam(name = "b") int b) {
        return a + b;
    }
    
        @WebMethod(operationName = "generateSequence")
    public List<Double> generateSequence(
        @WebParam(name = "function") String function, // Example: "0.5*log10(x)"
        @WebParam(name = "start") double start,
        @WebParam(name = "end") double end,
        @WebParam(name = "points") int points,
        @WebParam(name = "stdDev") double stdDev
    ) {
        List<Double> sequence = new ArrayList<>();
        Random random = new Random();

        // Generate the sequence
        double step = (end - start) / (points - 1);
        for (int i = 0; i < points; i++) {
            double x = start + i * step;
            double value = 0.5 * Math.log10(x); // Fixed function: 0.5*log10(x)
            // Disturb the value with Gaussian noise
            double noise = random.nextGaussian() * stdDev;
            sequence.add(value + noise);
        }
        return sequence;
    }
}
