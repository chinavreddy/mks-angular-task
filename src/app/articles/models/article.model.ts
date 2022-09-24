export interface Article {
    id?: string;
    title?: string;
    author?: string;
    description?: string;
    thumbnail_image?: string | ArrayBuffer | null;
    poster_image?: string | ArrayBuffer | null;
}