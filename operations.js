// const assert = require('assert').strict;

// exports.insertDocument =(db, document, collection) => {
//     const coll = db.collection(collection);
//     coll.insertOne(document, (err, result) => {
//         assert.strictEqual(err, null);
//         callback(result);
//     });
// };

exports.insertDocument =(db, document, collection) => {
    const coll = db.collection(collection);
    return coll.insertOne(document);
};

exports.findDocuments =(db, collection) => {
    const coll = db.collection(collection);
    return coll.find().toArray();
};

exports.removeDocument =(db, document, collection) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

exports.updateDocument =(db, document, update, collection) => {
    const coll = db.collection(collection);
    return coll.updateOne(document, { $set: update }, null);
};