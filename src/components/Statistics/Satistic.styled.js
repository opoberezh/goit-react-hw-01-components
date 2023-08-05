import styled from 'styled-components';
import getRandomHexColor from '../Color/getColor';

export const StatistList = styled.section`
  width: 350px;
  height: 100%;
  margin: 50px auto;
  padding: 30px 0 0;
  overflow: hidden;
  border-radius: 10px;
  box-shadow:  0px 2px 15px 2px rgba(120, 120, 120, 0.5);
`;

export const Title = styled.h2`
  margin-bottom: 30px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 600;
  color: #000000;
`;

export const StatList = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 0px;
  gap: 6px;
  background-color: ${getRandomHexColor};
  padding: 16px 0;
`;

export const Label = styled.span`
  font-size: 15px;
  font-weight: 600;
  color: white;
  text-shadow:0px 2px 15px 2px rgba(120, 120, 120, 0.5);
`;

export const Percentage = styled.span`
  font-size: 20px;
  font-weight: 600;
  color: white;
  text-shadow: 0px 2px 15px 2px rgba(120, 120, 120, 0.5);
`;