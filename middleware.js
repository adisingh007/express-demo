const express = require('express')
const app = express()

const LoggerMiddleware = (req, res, next) => {
	console.log(`Logged ${req.url} - ${req.method} - ${new Date()}`);
	next();
};

app.use(LoggerMiddleware);

app.get('/livecheck', (req, res) => {
	res.json({
		'status': true,
	});
});

app.listen(3002,(req,res) => {
    console.log('server running on port 3002');
});
