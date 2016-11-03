/**
 * Created by Avi on 11/2/16.
 */


/**
 Triangle Challenge:
 Write a program that will determine the type of a triangle.
 It should take the lengths of the triangle's three sides as input,
 and return whether the triangle is equilateral, isosceles or scalene.
 We are looking for solutions that showcase problem solving skills and
 structural considerations that can be applied to larger and potentially
 more complex problem domains. Pay special attention to tests, readability
 of code and error cases.

 The resulting code will be used as the basis for broader discussions during the interview.
 Therefore you should be prepared to discuss your choices. Please push your code into GitHub and share the link with me.

 */

/**
 * Assumptions
 * Input:
 * Output:
 * Constraints:
 */

/**
 *
 *
 */
var TriangleUtil = {

    types: {
        "invalid": 0,
        "equilateral": 1,
        "isosceles": 2,
        "scalene": 3
    },

    // look into the diff types of tirangles
    /**
     * Get triangle type by length of sides.
     *
     * @param {number} a: length of side 1
     * @param {number} b: length of side 2
     * @param {number} c: length of side 3
     * @returns {number}
     */
    getType: function (a, b, c) {

        // valid assuming if it is public facing AP
        // what if it is an API design??
        // TODO we need better return for errors
        if (arguments.length < 3 || arguments.length > 4) {
            return this.types.invalid;
        }

        // all inputs must be numbers
        for (var i in arguments) {
            if (typeof arguments[i] != "number")
                return this.types.invalid;
        }

        // The Triangle Inequality Theorem
        // tests for the validity of the given sides as it relates to a valid triangle
        var isValid = a + b > c && b + c > a && a + c > c;
        if (!isValid) {
            return this.types.invalid;
        }

        if (a == b == c) {
            return this.types.equilateral;
        }

        if (a == b || a == c || b == c) {
            return this.types.isosceles;
        }

        if (a != b != c) {
            return this.types.scalene;
        }

    },

    isEquilateral: function (a, b, c) {
        var type = this.getType(a, b, c);
        return type == this.types.equilateral ? true : false;
    },

    isIsosceles: function (a, b, c) {
        var type = this.getType(a, b, c);
        return type == this.types.isosceles ? true : false;
    },

    isScalene: function (a, b, c) {
        var type = this.getType(a, b, c);
        return type == this.types.scalene ? true : false;
    }
};


/***********************************************************
 *
 * Test cases
 *
 ***********************************************************/

console.log('Test for triangle types');
var testCount = [0, 0];

assert(testCount, 'handles Equilateral triangle', function () {
    var test = TriangleUtil.isEquilateral(1, 1, 1);
    return test;
});

assert(testCount, 'handles Isosceles triangle', function () {
    var test = TriangleUtil.isIsosceles(1, 2, 1);
    return test;
});

assert(testCount, 'handles Scalene triangle', function () {
    var test = TriangleUtil.isScalene(1, 4, 3);
    return test;
});

assert(testCount, 'handles invalid triangle lengths', function () {
    var test = TriangleUtil.getType(1, 4, 50);
    return test === TriangleUtil.types.invalid;
});


assert(testCount, 'handles invalid input, negative values', function () {
    var test = TriangleUtil.getType(-1, -4, -3);
    return test === TriangleUtil.types.invalid;
});

assert(testCount, 'handles invalid input, wrong data type', function () {
    var test = TriangleUtil.getType(1, 5, "x");
    return test === TriangleUtil.types.invalid;
});

assert(testCount, 'handles invalid input, no input', function () {
    var test = TriangleUtil.getType();
    return test === TriangleUtil.types.invalid;
});

assert(testCount, 'handles invalid input, exclude an input', function () {
    var test = TriangleUtil.getType(2, 4);
    return test === TriangleUtil.types.invalid;
});

assert(testCount, 'handles invalid input, include extra inputs', function () {
    var test = TriangleUtil.getType(2, 4, 7, 8);
    return test === TriangleUtil.types.invalid;
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