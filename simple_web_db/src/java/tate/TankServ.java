/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package tate;

import java.io.*;
import java.util.*;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.*;
import com.google.gson.Gson;

@WebServlet("/TankService")
public class TankServ extends HttpServlet {
    private Map<String, Tank> tanks = new HashMap<>();

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        response.setContentType("application/json;charset=UTF-8");
        PrintWriter out = response.getWriter();
        List<Tank> tankList = new ArrayList<>(tanks.values());
        out.print(new Gson().toJson(tankList)); // Using Gson for JSON serialization
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        String country = request.getParameter("country");
        double gunCaliber = Double.parseDouble(request.getParameter("gunCaliber"));
        double frontArmor = Double.parseDouble(request.getParameter("frontArmor"));
        double speed = Double.parseDouble(request.getParameter("speed"));
        int crew = Integer.parseInt(request.getParameter("crew"));

        Tank tank = new Tank(name, country, gunCaliber, frontArmor, speed, crew);
        tanks.put(name, tank);

        response.getWriter().println("Tank added successfully!");
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws IOException {
        String name = request.getParameter("name");
        if (tanks.remove(name) != null) {
            response.getWriter().println("Tank deleted successfully!");
        } else {
            response.setStatus(HttpServletResponse.SC_NOT_FOUND);
            response.getWriter().println("Tank not found!");
        }
    }

    static class Tank {
        private String name, country;
        private double gunCaliber, frontArmor, speed;
        private int crew;

        public Tank(String name, String country, double gunCaliber, double frontArmor, double speed, int crew) {
            this.name = name;
            this.country = country;
            this.gunCaliber = gunCaliber;
            this.frontArmor = frontArmor;
            this.speed = speed;
            this.crew = crew;
        }

        // Getters and setters (if needed)
    }

  
}
