import { useState } from 'react'
import Img1 from './assets/avatar1.jpg'
import Img2 from './assets/avatar2.jpg'
import Img3 from './assets/avatar3.jpg'
import fb from './assets/facebook.png'
import ins from './assets/instagram.png'
import yt from './assets/youtube.png'
import './App.css'


function One() {
  return(

        <>

        <section className='w-1280'>
            <div className='row-div'>

                <div className='One'>

                    <img src={Img3} className='c-logo'/>
                    
                    
                    <h1 className='c-name'>Divya Kumawat</h1>
                    <p>Follow Me On :</p>

                    <div className='s-div'>
                        <img src={fb} className='s-icon'/>
                        <img src={ins} className='s-icon'/>
                        <img src={yt} className='s-icon'/>
                    </div>

                    
                </div>

                <div className='One'>

                    <img src={Img2} className='c-logo'/>
                    
                    
                    <h1 className='c-name'>Shubham Kumawat</h1>
                    <p>Follow Me On :</p>

                    <div className='s-div'>
                        <img src={fb} className='s-icon'/>
                        <img src={ins} className='s-icon'/>
                        <img src={yt} className='s-icon'/>
                    </div>

                    
                </div>

                <div className='One'>

                    <img src={Img1} className='c-logo'/>
                    
                    
                    <h1 className='c-name'>xyz</h1>
                    <p>Follow Me On :</p>

                    <div className='s-div'>
                        <img src={fb} className='s-icon'/>
                        <img src={ins} className='s-icon'/>
                        <img src={yt} className='s-icon'/>
                    </div>

                    
                </div>

               

            </div>

        </section>
        
        </>

    )
}

export default One