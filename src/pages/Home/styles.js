import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.View`
    margin-left: 15px;
    margin-bottom: 25px;
`;

export const Name = styled.Text`
    font-size: 20px;
    color: #FFF;
    font-style: italic;
    margin-bottom: 10px;
`;

export const Balance = styled.Text`
    margin-top: 5px;
    font-size: 30px;
    color: #FFF;
    font-weight: bold;
`;

export const Title = styled.Text`
    margin-left: 5px;
    color: #00b94a;
    margin-top: 15px;
    margin-bottom: 15px;
    font-size: 18px;
`;

export const List = styled.FlatList.attrs({
    marginHorizontal: 15
})`
    padding-top: 15px;
    background-color: rgba(255,255,255,0.9);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
`;

export const AreaTitle = styled.View`
    flex-direction: row;
    margin-left: 15px;
    align-items: center;
`;

export const AreaWithoutList = styled.View`
    padding-top: 15px;
    background-color: rgba(255,255,255, 0.9);
    border-top-left-radius: 15px;
    border-top-right-radius: 15px;
    margin-left: 8px;
    margin-right: 8px;
    height: 100%;
`;

export const TextWithoutList = styled.Text`
    color: #131313;
    font-size: 18px;
    margin-top: 20px;
    margin-left: 15px;
`;
