import express from 'express'
import morgan from 'morgan'
import fileUpload from 'express-fileupload'
import { engine } from 'express-handlebars'

// importar rutas
import { router as skaters } from './routes/skaters.js'
import { router as views } from './routes/views.js'
import { router as auth } from './routes/auth.js'

const app = express()

app.use(morgan("dev"))
app.use(fileUpload())
app.use(express.json())
app.use(express.static('static')) // Contenido estático en carpeta static

// Handlebars
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');

// registrar rutas
app.use("/", views)        
app.use("/skaters", skaters)  
app.use("/auth", auth)    


app.listen(3000, () => {
    console.log("Servidor encendido en el puerto 3000")
})
