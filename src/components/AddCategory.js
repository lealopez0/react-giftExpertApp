import React, { useState } from 'react'
import {PropTypes} from 'prop-types'


export const AddCategory = ({ setCategories  }) => {

    const [inputValue, setInputValue] = useState('')

    const handdleChange = (e)=>{
        setInputValue(e.target.value);
    }

    const handdleSubmit = (e)=>{
        e.preventDefault();
        if(inputValue.trim().length > 1)
        {
            setCategories(cat=>[inputValue, ...cat])
            setInputValue('');
        } 
    }

    return (
        <form onSubmit={handdleSubmit}>
            <input 
                type={'text'}
                onChange={handdleChange}
                value={inputValue}
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}