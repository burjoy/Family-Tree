async function patch_anggota_keluarga(orangTua, anak){
    try {
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
        const response = await fetch('http://localhost:3000/family/patchFamily', pesan_request);
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

export default patch_anggota_keluarga;