import './styles.css'
function Cards(){
    return(
        <>
    <div className="flex justify-center space-x-8">
      <div className="person">
        <img src="https://placehold.co/100x100" alt="Father" />
        <div className="connection"></div>
        <div className="person-name text-center">Father</div>
      </div>

      <div className="person">
        <img src="https://placehold.co/100x100" alt="Mother" />
        <div className="connection"></div>
        <div className="person-name text-center">Mother</div>
      </div>
    </div>
        </>
    )
}

export {Cards}