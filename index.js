const Input = function(collection){ 
    return (collection instanceof Array) ? collection.slice()
     : Object.values(collection)
}

function myEach(collection, callback){
    const newCollection = Input(collection);
        for (let idx=0; idx < newCollection.length; idx++){
            callback(newCollection[idx])
        }
    return collection
}

function myMap(collection, callback){
    const newCollection = Input(collection);
        const newArray = []
    for(let idx =0; idx < newCollection.length; idx++){
        newArray.push(callback(newCollection[idx]))
    }
return newArray
}

function myReduce (collection, callback, acc) {
    let newCollection = Input(collection);
        if (!acc) {
            acc = newCollection[0];
            newCollection = newCollection.slice(1);
    }
    for (let i = 0; i < newCollection.length; i++) {
      acc = callback(acc, newCollection[i], newCollection);
    }
    return acc;
}

function myFind (collection, predicate){
    const newCollection = Input(collection);
        for(let idx = 0; idx < newCollection.length; idx++){
            if (predicate(newCollection[idx]))
                return newCollection[idx]
        }
return undefined
}

function myFilter (collection, predicate){
    const newCollection = Input(collection);
    const newArray = []
        for(let idx =0; idx < newCollection.length; idx++ ){
            if (predicate(newCollection[idx]))
                newArray.push(newCollection[idx])
        }
return newArray 
}

function mySize(collection){
    const newCollection = Input(collection);
     return newCollection.length 
}

function myFirst(array, n=false){
    return (n) ? array.slice(0, n) : array[0]
}

function myLast (array, n=false){
    return (n) ? array.slice(array.length-n, array.length) : array[array.length-1]
}

function myKeys(object){
    const keys = []
        for(let key in object){
            keys.push(key);
        }
    return keys
}

function myValues(object) {
    const values =[]
        for (let value in object){
            values.push(object[value])
        }
    return values
}