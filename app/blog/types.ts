export interface BlogPost {
  id: string;
  title: string;
  date: string;
  slug: string;
  content?: string;
  readTime?: number;
}

export interface BlogArchiveProps {
  posts: BlogPost[];
}
