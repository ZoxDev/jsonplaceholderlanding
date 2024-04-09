import Comment from '../components/Comment';

const LandingPage = () => {
  return (
    <>
      <main className="w-scree h-screen bg-gray-800 text-white">
        <section className="w-screen h-2/6 flex flex-col gap-11 justify-center items-center bg-gray-900">
          <h1 className="text-4xl">Title of the post</h1>
          <p className="text-xl">Body of the post</p>
        </section>

        <Comment></Comment>
      </main>
    </>
  );
};

export default LandingPage;
