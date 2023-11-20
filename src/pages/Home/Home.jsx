
import "./Home.css"

export const Home = () => {

    //Ejemplo de variable simple
    let nombre = "Pablo"

    //Funcion dentro del componente funcional Home
    const saludamePorConsoleLog = () => {
        console.log(nombre)
    }

    return (
        <div className="homeDesign">
            Esto es código HTML de siempre.... {nombre}
            {/* Llamamos a la funcion sin paréntesis para hacer referencia a la variable que la contiene */}
            <div onClick={saludamePorConsoleLog}>Hazme click para saludar por consola</div>
        </div>
    )
}