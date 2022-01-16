/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components";

import { COLORS } from "../../constants";
import VisuallyHidden from "../VisuallyHidden";

const STYLES = {
  small: {
    height: "8px",
    radius: "4px",
  },
  medium: {
    height: "12px",
    radius: "4px",
  },
  large: {
    height: "24px",
    radius: "8px",
    padding: "4px",
  },
};

const ProgressBar = ({ value, size }) => {
  const styles = STYLES[size];

  if (!styles) {
    throw new Error(`Unknown size passed to ProgressBar: ${size}`);
  }

  const min = 0;
  const max = 100;

  return (
    <Wrapper
      style={{
        "--radius": styles.radius,
        "--padding": styles.padding,
      }}
    >
      <VisuallyHidden>{value}%</VisuallyHidden>
      <BarWrapper>
        <Bar
          role="progressbar"
          aria-valuenow={value}
          aria-valuemin={min}
          aria-valuemax={max}
          style={{
            "--width": `${value}%`,
            "--height": styles.height,
          }}
        />
      </BarWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  padding: var(--padding);
  border-radius: var(--radius);
`;

const BarWrapper = styled.div`
  border-radius: 4px;

  /* Trim off corners when progress bar is near 100%. */
  overflow: hidden;
`;

const Bar = styled.div`
  height: var(--height);
  width: var(--width);
  background-color: ${COLORS.primary};
`;

export default ProgressBar;
