type ThemeProps = {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isChecked: boolean;
};

export const Theme: React.FC<ThemeProps> = ({ handleChange, isChecked }) => {
  return (
    <label>
      <input type="checkbox" checked={isChecked} onChange={handleChange} />
      Tema
    </label>
  );
};
