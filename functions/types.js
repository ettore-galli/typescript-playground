function main() {
    console.log("BASIC TYPES");
    var myStr = "Hello, World!";
    var myNumber = 9.81;
    var myBool = true;
    console.log(myStr, myNumber, myBool);
    var myNumbers = [3.14, 2.71, 9.81];
    console.log(myNumbers);
    function sum(a, b) {
        return a + b;
    }
    console.log(sum(3, 4));
    // console.log(sum(3, "quattro"));
    // Argument of type '"quattro"' is not assignable to parameter of type 'number'.
    myNumbers.forEach(function (n) { return console.log(n * 2); });
    // ["a", "b"].forEach((n) => console.log(n * 2));
    // types.ts:25:41 - error TS2362: The left-hand side of an arithmetic operation must be of type 'any', 'number', 'bigint' or an enum type.
    var coso = { nome: "ettore", anno: 1972 };
    console.log(coso);
    var coso2 = { nome: "ettore", anno: 1972, peso: 3.14159 };
    console.log(coso2);
    // const coso3: { nome: string } = { nome: "ettore", anno: 1972 };
    // console.log(coso3);
    // types.ts:33:55 - error TS2322: Type '{ nome: string; anno: number; }' is not assignable to type '{ nome: string; }'.
    // Object literal may only specify known properties, and 'anno' does not exist in type '{ nome: string; }'.
    // 33     const coso3: { nome: string } = { nome: "ettore", anno: 1972 };
    function sette(multiplo) {
        if (typeof multiplo === "number") {
            return multiplo + 7;
        }
        else {
            return multiplo + " + 7";
        }
    }
    console.log(sette("tre"));
    console.log(sette(3));
    function stampaPersona(u) {
        console.log(u.nome);
        console.log(u.anno);
    }
    stampaPersona({ nome: "ettore", anno: 1972 });
    ;
    function stampaHomoSapiens(u) {
        console.log(u.nome);
        console.log(u.anno);
    }
    stampaHomoSapiens({ nome: "ettore", anno: 1972 });
    var n = 3.1415;
    console.log(n);
    // const n2 = 3.1415 as boolean;
    var n3 = 3.1415;
    console.log(n3);
    var possibili;
    possibili = "A";
    possibili = "B";
    possibili = "C";
    function printText(s, alignment) {
        // ...
    }
    function printText2(s, alignment) {
        // ...
    }
    printText("Hello, world", "left");
    printText(null, "left");
    // printText("G'day, mate", "centre");
    // Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'
    // printText2("G'day, mate", "centre");
    // Argument of type '"centre"' is not assignable to parameter of type '"left" | "right" | "center"'
    function printAll(strs) {
        if (strs && typeof strs === "object") {
            for (var _i = 0, strs_1 = strs; _i < strs_1.length; _i++) {
                var s = strs_1[_i];
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log("*" + strs + "*");
        }
    }
    printAll("");
    function padLeft(padding, input) {
        if (typeof padding === "number") {
            return new Array(padding + 1).join("-") + input;
        }
        return padding + input;
    }
    console.log(padLeft(3, "ciao"));
    console.log(padLeft("xxx", "ciao"));
    function messWithTypes() {
        var result = null;
        var cases = [1, 10, 100];
        for (var i = 0; i < cases.length; i++) {
            if (cases[i] < 11) {
                result = cases[i];
            }
            else {
                result = "Too big";
            }
            console.log(result, typeof result);
        }
    }
    messWithTypes();
    function isTypeofNumber(n) {
        return typeof n === "number";
    }
    console.log(isTypeofNumber(1), isTypeofNumber("uno"));
}
main();
