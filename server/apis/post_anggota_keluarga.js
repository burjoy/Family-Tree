async function post_anggota_keluarga(orangTua, anak, generasi, status_menikah, nama_pasangan, jenis_kelamin, tanggal_lahir){
    try {
        const pesan_request = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                nama_anak: anak,
                nama_orang_tua: orangTua,
                generation: generasi,
                pasangan: nama_pasangan,
                kelamin: jenis_kelamin,
                banyak_anak: [],
                date_of_birth: tanggal_lahir,
                menikah: status_menikah
            })
        }
        const response = await fetch('http://localhost:3000/family/postFamily', pesan_request);
        const hasil = response.json();
        console.log(hasil);
    } catch (error) {
        console.log(error);
    }
}

export default post_anggota_keluarga;