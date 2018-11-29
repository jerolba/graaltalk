var IntStream = Java.type('java.util.stream.IntStream');
console.log(IntStream.of(1,2,3,6,7,8,9,12).filter(x => x>8).sum())

var Stream = Java.type('java.util.stream.Stream');
Stream.of("que","tal","codemotion","?","que","tal","hola")
    .filter(x => x.length>3)
    .distinct()
    .sorted()
    .forEach(console.log);