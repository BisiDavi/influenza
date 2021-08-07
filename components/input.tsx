import { TextField } from "@material-ui/core";
import { formStyles } from "@styles/formElement.style";

export default function Input({ content }: InputProps) {
  const classes = formStyles();
  return (
    <div className={classes.inputField}>
      <label htmlFor={content.id}>{content.label}</label>
      <TextField
        className={classes.input}
        id={content.id}
        type={content.type}
        variant={content.variant}
      />
    </div>
  );
}

interface InputProps {
  content: {
    id: string;
    label: string;
    type: string;
    variant?:any
  };
}
