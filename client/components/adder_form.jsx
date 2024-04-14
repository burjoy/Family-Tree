import { useState, useRef } from "react";

function Adder() {
    const [click, isClick] = useState(true);
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

    return (
        <>
            {click && (
                <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50" onClick={handleClick}>
                    <div ref={formRef} className="bg-white rounded-md w-[90vw] h-[80vh] p-4">
                        <h2 className="text-center">Form penambahan data diri</h2>
                        <form action="">
                            <p>Status Menikah</p>
                            <input type="checkbox" />

                            <p>Keluarga</p>
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
