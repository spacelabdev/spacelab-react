import React from "react";
import "./home.scss";
import placeHolder from "../../assets/img_placeholder.png";
import ViewMoreButton from "../../components/viewMoreButton/ViewMoreButton";
/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function FeaturedArticles() {
    const articles = [
        {
            image: placeHolder,
            date: "10 april, 2017",
            title: "Life and death of a lanetary",
            featured: true,
        },
        {
            image: placeHolder,
            date: "10 april, 2017",
            title: "Life and death of a lanetary",
            featured: true,
        },
        {
            image: placeHolder,
            date: "10 april, 2017",
            title: "Life and death of a lanetary",
            featured: true,
        },
        {
            image: placeHolder,
            date: "10 april, 2017",
            title: "Life and death of a lanetary",
            featured: false,
        },
    ];
    return (
        <section className="featured-articles-section">
            <div className="content-container">
                <h2>News &amp; Featured Articles</h2>
                <div className="card-display">
                    {articles
                        .filter((article) => article.featured === true)
                        .map((article) => (
                            <div className="article-card">
                                <div
                                    className="image"
                                    style={{
                                        backgroundImage: `url(${article.image})`,
                                    }}
                                ></div>
                                <p>{article.date}</p>
                                <p>{article.title}</p>
                            </div>
                        ))}
                </div>
                <ViewMoreButton pathName="/Blog" />
            </div>
        </section>
    );
}
