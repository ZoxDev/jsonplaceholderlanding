import { keepPreviousData, useQuery } from '@tanstack/react-query';

type typeComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

const useComments = (postId: number) => {
  return useQuery({
    queryKey: ['getTagInPage', postId],
    queryFn: async () => {
      const data: typeComment = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`,
      ).then((res) => res.json());

      return data;
    },
    placeholderData: keepPreviousData,
    refetchOnWindowFocus: false,
  });
};

export default useComments;
