import Comment from '../components/Comment';
import { useParams } from 'react-router-dom';
import useComments from '../hooks/useComments';

const CommentView = () => {
  const { id } = useParams();

  if (id === undefined) throw new Error('Missing id in the URL');

  const commentList = useComments(id);

  return (
    <>
      <main className="w-scree h-screen bg-gray-800 text-white">
        <section className="w-screen h-2/6 flex flex-col gap-11 justify-center items-center bg-gray-900">
          <h1 className="text-4xl">Title of the post</h1>
          <p className="text-xl">Body of the post</p>
        </section>

        <section className="flex flex-wrap gap-4 justify-center mt-5">
          {commentList.data?.map((comment) => {
            return <Comment key={comment.id} comment={comment}></Comment>;
          })}
        </section>
      </main>
    </>
  );
};

export default CommentView;
