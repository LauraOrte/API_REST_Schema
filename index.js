const express = require("express");
const app = express();
uploadImgs = require('./upload/imgConfig.js')


app.use(express.json());

//NIVEL 1; EJERCICIO 1
app.get('/user', function (req, res) {
    res.json({
        nomUsuario: 'Laura',
        edad: 31,
        url: 'http://localhost:3000/usuario'
    });
  });


//NIVEL 1; EJERCICIO 2
app.post('/upload',uploadImgs.single('image'), (req,res)=>{
  if(req.errorValidation){
    res.status(400).send({message: req.errorValidation})
  }
  res.status(200).send({success: true})
})
  


//NIVEL 2; EJERCICIO 3
const cacheMiddleware = (req,res,next)=>{
  res.set('Cache-control', 'no-cache')
  next()
}

app.listen(3000, () => {
  console.log("El servidor está inicializado en el puerto 3000");
 });
 