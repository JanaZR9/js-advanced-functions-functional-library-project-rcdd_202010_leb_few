const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

  each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection)
        for (let i=0; i<newCollection.length;i++)
        {
          callback(newCollection[i]);
        }
        return collection;
    },

    map: function(collection, callback) {
       const newCollection = (collection instanceof Array) ? collection.slice() : Object.values(collection);
       const newAr=[];
        for (let i=0; i<newCollection.length;i++)
        {
          newAr.push(callback(newCollection[i]));
        }
        return newAr;
    },

    reduce: function(collection, callback, acc=0) {
       if (acc===0) {
				acc = collection[0]
				collection = collection.slice(1)
			}
       const newAr=[];
        for (let i=0; i<collection.length;i++)
        {
          acc = callback(acc, collection[i], collection)
			}
			return acc;
    },

    //functions: function() {

   // },


  }
})()

fi.libraryMethod()
