function theArr(arr, num) {
    try {
        if(!arr && !num) throw new ReferenceError("Submmit the parameters")
    
        if(typeof arr !== 'object') throw new TypeError("Arr is not an Object")

        if(typeof num !== 'number') throw new TypeError("Num is not a number.")

        if(arr.length !== num) throw new RangeError("Array length and the number submitted doesn't match.")
        
        return arr;
    }  
    catch(e) {
        if(e instanceof ReferenceError) {
            console.log("This error is a ReferenceError.")
            console.log(e.message)
        }else if(e instanceof TypeError) {
            console.log("This error is a TypeError.")
            console.log(e.message)
        }else if(e instanceof RangeError) {
            console.log("This error is a RangeError.")
            console.log(e.message)
        }else {
            console.log("An unexpected error occurred." + e)
        }
    }
}

console.log(theArr());