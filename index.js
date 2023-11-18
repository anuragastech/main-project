const express =require('express');
const hbs =require ('hbs')
const  app = express();
const port =3006;

app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('img'));
app.use(express.static('font'));
app.use(express.static('sass'));
app.use(express.static('source'));


app.get('/sign',(req,res)=>{
    res.render('sign');
});


app.get('/',(req,res)=>{
    res.render('login')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})


