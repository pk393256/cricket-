const express = require('express')
const cors = require('cors')
const app = express()
const dotenv = require('dotenv')
dotenv.config();
app.use(cors())
app.use(express.json());

const PORT = process.env.PORT || 8080

