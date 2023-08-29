type Option = {
  value: string;
  label: string;
};

type SelectProps = {
  options: Option[];
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
};

function Select(props: SelectProps) {
  const { options, label, value, onChange } = props;
  return (
    <div>
      <label>
        <b>{label}</b>
      </label>
      <select value={value} onChange={onChange} className="selectBox">
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;