const express = require('express');
const conectarBD = require('./config/bd');

const app = express();

conectarBD();


app.use( express.json({ extended: true }));


const PORT = process.env.PORT || 4000;



app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/books', require('./routes/books'));




app.get('/',(req,res)=>{res.send('Hola mundo')})

app.listen(PORT,()=>{console.log('El servidor esta funcionando por el puerto ${PORT}')})