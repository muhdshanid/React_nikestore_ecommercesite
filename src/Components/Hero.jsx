import React from 'react'
import Clips from './utils/clips'
import SocialLink from './utils/SocialLink'

const Hero = ({heroapi : {title,subtitle,btntext,img,sociallinks,videos}}) => {
    
  return (
    <div className='relative h-auto w-auto flex flex-col'>
        <div className='bg-theme clip-path h-[85vh] lg:h-[75vh] md:h-[65vh] sm:h-[55vh] w-auto 
        absolute top-0 left-0 right-0 opacity-100 z-10'></div>
        <div className='relative opacity-100 z-20 grid items-center justify-center nike-container'>
            <div className='grid items-center justify-center mt-28 md:mt-24'>
                <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200 mt-[-2rem] sm:mt-[-1rem]' >{title}</h1>
                <h1 className='text-6xl lg:text-5xl md:text-4xl sm:text-3xl xsm:text-2xl font-extrabold filter drop-shadow-sm text-slate-200 mb-4 mt-[1rem] sm:mt-[0rem]'>{subtitle}</h1>
                <button type='button' className='mt-[1rem] button-theme md:mx-auto sm:mx-auto  sm:w-[200px] bg-slate-200 
                shadow-slate-200 rounded-xl my-5 lg:mx-12
                '>{btntext}</button>
                <div className='grid items-center gap-5 md:gap-3 absolute top-[33vh] lg:top-[27vh] left-[3%] xl:left-0 w-auto
                h-auto sm:mt-12 sm:ml-[1rem] lg:ml-[1rem] lg:mt-28 md:ml-[1rem] xl:ml-[2rem] mt-[5rem] md:mt-20'>{videos?.map((val,i)=>(
                    <Clips key={i}
                    imgsrc = {val.imgsrc}
                    clip = {val.clip}/>
                ))}</div>
                <div className='grid items-center absolute top-[33vh] lg:top-[27vh] 
                right-0 gap-3 lg:mt-12 sm:mt-0 mt-20 '>
                    {sociallinks?.map((val,i)=>(
                        <SocialLink
                        key={i} 
                        icon = {val.icon}
                        />
                    ))}
                </div>
            </div>
            <div className=''>
                <img src={img} alt="hero-img/img" className='md:ml-12 ml-24 w-auto h-[45vh] lg:h-[35vh] md:h-[31vh] sm:h-[21vh] xsm:h-[19vh] 
                transitions-theme -rotate-[25deg] hover:rotate-0 cursor-pointer object-fill' />
            </div>
        </div>
    </div>
  )
}

export default Hero