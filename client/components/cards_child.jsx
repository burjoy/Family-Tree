import "./styles.css";
import { Adder } from "./adder_form";
import { useState, useEffect } from "react";
import { AddAnak } from "./add_anak";
// import { useGlobalContext } from "../context/utils";
import get_anggota_keluarga from "../../server/apis/get_anggota_keluarga";
import get_anggota_keluarga_spesifik from "../../server/apis/get_anggota_keluarga_spesifik";
import { Link } from "react-router-dom";
import { Data_diri } from "./data_diri";

function Card_child({anaks, generation, pilihKeluarga, orang_tua}) {
  // const opt = [1,2,3,4,5,6,7,8,9,4,2];
  // const opt = [];
  const gens = generation + 1;
  console.log(`Generasi anak saat ini: ${gens}, generasi orang tua: ${generation}`);
  const [isAdderCall, setAdderCalled] = useState(null);
  const [status, setStatus] = useState(null);
  const [selectedUrutan, setSelectedUrutan] = useState(null);
  // const [add_anak, set_add_anak] = useState(null);

  useEffect(() => {
    // setAdderCalled(isAdderCall);
    console.log(status);
    if(status == false){
      setStatus(true);
    }
    // if(add_anak == false){
    //   set_add_anak(true);
    // }
  }, [status]);

  const handleClick = (nama_keluarga) => {
    console.log("ba");
    // setAdderCalled(() => (!isAdderCall));
    // setSelectedUrutan(nama_keluarga);
    setStatus(() => (!status));
    setSelectedUrutan(nama_keluarga);
  }
  // const handleAddAnak = () => {
  //   console.log("ba");
  //   set_add_anak(() => (!add_anak));
  // }
  console.log(anaks);
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-9 justify-items-center md:grid-cols-5">
        {anaks?.map((urutan, index) => (
          <>
          <div className="person hover:cursor-pointer p-5 rounded-md" key={index}>
            <img src="https://placehold.co/100x100" alt="Daughter" className="max-md:w-[75px] max-md:h-[75px]"/>
            {/* <!-- <div className="connection"></div> --> */}
            <div className="person-name text-center">{urutan}
            </div>
            <Link to={`/${gens}/${urutan}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm max-md:text-xs max-md:py-2 max-md:px-2">
              Buka Daftar Keluarga
            </Link>
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm" onClick={async() => 
              {
                const family = await get_anggota_keluarga_spesifik(gens, urutan);
                console.log(family[0]?.anak);
                pilihKeluarga(family[0]);
              }
            }>
              Buka Daftar Keluarga
            </button> */}

            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm"  onClick={handleClick}>
              Edit Profile
            </button> */}

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm max-md:text-xs max-md:py-2 max-md:px-2"  onClick={() => handleClick(urutan)}>
              Ganti Status
            </button>
          </div>
        </>
        ))}
          {/* <div className="person hover:cursor-pointer p-7 rounded-md"> */}
            {/* <img src="https://placehold.co/100x100" alt="Daughter"/> */}
            {/* <!-- <div className="connection"></div> --> */}
            {/* <div className="person-name text-center">Tambah Anak */}
            {/* </div> */}
            {/* <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm" onClick={handleAddAnak}> */}
              {/* Add Anak */}
            {/* </button> */}
          {/* </div> */}
      </div>
      {status === true && selectedUrutan !== null && (<Data_diri generasi={gens} nama={selectedUrutan}/>)}
      {/* {add_anak && <AddAnak generasi={gens} parent={orang_tua}/>}
      {isAdderCall && <Adder />} */}
    </>
  );
}
Card_child.propTypes
export { Card_child };
