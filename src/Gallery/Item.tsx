import { useState } from "react";
import styled from "styled-components";

interface Props {
  moveURL?: string;
  title?: string;
  description?: string;
  imgURL?: string;
}

const Item = ({
  moveURL,
  title = "제목을 입력하세요",
  description = "본문을 입력하세요",
  imgURL = "https://img.marieclairekorea.com/2022/02/mck_620b83ff0751b.jpg",
}: Props) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  return (
    <StyledItem
      isHover={isHover}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <a href={moveURL}>
        <img src={imgURL} alt={"아이유"} />
        {isHover && (
          <div className="hover">
            <section className="inner-hover">
              <h3>{title}</h3>
              <p>{description}</p>
            </section>
          </div>
        )}
      </a>
    </StyledItem>
  );
};

export default Item;

const StyledItem = styled.li<{
  isHover: boolean;
}>`
  list-style: none;
  position: relative;
  box-shadow: 10px 10px 10px rgba(63, 63, 63, 0.2);
  cursor: pointer;
  img {
    position: relative;
    border-radius: 4px;
    object-fit: cover;
    width: 100%;
    height: 100%;
    flex-grow: 1;
  }
  .hover {
    position: absolute;
    box-sizing: border-box;
    border-radius: 4px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #0c1631b9;
    padding: 16px;
    color: #fff;
    z-index: 2;
  }
  .inner-hover {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #fff;
  }
`;
