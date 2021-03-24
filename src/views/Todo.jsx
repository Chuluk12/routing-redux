import React from 'react'
import useRouter from 'use-react-router'

const Todo = () => {
    const {match} = useRouter();

    return (
        <div> 
            Todo Dengan slug {match.params.slug} 
        </div>  
    )
};

export {Todo} ;