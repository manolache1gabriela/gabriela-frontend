// Creati o functie care sa calculeze venitul total anual in lei al unei persoane prin extragerea numerelor din textele de mai jos. Functia trebuie sa intoarca (return) o propozitie de forma: “Venitul total anual al lui NUME este de VALOARE lei”.

const firstSentence = `Ion castiga 5000 lei/luna din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing.`;
const secondSentence = `Andrei are un salariu de 1000 euro/luna, un bonus de 9000 lei si mai castiga suplimentar aproximativ 500 usd/luna din freelancing.`;

// Preluati cursul valutar de pe site-ul BNR.
// Pentru exemplul de mai sus s-a folosit cursul de 4.95 pentru euro si 4.7 pentru dolar.

// Hint: Folositi metoda split.


function computeIncome(sentence) {
    const splitSentence = sentence.split(/\s/g);
    const nume = splitSentence[0];
    const regex = /([0-9]+ [a-z]{3,}(\/[a-z]{2,4}){0,1})/g;
    const matchValues = sentence.match(regex);
    const values = matchValues.map(value => {
        let [number, measure] = value.split(" ");
        let [currency, time] = measure.split("/");
        number = new Number(number);
        if (time === "luna") {
            number *= 12;
        }
        if (currency === "euro") {
            number *= 4.93;
        }
        if (currency === "usd") {
            number *= 4.47;
        }
        return number;
    });
    const sumOfMoney = values.reduce(
        (accumulator, money) => {
            return accumulator + money;
        }, 0);
    return `Venitul total anual al lui ${nume} este de ${sumOfMoney} lei.`;
}
console.log(computeIncome(secondSentence));