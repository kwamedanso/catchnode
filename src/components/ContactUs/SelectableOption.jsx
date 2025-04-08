import React from 'react';
import styles from './styles/SelectableOption.module.css';

const SelectableOption = ({ name, value, labelText, checked, onChange }) => {
    const labelClassName = `${styles.label} ${checked ? styles.selected : styles.unselected}`;

    return (
        <label htmlFor={value} className={labelClassName}>
            <input
                type="radio"
                name={name}
                id={value}
                value={value}
                checked={checked}
                onChange={onChange}
                className={styles.input}
            />
            {labelText}
        </label>
    );
};

export default SelectableOption;