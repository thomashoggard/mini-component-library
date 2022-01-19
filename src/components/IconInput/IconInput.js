import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";

import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    fontSize: 14,
    iconSize: 16,
    borderThickness: 1,
    height: 24,
  },
  large: {
    fontSize: 18,
    iconSize: 24,
    borderThickness: 2,
    height: 36,
  },
};

const IconInput = ({ label, icon, width = 250, size, ...delegated }) => {
  const styles = STYLES[size];

  return (
    <Wrapper style={{ "--width": `${width}px` }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <IconWrapper
        style={{
          "--size": `${styles.iconSize}px`,
        }}
      >
        <Icon id={icon} size={styles.iconSize} strokeWidth={1} />
      </IconWrapper>
      <TextInput
        {...delegated}
        style={{
          "--height": `${styles.height / 16}rem`,
          "--border": `${styles.borderThickness}px`,
          "--font-size": `${styles.fontSize / 16}rem`,
        }}
      />
    </Wrapper>
  );
};

const Wrapper = styled.label`
  display: block;
  position: relative;
  width: var(--width);
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const TextInput = styled.input`
  font-size: var(--font-size);
  appearance: none;
  padding: 4px var(--height);
  height: var(--height);
  width: 100%;
  border: none;
  border-bottom: var(--border) solid ${COLORS.black};
  font-weight: 700;
  color: ${COLORS.gray500};

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray700};
  }

  &:focus {
    outline-offset: 2px;
  }

  color: inherit;
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  height: var(--size);
  width: var(--size);
`;

export default IconInput;
