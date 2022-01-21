import styled from "styled-components";

export const DashboardTwo = () => {
  const MainBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 3%;
    width: 60vw;
    height: 80vw;
    padding: 20px;
    border-radius: 0.4%;
  `;
  const Heading = styled.h1`
    color: #515151;
    font-size: 25px;
    font-weight: 600;
    line-height: 32.68px;
  `;
  const SubHeading1 = styled.div`
    color: #1072b9;
    font-size: 14px;
    font-weight: 600;
    line-height: 19.07px;
    display: inline-block;
    margin-right: 10px;
  `;
  const SubHeading2 = styled.div`
    font-size: 14px;
    line-height: 19px;
    display: inline-block;
    color: #8f8f8f;
    margin-right: 3px;
  `;

  // need to write condition in color as well as in teXt
  const DifficultyLevel = styled.div`
    font-size: 14px;
    line-height: 19px;
    display: inline-block;
    color: #ff2d55;
  `;

  return (
    <MainBox>
      <Heading>Find the Running Median</Heading>
      <div>
        <SubHeading1>{"Data Structure ( Heap )"}</SubHeading1>
        <SubHeading2>
          Difficulty Level: <DifficultyLevel>Hard</DifficultyLevel>
        </SubHeading2>
      </div>
    </MainBox>
  );
};
