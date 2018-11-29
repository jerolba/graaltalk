import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class CountWords {

    public static void main(String[] args) throws IOException {
        String book = args[0];
        List<String> lines = Files.readAllLines(new File(book).toPath());
        Map<String, Long> words = lines
                .stream()
                .flatMap(l -> Stream.of(l.split(" ")))
                .collect(Collectors.groupingBy(s -> s, Collectors.counting()));
        double average = words
                .values()
                .stream()
                .mapToLong(l ->l)
                .average()
                .orElse(-1);
        System.out.println(average);
    }
}
