import React from "react";
import styled, { css } from "styled-components";
import heartIcon from "./icon-heart.svg";

const StyledCard = styled.div`
  position: relative;
  .card-image {
    height: 400px;
    width: 100%;
    border-radius: 8px;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      border-radius: inherit;
    }
  }
  .card-content {
    position: absolute;
    left: 50%;
    transform: translate(-50%, 50%);
    width: calc(100% - 36px);
    bottom: 0;
    background-color: white;
    z-index: 10;
    border-radius: 20px;
    padding: 20px;
  }
  .card-top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
  }
  .card-user {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
  .card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .user-avatar {
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
  }
  .card-title {
    font-size: 18px;
    font-weight: 500;
    color: ${(props) => props.theme.colors.blue};
  }
  .user-name {
    font-weight: 300;
    font-size: 16px;
    color: ${(props) => props.theme.orange};
  }
  .card-amount {
    font-size: ${(props) => props.fontSize || "18px"};
    font-weight: bold;
    ${(props) =>
      props.secondary &&
      css`
        background: linear-gradient(86.88deg, #20e3b2, #2cccff);
      `};
    ${(props) =>
      !props.secondary &&
      css`
        background: linear-gradient(
          86.88deg,
          #7d6aff 1.38%,
          #ffb86c 64.35%,
          #fc2872 119.91%
        );
      `};
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
  }
  .card-meta {
    display: flex;
    align-items: center;
    column-gap: 12px;
  }
`;
const Card2 = (props) => {
  console.log(props);
  return (
    <StyledCard secondary={props.secondary}>
      <div className="card-image">
        <img
          src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center"
          alt=""
        />
      </div>
      <div className="card-content">
        <div className="card-top">
          <div className="card-user">
            <img
              className="user-avatar"
              src="https://cdn.dribbble.com/users/2400293/screenshots/16527147/media/f079dc5596a5fb770016c4ea506cd77b.png?resize=1000x750&vertical=center"
              alt=""
            />
            <span className="user-name">@zndrson</span>
          </div>
          <div className="card-meta">
            <img src={heartIcon} alt="heart" />
            <div>256</div>
          </div>
        </div>
        <div className="card-footer">
          <h3 className="card-title">Cosmic Perspective</h3>
          <span className="card-amount">12,000 PSL</span>
        </div>
      </div>
      <h1 class="text-3xl font-bold underline">
  </h1>
    </StyledCard>
  );
};

export default Card2;
