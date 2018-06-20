describe("Coding Challenge6", function () {
    // The 'it' function of Jasmine defined an individual test. The first argument is
    // a description of the test that's appended to the module name. Because a module name
    // is typically a noun, like the name of the function being tested, the description for
    // an individual test is typically written in an action-data format.
    function _arrayIsTheSame(array1,array2){
        return (array1.length === array2.length) && array1.every(function(element, index) {
            if (Array.isArray(element) && Array.isArray(array2[index])) {
                return _arrayIsTheSame(element, array2[index]);
            }
            return element === array2[index];
        });
    }

    it("question 1 & Bonus - should return the array organized", function () {
        // Invoke the unit being tested as necessary
        let array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
        let result = question_1_organize_array(array);
        let expected = [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591];

        // Check the results;
        expect(_arrayIsTheSame(expected, result)).toBeTruthy();

        // BONUS
        array = [1, "3", "2", 2];
        result = question_1_organize_array(array);
        expected = [[1,2], ['2', '3']];
        // Check the results;
        expect(_arrayIsTheSame(expected, result)).toBeTruthy();
    });

    it("question 2 - should return the terms of the sum", function () {
       let array = [1,2,3,4];
       let expected = [3,4];
       let result = question_2_get_terms_of_sum(array, 7);
        // Check the results;
        expect(_arrayIsTheSame(expected, result)).toBeTruthy();
    });
});