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
        if (a == b && b == c) {
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
}
