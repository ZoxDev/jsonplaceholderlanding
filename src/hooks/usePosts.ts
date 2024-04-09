import { keepPreviousData, useQuery } from '@tanstack/react-query';

export type typePost = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const usePosts = () => {
  return useQuery({
    queryKey: ['getTagInPage'],
    queryFn: async () => {
      const data: Array<typePost> = await fetch('https://jsonplaceholder.typicode.com/posts').then(
        (res) => res.json(),
      );

      return data;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};

export default usePosts;
