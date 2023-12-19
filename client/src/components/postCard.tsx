'use client'
import Image from 'next/image'
import { IPost } from '@/interfaces/IPost'
import Skeleton from 'react-loading-skeleton'
import '../../node_modules/react-loading-skeleton/dist/skeleton.css';
import { useState, useEffect } from 'react'

export const PostCard = ({post}:IPost) => {
    const [isLiked, setIsLiked] = useState(false)
    const [text, setText] = useState('');
    const [loading, setLoading] = useState(true)

    const postImage = `/uplouds/post-3.jpg`
    const profileImage = '/default-profile-image.jpg'

    const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(event.target.value);
      };
    
      const autoResize = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        const textarea = event.target;
        textarea.style.height = 'auto';
        textarea.style.height = `${textarea.scrollHeight}px`;
      };

      useEffect(() => {
        const delay = setTimeout(()=>{
            setLoading(false)
        }, 1000)

        return ()=> clearTimeout(delay)
      }, [])

    return (
        <div className='post-card cursor-pointer bg-gray-900 shadow-x-2 shadow-y-9 shadow-blur-2 rounded-none md:p-4' style={{backgroundColor: "var(--gray)"}} >
            <div className="p-0 mb-4 rounded-md">
                <div className="mb-4 flex items-center ">
                {loading ? 
                    <Skeleton width={40} className=' h-10 rounded-full mr-2 product-image' style={{borderRadius: '2em'}} /> 
                    :<Image src={profileImage} width={50} height={50} alt="Profile image" className="object-cover w-10 h-10 rounded-full mr-2"/>
                }
                    <div className='flex items-center gap-3' >
                        {loading ? 
                            <Skeleton width={40} /> 
                            : <p className="text-sm font-medium text-white">{post.username}</p>
                        }
                        {loading ? 
                            <Skeleton width={120}/> 
                            :<p className="text-gray-500 text-sm">
                                2023-12-10
                                {/* {post.datetime.toLocaleString('en-US', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric'})} */}
                                </p>
                        }
                    </div>
                </div>

                {loading ? 
                    <Skeleton className='skeleton-img' /> 
                    : <img src={postImage} width={50} height={50} alt="Post image" className="h-auto w-[460px] rounded-md md:max-w-[500px]"/>
                }

                <div className="flex items-center mt-4 space-x-2">
                {loading ? <Skeleton width={25} height={25} style={{borderRadius: '2em'}} />:
                    <button title='Curtir' onClick={()=> setIsLiked(!isLiked)} className={`${isLiked ? 'flex items-center text-customLightpink': 'flex items-center text-white hover:text-customLightpink' }`} ><svg className="w-6 h-6 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" /></svg>
                        Like
                    </button>
                }
                {loading ? 
                    <Skeleton width={25} height={25} style={{borderRadius: '2em'}} /> 
                    :<button title='Comentar' className="flex items-center text-white"> <svg className="w-6 h-6 fill-current mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M21 2H3a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h5v3.74L12.53 19H21a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1zm-1 13H7.47L6 16.26V15h13v.74l-1.47-1.74zM12 14a7 7 0 0 0-7-7H3V4h2a1 1 0 0 0 1-1V1h2v2a1 1 0 0 0 1 1h6a7 7 0 0 0 0 14h-1z" /></svg>
                        Comment
                    </button>
                }
                {loading ? 
                    <Skeleton width={25} height={25} style={{borderRadius: '2em'}} /> 
                    :<button title='Enviar' className="flex items-center text-white ml-3"><svg className="w-6 h-6 fill-current mr-1" fill="#000000" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>paper-plane</title> <path d="M0 14.016l9.216 6.912 18.784-16.928-14.592 20.064 10.592 7.936 8-32zM8 32l6.016-4-6.016-4v8z"></path> </g></svg>
                        Send
                    </button>
                }
                </div>

                <div className='flex flex-wrap flex-col mt-4 gap-2'>
                {loading ? 
                    <Skeleton width={80} height={20} className='rounded-full mr-2 product-image' style={{borderRadius: '2em'}} /> 
                    : <p className="text-sm font-medium text-white self-start">{post.username}</p>
                }
                {loading ? 
                    <Skeleton width={250} height={20} className='rounded-full mr-2 product-image' style={{borderRadius: '2em'}} /> 
                    : <p className="text-smcontent mb-4 text-white">{post.content}</p>
                }
                </div>
                <div className='comment-container grid gap-3'>
                    {loading ? 
                        <Skeleton width={120} height={20} className='rounded-full mr-2 my-1 product-image' style={{borderRadius: '2em'}} /> 
                        : <p className='text-customLightGray' >See all 32 comment</p>
                    }
                    {loading ? 
                        <Skeleton width={120} height={20} className='rounded-full mr-2 product-image my-3' style={{borderRadius: '2em'}} /> 
                        :<div className='grid' >
                            <textarea
                                className="bg-customDark w-full text-white h-12  focus:outline-none resize-none overflow-y-auto"
                                value={text}
                                placeholder='Add comment'
                                onChange={handleChange}
                                onInput={autoResize}
                            />
                        </div>
                    }
                </div>
                <div className='w-[100%] bg-gray-500 h-[1px]' ></div>
            </div>
        </div>
    )
}