import React from "react";
import { BrowserRouter as Router, Link, Route, Routes, useParams } from "react-router-dom";
import blogimage from '../images/R5.jpeg';
import blogimage2 from '../images/R6.jpeg';
import '../css/blogpage.css';

// The blog post component
export function Blogposts() {
    const { id } = useParams();
    const blogslist = [
        {
            photo: blogimage,
            title: "Why House Prices have skyrocketed",
            id: "why-house-prices-have-skyrocketed",
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
        },
        {
            photo: blogimage2,
            title: "Best Houses in Nairobi",
            id: "best-houses-in-nairobi",
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
        },
        {
            photo: blogimage,
            title: "Best Areas in Nakuru to Purchase a house",
            id: "best-areas-in-nakuru-to-purchase-a-house",
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
        },
        {
            photo: blogimage2,
            title: "The process of Purchasing Listed House",
            id: "the-process-of-purchasing-listed-house",
            content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
        },
    ];

    const blog = blogslist.find(blog => blog.id === id);

    if (!blog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className="uniqueblogcontainer">
            <div className="uniqueblog">
                <h1>{blog.title}</h1>
                <img src={blog.photo} alt={blog.title} />
                <p>{blog.content}</p>
            </div>
        </div>
    );
}

// The blog list component
class Bloglist extends React.Component {
    render() {
        const { photo, title, id } = this.props.blog;
        return (
            <div className="blogcontainer">
                <img src={photo} alt={title} />
                <Link to={`/blogs/${id}`} className="title">{title}</Link>
            </div>
        );
    }
}

// The main blog component
export class Blog extends React.Component {
    render() {
        const blogslist = [
            {
                photo: blogimage,
                title: "Why House Prices have skyrocketed",
                id: "why-house-prices-have-skyrocketed",
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
            },
            {
                photo: blogimage2,
                title: "Best Houses in Nairobi",
                id: "best-houses-in-nairobi",
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
            },
            {
                photo: blogimage,
                title: "Best Areas in Nakuru to Purchase a house",
                id: "best-areas-in-nakuru-to-purchase-a-house",
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
            },
            {
                photo: blogimage2,
                title: "The process of Purchasing Listed House",
                id: "the-process-of-purchasing-listed-house",
                content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quam inventore amet quibusdam ex laborum. Deserunt possimus aliquam ea aut, deleniti, soluta enim nesciunt quibusdam rem, dicta neque quaerat autem.'
            },
        ];

        return (
        
                <section className="container">
                    {blogslist.map((blog, index) => (
                        <Bloglist key={index} blog={blog} />
                    ))}
                </section>
        );
    }
}
