const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.unsubscribe(express.json());
app.use(express.urlencoded( { extended: true}));
app.unsubscribe(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/what-are-your-thoughts', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
});

mongoose.set('debug', true);

app.use(require('./routes'));

app.listen(PORT, () => console.log(`🌎 Connected on localhost: ${PORT}`));