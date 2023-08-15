import Card from '@mui/material/Card';
import { useState, useEffect } from 'react';
import React from 'react';

function Blog() {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        getBlog()
    }, []);

    function getBlog() {
        fetch(`${process.env.REACT_APP_BACKEND}api/blogs?populate=*`)
            .then(res => res.json())
            .then(blog => {
                setBlogs(blog?.data);
            })
    }
    return <div className="blog">
        <h2>Optus Enterprise Blog</h2>
        <div className="d-flex">
            {
                blogs.map((blog, i) => {
                    return <Card variant="outlined" sx={{ width: 420 }}>
                        <img src={`${blog?.attributes?.blog_image.data.attributes.url}`} className="width-100" alt="blog Image" />
                        <div className='px-4'>
                            <h3>{blog?.attributes?.title}</h3>
                            <p>{blog?.attributes?.description}</p>
                        </div>

                    </Card>
                })
            }
        </div>
    </div>

}

export default Blog;