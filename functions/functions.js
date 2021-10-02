function main() {
    function printRepeat(toPrint, repetitions) {
        for (var i = 0; i < repetitions; i++) {
            console.log(String(i + 1) + ". " + toPrint);
        }
    }
    function repeat(text, engine) {
        engine(text, 3);
    }
    repeat("Hello, world!", printRepeat);
    function repeatB(text, engine) {
        engine(text, 3);
    }
    repeatB("Hello, world!", printRepeat);
    function printRepeatCopnstr(toPrint, repetitions) {
        this.toPrint = toPrint;
        this.repetitions = repetitions;
        this.print = function () {
            for (var i = 0; i < this.repetitions; i++) {
                console.log(String(i + 1) + ". " + this.toPrint);
            }
        };
    }
    function repeat2(text, engine) {
        var e = new engine(text, 3);
        e.print();
    }
    repeat("aaaaa", printRepeat);
    // ---
    function process(list) {
        for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
            var element = list_1[_i];
            console.log(element);
        }
    }
    process([3, "ciao", 1.23]);
}
main();
