import { useState } from "react";

type SwitchProps = {
    label: string;
    defaultValue?: boolean;
    onChange: (value: boolean) => void;
  }
  
  function Switch(props: SwitchProps){
    const { label, defaultValue = false, onChange }= props
    const [checked, setChecked] = useState(defaultValue);
  
    const handleToggle = () => {
      const newValue = !checked;
      setChecked(newValue);
      onChange(newValue);
    };
  
    return (
      <div className="switch">
        <label>
          {label}
          <input type="checkbox" checked={checked} onChange={handleToggle} />
          <span className="slider"></span>
        </label>
      </div>
    );
  };
  
  export default Switch;