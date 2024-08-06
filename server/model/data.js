const mongoose = require('mongoose');

const format_keluarga = new mongoose.Schema(
    {
        nama: String,
        kelamin: String,
        pasangan: String,
        menikah: Boolean,
        anak: Array,
        generasi: Number,
        ID: String,
        tanggal_lahir: Date
    });

const data_personal_keluarga = mongoose.model("keluarga", format_keluarga, "test_drive");

module.exports = {data_personal_keluarga};