function main() {

    function printRepeat(toPrint: string, repetitions: number) {
        for (let i = 0; i < repetitions; i++) {
            console.log(`${String(i + 1)}. ${toPrint}`);
        }
    }

    function repeat(text: string, engine: (tp: string, rp: number) => void) {
        engine(text, 3);
    }

    repeat("Hello, world!", printRepeat);

    type PrinterFunction = (tp: string, rp: number) => void;

    function repeatB(text: string, engine: PrinterFunction) {
        engine(text, 3);
    }

    repeatB("Hello, world!", printRepeat);

    // ---

    type PrinterFunction2 = {
        new(tp: string, rp: number): PrinterFunction2;
        print: () => void;
    }

    function printRepeatCopnstr(toPrint: string, repetitions: number) {
        this.toPrint = toPrint;
        this.repetitions = repetitions;

        this.print = function () {
            for (let i = 0; i < this.repetitions; i++) {
                console.log(`${String(i + 1)}. ${this.toPrint}`);
            }
        }

    }

    function repeat2(text: string, engine: PrinterFunction2) {
        const e = new engine(text, 3);
        e.print();
    }

    repeat("aaaaa", printRepeat);

    // ---

    function process<T>(list: T[]){
        for (const element of list){
            console.log(element)
        }
    }
    process<number>([3, 11, 1.23]);
    // process<number>([3, "ciao", 1.23]);
    // functions.ts:56:25 - error TS2322: Type 'string' is not assignable to type 'number'.

}


main();