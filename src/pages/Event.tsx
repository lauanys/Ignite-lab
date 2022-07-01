import {useParams} from 'react-router-dom';
import {Header} from '../components/Header'
import {SideBar} from '../components/SideBar';
import {Video} from '../components/Video'
import Footer from '../components/Footer';

import {BsFillArrowRightCircleFill} from 'react-icons/bs';


export function Event(){
   const {slug} = useParams<{slug: string}>()

    return( 
      <div className='flex flex-col min-h-screen'>
      <Header/>
    <main className="flex flex-1 flex-col lg:flex-row">
    {slug 
    ? <Video lessonSlug={slug} /> 
    : <div className=" flex-1  ">
      <div className=" flex flex-col justify-between items-center h-[90vh] ml-6 w-full">
      <span className=' flex flex-col items-center'>
      <h1  className="mt-6  text-3xl  text-[#fff] text-bold">
      Comece agora sua jornada!
      </h1>
      <p className='text-gray-200 text-center'>
      Esses videos vão te trazer muito conhecimento. 
      </p>
      <BsFillArrowRightCircleFill className='mt-6 w-12 h-12 text-[#00c3ff] animate-bounce'/>
      </span>

      <img src='/src/assets/bg-event.png' className='mt-4 mx-auto ' alt='imagem de apresentação react'/>
      </div>
      </div>}
     <SideBar/>
    </main>
    <Footer/>
 </div>
    )
 }