import styled from 'styled-components';


export const InputContainer = styled.div`
    width: 100%;
    height: 42px;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;
    overflow: hidden;
    padding: 0 10px;
    
    & input {
        width: 100%;
        height: 42px;
        border-radius: 21px;
        background-color: transparent;
        border: 0;
        outline: none;
    }
`

export const TextError = styled.p`
    color: red;
    font-size: .8rem;
    margin-top: .2rem;
    margin-left: 1rem;
`