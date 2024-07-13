import { useState, useEffect } from "react";
import { CariPanggilan } from "./cari_panggilan";
import Loading from "./loadingButton";

function SearchBar(){
    const [called, isCalled] = useState(null); //ini nanti diganti jadi [called, setCalled] = useState('');
    // const [loading, setLoading] = useState(false);
    // const timeOut = setTimeout(() => {setLoading(false)}, 10000);
    // const handleLoading = () => {
    //     setLoading(true);
    //     timeOut;
    //     // isCalled(true);
    //     // setLoading(false);
    // }
    useEffect(() => {
        // setAdderCalled(isAdderCall);
        console.log(called);
        if(called === false){
          isCalled(true);
        }
      }, [called]);
    const handleSubmit = (event) => {
        console.log("Hello");
        event.preventDefault(); //buat testing doang saat ini
        isCalled(() => (!called));
    }

    return(
        <>
        <div className="text-center">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm"  onClick={handleSubmit}>
              Cari Panggilan
            </button>
        </div>
        {/* {loading && <Loading />} */}
        {called && <CariPanggilan />}
        </>
    )
}

export {SearchBar}