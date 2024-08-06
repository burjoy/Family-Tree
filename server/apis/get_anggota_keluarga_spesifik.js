const get_anggota_keluarga_spesifik = async(gen, nama) => {
    try {
        // const {encodedGen, encodedName} = encodeURIComponent(gen, name);
        // const encodedGen = encodeURI(gen);
        // const encodedName = encodeURI(name);
        // const new_name = name?.replace(" ", "%20");
        const params = {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     generasi: gen,
            //     nama: name
            // })
        }
        const response = await fetch(`http://localhost:3000/family/${gen}/${nama}`, params);
        if (!response.ok) {
            throw new Error('Error fetching family name');
        }
        console.log(gen);
        // console.log(encodeURI("Si g"));
        // console.log(new_name);
        const hasil = await response.json();
        console.log(hasil);
        // else{
        //     console.log(hasil);
        // }
        return hasil;
    } catch (error) {
        console.log(error);
    }
}

export default get_anggota_keluarga_spesifik