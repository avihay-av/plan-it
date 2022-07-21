const express =  require('express');
const  cors = require('cors');
const  bodyParser = require( 'body-parser');

const  port = 8083;
const app = express();


app.use([cors(),express.json()]);
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port, () => {console.log( `Server is Running on Port: http://localhost:${port}`); })
