import { typePost } from '../hooks/usePosts';

type PostCardProps = {
  post: typePost;
};

const PostCard = ({ post }: PostCardProps) => {
  return (
    <>
      <section className="rounded-md bg-gray-700 border-2 w-1/6 h-1/4">
        <div className="p-5 flex flex-col gap-5 ">
          <h2 className="text-xl font-bold">{post.title}</h2>
          <div>{post.body}</div>
        </div>
      </section>
    </>
  );
};

export default PostCard;
