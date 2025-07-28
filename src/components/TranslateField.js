const TranslateField = ({ value, onChange, placeholder, id }) => {
  return (
    <textarea
      className="translate-textarea"
      id={id}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default TranslateField;
