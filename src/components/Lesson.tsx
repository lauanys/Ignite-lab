import {CheckCircle} from 'phosphor-react';
import dayjs from 'dayjs';
import {Link, useParams} from 'react-router-dom';
import classNames from 'classnames';
interface LessonPros{
    title: string;
    slug:string;
    availableAt: string;
    type:boolean;
}


export function Lesson(props:LessonPros ){
  const {slug} = useParams<{slug:string}>()

 const isLessonAvailable =true;
 const isLessonAvailableDate =dayjs(props.availableAt).format('YYYY');
 
const isActiveLesson = slug === props.slug;

    return( 
   <Link to={`/event/lesson/${props.slug}`} className='group' >
    <span className='text-gray-300'>
        {isLessonAvailableDate}
    </span>
   
    
    <div className={classNames('rounded border border-gray-500 p-4 mt-2 group-hover:border-blue-100',{
        "bg-gradient-to-r from-cyan-500 to-blue-500":isActiveLesson
    })}>
        <header className='flex items-center justify-between'>
      {isLessonAvailable ?(
          <span className={classNames('text-sm text-blue-500 flex items-center gap-2',{
            'text-white':isActiveLesson,
            'text-blue-500': isActiveLesson,

          }) }>
          <CheckCircle size={20}/>
          Conteúdo liberado
      </span>
      ):(  
      <span className='text-sm text-red-400 flex items-center gap-2'>
          Em breve
    </span>
        )}
        <span className='text-xs rounded py-{0.125rem} px-2 text-white border border-blue-100 font-bold '>
           {props.type === true ? 'AO VIVO' : 'AULA PRÁTICA'}
        </span>
        </header>
        <strong className={classNames('mt-5 block',{
            'text-white':isActiveLesson,
           
            }) }>
        {props.title}
        </strong>
    </div>
   </Link>

    )
 };