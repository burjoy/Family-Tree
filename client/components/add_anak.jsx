import { useState, useRef } from "react";
import post_anggota_keluarga from "../../server/apis/post_anggota_keluarga";
import patch_anggota_keluarga from "../../server/apis/patch_anggota_keluarga";

function AddAnak({generasi, parent, anggota_baru}){
    const formRef = useRef(null);
    const [click, isClick] = useState(true);
    const [nama_anak, set_nama_anak] = useState("");
    const [nama_pasangan, set_nama_pasangan] = useState("");
    const [married, isMarried] = useState(null);
    const [tanggal_lahir, set_tanggal_lahir] = useState();

    const handleNamaAnak = (name) => {
        set_nama_anak(name);
        console.log(nama_anak);
    }

    const handleNamaPasangan = (pasangan) => {
        set_nama_pasangan(pasangan);
        console.log(nama_pasangan);
    }

    const handleTanggalLahirAnak = (tanggal) => {
        set_tanggal_lahir(tanggal);
        console.log(tanggal_lahir);
    }

    const inputHandle = (e) => {
        isMarried(e.target.value);
        console.log(married);
        console.log(typeof married);
    }

    const submitHasilKeluarga = async() => {
        try {
            const response = await post_anggota_keluarga;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }

    const patchKeluarga = async() => {
        try {
            const response = await patch_anggota_keluarga(parent, nama_anak);
            // console.log(response);
            anggota_baru(response);
        } catch (error) {
            console.log(error);
        }
    }

    const handleClick = (e) => {
        console.log(formRef.current)
        if (formRef.current && formRef.current.contains(e.target)) {
            isClick(true);
        }
        else{
            isClick(() => {!click});
        }
        console.log("clicked");
    };

    // const inputHandle = (e) => {
    //     console.log("test");
    // }
    return(
        <>
            {click && (
             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={handleClick}>
                    <div ref={formRef} className="bg-white rounded-md p-4 text-center">
                        <h2 className="text-center">Form penambahan data anak</h2>
                        <form action="">
                            <p>Nama Anak</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={e => handleNamaAnak(e.target.value)}/>

                            <p>Tanggal Lahir</p>
                            <input type="date" className="border rounded-lg text-center focus:border-red-600" onChange={e => handleTanggalLahirAnak(e.target.value)}/>

                            <p>Status Menikah</p>
                            <select name="status" id="" className="border rounded-lg text-center focus:border-red-600" onChange={inputHandle}>
                                {(married == null) ? (<option></option>) : (<></>)}
                                <option value="1">Sudah</option>
                                <option value="0">Belum</option>
                            </select>
                            {married == 1 && (<>
                                <p>Nama Pasangan</p>
                                <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={e => handleNamaPasangan(e.target.value)}/>
                            </>)}
                        </form>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={patchKeluarga}>
                            Submit Hasil
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

AddAnak.propTypes;
export {AddAnak};