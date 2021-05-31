import React,{useState} from 'react'
import logo from './logo.png'
import './navbar.css'


const Navbar=()=>{
    const [nav,setNav]=useState(false)
    function changebackgroung(){    
        if(window.scrollY >=50){
            setNav(true)
        }else{
            setNav(false)
        }
    }
    window.addEventListener('scroll',changebackgroung)
    return(
    <div className={nav ? 'active-navbar':'navbar'}>
        <div className='img'>
            <img src={logo} alt="" />
        </div>
        <div className='nav-link'>
            <ul>
                <li><a>Home</a></li>
                <li><a>Feature</a></li>
                <li><a>About</a></li>
                <li><a>Download</a></li>
            </ul>
        </div>
    </div>)
}

export default Navbar