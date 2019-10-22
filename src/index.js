const express = require('express');
const app = express();
const Routes = require('./routes/index');

const path = require('path');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(Routes);

app.use(express.static(path.join(__dirname, 'public')));

app.set('port',process.env.PORT || 3000);


app.listen(3000, () => {
    console.log('Server on port 3000');
});
