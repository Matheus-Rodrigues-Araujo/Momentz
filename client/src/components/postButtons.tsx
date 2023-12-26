import axios from "axios";
import Image from "next/image";
import Skeleton from "react-loading-skeleton";
import {
    HeartIcon,
    PaperAirplaneIcon,
    ChatBubbleOvalLeftIcon,
  } from "@heroicons/react/24/solid";
import "../../node_modules/react-loading-skeleton/dist/skeleton.css";

interface PostButtonsProps {
  loading: boolean;
  post: any;
  user: any;
  likes: any;
}

const PostButtons: React.FC<PostButtonsProps> = ({ loading, post, user, likes }) => {
  const handleLike = async () => {
    const payload = {
      currentUserId: user._id,
    };

    try {

      await axios.put(`/api/auth/like/${post._id}`, payload)
      .then(res => {
        const data = res.data
        console.log(data)
      })
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center mt-4 space-x-2">
      {loading ? (
            <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
          ) : (
            <button
              title="Curtir"
              onClick={handleLike}
              className="gap-1 flex items-center text-white"
              
            >
              <HeartIcon className="h-6 w-6" />
              {likes}
            </button>
          )}
          {loading ? (
            <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
          ) : (
            <button
              title="Comentar"
              className="text-white"
            >
              <ChatBubbleOvalLeftIcon className="h-6 w-6"
                
              />
            </button>
          )}
          {loading ? (
            <Skeleton width={25} height={25} style={{ borderRadius: "2em" }} />
          ) : (
            <button
              title="Enviar"
             
            >
              <PaperAirplaneIcon className="h-6 w-6 text-white" />
              </button>
    )}
    </div>
  );
};

export async function getServerSideProps(context:any) {
    const post = {}; 
    const user = {};
    const likes = 0;
    
    return {
      props: {
        post,
        user,
        likes,
      },
    };
  }

export default PostButtons;
