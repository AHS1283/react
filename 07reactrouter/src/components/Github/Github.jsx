import React from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData();

    return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <div>Github followers: {data.followers}</div>
            <img src={data.avatar_url} alt="GitHub avatar" width={300} />
        </div>
    );
}

export default Github;

export const githubInfoLoader = async () => {
    try {
        const response = await fetch('https://api.github.com/users/AHS1283');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Failed to fetch GitHub user data:', error);
        return {}; // Return an empty object or handle the error appropriately
    }
};
