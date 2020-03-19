export interface Post {
    $key?: string;
    title: string;
    author: string;
    shortDesc: string;
    longDesc: string;
    createdAt: Date;
    isVisible: boolean;
    tags: string;
    mainImage: string;
}
