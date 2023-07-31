let capacitateCilindrica = Number(prompt("Introduceti capacitatea cilindrica (cm3)"));
let tipVehicul = prompt("Introduceti tipul vehiculului:");
const tipuriVehicul = ["autoturism", "motocicleta", "autobuz", "autocar", "microbuz", "tractor"];
let impozit = 0;

if (capacitateCilindrica <= 1600 && (tipVehicul === tipuriVehicul[0] || tipVehicul === tipuriVehicul[1])) {
    impozit = Math.floor((capacitateCilindrica / 200) * 8);
    console.log(capacitateCilindrica, tipVehicul);
} else if (capacitateCilindrica > 1600 && tipVehicul === tipuriVehicul[1]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 9);
} else if (capacitateCilindrica > 1600 && capacitateCilindrica <= 2000 && tipVehicul === tipuriVehicul[0]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 22);
} else if (capacitateCilindrica > 2000 && capacitateCilindrica <= 2600 && tipVehicul === tipuriVehicul[0]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 85);
} else if (capacitateCilindrica > 2600 && capacitateCilindrica <= 3000 && tipVehicul === tipuriVehicul[0]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 171);
} else if (capacitateCilindrica > 3000 && tipVehicul === tipuriVehicul[0]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 345);
} else if (tipVehicul === tipuriVehicul[2] || tipVehicul === tipuriVehicul[3] || tipVehicul === tipuriVehicul[4]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 28);
} else if (tipVehicul === tipuriVehicul[5]) {
    impozit = Math.floor((capacitateCilindrica / 200) * 22);
}


alert("Impozitul calculat pentru capacitatea cilindrica de " + capacitateCilindrica + " cm3, pentru tipul de autovehicul " + tipVehicul + " este de: " + impozit + " lei.");