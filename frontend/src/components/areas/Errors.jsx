import React from 'react';

const Errors = ({ content }) => {
    return (
        <div className="text-red-500 p-4 rounded">
            {content}
        </div>
    );
};

export default Errors;
