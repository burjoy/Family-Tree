import { useState, useRef } from "react";

function AddAnak(){
    const formRef = useRef(null);
    const [click, isClick] = useState(true);
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
                    <div ref={formRef} className="bg-white rounded-md p-4">
                        <h2 className="text-center">Form penambahan data anak</h2>
                        <form action="">
                            <p>Nama Anak</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600"/>

                            <p>Nama Panggilan</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" />

                            <p>Urutan Anak</p>
                            <input type="text" className="border rounded-lg text-center focus:border-red-600" />
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

export {AddAnak};