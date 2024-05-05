const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

const getFamily = require('./controller/getFamilyGen');

const port = 3000;

require('dotenv').config();
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

mongoose.connect(process.env.LINK_ATLAS).
    then((response) => {
        console.log("berhasil konek bang");
    }).
    catch((error) => {
        console.log(error);
    });

app.post('/family', getFamily.getKeluarga);
app.post('/family/:gen/:names', getFamily.getKeluargaSpesifik);

app.listen(port, () => {
    console.log(`Server berjalan di ${port}`);
})