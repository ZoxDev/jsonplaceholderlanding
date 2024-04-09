import PostCard from '../components/PostCard';

import usePosts from '../hooks/usePosts';

const LandingPage = () => {
  const postList = usePosts();

  return (
    <>
      <main className="w-scree h-auto bg-gray-800 text-white">
        <section className="w-screen h-56 flex flex-col gap-11 justify-center items-center bg-gray-900">
          <h1 className="text-4xl">Welcome to JSONPlaceHolder Posts !</h1>
          <p className="text-xl">
            Here you can visit post below and click on it to see there comments, insane huh 😊
          </p>
        </section>
        <section className="flex flex-wrap gap-4">
          {postList.data?.map((post) => {
            return <PostCard key={post.id} post={post}></PostCard>;
          })}
        </section>
      </main>
    </>
  );
};

export default LandingPage;
