const { concatTwoWords, myArray } = require("./script");

test("concatenates two words that are passed into the function", () => {
  concatTwoWords((word1, word2) => word1 + word2);

  // Test the function
  expect(concatTwoWords("hello", "world")).toBe("helloworld");
});

test('correctly clones the array passed in', ()=>{
    //define an array to pass into the function

    const array = [1,2,3,4,5];

    // test the function
    expect(myArray(array)).toEqual(array)
})
