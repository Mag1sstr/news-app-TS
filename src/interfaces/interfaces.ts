export interface INews {
  image: string;
  title: string;
  published: Date;
  author: string;
  id: string;
}
export interface IGetNews {
  category: string | null;
  page_number: number;
  page_size: number;
  keywords: string;
}

export interface IFilters {
  page_number: number;
  page_size: number;
  category: null | string;
  keywords: string;
}
