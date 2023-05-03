import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Category = () => {

    const categoryNews = useLoaderData();

    const {id} = useParams();

    return (
        <div>
            <h2>This is category: {categoryNews.length}</h2>
        </div>
    );
};

export default Category;