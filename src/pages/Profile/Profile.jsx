
import { VideogameCard } from "../../common/VideogameCard/VideogameCard";
import "./Profile.css";

export const Profile = () => {

    let videojuegos = [
        {
            nombre: "baldur's gate",
            plataforma: "PC",
            image: "https://assets-prd.ignimgs.com/2022/01/05/baldurs-gate-1-enhanced-edition-button-1641372823021.jpg",
            id: 0
        },
        {
            nombre : "god of war ragnarok",
            plataforma: "PS5",
            image: "https://media.vandal.net/m/90451/god-of-war-ragnarok-20221131016774_1.jpg",
            id: 1
        },
        {
            nombre: "super mario world",
            plataforma: "SNES",
            image: "https://upload.wikimedia.org/wikipedia/en/3/32/Super_Mario_World_Coverart.png",
            id: 2
        }]

    return (
        <div className="profileDesign">

            {
                videojuegos.length > 0 

                ? (
                    <div className="rosterDesign">{
                        videojuegos.map(
                            (juego, i) => {
                                return (
                                    <VideogameCard
                                        // El padre le pasa datos al hijo mediante props
                                        key={juego.id} 
                                        nombre={juego.nombre}
                                        image={juego.image}
                                        plataforma={juego.plataforma}
                                    />
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