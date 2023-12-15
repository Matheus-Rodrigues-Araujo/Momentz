'use client'
import { PostCard } from "@/components/postCard";
import Layout from "./nextLayout";
// import postsList from '../../randomPostsData';
import axios from 'axios'
import { useState, useEffect } from "react";

interface IPost{
  authorId: string,
  postImage: string,
  datetime: Date;
  content: string;
}
interface IUser {
  _id: string,
  username: string;
  birthdate: Date;
  email: string;
  password: string;
  profileImage: string;
}

export default function Next() {
  const [postsList, setPostsList] = useState<[] | undefined>([])
  const [usersList, setUsersList] = useState<[] | undefined>([])
  const getPosts = async () => {
    try {
     
      const {data} = await axios.get("api/auth/post")
      const {posts} = data
      setPostsList(posts)
    } catch (error) {
      console.error('Error processing login:', error);
    }
  };

  const getUsers = async () => {
      try {
        const {data} = await axios.get("api/handleform")
        const { users} = data
      } catch (error) {
        console.error('Error processing login:', error);
      }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([getUsers(), getPosts()]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function relacionarArrays() {
    return usersList && postsList && postsList.map((post: IPost) => {
      const userRelacionado:any = usersList.find((user: IUser) => user._id === post.authorId);
  
      // Adicionar a propriedade relacionada se encontrada
      // return userRelacionado ? { ...post, ...userRelacionado } : post;
      return (userRelacionado ? { ...post, ...userRelacionado } : post)

    });
  }

  const union = relacionarArrays()
  return (
    <Layout>
      <div className="min-h-screen bg-gray-600" style={{ backgroundColor: 'var(--gray)' }}>
        <div className="grid gap-10 items-center justify-items-center p-5">
          {union && union ? (
            union.map((item, key) => <PostCard key={key}  post={item} />)
          ) : (
            <p className="text-white text-lg">Loading...</p>
          )}
        </div>
      </div>
    </Layout>
  );
}
