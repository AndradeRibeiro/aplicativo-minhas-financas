import styled from 'styled-components/native';

export const Background = styled.View`
    flex: 1;
    background-color: #131313;
`;

export const Container = styled.KeyboardAvoidingView`
    flex: 1;
    justify-content: center;
    align-items: center;
`;

export const AreaInput = styled.View`
    flex-direction: row;
`;

export const Input = styled.TextInput.attrs({
    placeholderTextColor: 'rgba(255,255,255,0.50)'
})`
    background: rgba(0,0,0,0.20);
    width: 95%;
    font-size: 17px;
    color: #FFF;
    margin-bottom: 15px;
    padding: 10px;
    border-radius: 8px;
    border: 1px solid rgba(255,255,255,0.70);
`;

export const SubmitButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
    background-color: #00b94a;
    width: 150px;
    height: 40px;
    border-radius: 20px;
    margin-top: 10px;
`;
export const SubmitText = styled.Text`
    font-size: 18px;
    color: #131313;
`;
export const Link = styled.TouchableOpacity`
    margin-top: 5px;
    margin-bottom: 9px;
`;
export const LinkText = styled.Text`
    color: rgba(255,255,255,0.80);
    margin-top: 15px;
`;