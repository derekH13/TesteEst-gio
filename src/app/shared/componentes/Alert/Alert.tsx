import './Alert.css'

import { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

function Alert(){

    const {senhaUser, loginUser} = useContext(AppContext)


    return(
    <div className="containerAlert">
            <div className="alert alert-success" role="alert">
                <h4>✅ Login efetuado com sucesso</h4>

                Bem vindo {loginUser}!

                <span></span>
            </div>
    </div>
    )
}

export default Alert