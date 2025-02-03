interface ButtonProps {
  text: string;
  color: string;
}

export const Button = ({ text, color }: ButtonProps) => {
  return (
    <button>
      {text}, {color}
    </button>
  );
};

export const H1 = () => {
  return <h1>Home</h1>;
};

export const add = (a: number, b: number) => {
  return a + b;
};
