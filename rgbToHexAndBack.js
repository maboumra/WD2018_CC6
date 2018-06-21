"use strict";

function rgbToHexAndBack(value) {
    let newValue = value.trim();
    if (newValue.charAt(0) === '#') {
        //Hex
        newValue = 'rgb(' + parseInt(newValue.slice(1,3),16)+','+parseInt(newValue.slice(3,5),16)+','
            + parseInt(newValue.slice(5,7),16)+')';
    } else {
        //rgb
        newValue = newValue.toLowerCase();
        if (newValue.slice(0,4)==='rgb(' && newValue.slice(-1)===')'){
            newValue = newValue.slice(4, newValue.length - 1);
            const values = newValue.split(',');
            newValue = values.reduce((accumulator, value)=>{
                const n = parseInt(value);
                accumulator += ('00' + n.toString(16)).substr(-2);
                return accumulator;
            }, '#');
        }
    }
    return newValue;
}

export default rgbToHexAndBack;