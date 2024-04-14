import "./styles.css";
import { Adder } from "./adder_form";
import { useState, useEffect } from "react";

function Card_child() {
  const opt = [1,2,3,4,5,6,7,8,9,4,2];
  const [isAdderCall, setAdderCalled] = useState(null);

  useEffect(() => {
    // setAdderCalled(isAdderCall);
    console.log(isAdderCall);
    if(isAdderCall == false){
      setAdderCalled(true);
    }
  }, [isAdderCall]);

  const handleClick = () => {
    console.log("ba");
    setAdderCalled(() => (!isAdderCall));
  }
  return (
    <>
      <div className="grid grid-cols-2 gap-4 mt-9 justify-items-center md:grid-cols-5">
        {opt.map((urutan, index) => (
          <>
          <div className="person hover:cursor-pointer p-5 rounded-md" key={index}>
            <img src="https://placehold.co/100x100" alt="Daughter"/>
            {/* <!-- <div className="connection"></div> --> */}
            <div className="person-name text-center">{urutan}
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm">
              Open Ancestry
            </button>

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-3 text-sm"  onClick={handleClick}>
              Edit Profile
            </button>
          </div>
        </>
        ))}
      </div>
      {isAdderCall && <Adder />}
    </>
  );
}

export { Card_child };
