module("number extensions");

test("$round", function() {
    deepEqual((123.456).$round(), 123);
    deepEqual((123.8).$round(), 124);
    deepEqual((123.456).$round(1), 123.5);
    deepEqual((123.45115).$round(3), 123.451);
    deepEqual((-123.45).$round(), -123);
    deepEqual((-123.95).$round(), -124);
});
