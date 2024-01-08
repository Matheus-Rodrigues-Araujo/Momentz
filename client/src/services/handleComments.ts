import axios from "axios";

interface ICommentData {
    total: number;
    comment: string;
}

export const handleComments = async (postId: string) => {
  try {
    const response = await axios.get(`/api/auth/comment/${postId}`)
    const data = await response.data
    if(data){
      const { total, comment } = data
      const commentData: ICommentData = {total, comment}
      return commentData
    }
  } catch (error) {
    console.error("Error", error);
    throw error;
  }
};