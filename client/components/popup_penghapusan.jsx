import { useState } from "react"
function Penghapusan(){
    const [oke, isOke] = useState(true);

    const handleOke = () => {
        isOke(() => (!oke));
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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5 mx-5" onClick={handleOke}>
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

export {Penghapusan}