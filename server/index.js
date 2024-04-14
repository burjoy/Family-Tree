const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const port = 3000;

require('dotenv').config();

mongoose.connect(process.env.LINK_ATLAS).
    then((response) => {
        console.log("berhasil konek bang");
    }).
    catch((error) => {
        console.log(error);
    });
