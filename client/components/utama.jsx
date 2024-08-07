// const { Card_child } = import("./cards_child");
// const { Cards } = import("./cards_parent");
import { Cards } from "./cards_parent";
import { Card_child } from "./cards_child";
import { useEffect, useState } from "react";
import get_anggota_keluarga from "../../server/apis/get_anggota_keluarga";
import { AddAnak } from "./add_anak";
import { Adder } from "./adder_form";

function Utama(){
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
    // const [counter, incCounter] = useState(0);
    const [loadKeluarga, setLoadKeluarga] = useState();
    const [addAnggotaBaru, isAnggotaBaruAdded] = useState();
    const pilihKeluarga = (loadKeluarga) => {
        setLoadKeluarga(loadKeluarga);
    }
    // const gens = generation + 1;
    const [isAdderCall, setAdderCalled] = useState(null);
    const [add_anak, set_add_anak] = useState(null);
    useEffect(() => {
        const hasil = async () => {
            const keluarga = await get_anggota_keluarga();
        //   console.log(keluarga[0].pasangan);
        //dibawah ini buat konsep pencarian id keluarga
        //   console.log(keluarga[0].ID);
        //   const id = keluarga[0].ID;
        //   const pos = id.indexOf('A');
        //   const generasi = id.slice(1, pos);
        //   const anak = id.slice(pos+1);
        //   console.log(anak);
            console.log(keluarga[0]?.nama);
            pilihKeluarga(keluarga[0]);
            console.log(loadKeluarga);
        //   return keluarga.json;
        }
        hasil();
        console.log(isAdderCall);
        if(isAdderCall == false){
            setAdderCalled(true);
        }
        // if(add_anak == false){
        //     set_add_anak(true);
        // }
        // isLoadKeluarga(hasil());
        // console.log(loadKeluarga);
        // if(hasil.suami != ""){
        //     console.log(hasil.suami);
        // }
    }, [isAdderCall, addAnggotaBaru]);
    useEffect(() => {
        if(add_anak == false){
            set_add_anak(true);
        }
    }, [add_anak]);
    const handleAddAnak = () => {
        set_add_anak(!add_anak);
        console.log(add_anak);
    }
    return(
        <>
            <Cards nama={loadKeluarga?.nama} pasangan={loadKeluarga?.pasangan}/>
            <Card_child anaks={loadKeluarga?.anak} generation={loadKeluarga?.generasi} pilihKeluarga={pilihKeluarga} orang_tua={loadKeluarga?.nama}/>
            <div className="person hover:cursor-pointer p-7 rounded-md mt-10 w-[30%] mx-auto">
                {/* <img src="https://placehold.co/100x100" alt="Daughter"/> */}
                {/* <!-- <div className="connection"></div> --> */}
                <div className="person-name text-center">Tambah Anak
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm" onClick={handleAddAnak}>
                Add Anak
                </button>
            </div>
            {/* <p>{counter}</p><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={() => incCounter(counter + 1)}></button> */}
            {add_anak && <AddAnak generasi={loadKeluarga?.generasi + 1} parent={loadKeluarga?.nama} anggota_baru={isAnggotaBaruAdded}/>}
            {isAdderCall && <Adder />}
        </>
    )
}
export {Utama}