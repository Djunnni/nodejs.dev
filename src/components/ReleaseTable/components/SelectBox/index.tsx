import React from 'react';

interface Props {
    type: string;
    desc: boolean;
    updateType: Function;
    updateDesc: Function;
}

const SelectBox = ({type, desc, updateType, updateDesc}: Props): JSX.Element => {
    const handleType = (event: React.FormEvent<HTMLSelectElement>):void => {
        updateType(event.currentTarget.value);
    };
    const handleDesc = (event: React.FormEvent<HTMLInputElement>):void => {
        updateDesc(event.currentTarget.checked);
    }

    const id = Math.random() * (100000 - 1) + 1;
    return(
        <div>
            <label htmlFor={`select-type-${id}`}>
                type: <select id={`select-type-${id}`} value={type} onChange={handleType} >
                    {/* <option value='Version'>Version</option> */}
                    <option value='Date'>Date</option>
                </select>
            </label>
            <label htmlFor={`select-desc-${id}`}>
                desc : <input
                    id={`select-desc-${id}`}
                    type="checkbox"
                    checked={desc}
                    onChange={handleDesc}
                />
            </label>
        </div>
    );

} 
export default SelectBox;