const express = require ('express');
const bodyParser = require('body-parser');
const { append } = require('express/lib/response');
const multer = require('multer');
const MongoClient = require('mongodb').MongoClient;
const app = express();
const port = 8080;
const url = 'mongodb://localhost:27017';
const urlencodedParser = bodyParser.urlencoded({ extended: false });

const blogs = [
    {
        url: 'intro_to_coding',
        name: 'intro to coding',
        description: 'lorelore',
        body: 'ololololo'

    },
    {
        url: 'intro_to_coding_101',
        name: 'coding 101',
        description: 'learning how to code',
        body: 'ololololo'  
    }
   ]
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

app.use(express.static('public'));

app.set('view engine', 'pug');



app.get('/', (req,res) => {
    res.render('index', {blogs});
});

app.get('/create', (req,res) => {
    res.render('create');
});

app.get('/blog/:id', (req,res) => {
    res.render('blog', {blog: blogs[0]});
});

app.post('/blog/', (req,res) => {
});

app.patch('/blog/:id', (req,res) => {
});

app.delete('/blog/:id', (req,res) => {
});

app.use((req,res,next) => {
    res.status(404);
    res.render('404');
    return;
});
