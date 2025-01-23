export interface GetArticle {
  id: number;
  title: string;
  authors: Author[];
  url: string;
  image_url: string;
  news_site: string;
  summary: string;
  published_at: string;
  updated_at: string;
  featured: boolean;
  launches: Launch[];
  events: Event[];
}

interface Author {
  name: string;
  socials: string | null;
}

interface Launch {
  launch_id: string;
  provider: string;
}

interface Event {}
