import "./styles.css";
import { Adder } from "./adder_form";
import { useState, useEffect } from "react";
import { AddAnak } from "./add_anak";
// import { useGlobalContext } from "../context/utils";
import get_anggota_keluarga from "../../server/apis/get_anggota_keluarga";
import get_anggota_keluarga_spesifik from "../../server/apis/get_anggota_keluarga_spesifik";
import { Link } from "react-router-dom";

function Card_child({anaks, generation, pilihKeluarga, orang_tua}) {
  // const opt = [1,2,3,4,5,6,7,8,9,4,2];
  // const opt = [];
  const gens = generation + 1;
  const [isAdderCall, setAdderCalled] = useState(null);
  // const [add_anak, set_add_anak] = useState(null);

  useEffect(() => {
    // setAdderCalled(isAdderCall);
    console.log(isAdderCall);
    if(isAdderCall == false){
      setAdderCalled(true);
    }
    // if(add_anak == false){
    //   set_add_anak(true);
    // }
  }, [isAdderCall]);

  const handleClick = () => {
    console.log("ba");
    setAdderCalled(() => (!isAdderCall));
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
            <img src="https://placehold.co/100x100" alt="Daughter"/>
            {/* <!-- <div className="connection"></div> --> */}
            <div className="person-name text-center">{urutan}
            </div>
            <Link to={`/${gens}/${urutan}`} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm">
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

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm"  onClick={handleClick}>
              Ganti Nama
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
      {/* {add_anak && <AddAnak generasi={gens} parent={orang_tua}/>}
      {isAdderCall && <Adder />} */}
    </>
  );
}
Card_child.propTypes
export { Card_child };
