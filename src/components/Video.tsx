import {Lightning,FileArrowDown, CaretRight } from 'phosphor-react'
import {BsGithub } from 'react-icons/bs'
import {FaLinkedin} from 'react-icons/fa'
import {Player, Youtube, DefaultUi} from '@vime/react'
import {gql, useQuery} from '@apollo/client';

import '@vime/core/themes/default.css';

const GET_LESSON_BT_SLUG_QUERY = gql`
query GetLessonBySlug($slug: String) {
  lesson(where: {slug: $slug}) {
    title
    videoId
    description
    teacher {
      avatarURL
      name
      bio
    }
  }
}
`

type NewType = {
  lesson: {
    title: string;
    videoId: string;
    description: string;
    teacher: {
      avatarURL: string;
      name: string;
      bio: string;
    };
  };
};

type GetLessonsBySlugResponse = NewType

type VideoProps ={
  lessonSlug: string;
};
export function Video(props: VideoProps){
 const {data} = useQuery<GetLessonsBySlugResponse>(GET_LESSON_BT_SLUG_QUERY, {
  variables:{
    slug:props.lessonSlug,
  }
 });
 if (!data){
  return(
    <div className='flex-1 '>
      <p>Carregando...</p>
    </div>
  )

 }

    return( 
    <div className="flex-1">

      <div className='bg-black'>
        <div className=' bg-black h-full w-full max-w-[1100px] max-h-[50vh] aspect-video'>
        <Player>
          <Youtube videoId={data.lesson.videoId}/>
          <DefaultUi/>
        </Player>
        </div>
        </div> 

        <div className='flex items-start gap-16 mt-8 flex-col sm:flex-row'>
         <div className='flex-1' >
            <h1 className='text-2xl font-bold '> 
                {data.lesson.title}
            </h1>
            <p className='mt-4 text-gray-200 leading-relaxed'>
              {data.lesson.description}
             </p>
    
          <div className='flex items-center gap-4 mt-6'>
           <img className='h-16 w-16 rounded-full border-2 border-blue-500'
           src={data.lesson.teacher.avatarURL}/>
        
        <div className='leading-relaxed'>
            <span>
               <strong className='text-bold text-2xl block'>
               {data.lesson.teacher.name}
               </strong>  
                <span className='text-gray-200 text-sm block'>
               {data.lesson.teacher.bio}
              </span>
            </span>
          </div>
        </div>
    </div>
       
      <div className='flex flex-col gap-4 p-4' >
         <a 
         rel="next" 
         href='https://github.com/lauanys'  
         className='w-[200px] p-4 text-sm bg-pink-100 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-pink-600 transition-colors' >
          <BsGithub size={24}/>
          Github
          </a>

          <a  
          rel="next" 
         href='https://www.linkedin.com/in/lauany-gon%C3%A7alves-1ba6a8240/'
         className='w-[200px] p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors'>
          <FaLinkedin size={24}/>
            Linkedin
          </a>
         </div>
       </div>
   <div className='gap-8 my-20 grid grid-rows-2 sm:grid-cols-2 ' >
      <a href='' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
        <div className='bg-blue-100 h-full p-6 flex items-center'>
            <FileArrowDown size={40}/>
       </div>
     
       <div className='py-6 leading-relaxed'>
        <strong className='text-2xl'>
        Material complementar
        </strong>
        <p>
        Acesse o material complementar para acelerar 
        o seu desenvolvimento.
        </p>
        </div>
        <div className='h-full p-6 flex items-center'>
        <CaretRight/>
        </div>
      </a>
    
      <a href='' className='bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors'>
        <div className='bg-blue-100 h-full p-6 flex items-center'>
            <FileArrowDown size={40}/>
       </div>
     
       <div className="py-6 leading-relaxed ">
        <strong className='text-2xl'>
        Wallpapers exclusivos
        </strong>
        <p className='text-sm text-gray-200 mt-2'>
        Baixe wallpapers exclusivos do 
        Ignite Lab e personalize a sua máquina
        </p>
        </div>
        <div className='h-full p-6 flex items-center'>
        <CaretRight/>
        </div>
      </a>
    
   </div>
     
   </div>
       
   
    
  

     
     
    
    )
 };