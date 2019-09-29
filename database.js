const mongoose = require('mongoose');
const { dbHost, dbUser, dbPassword } = require('./config')


const URL = {
    local: 'mongodb://localhost/domiciliosComida',
    local2: 'mongodb://127.0.0.1:27017/?gssapiServiceName=mongodb',
    atlas: `mongodb+srv://${dbUser}:${dbPassword}@${dbHost}/test?retryWrites=true&w=majority`
}

mongoose.connect(URL.atlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log(`· · 🌞 Database is active`))
    .catch(err => console.error("!!! 👿 moongose error :", err));




