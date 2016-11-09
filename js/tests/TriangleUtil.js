
var output = document.getElementById("testOutput");

/**
 * Add text to page
 * @param {String} text to add
 */
function append(text){
    output.appendChild(document.createTextNode(text));
    output.appendChild(document.createElement('br'));
}

append('Test for triangle types');
var testCount = [0, 0];

assert(testCount, 'handles equilateral triangle', function () {
    return TriangleUtil.isEquilateral(1, 1, 1);
});

assert(testCount, 'handles Isosceles triangle', function () {
    return TriangleUtil.isIsosceles(1, 2, 1);
});

assert(testCount, 'handles Scalene triangle', function () {
    return TriangleUtil.isScalene(1, 4, 3);
});

assert(testCount, 'handles invalid triangle lengths', function () {
    return TriangleUtil.getType(1, 4, 50) == TriangleUtil.TYPES.INVALID;
});


assert(testCount, 'handles invalid input, negative values', function () {
    return TriangleUtil.getType(-1, -4, -3) === TriangleUtil.TYPES.INVALID;
});

assert(testCount, 'handles invalid input, wrong data type', function () {
    return TriangleUtil.getType(1, 5, "x") == TriangleUtil.TYPES.INVALID;
});

assert(testCount, 'handles invalid input, no input', function () {
    return TriangleUtil.getType() == TriangleUtil.TYPES.INVALID;
});

assert(testCount, 'handles invalid input, exclude an input', function () {
    return TriangleUtil.getType(2, 4) == TriangleUtil.TYPES.INVALID;
});

assert(testCount, 'handles invalid input, include extra inputs', function () {
    return TriangleUtil.getType(2, 4, 7, 8) == TriangleUtil.TYPES.INVALID;
});

append('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

/**
 * custom assert function to handle tests cases
 *
 * @param {array} count: keeps track of passed tests out of total tests
 *      in the form of a two item array i.e., [0, 0]
 * @param {string} name: describes the test
 * @param {function} test(): callback that performs a set of operations and returns a boolean
 */
function assert(count, name, test) {
    if (!count || !Array.isArray(count) || count.length !== 2) {
        count = [0, '*'];
    } else {
        count[1]++;
    }

    var pass = 'false';
    var errMsg = null;
    try {
        if (test()) {
            pass = ' true';
            count[0]++;
        }
    } catch (e) {
        errMsg = e;
    }
    append('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
    if (errMsg !== null) {
        append('       ' + errMsg + '\n');
    }
}