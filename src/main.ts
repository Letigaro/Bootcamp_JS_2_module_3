/*
Nombre del grupo / cantante / compositor (string).
Año de fundación: cuando se formó el grupo (numero).
Si está en activo (booleano).
Género musical (string).

The Beatles / 1960 / Activo: true / 🎵 Pop Rock
Queen / 1970 / Activo: false / 🎸 Rock
AC DC / 1973 / Activo: true / 🤘 Hard Rock
Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
The Rolling Stones / 1962 / Activo: true / 🎸 Rock
*/

const nameStyle = "font-weight: bold; font-size: 18px; background-color: green; color: white;";
const textStyle = "font-size: 14px";

const rock = "🎸 Rock"; 
const popRock = "🎵 Pop Rock";
const clasica = "🎼 Clásica";
const hardRock = "🤘 Hard Rock";

interface MusicGroup {
    groupName: string;
    year: number;
    active: boolean;
    genre: string;
}

const groupA: MusicGroup = {
    groupName: "The Beatles",
    year: 1960,
    active: true,
    genre: popRock
};

const groupB: MusicGroup = {
    groupName: "Queen",
    year: 1970,
    active: false,
    genre: rock
};

const groupC: MusicGroup = {
    groupName: "AC DC",
    year: 1973,
    active: true,
    genre: hardRock
};

const groupD: MusicGroup = {
    groupName: "Ludwig van Beethoven",
    year: 1770,
    active: false,
    genre: clasica
};

const groupE: MusicGroup = {
    groupName: "The Rolling Stones",
    year: 1962,
    active: true,
    genre: rock
};

console.log("%c" + groupA.groupName, nameStyle);
console.log("%c" + groupA.year + " - active: " + groupA.active + " - " + groupA.genre, textStyle);

console.log("%c" + groupB.groupName, nameStyle);
console.log("%c" + groupB.year + " - active: " + groupB.active + " - " + groupB.genre, textStyle);

console.log("%c" + groupC.groupName, nameStyle);
console.log("%c" + groupC.year + " - active: " + groupC.active + " - " + groupC.genre, textStyle);

console.log("%c" + groupD.groupName, nameStyle);
console.log("%c" + groupD.year + " - active: " + groupD.active + " - " + groupD.genre, textStyle);

console.log("%c" + groupE.groupName, nameStyle);
console.log("%c" + groupE.year + " - active: " + groupE.active + " - " + groupE.genre, textStyle);
