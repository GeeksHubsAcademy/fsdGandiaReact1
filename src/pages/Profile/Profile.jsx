
export const Profile = () => {

    let videojuegos = [
        {
            nombre: "baldur's gate",
            id: 0
        },
        {
            nombre : "god of war ragnarok",
            id: 1
        },
        {
            nombre: "super mario world",
            id: 2
        }]

    return (
        <div className="profileDesign">

            {
                videojuegos.length > 0 

                ? (
                    <div>{
                        videojuegos.map(
                            (juego, i) => {
                                return (
                                    <div 
                                        key={juego.id}
                                        onClick={()=>console.log(juego)}
                                    >{juego.nombre}</div>
                                )
                            }
                        )    
                    }</div>
                )

                : (
                    <div>No tenim ni un joc</div>
                )
            }

        </div>
    )
}