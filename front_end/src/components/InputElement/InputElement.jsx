import PropTypes from 'prop-types';

export const InputElement = ({className, label, placeholder,name, type = 'text', value, onChange}) => {
  return (
    <div className="w-full flex flex-col">
        <label htmlFor="" className="text-black text-sm">{label}</label>
        <input type={type} name={name} onChange={onChange} required value={value} className={`border text-black px-2.5 py-1.5 text-sm outline-none border-[#8D25C4] rounded ${className}`} placeholder={placeholder}/>
    </div>
  )
}

InputElement.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.any,
  value: PropTypes.string,
};