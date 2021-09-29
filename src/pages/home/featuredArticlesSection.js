import React from "react";
import "./home.scss";
import placeHolder from "../../assets/generalAssets/img_placeholder.png";
import ViewMoreButton from "../../components/viewMoreButton/viewMoreButton";
/**
 * @returns {JSX.Element}
 * @constructor
 */
export default function FeaturedArticles() {
    const articles = [
        {
            id: "1sdfsdf",
            image: placeHolder,
            date: "10 april, 2017",
            title: "Life and death of a lanetary",
            featured: true,
        },
        {
            id: "asdasd2",
            image: placeHolder,
            date: "5 april, 2017",
            title: "Life and death of a lanetary 1",
            featured: true,
        },
        {
            id: "asd3",
            image: placeHolder,
            date: "30 March, 2017",
            title: "Life and death of a lanetary 2",
            featured: true,
        },
        {
            id: "asdsad4",
            image: placeHolder,
            date: "10 april, 2017",
            title: "Life and death of a lanetary 3",
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
                            <div className="article-card" key={article.id}>
                                <div
                                    className="image"
                                    // style={{
                                    //     backgroundImage: `url(${article.image})`,
                                    // }}
                                >
                                    <p className="placeholder-text">Coming Soon</p>
                                </div>
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
