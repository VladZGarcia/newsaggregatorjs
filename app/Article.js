import React from 'react'

function Article({article}) {
  return (
    <article>
    {article.image && (
        <img
        src={article.image}
        alt={article.title}
        className="h-56 w-full object-cover rounded-t-lg shadow-md" />
    )}

    <div>
        <div>
        <h2>{article.title}</h2>

        <section>
            <p>{article.description}</p>
        </section>

        <footer>
        <p>{article.source}</p>
        <p>{article.published_at}</p>
        </footer>
        </div>
    </div>
  </article>
  );
}

export default Article;