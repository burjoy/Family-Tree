const get_anggota_keluarga = async(gen= 1, name="Si A") => {
    try {
        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                generasi: gen,
                nama: name
            })
        }
        const response = await fetch('http://localhost:3000/family', params);
        if (!response.ok) {
            throw new Error('Error fetching family name');
        }
        const hasil = await response.json();
        // else{
        //     console.log(hasil);
        // }
        return hasil;
    } catch (error) {
        console.log(error);
    }
}

export default get_anggota_keluarga