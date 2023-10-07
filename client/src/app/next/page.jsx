import Layout from "../../components/nextLayout";
import Image from "next/image";
import mongoose from "mongoose";

import connectDB from '../../../db'

export default async function Next({data}){

  const db = await connectDB();
  const collection = db.collection('users');
  const documentoNovo = { "username": "Carlos", "email": "carlos@gmail.com" };

  const resultado = await collection.insertOne(documentoNovo);

  console.log('Documento inserido com sucesso:', resultado);

    return(
    <Layout children={
        <div className="min-h-screen  bg-gray-600 " >
            <div className="grid gap-10 items-center justify-items-center p-5">

                <div className="bg-red-300 " className="w-1/2">
                    <img
                    src={'https://th.bing.com/th/id/R.346e3e24faa67f10521bcf1e1685a9de?rik=KO21BhFtbDOJow&riu=http%3a%2f%2fwww.emotioncard.com.br%2fwp-content%2fuploads%2f2016%2f05%2fferias.png&ehk=XzB%2brp0j8cFW0pYKljx83IoWjoITklITYUKdp8uTu4A%3d&risl=&pid=ImgRaw&r=0'}
                    alt={'Férias'}
                    className="max-w-full h-auto"
                    />
                </div>
                <div className="bg-red-300 " className="w-1/2 ">
                    <img
                    src={'https://th.bing.com/th/id/R.346e3e24faa67f10521bcf1e1685a9de?rik=KO21BhFtbDOJow&riu=http%3a%2f%2fwww.emotioncard.com.br%2fwp-content%2fuploads%2f2016%2f05%2fferias.png&ehk=XzB%2brp0j8cFW0pYKljx83IoWjoITklITYUKdp8uTu4A%3d&risl=&pid=ImgRaw&r=0'}
                    alt={'Férias'}
                    className="max-w-full h-auto"
                    />
                </div>

                <div className="bg-red-300 " className="w-1/2 ">
                    <img
                    src={'https://th.bing.com/th/id/R.346e3e24faa67f10521bcf1e1685a9de?rik=KO21BhFtbDOJow&riu=http%3a%2f%2fwww.emotioncard.com.br%2fwp-content%2fuploads%2f2016%2f05%2fferias.png&ehk=XzB%2brp0j8cFW0pYKljx83IoWjoITklITYUKdp8uTu4A%3d&risl=&pid=ImgRaw&r=0'}
                    alt={'Férias'}
                    className="max-w-full h-auto"
                    />
                </div>

                <div className="bg-red-300 " className="w-1/2 ">
                    <img
                    src={'https://th.bing.com/th/id/R.346e3e24faa67f10521bcf1e1685a9de?rik=KO21BhFtbDOJow&riu=http%3a%2f%2fwww.emotioncard.com.br%2fwp-content%2fuploads%2f2016%2f05%2fferias.png&ehk=XzB%2brp0j8cFW0pYKljx83IoWjoITklITYUKdp8uTu4A%3d&risl=&pid=ImgRaw&r=0'}
                    alt={'Férias'}
                    className="max-w-full h-auto"
                    />
                </div>
                
                <div className="bg-pink-500 " style={{width: 500, height: 500}}  >bloco 1</div>
            </div>
        </div>
        
    }/>)
}