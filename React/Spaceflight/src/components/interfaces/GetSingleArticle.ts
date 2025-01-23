export interface GetSingleArticle {
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
  socials: Socials;
}

interface Socials {
  x: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  mastodon: string;
  bluesky: string;
}

interface Launch {
  launch_id: string;
  provider: string;
}

interface Event {
  event_id: number;
  provider: string;
}
