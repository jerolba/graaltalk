With GraalVM installed in home directory:

Compile Java code:
`~/graalvm/bin/javac CountWords.java`

Generate Native image: 
`~/graalvm/bin/native-image CountWords`

Meter Java execution time:
`time ~/graalvm/bin/java -cp . CountWords ElQuijote.txt`

Meter Native image execution time:
`time ./countwords ElQuijote.txt`


