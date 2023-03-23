const express = require('express');
const app = express();
const cors = require('cors')
const port = 3000;

app.use(express.json());
// app.use((req, res, next) => {
//     // console.log('acessou o middleware');
   
//     app.use(cors())
//     next()
// });

app.use(cors())

app.listen(port, console.log(`server is conected in port ${port}`));

app.get('/', (req, res) => {
    res.send("pagina inicial")
})

const routes = require('./router')
app.use(routes);



const prisma = require('./database');
prisma.$connect()
.then(() => console.log('deu certo!!'))
.catch((error) => console.log(error));
