array = Polyglot.eval('js', '
    console.log("Hola Codemotion");
    var numbers = [1,2,3,4,5,6,7].map(x => x * x);
    numbers.filter(x=> x % 2 == 0)
    ')
puts array[2]
