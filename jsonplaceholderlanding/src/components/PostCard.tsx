const PostCard = () => {
  return (
    <>
      <section className="flex flex-col gap-5 rounded-md bg-gray-700 border-2 w-1/6 h-1/4">
        <div className="p-5">
          <h2 className="text-xl font-bold">Title</h2>
          <div>body of the card</div>
        </div>
      </section>
    </>
  );
};

export default PostCard;
