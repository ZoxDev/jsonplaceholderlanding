import PostCard from '../components/PostCard';

const LandingPage = () => {
  return (
    <>
      <main className="w-scree h-screen bg-gray-800 text-white">
        <section className="w-screen h-2/6 flex flex-col gap-11 justify-center items-center bg-gray-900">
          <h1 className="text-4xl">Welcome to JSONPlaceHolder Posts !</h1>
          <p className="text-xl">
            Here you can visit post below and click on it to see there comments, insane huh 😊
          </p>
        </section>

        <PostCard></PostCard>
      </main>
    </>
  );
};

export default LandingPage;
