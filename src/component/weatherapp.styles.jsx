import styled from '@emotion/styled';
import { ReactComponent as RedoIcon } from '../images/redo.svg';

export const Container = styled.div`
    background-color: #ededed;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;
  
export const WeatherCard = styled.div`  
    position: relative;
    min-width: 360px;
    box-shadow: 0 1px 3px 0 #999999;
    background-color: ${props => props.dark === true ? 'black' : '#f9f9f9'};
    box-sizing: border-box;
    padding: 30px 15px;
`;

export const Location = styled.div`
    font-size: 28px;
    color: ${props => props.dark === true ? 'white' : '#212121'};
    margin-bottom: 20px;
`;

export const Description = styled.div`
    font-size: 16px;
    color: #828282;
    margin-bottom: 30px;
    text-transform: capitalize;
`;

export const CurrentWeather = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    img {
        flex-basis: 30%;
        height: auto;
        margin-right: 30px;
  }
`;

export const Temperature = styled.div`
    color: #757575;
    font-size: 96px;
    font-weight: 300;
    display: flex;
`;

export const Fahrenheit = styled.div`
  font-weight: normal;
  font-size: 42px;
`;

export const Wind = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  margin-bottom: 20px;

  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

export const Humidity = styled.div`
  display: flex;
  align-items: center;
  font-size: 16x;
  font-weight: 300;
  color: #828282;
  svg {
    width: 25px;
    height: auto;
    margin-right: 30px;
  }
`;

export const Refresh = styled(RedoIcon)`
  width: 15px;
  height: 15px;
  position: absolute;
  right: 15px;
  bottom: 15px;
  cursor: pointer;
  animation: rotate infinite 1.5s linear;
  animation-duration: ${props => props.isLoading ? '1.5s' : '0s'};
  
  @keyframes rotate {
    from {
      transform: rotate(360deg);
    }
    to {
      transform: rotate(0deg);
    }
  }
`;
