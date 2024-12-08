import cn from 'classnames';
import React, { InputHTMLAttributes } from 'react';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string;
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  variant?: 'normal' | 'solid' | 'outline' | 'line';
  dimension?: 'small' | 'medium' | 'big';
}

const variantClasses = {
  normal:
    'bg-gray-900 border border-border-base rounded-lg focus:shadow  focus:border-yellow-500',
  solid:
    'bg-gray-900 border border-border-100 rounded-lg  focus:border-yellow-500',
  outline: 'border border-border-base rounded-lg focus:border-accent',
  line: 'ltr:pl-0 rtl:pr-0 border-b border-border-base rounded-lg focus:border-accent',
};

const sizeClasses = {
  small: 'text-sm h-9',
  medium: 'h-12',
  big: 'h-14',
};

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      label,
      name,
      error,
      children,
      variant = 'normal',
      dimension = 'medium',
      shadow = false,
      disabled = false,
      type = 'text',
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={className}>
        {label && (
          <label
            htmlFor={name}
            className="mb-3 block text-sm font-semibold leading-none text-white"
          >
            {label}
          </label>
        )}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={cn(
            'flex w-full appearance-none items-center px-4 text-sm text-heading transition duration-300 ease-in-out focus:outline-0 focus:ring-0',
            shadow && 'focus:shadow',
            variantClasses[variant],
            sizeClasses[dimension],
            disabled && 'cursor-not-allowed bg-gray-900',
            inputClassName
          )}
          disabled={disabled}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          spellCheck="false"
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {error && <p className="mt-2 text-xs text-red-500">{error}</p>}
      </div>
    );
  }
);
Input.displayName = 'Input';
export default Input;
