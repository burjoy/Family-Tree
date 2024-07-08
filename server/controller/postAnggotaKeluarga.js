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
    } catch (error) {
        console.log(error);
    }
}

module.exports = {post_anggota_keluarga, patch_anggota_keluarga}