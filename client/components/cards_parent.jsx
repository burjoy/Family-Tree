import './styles.css'
function Cards(){
    const opt = [1,2,3,4,5,6,7,8,9,4,2];
    return(
    <>
    <div className="flex justify-center space-x-8">
      <div className="person hover:cursor-pointer p-5 rounded-md">
        <img src="https://placehold.co/100x100" alt="Father" />
        {/* <div className="connection"></div> */}
        <div className="person-name text-center">Father</div>
      </div>

      {/* tar tambahin option kalo si orang udah nikah apa belom, kyk di project 6 */}

      <div className="person p-5 rounded-md">
        <img src="https://placehold.co/100x100" alt="Mother" />
        {/* <div className="connection"></div> */}
        <div className="person-name text-center">Mother</div>
      </div>
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

export {Cards}