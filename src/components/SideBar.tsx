import {Lesson} from './Lesson'
import {gql, useQuery} from '@apollo/client'

const GET_LESSONS_QUERY = gql`
query {
  lessons(orderBy: description_DESC, stage: PUBLISHED) {
    id
    lessonType
    title
    slug
    availableAt
  }
}`

interface GetLessonsQueryResponse{
  lessons: {
    id:string;
   title:string;
    availableAt:string;
    slug:string;
    lessonType:boolean;
  }[]
}
export function SideBar(){
  const {data} = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)
    return(
      <div>
    <aside className=" lg:w-[348px] bg-gray-800  p-6 border-l border-gray-700">
      <span className='font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block'>
       Melhores videos 
      </span>
  <div className='flex flex-col gap-8'>
      
        {data?.lessons.map(lesson =>{
          return (
          <Lesson
          key={lesson.id}
            title={lesson.title}
           slug={lesson.slug}
          availableAt={lesson.availableAt}
         type= {lesson.lessonType}
          />
          )
        })}
 
  </div>
      </aside>
    </div>

    )
 }