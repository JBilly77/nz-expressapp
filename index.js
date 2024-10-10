import express from "express";
import morgan from 'morgan';


const app = express();
const PORT = 4000;

// setup
app.set('view engine', 'pug');
app.set('views', './views');

// middleware
app.use(express.static('public'));
app.use(morgan('dev')); // logger
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
     res.render('home');
});

app.get('/catalog', (req, res) => {
    res.render('catalog', {name: 'Love'});
});

app.get('/about', (req, res) => {
    res.render('about')
});

app.post('/catalog', (req, res) => {
    const caText = req.body.text1
    res.render('catalog', {text1:caText});
    console.log("Success!");
});




app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));