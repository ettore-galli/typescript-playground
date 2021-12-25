(() => {

    ////////////////////////////////////////////////////////////
    console.log("BASIC TYPES");

    const a: number = 1;
    const b: string = "Hello";
    const c: boolean = false;
    console.log({
        a, b, c
    });

    ////////////////////////////////////////////////////////////
    console.log("ARRAYS");

    // const list: string[] = [1, 2, 3, 4]; => Error
    const list: string[] = ["qui", "quo", "qua"];
    console.log(list);

    ////////////////////////////////////////////////////////////
    console.log("FUNCTIONS");

    // Types for functions
    function somma(a:number, b:number): number {
        return a + b;
    }

    // Contextual typing for anonymous functions
    const source = ["aaa", "bbb", "ccc"];

    console.log(
        source.map((item:string) => item + "___")
    );

    console.log(
        /**
        Argument of type '(item: number) => string' is not assignable to parameter of type '(value: string, index: number, array: string[]) => string'.
        Types of parameters 'item' and 'value' are incompatible.
        Type 'string' is not assignable to type 'number'.ts(2345)
         */
        // source.map((item:number) => item + "___")
    );

})();

