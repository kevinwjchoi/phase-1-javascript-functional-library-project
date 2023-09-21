function myEach (collection, callback){
    if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i]);
        }
      } else if (typeof collection === 'object') {
        for (let key in collection) {
          callback(collection[key]);
        }
      }
    
      return collection;
    };
function myMap (collection, callback){
    let newArray = [];

    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        newArray.push(callback(collection[i]));
      }
    } else if (typeof collection === 'object') {
      for (let key in collection) {
        newArray.push(callback(collection[key]));
      }
    }
  
    return newArray;
};

function myReduce (collection, callback, acc){
    if (Array.isArray(collection)){
        let startIdx = 0;

        if (acc === undefined) {
            acc = collection[0];
            startIdx = 1;
        }
        for (let i = startIdx; i < collection.length; i++){
            acc = callback(acc, collection[i], collection);
            }
        }
        else if (typeof collection === 'object') {
            let keys = Object.keys(collection);
        
            if (acc === undefined) {
              acc = collection[keys[0]];
              keys = keys.slice(1);
            }
            for (let i = 0; i < keys.length; i++) {
                let key = keys[i];
                acc = callback(acc, collection[key], collection);
              }
            }
          
            return acc;    
        
    };

    function myFind(collection, predicate) {
        if (Array.isArray(collection)) {
          for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
              return collection[i];
            }
          }
        } else if (typeof collection === 'object') {
          for (let key in collection) {
            if (predicate(collection[key])) {
              return collection[key];
            }
          }
        }
      
        return undefined;
      }

      function myFilter(collection, predicate) {
        let filteredArray = [];
      
        if (Array.isArray(collection)) {
          for (let i = 0; i < collection.length; i++) {
            if (predicate(collection[i])) {
              filteredArray.push(collection[i]);
            }
          }
        } else if (typeof collection === 'object') {
          for (let key in collection) {
            if (predicate(collection[key])) {
              filteredArray.push(collection[key]);
            }
          }
        }
      
        return filteredArray;
      }

      function mySize(collection) {
        if (Array.isArray(collection)) {
          return collection.length;
        } else if (typeof collection === 'object') {
          return Object.keys(collection).length;
        }
      
        return 0;
      }

      function myFirst(array, n) {
        if (n === undefined) {
          return array[0];
        } else {
          return array.slice(0, n);
        }
      }
      function myLast(array, n) {
        if (n === undefined) {
          return array[array.length - 1];
        } else {
          return array.slice(-n);
        }
      }
      function myKeys(object) {
        return Object.keys(object);
      }
      
      function myValues(object) {
        return Object.values(object);
      }