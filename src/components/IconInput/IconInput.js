import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: `${14 / 16}rem`,
    iconSize: 16,
    padding: 24,
  },
  large: {
    fontSize: `${18 / 16}rem`,
    iconSize: 24,
    padding: 32,
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const styles = STYLES[size];

  return (
    <Wrapper
      style={{ "--width": `${width}px`, "--font-size": styles.fontSize }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      <Input
        type="text"
        placeholder={placeholder}
        style={{
          "--padding": `${styles.padding}px`,
        }}
      />
      <IconWrapper
        style={{
          "--size": `${styles.iconSize}px`,
        }}
      >
        <Icon id={icon} size={styles.iconSize} strokeWidth={1} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: var(--width);
`;

const Input = styled.input`
  font-size: var(--font-size);
  appearance: none;
  border: 0;
  padding: 4px var(--padding);
  width: 100%;
  border-bottom: 1px solid ${COLORS.black};
  font-weight: 700;
  color: ${COLORS.gray500};

  &::placeholder {
    font-weight: normal;
    color: ${COLORS.gray700};
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: var(--size);
  width: var(--size);
  pointer-events: none;
  color: ${COLORS.gray700};

  ${Input}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
