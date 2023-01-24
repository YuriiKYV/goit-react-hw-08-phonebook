import PropTypes from "prop-types";
import css from '../TextField/TextField.module.css'


const TextField = ({ id, label, value, name, handleChange, type, checked, className, placeholder, required, pattern }) => {


    return (
        <div className={css.textFieldFormBlock}>
            {label && <label className={css.textFieldItem} htmlFor={id}>{label}</label>}
            <input className={css.textFieldInput} id={id} value={value} checked={checked} name={name} onChange={handleChange} type={type} placeholder={placeholder} required={required} pattern={pattern} />
        </div>
    )
}

export default TextField;

TextField.defaultProps = {
    type: "text",
    required: false,
}

TextField.propTypes = {
    id: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    type: PropTypes.string,
    className: PropTypes.string,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    pattern: PropTypes.string,
}