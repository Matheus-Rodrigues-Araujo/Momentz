import { PostCard } from "@/components/postCard";
import Layout from "../../components/nextLayout";
import postsList from '../../randomPostsData'

export default function Next() {

  return (
    <Layout
      children={
        <div className="min-h-screen bg-gray-600 " style={{backgroundColor: 'var(--gray)'}} >
          <div className="grid gap-10 items-center justify-items-center p-5"  >
            {
              postsList.length >=1 ? postsList.map(item => <PostCard post={item} />) : '<p className="text-white text-lg" >Loading...</p>'
            }
          </div>
        </div>
      }
    />
  );
}
