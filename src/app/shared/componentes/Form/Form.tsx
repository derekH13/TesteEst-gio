import './Form.css'
import '../../../pages/dashboard/Dashboard.css'
import InputCheckbox from '../InputCheckbox/InputCheckbox'
import InputLadding from '../InputLadding/InputLadding'
import ButtonLading from '../ButtonLading/ButtonLading'

import { motion } from "framer-motion"
import { useContext, useRef, useState } from 'react'
import AppContext from '../../contexts/AppContext'
import Alert from '../Alert/Alert'


function Form(){

    const {senhaUser, setSenhaUser, loginUser, setLoginUser, notificacao, setNotificacao} = useContext(AppContext)
    

    function EvitarRecarregar(e: React.FormEvent<HTMLFormElement>){
        e.preventDefault()
        console.log( loginUser, senhaUser);

        setNotificacao(true)

        setTimeout(() => {
            setNotificacao(false)
        }, 4000)
        

    }


    return(
        <div className="alinhar-form">


            {
                notificacao? 
                <Alert />
                : ''
            }



            <form 
            onSubmit={(e) => EvitarRecarregar(e)}
            action="" 
            className='form-ladding'>

                <motion.img
                animate={{ 
                    opacity: [0, 1], 
                    y: [-50, 10, 0] 
                }}
                transition={{ duration: 1 }}
                src="/assets/img/logo.png" 
                className='desktop' alt="" 
                />

                <motion.h4
                initial={{ opacity: 0}}
                animate={{ 
                    opacity: 1, 
                    x: [100, -20, 0] 
                }}
                transition={{ 
                    duration: .9,
                    delay: .5
                 }}
                className='title-form'
                >
                    Nice to see you again
                </motion.h4>

                <motion.div 
                initial={{ opacity: 0}}
                animate={{ 
                    opacity: 1, 
                    y: [100, -30, 0] 
                }}
                transition={{ duration: 1 }}
                className="separar-input">

                

                    <InputLadding id='login' text='Login' type='text' placeholder='Email or phone number' senha={false}/>
                    <InputLadding id='senha' text='Password' type='password' placeholder='Enter password' senha={true}/>

                    <div className="remember">
                        <div className='container-checkbox'>
                            <InputCheckbox /> 
                            <span>
                                Remember me
                            </span>
                        </div>

                        <a href="#">
                            Forgot password?
                        </a>
                    </div>

                    <ButtonLading classBtn='primary' text='Sign in' type='submit' google={false} fonte='700'/>



                    <div className="container-btnGoogle">
                        <ButtonLading classBtn='dark' text='Or Sign in With Google' type='button' google={true} fonte='400'/>
                    </div>

                        <div className='link-cadastro'>Dont have an account? <a href="#">Sign up now</a></div>


                        <motion.div
                        initial={{ opacity: 0}}
                        animate={{ 
                            opacity: 1, 
                            x: [100, -30, 0] 
                        }}
                        transition={{ 
                            duration: .9,
                            delay: .5
                         }}
                        className="alinhar-logo">
                            <img src="/assets/img/logo.png" className='mobille logo' alt="" />
                        </motion.div>

                </motion.div> {/*separar input */}
</form>
</div>
)
       
}

export default Form