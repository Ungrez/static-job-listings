import { css } from "lit";
export const singleWorkCss = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div#work {
    display: flex;
    flex-direction: column;
    background-color: white;
    position: relative;
    height: 250px;
    width: 100%;
    border-radius: 5px;
    box-shadow: 0px 30px 33px -25px hsla(180, 29%, 50%, 0.5);
    padding: 0 20px;
    box-sizing: border-box;
    transition: 0.4s;
    gap: 15px;
  }
  div.featured {
    border-left: 5px solid hsl(180, 29%, 50%);
  }
  div#work > p {
    color: hsl(180, 14%, 20%);
    font-weight: 700;
    font-size: 15px;
  }
  div#work_company {
    display: flex;
    margin-top: 35px;
    align-items: center;
    gap: 20px;
  }
  div#work_company > p {
    color: hsl(180, 29%, 50%);
    font-weight: 700;
    font-size: 15px;
  }
  div#work_company button {
    pointer-events: none;
    border: none;
    background-color: hsl(180, 29%, 50%);
    color: white;
    font-weight: 700;
    padding: 5px 10px;
    border-radius: 20px;
    font-size: 12px;
  }
  div#work_company button#work_featured {
    background-color: hsl(180, 14%, 20%);
    transform: translateX(-15%);
  }
  div#work img {
    position: absolute;
    height: 46px;
    width: 46px;
    transform: translateY(-50%);
  }
  ul {
    display: flex;
    gap: 20px;
    list-style: none;
    color: hsl(180, 8%, 52%);
  }
  ul li:nth-child(1) {
    list-style: none;
  }
  div#work_category {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
  button#category_btn {
    border: none;
    padding: 8px 8px;
    font-weight: 700;
    font-family: "League Spartan", sans-serif;
    color: hsl(180, 29%, 50%);
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    background-color: hsl(180, 31%, 95%);
  }
`;
export const workListCss = css`
  div#work_container {
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    min-height: 100vh;
    padding: 55px 20px;
    background-color: hsl(180, 52%, 96%);
  }
`;
export const filterInputCss = css`
  div#filter {
    min-height: 200px;
    width: 100%;
    background-color: gray;
  }
`;
