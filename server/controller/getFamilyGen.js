const {data_personal_keluarga} = require('../model/data');

const getKeluarga = async(req, res) => {
    const {generasi, nama} = req.body;
    // const generasi = req.params.gen;
    // const nama = req.params.name;
    // const name = req.params.nama;
    const jawaban = await data_personal_keluarga.find({"generasi": generasi, "nama":nama});
    console.log(jawaban);
    // res.status(200);
    res.json(jawaban);
};

const getKeluargaSpesifik = async(req, res) => {
    // const {generasi, nama} = req.body;
    const gen = req.params.gen;
    const nama = req.params.names;
    // const name = req.params.nama;
    const jawaban = await data_personal_keluarga.find({"generasi": gen, "nama":nama});
    console.log(gen);
    console.log(jawaban);
    // res.status(200);
    res.json(jawaban);
};

module.exports = {getKeluarga, getKeluargaSpesifik};
// export {getKeluarga}