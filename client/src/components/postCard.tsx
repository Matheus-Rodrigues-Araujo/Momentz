'use client'
import Image from 'next/image'
import { IPost } from '@/interfaces/IPost'
import { useEffect, useState } from 'react'

export const PostCard = ({post}:IPost) => {
    const [isLiked, setIsLiked] = useState(false)

    return (
        <div className='post-card cursor-pointer border border-white rounded-md bg-gray-900 p-4 shadow-x-2 shadow-y-9 shadow-blur-2' style={{backgroundColor: "var(--gray)"}} >
            <div className=" p-4 mb-4 rounded-md">
                <div className="flex items-center mb-4">
                <Image
                    src={post.profileImage}
                    alt="Avatar do usuário"
                    className="object-cover w-10 h-10 rounded-full mr-2"
                />
                <div className='flex items-center gap-3' >
                    <p className="font-bold text-white">{post.username}</p>
                    <p className="text-gray-500 text-sm">{post.datetime.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric'})}</p>
                </div>
                </div>

                <p className="mb-4 text-white">{post.content}</p>

                <Image
                src={post.postImage}
                alt="Imagem do post"
                className="w-[500px] h-auto rounded-md"
                />

                <div className="flex items-center mt-4">
                <button title='Curtir' onClick={()=> setIsLiked(!isLiked)} 
                className={`${isLiked ? 'flex items-center mr-4 text-customLightpink': 'flex items-center mr-4 text-white hover:text-customLightpink' }`} >
                    <svg
                    className="w-6 h-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                    </svg>
                    Curtir
                </button>
                <button title='Comentar' className="flex items-center text-white">
                    <svg
                    className="w-6 h-6 fill-current mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    >
                    <path d="M21 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v3.74L12.53 19H21a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 13H7.47L6 16.26V15h13v.74l-1.47-1.74zM12 14a7 7 0 0 0-7-7H3V4h2a1 1 0 0 0 1-1V1h2v2a1 1 0 0 0 1 1h6a7 7 0 0 0 0 14h-1z" />
                    </svg>
                    Comentar
                </button>
                </div>
            </div>
        </div>
    )
}