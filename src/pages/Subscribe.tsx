import {gql, useMutation} from '@apollo/client';
import {useState, FormEvent} from 'react';
import {Link} from 'react-router-dom';
import {Logo} from '../components/Logo';



export function Subscribe(){
  

    return(
        <div className=" min-h-screen bg-cover bg-no-repeat flex flex-col items-center w-full">
        
           <div className='w-full max-w-[1100px] flex items-center justify-between mt-10 mx-auto flex-col md:flex-row'>
            <div className='max-w-[640px]'>
                <Logo/>
                <h1 className='mt-8 text-[2.5rem] leading-tight'>
                    Construa uma <strong className='text-blue-100'>aplicação completa</strong>, do zero, com <strong className='text-blue-100'>React JS</strong>
                </h1>
                <p className='mt-4 text-gray-200 leading-relaxed'>
                Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas 
                e com alta demanda para acessar as melhores oportunidades do mercado.
                </p>   
                <p className=' text-gray-200 mt-2'>
                  Adaptei o projeto para os melhores videos da Rockeatseat,
                  logo os videos do Ignite Lab não estão público.
                </p>
            </div>

            <div className='p-8 border bg-[#000] border-gray-500 rounded mt-8'>
            <img src="\src\assets\Logo-rockeat.png" className='w-[200px] h-full'/>
             <div className='flex flex-col mt-8  w-full'>
               <Link to='/event' className='text-center bg-[#800de4] p-2 rounded-md hover:bg-[#800de494] transition-colors'>
                Melhores videos
               </Link>
             </div>
            </div>
           </div>
           <img src='/src/assets/bg_login.png' className='mt-4 mx-auto ' alt='imagem de apresentação react'/>
        </div>
    )
}