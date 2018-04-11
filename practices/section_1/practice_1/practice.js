'use strict';
function collect_same_elements(collection_a, collection_b) {
  var collection = [];

  for (var i = 0; i < collection_a.length; i++) {
    for (var j = 0; j < collection_b.length; j++) {
      if (collection_a[i] === collection_b[j]) {
        collection.push(collection_a[i]);
      }
    }
  }
  return collection;
}

module.exports = collect_same_elements;