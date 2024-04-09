import { typePost } from '../hooks/usePosts';
import { useNavigate } from 'react-router-dom';

type PostCardProps = {
  post: typePost;
};

const PostCard = ({ post }: PostCardProps) => {
  const navigate = useNavigate();

  return (
    <>
      <section className="rounded-md bg-gray-700 border-2 w-1/6">
        <div className="p-5 flex flex-col gap-5">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <div>{post.body}</div>
          <button
            className="bg-black p-2 rounded-md"
            onClick={() => navigate(`comments/${post.id}`)}
          >
            SEE COMMENTS
          </button>
        </div>
      </section>
    </>
  );
};

export default PostCard;
