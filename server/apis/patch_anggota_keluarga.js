async function patch_anggota_keluarga(orangTua, anak, hapus_dari_kk=false){
    try {
        var endpoint;
        const pesan_request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nama_anak: anak,
                nama_orang_tua: orangTua
            })
        }
        if(hapus_dari_kk === true){
            endpoint = "deleteFamily";
        }
        else{
            endpoint = "patchFamily";
        }
        const response = await fetch(`http://localhost:3000/family/${endpoint}`, pesan_request);
        const hasil = response.json();
        console.log(hasil);
        return hasil
    } catch (error) {
        console.log(error);
    }
}

export default patch_anggota_keluarga;