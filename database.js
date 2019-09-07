const mongoose = require('mongoose');

const URL = {
    local: 'mongodb://localhost/domiciliosComida',
    local2: 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb',
    atlas: 'mongodb+srv://admin123:vientosur@anti-cluster-ecidb.mongodb.net/test?retryWrites=true&w=majority'
}

mongoose.connect(URL.local, { useNewUrlParser: true })
    .then(() => console.log(`· · Database is active 🌞`))
    .catch(err => console.error("moongose error 👿 :", err));




