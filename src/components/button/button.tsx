import { type ComponentProps } from 'react';
import { variants, type ButtonVariants } from './button-variant.ts';

type ButtonProps = ComponentProps<'button'> & ButtonVariants;

export const Button = ({
  variant = 'primary',
  size = 'medium',
  disabled = false,
  ...props
}: ButtonProps) => {
  return <button className={variants({ variant, size })} disabled={disabled} {...props} />;
};
