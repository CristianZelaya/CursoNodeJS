const express = require('express');
const app = express();
const port = 3000;

//Servir contenido estatico
app.use(express.static('public'));


app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo');
  })

app.get('*', (req, res) => {
res.sendFile(__dirname + '/public/404.html');
})
 
app.listen(port, () => {
    console.log(`La app ejemplo esta corriendo en http://localhost:${port}`);
});


//request - req lo que se esta solicitando por parte del cliente
//response - res lo que vamos a responde dependiendo el req

//metodos get-push-put-delete
//sendFile le manda un archivo
//send envia un mensaje
//se crea el path __dirname + donde esta el archivo