import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import moment from "moment";

export const DashboardTwo = () => {
  const MainBox = styled.div`
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 3%;
    width: 60vw;
    height: 80vh;
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
    text-transform: capitalize;
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
    text-transform: capitalize;
  `;
  const UpdateStatus = styled.div`
    font-size: 16px;

    line-height: 22px;

    color: #515151;
    margin-top: 10px;
  `;

  const MainContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
    padding: 30px;
    div {
      background: #c4c4c4;
      height: 45vh;

      width: 25vw;
    }
  `;

  const [queData, setQueData] = useState({});
  useEffect(() => {
    getQuestion();
  }, []);
  async function getQuestion() {
    const { data } = await axios.get(
      "https://dsa-tracker-api.herokuapp.com/question/61eb9b9ae96ae1000487cfdc"
    );
    console.log("data:", data);
    data.updatedAt = moment(data.updatedAt).format("DD MMM YYYY");
    setQueData(data);
  }
  return (
    <MainBox>
      <Heading>{queData.title}</Heading>
      <div>
        <SubHeading1>{queData.topic}</SubHeading1>
        <SubHeading2>
          Difficulty Level:{" "}
          <DifficultyLevel> {queData.difficulty}</DifficultyLevel>
        </SubHeading2>
      </div>
      <UpdateStatus>Updated on {queData.updatedAt}</UpdateStatus>
      <MainContainer>
        <div></div>
        <div></div>
      </MainContainer>
    </MainBox>
  );
};
