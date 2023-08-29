import React from 'react';

type InputProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type: string;
};

function INPUT(props: InputProps) {
  const { label, value, onChange, type } = props;
  return (
    <div>
      <label>
        <b>{label}</b>
      </label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default INPUT;
