const question_1_organize_array = (array) => {
    const oldArray = [...array]; //make a copy to avoid messing with the original input array
    let newArray = [];
    let posDifferentType = -1; //Position where the types switch after sorting the input array

    oldArray.sort((a, b) => { //Sort by type and then numerical value (BONUS requirement)
        if (typeof a === typeof b) {
            return a - b;
        } else {
            return (typeof a).localeCompare(typeof b);
        }
    });

    let lastElem = null; //last element read from the array, starts with "null"
    oldArray.forEach((elem, index) => {
        if (typeof lastElem !== typeof elem && lastElem !== null) {
            posDifferentType = index;
        }
        if (lastElem === elem) {
            if (Array.isArray(newArray[newArray.length - 1])) {
                newArray[newArray.length - 1].push(elem);
            } else {
                newArray.splice(newArray.length - 1, 1, [elem, elem]);
            }
        } else {
            newArray.push(elem);
        }
        lastElem = elem;
    });

    if (posDifferentType >= 0){
        const auxArray = [];
        auxArray.push(newArray.slice(0, posDifferentType));
        auxArray.push(newArray.slice(posDifferentType));
        newArray = auxArray;
    }

    return newArray;
};

const question_2_get_terms_of_sum = (array,sum) => {
    let terms = null;
    let foundTerms = false;
    array.every((elem, index)=>{
       array.slice(index+1).every((elem2)=>{
          foundTerms = elem + elem2 === sum;
          if (foundTerms) terms = [elem, elem2];
          return !foundTerms;
       });
       return !foundTerms;
    });
    return terms;
};
