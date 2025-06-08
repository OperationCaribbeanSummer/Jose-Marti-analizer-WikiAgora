const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const cookieParser = require('cookie-parser');
const compression = require('compression');
require('dotenv').config();

const statusJoseMartiRoutes = require('./routes/statusJoseMartiRoutes');
const quotesJoseMartiRoutes = require('./routes/quotesJoseMartiRoutes');
const worksJoseMartiRoutes = require('./routes/worksJoseMartiRoutes');
const worksAboutJoseMartiRoutes = require('./routes/worksAboutJoseMartiRoutes');
const artsJoseMartiRoutes = require('./routes/artsJoseMartiRoutes');
const datesJoseMartiRoutes = require('./routes/datesJoseMartiRoutes');
const placesJoseMartiRoutes = require('./routes/placesJoseMartiRoutes');

const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());
app.use(helmet());
app.use(compression({ brotli: { enabled: true } }));
app.use(cors({ methods: ['GET', 'POST', 'PATCH', 'DELETE'] }));

////////////////////////////////////////////
// NOTE: ROUTES
app.use('/api/v3/jose-marti/quotes', quotesJoseMartiRoutes);
app.use('/api/v3/jose-marti/works', worksJoseMartiRoutes);
app.use('/api/v3/jose-marti/works-about', worksAboutJoseMartiRoutes);
app.use('/api/v3/jose-marti/arts', artsJoseMartiRoutes);
app.use('/api/v3/jose-marti/dates', datesJoseMartiRoutes);
app.use('/api/v3/jose-marti/places', placesJoseMartiRoutes);
// app.use('/api/v3/jose-marti/auth', authRoutes);
// app.use('/api/v3/jose-marti/user', userRoutes);

// test endpoint
app.get('/api/v3/jose-marti/test', (req, res) => {
  res.status(200).json({
    status: "success",
    response: 44
  });
});

// status endpoint
app.use('/api/v3/jose-marti/status', statusJoseMartiRoutes);

////////////////////////////////////////////
// NOTE: web basic system/documents
app.get('/api/v3/jose-marti/robots.txt', (req, res) => {
  res.sendFile('/public/robots.txt');
});
app.get('/api/v3/jose-marti/humans.txt', (req, res) => {
  res.sendFile('/public/humans.txt');
});
app.get('/api/v3/jose-marti/urllist.txt', (req, res) => {
  res.sendFile('/public/urllist.txt');
});
app.get('/api/v3/jose-marti/.well-known/security.txt', (req, res) => {
  res.sendFile('/public/security.txt');
});
// app.get('/api/v3/jose-marti/:favicon', (req, res) => {
app.get('/api/v3/:favicon', (req, res) => {
  if (req.params.favicon === 'favicon.png') {
    res.sendFile('/public/favicon.png');
  };
  if (req.params.favicon === 'favicon.svg') {
    res.sendFile('/public/favicon.svg');
  } else {
    // res.sendFile('/public/favicon.ico');
    res.sendFile('/favicon.ico');
  }
});

////////////////////////////////////////////
// NOTE: 404 error handler
app.get('/api/v3/jose-marti/*', (req, res) => {
  res.status(404).json({
    status: "fail",
	message: "404! Democracy not found #404DemocracyNotFound"
  });
});

////////////////////////////////////////////
// NOTE: server and database
mongoose
  .connect(process.env.MONGODB_URI, {})
  .then(() => console.log('✅ DB connection successful!'))
  .catch((error) => console.log('DB ERROR' + error));

const PORT = process.env.PORT || 4444;
app.listen(PORT, () => {
  console.log(`✅ App running on PORT ${PORT}!`);
});
