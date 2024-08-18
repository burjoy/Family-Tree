import { useEffect, useState } from "react"
import patch_anggota_keluarga from "../../server/apis/patch_anggota_keluarga";
function Penghapusan({parent, anak}){
    const [oke, isOke] = useState(true);

    const handleOke = () => {
        isOke(() => (!oke));
    }
    useEffect(() => {
        
    },[])
    const handleHapus = async() => {
        try {
            const hasil = await patch_anggota_keluarga(parent, anak, true);
            console.log(hasil);
        } catch (error) {
            console.log(error);
        }
    }
    return(
        <>
        {oke && (
            <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
                    <div className="bg-white rounded-md p-4 text-center">
                        <h2 className="text-center">Data yang ingin anda cari tidak ketemu, hapus?</h2>
                        {/* <form action="">
                            <p>Nama</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600"/>

                            <p>Yang ingin dipanggil</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" />
                        </form> */}
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-5" onClick={handleHapus}>
                            Ya
                        </button>
                        <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={handleOke}>
                            Tidak
                        </button>
                    </div>
                </div>
        )}
        </>
    )
}

Penghapusan.propTypes
export {Penghapusan}