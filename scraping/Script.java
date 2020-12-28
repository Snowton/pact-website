import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.file.Files;
import java.nio.file.Path;

// the true real one and only
public class Script {
    public static void main(String[] args) throws IOException {
        Path fileName = Path.of("script.in");
        String html = Files.readString(fileName);
        PrintWriter output = new PrintWriter(new BufferedWriter(new FileWriter("script.out")));

        String[] years = html.split("<div");

        output.println("const lecturers = ["); //lecturers array opened

        System.out.println(years.length);

        for(int i = 1; i < years.length; i++) {
            String[] lecturers = years[i].split("<td");

            String[] temp = lecturers[0].split("strong>");
            String year = temp[1].substring(0, temp[1].length() - 2);
            output.println("['" + year + "', ["); // year array opened, year lecturers array opened

            lecturers[lecturers.length - 1] = lecturers[lecturers.length - 1].substring(0, lecturers[lecturers.length - 1].length() - 20);
            
            for(int j = 1; j < lecturers.length; j++) {
                output.println("["); // single lecturer array opened
                String lecturer = lecturers[j];

                temp = lecturer.split("strong");
                String name = temp[1].substring(1, temp[1].length() - 2);
                output.println("['" + name + "',"); // name array opened
                if(temp[0].contains("href")) {
                    String jackpot = temp[0].split("<a")[1];
                    jackpot = jackpot.split("<img")[0];
                    String website = jackpot.substring(7, jackpot.length() - 2);
                    output.println("'" + website + "'");
                }
                output.println("],"); // name array closed
                temp = temp[2].split("<br />");
                int k = 1;
                output.println("["); // position array opened
                while(temp[k].contains("<em>")) {
                    String position = temp[k].substring(5, temp[k].length() - 5);
                    output.println("'" + position + "',");
                    k++;
                }
                output.println("],"); // position array closed
                output.println("["); // link array opened
                while(temp[k].contains("</a>")) {
                    String[] temp2 = temp[k].split("href=\"")[1].split(">");
                    String link = temp2[0].substring(0, temp2[0].length() - 2);
                    String label = temp2[1].substring(0, temp2[1].length() - 3);
                    output.println("['" + link + "', '" + label + "'],");
                    k++;
                }
                output.println("],"); // link array closed
                String interests = temp[k].substring(1, temp[k].length() - 17);
                output.println("'" + interests + "']"); // single lecturer array closed
            }
            output.println("]]"); // year array closed, year lecturers array closed
        }

        output.println("];"); // lecturers array closed
        output.println("export default lecturers;");
        output.close();
    }
}
