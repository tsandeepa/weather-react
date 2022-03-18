import styled from "styled-components";


export const SearchList = styled.div`
    min-width: 200px;
    background-color: #fff;
    border-radius: 4px;
    position: absolute;
    margin-top: 40px;
    padding: 18px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 15px;
    .sch-elem{
        text-align: right;
        cursor: pointer;
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

`
