export class Post {
    key?: string;
    title: string;
    author?: string;
    shortDesc?: string;
    longDesc?: string;
    // craetedAt?: number;
    tags?: string;
    image?: string;
    images?: string;
    slug?: string;
    public?: boolean;

    constructor() {
        this.public = true;
    }
}
