export interface Article {
    id?: number,
    title:string,
    author: string,
    description: string,
    thumb?: string;
    poster?: string
}

export interface ArticleList {
    articles: Article[]
}


export const ArticleInitialState: ArticleList = {
    articles: [
        // {
        //     id: 1,
        //     title:'java book',
        //     author: 'ram',
        //     description: 'nice book',
        //     thumb: '',
        //     poster: ''
        // }
    ]
}