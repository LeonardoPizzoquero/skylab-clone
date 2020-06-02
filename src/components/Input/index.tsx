import React, {
  InputHTMLAttributes,
  useCallback,
  useState,
  useEffect,
  useRef,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon: React.ComponentType<IconBaseProps>;
  focused?: boolean;
}

const Input: React.FC<InputProps> = ({
  focused = false,
  icon: Icon,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  useEffect(() => {
    if (focused) {
      inputRef.current?.focus();
    }
  }, [focused]);

  return (
    <Container isFocused={isFocused}>
      {Icon && <Icon />}
      <input
        ref={inputRef}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
        {...rest}
      />
    </Container>
  );
};

export default Input;
