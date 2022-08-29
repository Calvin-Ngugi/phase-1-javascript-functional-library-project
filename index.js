//code here
function standardInput(collection){
    //declaring a new variable so as to not mutate our collection
    let newCollection 
    //instanceof is used to check the type of an object at runtime
    if (collection instanceof Array){
        //returns the copy of the collection array if true
        newCollection = [...collection]
    } else {
        //and if false uses the method Object.values to turn it into an array using its values
        newCollection = Object.values(collection)
    }
    return newCollection
}

//we are to build our own methods that work as the hinted methods
function myEach(collection, callBack){
    let newCollection = standardInput(collection)
    for(let element of newCollection){
        callBack(element)
    }
    return collection
}

function myMap(collection, callBack){
    let newCol = standardInput(collection)
    let newArray = []
    for(const element of newCol){
        newArray.push(callBack(element))
    }
    return newArray
}

function myReduce(collection, callBack, acc){
    let newCollection = standardInput(collection);
    if(acc === undefined){
        acc = newCollection[0]
        newCollection = newCollection.slice(1) 
    }
    for(let i = 0; i < newCollection.length; i++){
        acc = callBack(acc, newCollection[i], newCollection)
    }
    return acc
}

function myFind(collection, predicate){
    let newCollection = standardInput(collection)
    let i = 0
    while(i < newCollection.length){
        //Predicate is a fuction that takes one value as input and returns true/false
        if (predicate(newCollection[i]) === true){
            return newCollection[i];
        } 
        //Iterating through the array/object
        i = i+1
    }
}

function myFilter(collection, predicate){
    let newCollection = standardInput(collection)
    let newArray = []
    let i = 0
    while(i < newCollection.length){
        if (predicate(newCollection[i]) === true){
            newArray.push(newCollection[i])
        } 
        i = i+1
    }
    return newArray
}

function mySize(collection){
    return standardInput(collection).length
}

function myFirst(array, n){
    let result;
    if(n){
        result = array.slice(0, n)
    }
    else{
        result = array[0]
    }
    return result
}

function myLast(array, n){
    let result;
    if(n){
        result = array.slice(array.length-n, array.length)
    }
    else{
        result = array[array.length-1]
    }
    return result
}

function myKeys(keys){
    let newKeys = Object.keys(keys)
    newKeys.join(" ")
    return newKeys   
}

function myValues(values){
    let newValues = Object.values(values)
    newValues.join(" ")
    return newValues   
}