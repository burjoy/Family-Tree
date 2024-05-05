import { useState, useRef } from "react";

function Adder() {
    const [click, isClick] = useState(true);
    const [married, isMarried] = useState(null);
    // const [anak, isHaveAnak] = useState();
    const formRef = useRef(null);

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

    const inputHandle = (e) => {
        isMarried(e.target.value);
        console.log(married);
        console.log(typeof married);
    }

    // const handleAnak = (e) => {
    //     isHaveAnak(e.target.value);
    //     parseInt(anak, 10);
    //     console.log(anak);
    // }

    return (
        <>
            {click && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={handleClick}>
                    <div ref={formRef} className="bg-white rounded-md  p-4">
                        <h2 className="text-center">Form penambahan data diri</h2>
                        <form action="">
                            <p>Status Menikah</p>
                            {/* <input type="dropdown" /> */}
                            <select name="status" id="" className="border rounded-lg text-center focus:border-red-600" onChange={inputHandle}>
                                {(married == null) ? (<option></option>) : (<></>)}
                                <option value="1">Sudah</option>
                                <option value="0">Belum</option>
                            </select>

                            {married == 1 && 
                            <>
                                <p>Nama Pasangan</p>
                                <input type="text" className="border rounded-lg text-center focus:border-red-600"/>
                                {/* <p>Sudah punya anak?</p>
                                <select name="status" id="" className="border rounded-lg text-center focus:border-red-600">
                                    <option value="1">Sudah</option>
                                    <option value="0">Belum</option>
                                </select> */}
                            </>}

                            {/* {anak == 1 && <>
                                <p>Jumlah Anak</p>
                                <input type="text" className="border rounded-lg text-center focus:border-red-600"/>
                            </>} */}

                            <p>Nama Panggilan (opsional)</p>
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

export { Adder };
