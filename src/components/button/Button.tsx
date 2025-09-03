import type { ComponentProps } from 'react';

type Button = ComponentProps<'button'> & {
  title: string;
};

const Button = ({ className, title, ...props }: Button) => {
  return (
    <button className={className} {...props}>
      {title}
    </button>
  );
};

export default Button;
