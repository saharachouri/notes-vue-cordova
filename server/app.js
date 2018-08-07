var http = require('http');
var mongoose = require("mongoose");
var bodyParser = require('body-parser');
var express = require('express');
var cors = require('cors');
var path = require('path');

// App Config
var app = express();
var port = process.env.PORT || 5000;
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors());

// MongoDB Connection
var uri =
	process.env.MONGODB_URI ||
	'mongodb://root:root12@ds111012.mlab.com:11012/notes';
mongoose.connect(uri, function (err, res) {
	if (err) {
		console.log('ERROR connecting to: ' + uri + '. ' + err);
	} else {
		console.log('Succeeded connected to: ' + uri);
	}
});

// Note Schema
var NoteSchema = new mongoose.Schema({
	title: {
		type: String,
		required: 'Kindly enter the title of the note'
	},
	description: {
		type: String,
		required: 'Kindly enter the description of the note'
	},
	color: {
		type: String,
		required: 'Kindly enter the color of the note'
	},
	createdAt: {
		type: Date,
		default: Date.now
	}
});
var Note = mongoose.model('Notes', NoteSchema);

// Get All Notes
app.route('/notes').get(function (req, res) {
	Note.find({}, function (err, note) {
		if (err)
			res.send(err);
		res.json(note);
	});
});

// Add New Note
app.route('/notes').post(function (req, res) {
	var newNote = new Note(req.body);
	newNote.save(function (err, note) {
		if (err)
			res.send(err);
		res.json({message: 'Note successfully added'});
	});
});

// Find Note By ID
app.route('/notes/:noteId').get(function (req, res) {
	Note.findById(req.params.noteId, function (err, note) {
		if (err)
			res.send(err);
		res.json(note);
	});
});

// Update Note
app.route('/notes/:noteId').put(function (req, res) {
	Note.findOneAndUpdate({_id: req.params.noteId}, req.body, {new: true}, function (err, note) {
		if (err)
			res.send(err);
		res.json({message: 'Note successfully updated'});
	});
});

// Delete Note
app.route('/notes/:noteId').delete(function (req, res) {
	Note.remove({
		_id: req.params.noteId
	}, function (err, note) {
		if (err)
			res.send(err);
		res.json({message: 'Note successfully deleted'});
	});
});

app.route('/').get(function (req, res) {
	res.sendFile(path.join(__dirname + '/index.html'));
});


// Route Not Found
app.use(function (req, res) {
	res.status(404).send({url: req.originalUrl + ' not found'})
});

// Listen app
app.listen(port);
console.log('http server will be listening on port %d', port);
console.log('CTRL+C to exit');

