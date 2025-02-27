package tate;

import java.io.IOException;
import java.io.PrintWriter;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.soap.*;

/**
 * Servlet for generating an HTML table of points (arguments vs. values) from the SOAP WebService.
 */
public class GeneratedPoints extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code> methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        
        // Retrieve parameters from the request
        String start = request.getParameter("start");
        String end = request.getParameter("end");
        String points = request.getParameter("points");
        String stdDev = request.getParameter("stdDev");

        try (PrintWriter out = response.getWriter()) {
            // Generate SOAP request
            SOAPMessage soapRequest = createSOAPRequest(start, end, points, stdDev);

            // Send SOAP request and get the response
            SOAPMessage soapResponse = sendSOAPRequest(soapRequest);

            // Extract the result from the SOAP response
            String result = parseSOAPResponse(soapResponse);

            // Generate the HTML page with a table
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Generated Points</title>");
            out.println("<style>table {border-collapse: collapse;} table, th, td {border: 1px solid black;} th, td {padding: 10px;}</style>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Generated Points</h1>");
            out.println("<table>");
            out.println("<tr><th>Argument</th><th>Value</th></tr>");
            
            // Convert result into table rows
            if (result != null && !result.isEmpty()) {
                String[] pointsArray = result.split(";"); // Assume the result is "x1,y1;x2,y2;..."
                for (String point : pointsArray) {
                    String[] pair = point.split(","); // Split into argument and value
                    if (pair.length == 2) {
                        out.println("<tr><td>" + pair[0] + "</td><td>" + pair[1] + "</td></tr>");
                    }
                }
            } else {
                out.println("<tr><td colspan='2'>No points generated</td></tr>");
            }

            out.println("</table>");
            out.println("</body>");
            out.println("</html>");
        } catch (Exception e) {
            response.getWriter().println("<h2>Error occurred: " + e.getMessage() + "</h2>");
            e.printStackTrace(response.getWriter());
        }
    }

    private SOAPMessage createSOAPRequest(String start, String end, String points, String stdDev) throws SOAPException {
        // Create SOAP Message
        MessageFactory messageFactory = MessageFactory.newInstance();
        SOAPMessage soapMessage = messageFactory.createMessage();

        SOAPPart soapPart = soapMessage.getSOAPPart();
        SOAPEnvelope envelope = soapPart.getEnvelope();
        envelope.addNamespaceDeclaration("dcs", "http://lab8.dcs/");

        SOAPBody body = envelope.getBody();
        SOAPElement generateSequenceRequest = body.addChildElement("generateSequence", "dcs");
        generateSequenceRequest.addChildElement("function").addTextNode("0.5*log10(x)");
        generateSequenceRequest.addChildElement("start").addTextNode(start);
        generateSequenceRequest.addChildElement("end").addTextNode(end);
        generateSequenceRequest.addChildElement("points").addTextNode(points);
        generateSequenceRequest.addChildElement("stdDev").addTextNode(stdDev);

        soapMessage.saveChanges();
        return soapMessage;
    }

    private SOAPMessage sendSOAPRequest(SOAPMessage soapRequest) throws SOAPException, IOException {
        SOAPConnectionFactory soapConnectionFactory = SOAPConnectionFactory.newInstance();
        SOAPConnection soapConnection = soapConnectionFactory.createConnection();

        String endpoint = "http://localhost:8083/WebApplication2/FirstWS"; // Adjust the endpoint if necessary
        SOAPMessage soapResponse = soapConnection.call(soapRequest, endpoint);

        soapConnection.close();
        return soapResponse;
    }

    private String parseSOAPResponse(SOAPMessage soapResponse) throws SOAPException {
        SOAPBody body = soapResponse.getSOAPBody();
        return body.getElementsByTagName("return").item(0).getTextContent();
    }

    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Servlet that generates a table of points from a SOAP web service.";
    }
}
