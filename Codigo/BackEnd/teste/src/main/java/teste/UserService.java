package teste;

import static spark.Spark.*;
import java.sql.*;

public class UserService {
    public static void main(String[] args) {
        // Configure your database connection parameters
        String jdbcUrl = "jdbc:postgresql://localhost:5432/ti2";
        String dbUser = "postgres";
        String dbPassword = "3141";

        staticFiles.location("/public"); // Serve static files from the 'public' folder

        // Define a route for listing users
        get("/", (req, res) -> {
            try (Connection conn = DriverManager.getConnection(jdbcUrl, dbUser, dbPassword)) {
                PreparedStatement stmt = conn.prepareStatement("SELECT * FROM usuarios");
                ResultSet result = stmt.executeQuery();

                StringBuilder html = new StringBuilder();
                html.append("<html><head></head><body>");
                html.append("<h1>Listagem de Usuários</h1>");
                html.append("<ul>");

                while (result.next()) {
                    String username = result.getString("username");
                    int userId = result.getInt("id");
                    html.append("<li>");
                    html.append(username);
                    html.append(" - <a href=\"/editar/" + userId + "\">Editar</a> ");
                    html.append(" - <a href=\"/excluir/" + userId + "\">Excluir</a>");
                    html.append("</li>");
                }

                html.append("</ul>");
                html.append("<a href=\"/novo\">Novo Usuário</a>");
                html.append("</body></html>");

                stmt.close();
                return html.toString();
            } catch (SQLException e) {
                e.printStackTrace();
                return "Erro na conexão com o banco de dados. Detalhes: " + e.getMessage();
            }
        });

        // Add more routes and logic for editing, deleting, and creating users as needed.
    }
}
