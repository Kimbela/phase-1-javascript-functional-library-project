function myEach(collection, callback) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        callback(collection[i], i, collection);
      }
    } else {
      const keys = Object.keys(collection);
      for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        callback(collection[key], key, collection);
      }
    }
    return collection;
  }
  function myMap(collection, callback) {
    const result = [];
    myEach(collection, function(value, key, collection) {
      result.push(callback(value, key, collection));
    });
    return result;
  }
  function myReduce(collection, callback, acc) {
    myEach(collection, function(value, key, collection) {
      if (acc === undefined) {
        acc = value;
      } else {
        acc = callback(acc, value, collection);
      }
    });
    return acc;
  }
  function myFind(collection, predicate) {
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          return collection[i];
        }
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          return values[i];
        }
      }
    }
  
    return undefined;
  }
  function myFilter(collection, predicate) {
    const result = [];
    if (Array.isArray(collection)) {
      for (let i = 0; i < collection.length; i++) {
        if (predicate(collection[i])) {
          result.push(collection[i]);
        }
      }
    } else if (typeof collection === 'object') {
      const values = Object.values(collection);
      for (let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          result.push(values[i]);
        }
      }
    }
  
    return result;
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
    }
    return array.slice(0, n);
  }
  function myLast(array, n) {
    if (n === undefined) {
      return array[array.length - 1];
    }
    return array.slice(Math.max(array.length - n, 0));
  }
  function myKeys(object) {
    return Object.keys(object);
  }
  function myValues(object) {
    return Object.values(object);
  }
 
  
  
  
  
  
  
  
