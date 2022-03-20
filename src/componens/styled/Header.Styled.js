import styled from "styled-components";

export const HeaderTop = styled.div`
    display: flex;
    justify-content: flex-end;
    padding: 10px;
    input{
        padding: 8px 15px;
        border: 1px solid #ccc;
        border-radius: 50px;
    }

    @media only screen and (max-width: 900px){
        input{
            width: 100%;
        }
    }

`