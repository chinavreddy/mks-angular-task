import { Article } from "src/app/models/article.model";

export interface ArticlesState {
    [x: string]: any;
    posts: Article[];
}

export const initialState: ArticlesState = {
    posts: [
        { id: "1", title: "Article 1", author: "Author 1", description: "Article 1 In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "2", title: "Article 2", author: "Author 2", description: "Article 2 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "3", title: "Article 3", author: "Author 3", description: "Article 3 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "4", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "5", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "6", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "7", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "8", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "assets/img/thumb.jpg", poster: "" },
        { id: "9", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "", poster: "" },
        { id: "10", title: "Article 4", author: "Author 4", description: "Article 4 Description", thumb: "assets/img/thumb.jpg", poster: "" },
    ]
}