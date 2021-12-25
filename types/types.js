(function () {
    ////////////////////////////////////////////////////////////
    console.log("BASIC TYPES");
    var a = 1;
    var b = "Hello";
    var c = false;
    console.log({
        a: a, b: b, c: c
    });
    ////////////////////////////////////////////////////////////
    console.log("ARRAYS");
    // const list: string[] = [1, 2, 3, 4]; => Error
    var list = ["qui", "quo", "qua"];
    console.log(list);
    ////////////////////////////////////////////////////////////
    console.log("FUNCTIONS");
    // Types for functions
    function somma(a, b) {
        return a + b;
    }
    // Contextual typing for anonymous functions
    var source = ["aaa", "bbb", "ccc"];
    console.log(source.map(function (item) { return item + "___"; }));
    console.log(
    /**
    Argument of type '(item: number) => string' is not assignable to parameter of type '(value: string, index: number, array: string[]) => string'.
    Types of parameters 'item' and 'value' are incompatible.
    Type 'string' is not assignable to type 'number'.ts(2345)
     */
    // source.map((item:number) => item + "___")
    );
})();
