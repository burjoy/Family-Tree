const {data_personal_keluarga} = require('../model/data');

const post_anggota_keluarga = async(req, res) => {
    try {
        const {nama_anak, nama_orang_tua, generation, pasangan, kelamin, banyak_anak, date_of_birth, menikah} = req.body;
        let status_nikah;
        let jenis_kelamin;
        if(menikah == 1){
            status_nikah = true;
        }
        else{
            status_nikah = false;
        }
        if(kelamin == 1){
            jenis_kelamin = "laki-laki";
        }
        else{
            jenis_kelamin = "perempuan";
        }
        const newDoc = {
            "nama": nama_anak,
            "kelamin": jenis_kelamin,
            "pasangan": pasangan,
            "generasi": generation,
            "anak": banyak_anak,
            "menikah": status_nikah,
            "umur": 20,
            "ID": "G2A2 Contoh Aja",
            "tanggal_lahir": date_of_birth
        }
        const updatedDoc = await data_personal_keluarga.insertMany(newDoc);
        console.log(updatedDoc);
        const doc = await data_personal_keluarga.find({"nama": nama_anak});
        console.log(doc);
        res.json(doc);
    } catch (error) {
        console.log(error);
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