function SearchBar(){
    const handleSubmit = (event) => {
        console.log("Hello");
        event.preventDefault(); //buat testing doang saat ini
    }

    return(
        <>
            <form action="" onSubmit={handleSubmit} className="text-center mt-3">
                <input type="text" className="border border-gray-300 rounded p-2 text-center"/>
            </form>
        </>
    )
}

export {SearchBar}