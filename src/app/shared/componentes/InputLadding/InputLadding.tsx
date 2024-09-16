import './InputLadding.css'
import '../../../pages/dashboard/Dashboard.css'
import { useContext } from 'react'
import AppContext from '../../contexts/AppContext'

type props = {
    id: 'login' | 'senha',
    text: string,
    type: 'button' | 'email' | 'checkbox' | 'password' | 'number' | 'text',
    placeholder: string,
    senha: boolean

}



function InputLadding({id, text, type, placeholder, senha}: props){

    const { loginUser, setLoginUser, senhaUser, setSenhaUser} = useContext(AppContext)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if( id === 'senha'){
            setSenhaUser( e.target.value );

        }else if(id === 'login'){
            setLoginUser(e.target.value);
        }
        
    };

    

    return(
        <div className='input-ladding'>
            <label className='desktop'  htmlFor={id}>{text}</label>

           <div className="container-input">
                <input 
                onChange={(e) => handleChange(e)}
                className='rounded-2' 
                required
                type={type} id={id} 
                placeholder={placeholder}
                />

                    {
                    senha?
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-eye-fill" viewBox="0 0 16 16">
                        <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0"/>
                        <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7"/>
                    </svg>
                    
                    : ''

                    }

           </div>
        </div>
    )
}

export default InputLadding