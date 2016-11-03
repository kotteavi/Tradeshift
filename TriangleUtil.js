/**
 * Created by Avi on 11/2/16.
 */

/**
 *  Utility class for triangle shapes
 */
var TriangleUtil = {

    TYPES: {
        INVALID: "invalid",
        EQUILATERAL: "equilateral",
        ISOSCELES: "isosceles",
        SCALENE: "scalene"
    },

    /**
     * Get triangle type by length of sides.
     *
     * @param {number} a: length of side 1
     * @param {number} b: length of side 2
     * @param {number} c: length of side 3
     * @returns {String} @see TYPES
     */
    getType: function (a, b, c) {

        // need all sides to calculate type
        if (arguments.length < 3 || arguments.length > 3) {
            return this.TYPES.INVALID;
        }

        // all inputs must be numbers
        for (var i in arguments) {
            if (typeof arguments[i] != "number") {
                return this.TYPES.INVALID;
            }
        }

        // The Triangle Inequality Theorem
        // tests for the validity of the given sides as it relates to a valid triangle
        var isValid = a + b > c && b + c > a && a + c > c;
        if (!isValid) {
            return this.TYPES.INVALID;
        }

        // all sides of equal length
        if (a == b == c) {
            return this.TYPES.EQUILATERAL;
        }

        // two sides of equal length and one unequal side
        if (a == b || a == c || b == c) {
            return this.TYPES.ISOSCELES;
        }

        return this.TYPES.SCALENE;

    },

    /**
     *  Check for equilateral triangle by length of sides
     *
     * @param {number} a: length of side 1
     * @param {number} b: length of side 2
     * @param {number} c: length of side 3
     * @returns {boolean} true if an equilateral triangle
     *  otherwise false
     */
    isEquilateral: function (a, b, c) {
        return this.getType(a, b, c) == this.TYPES.EQUILATERAL;
    },

    /**
     *  Check for isosceles triangle by length of sides
     *
     * @param {number} a: length of side 1
     * @param {number} b: length of side 2
     * @param {number} c: length of side 3
     * @returns {boolean} true if an isosceles triangle
     *  otherwise false
     */
    isIsosceles: function (a, b, c) {
        return this.getType(a, b, c) == this.TYPES.ISOSCELES;
    },

    /**
     *  Check for scalene triangle by length of sides
     *
     * @param {number} a: length of side 1
     * @param {number} b: length of side 2
     * @param {number} c: length of side 3
     * @returns {boolean} true if an scalene triangle
     *  otherwise false
     */
    isScalene: function (a, b, c) {
        return this.getType(a, b, c) == this.TYPES.SCALENE;
    }
};


/***********************************************************
 *
 * Test cases
 *
 ***********************************************************/

console.log('Test for triangle types');
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

console.log('PASSED: ' + testCount[0] + ' / ' + testCount[1], '\n\n');

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
    console.log('  ' + (count[1] + ')   ').slice(0, 5) + pass + ' : ' + name);
    if (errMsg !== null) {
        console.log('       ' + errMsg + '\n');
    }
}