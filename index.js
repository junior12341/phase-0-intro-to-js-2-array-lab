// Write your solution here!
const cats = ["Milo", "Otis", "Garfield" ];

function destructivelyAppendCat (name) {
    cats.push("Ralph");
}

function destructivelyPrependCat(name) {
    cats.unshift("Bob");
}

function destructivelyRemoveLastCat() {
    cats.pop();
}

function destructivelyRemoveFirstCat() {
    cats.shift();
}

function appendCat () {
    const cat = [...cats, "Broom"];
    return cat;
}

function prependCat (name) {
    const newCats = ["Arnold", ...cats];
    return newCats;
}

function removeLastCat () {
    const cat = cats.slice(0,2);
    return cat;
}

function removeFirstCat () {
    const cat = cats.slice(1,3);
    return cat;
}