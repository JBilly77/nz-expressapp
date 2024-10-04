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

// routes
app.get('/', (req, res) => {
     res.render('home');
});

app.get('/catalog', (req, res) => {
    res.render('catalog')
});

app.get('/about', (req, res) => {
    res.render('about')
});





app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));