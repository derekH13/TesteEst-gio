import './InputCheckbox.css'
import '../../../pages/dashboard/Dashboard.css'

function InputCheckbox(){
    return(
        <label className="switch">
            <input type="checkbox"/>
            <span className="slider"></span>
        </label>
    )
}

export default InputCheckbox