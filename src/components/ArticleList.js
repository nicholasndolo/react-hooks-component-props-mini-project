import React from 'react';
import Article from './Article';

function ArticleList ({posts}){
    const articles =posts.map((post) =>(
        <Article
        key ={post.key}
        title = {post.title}
        date = {post.date}
        preview= {post.preview} 
        minutes = {post.preview}/>
    ));

    return (
        <main>{articles}</main>
    )
}

export default ArticleList;