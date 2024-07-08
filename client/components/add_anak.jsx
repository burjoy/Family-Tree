import { useState, useRef } from "react";
import post_anggota_keluarga from "../../server/apis/post_anggota_keluarga";
import patch_anggota_keluarga from "../../server/apis/patch_anggota_keluarga";

function AddAnak({generasi, parent}){
    const formRef = useRef(null);
    const [click, isClick] = useState(true);
    const [nama_anak, set_nama_anak] = useState("");
    const [urutan_anak, set_urutan_anak] = useState();

    const handleNamaAnak = (name) => {
        set_nama_anak(name);
        console.log(nama_anak);
    }

    const handleUrutanAnak = (urutan) => {
        set_urutan_anak(urutan);
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
            const response = await patch_anggota_keluarga;
            console.log(response);
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

                            <p>Urutan Anak</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" onChange={e => handleUrutanAnak(parseInt(e.target.value))}/>
                        </form>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
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