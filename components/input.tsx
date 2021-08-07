import { TextField } from "@material-ui/core";

export default function Input({ content }: InputProps) {
  return (
    <div>
      <label htmlFor={content.id}>{content.label}</label>
      <TextField id={content.id} type={content.type} />
    </div>
  );
}

interface InputProps {
  content: {
    id: string;
    label: string;
    type: string;
  };
}
