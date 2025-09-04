import type { ComponentProps } from 'react';

import styles from '@/components/button/Button.module.css';

type Variant = 'solid' | 'outline';

type ButtonProps = ComponentProps<'button'> & {
  title: string;
  variant?: Variant;
};

const Button = ({ variant, title, ...props }: ButtonProps) => {
  return (
    <button
      className={`${variant === 'solid' ? styles.solid : styles.outline}`}
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
