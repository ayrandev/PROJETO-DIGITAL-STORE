const dotenv = require('dotenv');
dotenv.config();

const express = require('express');
const cors = require('cors')
const imagePlaceholder = require('./middleware/image-placeholder');
const app = express();

app.use(cors());
app.use(express.json());
app.use('/public', express.static('public'));
app.use ('/public', imagePlaceholder, express.static('public'));

const userRoutes = require('./routes/User-routes');
const productsRoutes = require('./routes/Products-routes');


app.use(productsRoutes)
app.use(userRoutes)

app.listen(3000, () => {
    console.log("Servidor web inicializando em http://localhost:3000")
});