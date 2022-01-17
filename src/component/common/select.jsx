import React from 'react';

const Select = ({name,options, ...rest})=>{
    return  (<div>
        <select className="form-control" name={name} id={name} {...rest}>
            {options.map((option) => (
                <option key={option.englishName} value={option.englishName}>
                    {option.englishName} {option.name}
                </option>
            ))}
        </select>
    </div>)

}

export default Select;