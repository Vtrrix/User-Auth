let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')
let passport 	 	= require('passport')
let LocalStratergy 	= require('passport-local')
let User 			= require('./models/user')
let expressSession 	= require('express-session')
let middleware			= require('./middleware')
let flash           = require('connect-flash')
let app          	= express()

const PORT = process.env.PORT || 3000;
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true)

// mongoose.connect('mongodb://localhost/vtrix-auth-v3')
mongoose.connect('mongodb+srv://admin:adminPassword@primaryauth.y33jt.mongodb.net/vtrix-auth-v1?retryWrites=true&w=majority').then(() => {
	console.log('Connected to Mongo DB Database')
}).catch(err => {
	console.log('Error: ', err.message)
})

app.use(expressSession({
	secret: "Hey You yo can`t change this ",
	resave: false,
	saveUninitialized: false
}))
app.use(bodyParser.urlencoded({extended: true}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())
app.set('view engine', 'ejs')

    passport.use(new LocalStratergy(User.authenticate()))
    passport.serializeUser(User.serializeUser())
    passport.deserializeUser(User.deserializeUser())

app.use(express.static(__dirname + '/public'))

// app.use((req, res, next) => {
// 	res.locals.currentUser = req.user
// 	next()
// })

app.use((req, res, next) => {
	res.locals.currentUser = req.user
    res.locals.error = req.flash('error')
    res.locals.success = req.flash('success')  
	next()
})

app.get('/', (req, res) => {
    res.render('home.ejs');
})

app.post('/signup', (req, res) => {
    let newUser = new User({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email
    })
	User.register(newUser, req.body.password, (err, user) => {
		if(err) {
			console.log(err.message)
			req.flash('error', err.message)
			return res.render('home.ejs', {error: err.message})
		}
			passport.authenticate('local')(req, res, () => {
			// req.flash('success', 'Welcome to yelp Camp ' + user.username)
			res.redirect('/new')
		})
	})
})

app.post('/login', passport.authenticate('local', {
	successRedirect: '/new',
	failureRedirect: 'back',
	failureFlash: true
}) ,(req,res) => {

})

// app.post('/login',
//   passport.authenticate('local', { successRedirect: '/',
//                                    failureRedirect: '/login',
//                                     })
// );

app.get('/new', middleware.isLoggedIn ,(req, res) => {
	res.send('you are logged in');
})

app.listen(PORT, () => {
    console.log("Server running at port = " + PORT);
})
