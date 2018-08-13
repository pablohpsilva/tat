const functions = require('firebase-functions')

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld2 = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!")
});

exports.helloWorld = functions.storage.object().onFinalize(event => {
    const bucket = event.bucket
    const contentType = bucket.contentType
    const name = bucket.name
    console.log('bucket', bucket)
    console.log('contentType', contentType)
    console.log('name', name)
    return
})