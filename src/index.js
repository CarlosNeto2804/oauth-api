const express = require('express');
const passportLib = require('passport');
const { buildOAuthApi } = require('./auth');
const { app, passport }  = buildOAuthApi(express(), passportLib);
const { PORT = 3000 } = process.env 
app.use(passport.initialize());

app.listen(+PORT)