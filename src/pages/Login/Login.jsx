
import "./Login.css"

export const Login = () => {

    let interruptorB = false
    let interruptorC = true

    return(
        <div className="loginDesign">
            soy Login
            
            {/* Ejemplo de renderizado condicional */}
            {
                (interruptorB && interruptorC) &&

                <div>El interruptor está encendido</div>
            }
            {/* Ejemplo de ternaria */}
            {
                !interruptorB
                
                ? (<div>El interruptorB está apagado</div>)

                : (<div>El interruptorB está encendido</div>)
            }
        </div>
    )
}