import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: '#222'
})`
    height: 40px;
    width: 90%;
    background-color: rgba(255,255,255,0.9);
    border-radius: 10px;
    padding: 10px;
    margin-top: 30px;
    font-size: 18px;
`;

export const SubmitButton = styled.TouchableOpacity`
    width: 150px;
    height: 40px;
    border-radius: 20px;
    margin-top: 20px;
    align-items: center;
    justify-content: center;
    background-color: #00b94a;
    margin-top: 40px;
`;

export const SubmitText = styled.Text`
    font-size: 18px;
    color: #FFF;
`;
