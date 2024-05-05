// const { Card_child } = import("./cards_child");
// const { Cards } = import("./cards_parent");
import { Cards } from "./cards_parent";
import { Card_child } from "./cards_child";
import { useEffect, useState } from "react";
// import get_anggota_keluarga from "../../server/apis/get_anggota_keluarga";
import { useParams } from "react-router-dom";
import get_anggota_keluarga_spesifik from "../../server/apis/get_anggota_keluarga_spesifik";

function Utama_descendant(){
    // const [loadKeluarga, isLoadKeluarga] = useState();
    // const handleKeluarga = async() => {
    //     try {
    //         const jawaban = await get_anggota_keluarga();
    //         // console.log(jawaban[0].suami);
    //         return jawaban;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }
    const [loadKeluarga, setLoadKeluarga] = useState();
    const pilihKeluarga = (loadKeluarga) => {
        setLoadKeluarga(loadKeluarga);
    }
    const {gen, nama} = useParams();
    // const {nama} = useParams();
    useEffect(() => {
        // console.log(name?.length);
        console.log(gen);
        const hasil = async () => {
            const keluarga = await get_anggota_keluarga_spesifik(gen, nama);
        //   console.log(keluarga[0].pasangan);
        //dibawah ini buat konsep pencarian id keluarga
        //   console.log(keluarga[0].ID);
        //   const id = keluarga[0].ID;
        //   const pos = id.indexOf('A');
        //   const generasi = id.slice(1, pos);
        //   const anak = id.slice(pos+1);
        //   console.log(anak);
            console.log(keluarga);
            pilihKeluarga(keluarga[0]);
            console.log(loadKeluarga);
        //   return keluarga.json;
        }
        hasil();
        // isLoadKeluarga(hasil());
        // console.log(loadKeluarga);
        // if(hasil.suami != ""){
        //     console.log(hasil.suami);
        // }
    }, []);
    return(
        <>
            <Cards nama={loadKeluarga?.nama} pasangan={loadKeluarga?.pasangan}/>
            <Card_child anaks={loadKeluarga?.anak} generation={loadKeluarga?.generasi} pilihKeluarga={pilihKeluarga} orang_tua={loadKeluarga?.nama}/>
        </>
    )
}
export {Utama_descendant}