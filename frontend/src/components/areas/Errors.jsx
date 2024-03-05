import React from 'react';

const Errors = ({ content }) => {
    return (
        <div className="text-red-500 px-2 rounded">
            {content}
        </div>
    );
};

export default Errors;
