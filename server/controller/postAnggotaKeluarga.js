const {data_personal_keluarga} = require('../model/data');

const post_anggota_keluarga = async(req, res) => {
    try {
        
    } catch (error) {
        
    }
}

const patch_anggota_keluarga = async(req, res) => {
    try {
        const {nama_anak, nama_orang_tua} = req.body;
        console.log(nama_orang_tua);
        console.log(nama_anak);
        // const existing_document = await data_personal_keluarga.findOne({"nama": nama_orang_tua});
        // console.log(existing_document.anak);
        const updatedDoc = await data_personal_keluarga.findOneAndUpdate({"nama": nama_orang_tua}, {$push: {
            "anak": nama_anak
        }});
        console.log(updatedDoc);
        const doc = await data_personal_keluarga.findOne({"nama": nama_orang_tua});
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {post_anggota_keluarga, patch_anggota_keluarga}