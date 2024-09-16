import { Link } from 'react-router-dom'
import Provider from '../../shared/contexts/Provider'

import './Dashboard.css'
import Form from '../../shared/componentes/Form/Form'



//aqui é uma pagina
export const Dashboard = () => {
    return(
        <Provider>
            <header className="ladding-page">
                <div className="row">
                    <div className="col-xxl-9 col-xl-8 col-md-7 col-sm-12 desktop container-imagem">
                        <img src="/assets/img/img1.png" alt="" />
                    </div>
                    <div className="col-xxl-3 col-xl-4 col-md-5 col-sm-12">
                        <div className="interface container-form">
                            <Form />
                        </div>
                    </div>
                </div>
            </header>
        </Provider> 
    )

}