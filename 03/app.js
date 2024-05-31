// Tym razem Twoja funkcja ma być zadeklarowana w postaci anonimowego wyrażenia funkcyjnego.

// Niech funkcja ta przyjmuje jeden parametr, który będzie określał, do jakiej liczby ma zostać wykonane sumowanie. 
// Jeśli parametr będzie równy `4`, to funkcja ma zwrócić wartość `10` ponieważ `1+2+3+4=10`. 
// Jak już pewnie się domyślasz, wewnątrz funkcji należy użyć pętli `for`.
// Pamiętaj, że funkcja ma zwrócić wynik, dlatego należy użyć `return`.
// Dopiero potem zwrócona wartość ma zostać wyświetlona w konsoli.

// PS. Pamiętaj, aby zawsze odpowiednio nazywać funkcje. 
// Nazwa ma jednoznacznie określać, jakie zadanie dana funkcja realizuje.



const addSum = function (limit) {
    let result = 0;
    for (let i =1; i <= limit; i++){
        result = result + i;
    };

    return result;
}

const res = addSum(5);
console.log(res);
