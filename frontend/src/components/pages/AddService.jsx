import React from 'react'
import FormAddService from '../AddService/FormAddService'
import AddServiceHelp from '../AddService/AddServiceHelp'


function AddService() {
    return (
        <div className='flex lg:flex-row flex-col gap-5 font-ubuntu'>
            <FormAddService />
            <div className=" bg-black border lg:rotate-90 rotate-180 border-zinc-400"></div>
            <AddServiceHelp />
        </div>
    )
}

export default AddService