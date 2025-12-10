// load express
const express = require('express');
// load handlebars
const exphbs = require('express-handlebars');

// instantiate express
const app = express();

//Event Listeners



// configure express to use handlebars as templating engine
app.engine(
  'hbs',
  exphbs.engine({
    extname: '.hbs',
    // use this layout by default - if you have different layout
    // for say home page - you can toggle this in your code
    defaultLayout: 'default',
    // set location of layouts
    layoutsDir: 'views/layouts',
    // set location of partials - header, footer, etc
    partialsDir: 'views/partials',
  })
);
// set the view engine to handlesbards
app.set('view engine', 'hbs');
// where to find all of the view
app.set('views',  'views');
// where to find static files - css, images, js
app.use(express.static('public'));

// home page or home route
app.get('/', (req, res) => {

  // set active for navigation
  state={home:true}
  // set specifics for <head>
  head={title: "Home", description:"This is the home page of the website", keywords: "animal rescue, rescue, dog, kitten, fundraiser"}
  // pass object to to render in "index"
  res.render('index', {state:state, head:head});
  // send this to terminal where node app is running
  console.log('home')

});

 app.get('/about', (req, res) => {
    state={about : true}
    head={title:"About Us", description:"This is the about page of the website", keywords: "animal rescue, history, rescue, vet, volunteer"}
    res.render('about', { state:state, head:head});
    console.log('about')
  });

  //shop route
  app.get('/shop', (req, res) => {
    state={shop : true}
    head={title:"Shop", description:"This is the website shop", keywords: "lead, tag, dog food"}
    res.render('shop', { state:state, head:head});
    console.log('shop')
  });

  app.get('/login', (req, res) => {
    state={login : true}
    head={title:"Login", description:"This is the website login page", keywords: "username, password"}
    res.render('login', { state:state, head:head});
    console.log('login')
  });

  app.get('/register', (req, res) => {
    state={register : true}
    head={title:"Register", description:"This is the website register page", keywords: "username, password"}
    res.render('register', { state:state, head:head});
    console.log('register')
  });

  app.get('/forgotPassword', (req, res) => {
    state={forgotPassword : true}
    head={title:"Forgot Password", description:"", keywords: "username, password"}
    res.render('forgotPassword', { state:state, head:head});
    console.log('forgotPassword')
  });

   app.get('/checkout', (req, res) => {
    state={checkout : true}
    head={title:"Checkout", description:"This is the website checkout page", keywords: "username, password"}
    res.render('checkout', { state:state, head:head});
    console.log('checkout')
  });

// contact route
app.get('/animals', (req, res) => {
    state={animals : true}
    head={title:"Animals For Adoption", description:"This page shows the animals available for adoption", keywords: "animal rescue, rescue, adoption, pets, dogs, cats, horses"}
    res.render('animals', { state:state, head:head});
    console.log('animals')
  });

  app.get('/success', (req, res) => {
    state={success : true}
    head={title:"Success Stories", description:"This page shares success stories about animals adopted from the shelter", keywords: "animal rescue, rescue, adoptions, report, pet"}
    res.render('success', { state:state, head:head});
    console.log('success')
  });

  app.get('/adoption', (req, res) => {
    state={adoption : true}
    head={title:"Adoption Form", description:"This page has an adoption application whihc can be filled out to start the adoption process", keywords: "animal rescue, rescue, adoption, applicaiton form, veterinary clinic, pets, children"}
    res.render('adoption', { state:state, head:head});
    console.log('adoption')
  });

  app.get('/contact', (req, res) => {
    state={contact : true}
    head={title:"Contact US", description:"This is the contact us page of the website", keywords: "animal rescue, address, opening hours, phone, email, social media, volunteers"}
    res.render('contact', { state:state, head:head});
    console.log('contact')
  });

  app.get('/userDetails', (req, res) => {
    state={userDetails : true}
    head={title:"User Details", description:"", keywords: ""}
    res.render('userDetails', { state:state, head:head});
    console.log('userDetails')
  });
  

  app.get('/submission', (req, res) => {
    formDetails = {email:req.query.email, password:req.query.password}
    res.render('submission', {state,formDetails});

  });

    app.get('/registerSubmission', (req, res) => {
    formDetails = {email:req.query.email, password:req.query.password, reenterpassword:req.query.reenterpassword}
    res.render('registerSubmission', {state,formDetails});

  });

   app.get('/newPasswordSubmission', (req, res) => {
    formDetails = {email:req.query.email, code:req.query.code, password:req.query.password, reenterpassword:req.query.reenterpassword}
    res.render('newPasswordSubmission', {state,formDetails});

  });

  app.get('/orderDetails', (req, res) => {
    formDetails = {firstname:req.query.firstname, lastname:req.query.lastname, address1:req.query.address1, address2:req.query.address2, address3:req.query.address3}
    res.render('orderDetails', {state,formDetails});

  });
 

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});