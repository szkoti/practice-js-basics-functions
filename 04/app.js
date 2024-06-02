// Tym razem Twoim zadaniem jest zadeklarowanie funkcji o nazwie `runTimer`, 
// która ma wyświetlać w konsoli godzinę aktualizowaną co 5 sekund.
// Jak zapewne się już domyślasz, należy użyć funkcji czasu, np. `setInterval()`, 
// która przyjmie jako parametr funkcję anonimową. Funkcja ta ma wyświetlać w konsoli aktualny czas.
// Dodatkowo po wyświetleniu 5 kolejnych wartości aktualnego czasu należy zatrzymać wyświetlanie. 
//W tym celu stwórz dodatkową zmienną, która będzie zliczać ilość wyświetlanych informacji. 

// Pamiętaj, że funkcja `setInterval()` zwraca identyfikator, który pozwoli Ci zatrzymać interwał.


let myInterval;
let counter = 1;



function runTime() {
    const time = (new Date()).toLocaleTimeString();
    console.log(time);
    counter ++;
    if (counter > 5) {
        clearInterval(myInterval);
    };
};

myInterval = setInterval(runTime, 5000);