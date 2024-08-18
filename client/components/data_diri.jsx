import { useState, useRef, useEffect } from "react";
import get_anggota_keluarga_spesifik from "../../server/apis/get_anggota_keluarga_spesifik";
import Loading from "./loadingButton";
import { Penghapusan } from "./popup_penghapusan";

function Data_diri({generasi, nama}){
    const formRef = useRef(null);
    const [click, isClick] = useState(true);
    const [loading, setLoading] = useState();
    const [peringatan, setPeringatan] = useState(false);
    const [dataKeluarga, setDataKeluarga] = useState();
    console.log(`Nama yang terpilih: ${nama} dari generasi ${generasi}`);
    // const timeOut = setTimeout(() => {setLoading(false)}, 1000);
    const handleLoading = () => {
        setLoading(true);
        // timeOut;
        setTimeout(() => {setLoading(false)}, 1000);
        // isCalled(true);
        // setLoading(false);
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
    useEffect(() => {
        const get_family_member = async() => {
            try {
                setLoading(true);
                const keluarga = await get_anggota_keluarga_spesifik(generasi, nama);
                if(typeof keluarga[0] !== "undefined"){
                    console.log(`fetched data ni keluarga: ${keluarga[0]}`);
                    setLoading(false);
                    setDataKeluarga(keluarga);
                }
                else{
                    alert("Data yang Anda ingin cari tidak ada di database");
                    setPeringatan(true);
                    setLoading(null);
                }
                console.log(keluarga);
                console.log(typeof keluarga);
                console.log("another process");
            } catch (error) {
                console.log(error);
            }
        }
        get_family_member();
    },[]);
    console.log(`Loading state: ${loading}`);
    return(
        <>
            {click && loading == false && (
             <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={handleClick}>
                    <div ref={formRef} className="bg-white rounded-md p-4 text-center">
                        <h2 className="text-center font-bold mb-4">Form pergantian data</h2>
                        <form action="">
                            <p>Nama</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" value={nama}/>

                            <p>Yang ingin dipanggil</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600"/>

                            {/* <p>Urutan Anak</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" /> */}
                        </form>
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5" onClick={console.log("Dapet data")}>
                            Ubah Data
                        </button>
                    </div>
            </div>
            )}
            {loading && <Loading />}
            {peringatan == true && <Penghapusan />}
        </>
    )
}
Data_diri.propTypes
export {Data_diri}