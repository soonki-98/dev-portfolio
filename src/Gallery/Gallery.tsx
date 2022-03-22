import React from "react";
import styled, { css } from "styled-components";

interface Props {
  children: React.ReactNode;
  col?: number;
  gap?: "wider" | "wide" | "normal" | "narrow" | "narrower";
}

const Gallery = ({ children, col = 3, gap = "normal" }: Props) => {
  return (
    <Wrapper col={col} gap={gap}>
      <ul>{children}</ul>
    </Wrapper>
  );
};

export default Gallery;

const Wrapper = styled.div<{
  gap: "wider" | "wide" | "normal" | "narrow" | "narrower";
  col: number;
}>`
  position: relative;
  display: flex;
  justify-content: center;
  width: 70vw;
  margin: 0 auto;
  border: 1px solid;
  outline: 0px;
  padding: 16px;
  border-radius: 6px;
  ul {
    display: grid;
    grid-template-columns: repeat(${(props) => props.col}, 1fr);
    padding: 0;
    margin: 0;
    ${({ gap }) => {
      switch (gap) {
        case "narrower":
          return css`
            gap: 10px;
          `;
        case "narrow":
          return css`
            gap: 15px;
          `;
        case "normal":
          return css`
            gap: 20px;
          `;
        case "wide":
          return css`
            gap: 25px;
          `;
        case "wider":
          return css`
            gap: 30px;
          `;
      }
    }}
  }
`;
