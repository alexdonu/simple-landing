export type PostData = {
  title: string;
  content: string;
  imagesUrls: string[];
  createdAt: string;
};

export type PostDataWithId = PostData & { id: string };
