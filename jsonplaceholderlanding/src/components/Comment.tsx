const Comment = () => {
  return (
    <>
      <section className="rounded-md bg-gray-700 border-2 w-1/6">
        <div className="p-5 flex flex-col gap-6">
          <div className="flex gap-4 ">
            <h2 className="text-3xl font-bold">Name</h2>
            <span className="text-base font-light">Email</span>
          </div>
          <p className="text-xl">"text of the comment"</p>
        </div>
      </section>
    </>
  );
};

export default Comment;
