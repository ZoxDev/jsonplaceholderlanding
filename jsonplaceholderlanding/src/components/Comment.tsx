import { typeComment } from '../hooks/useComments';

type CommentProps = {
  comment: typeComment;
};

const Comment = ({ comment }: CommentProps) => {
  return (
    <>
      <section className="rounded-md bg-gray-700 border-2 w-1/6">
        <div className="p-5 flex flex-col gap-6">
          <div className="flex gap-4 ">
            <h2 className="text-3xl font-bold">{comment.name}</h2>
            <span className="text-base font-light">{comment.email}</span>
          </div>
          <p className="text-xl">" {comment.body} "</p>
        </div>
      </section>
    </>
  );
};

export default Comment;
