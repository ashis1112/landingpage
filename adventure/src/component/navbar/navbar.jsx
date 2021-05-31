import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom'
import Button from '../button/button'
import'./navbar.css'

const Navbar=()=>{
    const [click,setClick]=useState(false)
    const [button,setButton]=useState(true)

    const change=()=>{setClick(!click)}
    const closeMobile=()=>{setClick(false)}
    const showbutton=()=>{
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    }
    useEffect(()=>{
        showbutton()
    },[])
    window.addEventListener('resize',showbutton)

    return(
        <>
            <nav className='navbar'>
                <div className="navbar-container">
                    <Link to='/' className='navbar-logo' onClick={closeMobile}>TRVL <i className='fab fa-typo3'></i> </Link>
                    <div className='menu-icon' onClick={change}> <i  className={click ? 'fas fa-times' : 'fas fa-bars'}></i> </div>
                    <ul className={click? 'nav-menu active' :'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/home' className='nav-links' onClick={closeMobile}>Home</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/service' className='nav-links' onClick={closeMobile}>Service</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/products' className='nav-links' onClick={closeMobile}>Products</Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/sign-up' className='nav-links-mobile' onClick={closeMobile}>Signup</Link>
                        </li>
                    </ul>
                    {button && <Button buttonstyle='btn-outline'>Signup</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar