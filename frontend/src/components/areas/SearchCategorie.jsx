import React from 'react'
import { useForm } from 'react-hook-form';

function SearchCategorie() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <div className="flex justify-center items-center">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type='text'
                    placeholder='Place'
                    className="place-input rounded-tl-[40px] rounded-bl-[40px]"
                    {...register('place')}
                />
                <input
                    type='text'
                    placeholder='categorie'
                    className="place-input"
                    {...register('categorie')}
                />
                <button
                    type="submit"
                    className="md:text-2xl sm:text-lg text-sm font-light bg-do_green hover:bg-do_hover_green
                    md:h-16 h-12 text-white rounded-tr-[40px] md:w-[195px] w-[90px] rounded-br-[40px]"
                >
                    Search
                </button>
            </form>
        </div>
    )
}

export default SearchCategorie