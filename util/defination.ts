export type Photo = {
id: string,
    title: string,
    url: string,
    tags: string[],
    views: string,
    share: string,
    uploaded: string,
    author: {
      avatar: string,
      name: string,
      bio: string,
      followers: number,
    },
    likes: number,
};