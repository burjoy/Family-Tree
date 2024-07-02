import './styles.css'
function Cards({nama, pasangan}){
    // const opt = [1,2,3,4,5,6,7,8,9,4,2];
    // let suami;
    // let istri;
    let menikah;
    // console.log(orang_tua?.pasangan);
    // if(gender == "laki-laki"){
    //   suami = nama;
    //   istri = pasangan;
    // }
    // else if(gender == "perempuan"){
    //   istri = nama;
    //   suami = pasangan;
    // }
    console.log(pasangan);
    if(pasangan == "" || pasangan == undefined){
      menikah = 0;
    }
    else{
      menikah = 1;
    }
    return(
    <>
    <div className="flex justify-center space-x-8">
      <div className="person hover:cursor-pointer p-5 rounded-md">
        <img src="https://drive.google.com/thumbnail?id=1gzSe6eG7zpAXl1KYo9Zm7UajEuEzTgQu" alt="Father" className="w-[150px] h-[150px]"/>
        {/* <div className="connection"></div> */}
        <div className="person-name text-center">{nama}</div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm" >
          Ganti Nama
        </button>
      </div>

      {/* tar tambahin option kalo si orang udah nikah apa belom, kyk di project 6 */}

      {menikah == 1 && 
        <div className="person p-5 rounded-md">
        <img src="https://placehold.co/100x100" alt="Mother" />
        {/* <div className="connection"></div> */}
        <div className="person-name text-center">{pasangan}</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm">
            Ganti Nama
          </button>
      </div>
      }
    </div>

    {/* {opt.map((dcs, index) => (
      <div key={index}>
        <h2>{dcs}</h2>
      </div>
    ))} */}
    {/* diatas buat test drive dari database */}
    </>
    )
}
Cards.propTypes
export {Cards}