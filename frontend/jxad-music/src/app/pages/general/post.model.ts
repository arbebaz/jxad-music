export interface Post {
  id: number;
  title: string;
  description: string;
  coverImageUrl: string;
  date: Date;
  likes: number;
  comments: number;
}