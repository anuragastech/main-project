const express =require('express');
const hbs =require ('hbs')
const path=require('path')
const  app = express();
const port =3008;



app.set('view engine', 'hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.use(express.static(path.join(__dirname,'views')));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname,'js')));
app.use(express.static(path.join(__dirname,'img')));
app.use(express.static(path.join(__dirname,'font')));
app.use(express.static(path.join(__dirname,'saas')));





app.get('/sign',(req,res)=>{
    res.render('sign');
});


app.get('/login',(req,res)=>{
    res.render('login')
})

app.get('/index',(req,res)=>{
    res.render('index')
})

app.get('/product-page',(req,res)=>{
    res.render('product-page')
})


app.get('/categories',(req,res)=>{
    res.render('categories')
});
app.get('/check-out',(req,res)=>{
    res.render('check-out')
});
app.get('/contact',(req,res)=>{
    res.render('contact')
});

app.get('/shopping-cart',(req,res)=>{
    res.render('shopping-cart')
});


app.listen(port,()=>{
    console.log(`Server is running on http://localhost:${port}`);
})


