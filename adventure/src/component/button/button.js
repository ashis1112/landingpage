import React from 'react'
import './button.css'
import {Link} from 'react-router-dom' 

const STYLES=['btn-primary','btn-outline']
const SIZES=['btn-medium','btn-large']

const Button=({
    children,
    type,
    onCLick,
    buttonstyle,
    buttonsize
})=>{
    const checkButtonStyle=STYLES.includes(buttonstyle)?buttonstyle:STYLES[0]
    const checkButtonSize=SIZES.includes(buttonsize)?buttonsize:SIZES[0]

    return(
        <>
            <Link to='/signup' className="btn-mobile">
            <button type={type} onClick={onclick} className={`btn ${checkButtonSize} ${checkButtonStyle}`}>
                {children}
            </button>
            </Link>
        </>
    )
}

export default Button