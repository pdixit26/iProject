let express = require('express');
let bodyParser = require('body-parser');
let morgan = require('morgan');
let pg = require('pg');
const PORT = 3000; 

let pool = new pg.Pool({
	user:'gnqjtcrzjtfwqd',
	database: 'd25knk4v6tpvja',
	password: '0ff51153df38137a800d7dc3980aa0d5c82a16b671a8991d83eed7d17ba5afa4',
	host:'ec2-54-197-234-33.compute-1.amazonaws.com',
	port: 5432,
	URI:'postgres://gnqjtcrzjtfwqd:0ff51153df38137a800d7dc3980aa0d5c82a16b671a8991d83eed7d17ba5afa4@ec2-54-197-234-33.compute-1.amazonaws.com:5432/d25knk4v6tpvja'
});
/*
pool.connect((err, db, done) =>{
	if(err){
		return console.log("pooja "+ err);
	}
	else {
		var tableid = 'Table1';
		var devicetype = 'Phone';
		var C0R0 = 'R1';
		var C0R1 = 'R2';
		var C0R2 = 'R3';
		var C1R0 = '1';
		var C1R1 = '2';
		var C1R2 = '3';
		var C2R0 = '4';
		var C2R1 = '5';
		var C2R2 = '6';
		db.query('INSERT INTO DeviceTable (tableid,devicetype,c0r0,c0r1,c0r2,c1r0,c1r1,c1r2,c2r0,c2r1,c2r2) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [tableid,devicetype,C0R0,C0R1,C0R2,C1R0,C1R1,C1R2,C2R0,C2R1,C2R2], (err, table) => {
		//db.query('SELECT * FROM  country', (err, table) => {
			if(err)
			{
				return console.log("dixit "+ err);
			}
			else
			{
				console.log("INSERTED!!!!");
				db.end();
			}
		})
	}
});
*/

let app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(morgan('dev'));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});



app.post('/api/new-table', function(req, res){
	let tableid = req.body.tableid;
	let devicetype = req.body.devicetype;
	let c0r0 = req.body.c0r0;
	let c0r1 = req.body.c0r1;
	let c0r2 = req.body.c0r2;
	let c1r0 = req.body.c1r0;
	let c1r1 = req.body.c1r1;
	let c1r2 = req.body.c1r2;
	let c2r0 = req.body.c2r0;
	let c2r1 = req.body.c2r1;
	let c2r2 = req.body.c2r2;
	console.log(req.body.tableid);
pool.connect((err, db, done) =>{
	if(err){
		return console.log("pooja post"+ err);
	}
	else {
		
		db.query('INSERT INTO DeviceTable (tableid,devicetype,c1r0,c1r1,c1r2,c2r0,c2r1,c2r2,c0r0,c0r1,c0r2) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)', [tableid,devicetype,c1r0,c1r1,c1r2,c2r0,c2r1,c2r2,c0r0,c0r1,c0r2], (err, table) => {
		//db.query('SELECT * FROM  country', (err, table) => {
			if(err)
			{
				return res.status(400).send(err);
			}
			else
			{
				console.log("DATA INSETED!!");
				return res.status(201).send({status:'OK'});
				db.end();
			}
		})
	}
});

})


app.listen(process.env.PORT || PORT, ()=> console.log('listening **** Port#' + PORT));