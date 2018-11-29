With GraalVM installed in home directory:

Compile Java code:
`~/graalvm/bin/javac Point.java`

Execute Ruby script with Java interop:
`~/graalvm/bin/ruby --jvm --jvm.cp=. points.rb`

Execute Ruby script with JavaScript interop:
`~/graalvm/bin/ruby --jvm --polyglot Polyglot.rb`

