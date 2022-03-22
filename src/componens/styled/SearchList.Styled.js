import styled from "styled-components";


export const SearchList = styled.div`
    min-width: 200px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 2;
    .sch-elem{
        text-align: right;
        cursor: pointer;
        padding: 13px 23px;
        p{
            margin-bottom: 0;
            line-height: 1;
            font-size: 14px;
            font-weight: 500;
        }
        label{
            font-size: 12px;
        }
    }
    @media only screen and (max-width: 900px){
        z-index:2;
        width: 100%;
    }

`
