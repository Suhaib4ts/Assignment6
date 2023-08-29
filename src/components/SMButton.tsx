type SMButtonProps = {
  buttonValue: string;
  buttonClick: () => void;
}

function SMButton(props: SMButtonProps) {
  return <button onClick={props.buttonClick}>{props.buttonValue}</button>;
};

export default SMButton;