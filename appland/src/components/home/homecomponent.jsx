import React from 'react'
import './homecomponent.css'
import devlopment from '../../images/feature_1.png'
import money from '../../images/feature_2.png'
import uiinterface from '../../images/feature_3.png'
import Frame_19 from '../../images/Frame_19.png'
import download from '../../images/download.png'
const HomeComponenet=()=>{

    return(
        <>
            <div className='header-section'>
                <div className="data">
                <h2 className="content">Lanch Your App</h2>
                <h2>With Confidence and Creativity</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, quisquam?</p>
                <button>Download</button>
                </div>
            </div>
            <div className='mid-header'>
                <div className='devlopment'>
                    <img className="mid-image" src={devlopment} alt="Devlopment" />
                    <div className="mid-data">
                    <h3>Devlopment</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam, consequatur.</p>
                    </div>
                 </div>
                <div className='money'>
                    <img className="mid-image" src={money} alt="money saving" />
                    <div className="mid-data">
                    <h3>Money Saving Service</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, rerum?</p>
                    </div>
                   
                </div>
                <div className='interface'>
                    <img className="mid-image" src={uiinterface} alt="interface" />
                    <div className="mid-data">
                    <h3>Usability Interface</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab, harum!</p>
                    </div>
                   
                </div>
            </div>
            <div className="notification">
                <img className="noti-img" src={Frame_19} alt="Notificaton" />
                <div className="noti-data">
                <h3 className="content">Comes With All You need for daily life</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, autem inventore aliquid corporis provident facere, quos dignissimos quas dicta ex eveniet maiores nisi numquam possimus dolores ratione molestiae labore. Labore maiores dicta quae velit nostrum ipsa maxime tenetur vel? Temporibus repellat molestiae similique unde quibusdam tenetur quae ab fugiat eveniet!</p>
                <button>Get The App</button>
                </div>   
            </div>
            <div className="ui">
            </div>
            <div className="download">
                <img className="download-img" src={download} alt="" />
                <div className="download-data">
                <h3 className='content'>Download And Get The App Now</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, autem inventore aliquid corporis provident facere, quos dignissimos quas dicta ex eveniet maiores nisi numquam possimus dolores ratione molestiae labore. Labore maiores dicta quae velit nostrum ipsa maxime tenetur vel? Temporibus repellat molestiae similique unde quibusdam tenetur quae ab fugiat eveniet!</p>
                <button>Get The App</button>
                </div>   
            </div>
            <footer>
                    <h2> Send Me Email</h2>
                    <div className="email">
                        <input type="email"  placeholder="example@gmail.com"/>
                        <button>Contact</button>
                    </div>
            </footer>
        </>
    )
}

export default HomeComponenet