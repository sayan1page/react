import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

interface Iuser {
    name: string;
    avatar: string;
}
interface IPost {
    type: string;
    id: number;
    playlist: string;
    flashcard_front: string;
    flashcard_back: string;
    description: string;
    user: Iuser;
}

const Follwing = () => {
    const defaultPost: IPost = { "id": 7576, "type": "flashcard", "playlist": "Period 5: 1844-1882", "flashcard_front": "The land dispute that contributed to the Mexican-American War was between", "flashcard_back": "In 1845, when Texas joined the US, Mexico insisted the US had a right only to the territory northeast of the Nueces River. The US argued that it should have title to all land between the Nueces and the Rio Grande as well.", "description": "Topic 5.3: The Mexican–American War #apush", "user": { "name": "AP US History", "avatar": "https://cross-platform-rwa.rp.devfactory.com/avatars/apush.png" } };

    const [post, setPost] = React.useState(defaultPost);

        
    React.useEffect(() => {
        axios
            .get<IPost>('https://cross-platform.rp.devfactory.com/following', {
                timeout: 10000,
            })
            .then(response => {
                setPost(response.data);
            })
            
        });

    return (<div>
        <h3>{post.type}</h3>
        <h3>{post.user.name}</h3>
        </div> );
};

export default Follwing;