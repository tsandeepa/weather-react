import styled from "styled-components";

export const DayCast = styled.div`
    padding: 50px 0;
    .TabsListUnstyled-root{
        display:flex;
        justify-content: center;
        gap: 20px;
        margin-bottom: 30px;
        .TabUnstyled-root{
            border: none;
            width: 130px;
            background: transparent;
            cursor: pointer;
            img{
                width: 50px;
            }
        }
        .Mui-selected{
            background: #fff;
            box-shadow: 0px 18px 15px #eee;
        }
    }
    
    .dc-placeholder{
        max-width: 80%;
        overflow: hidden;
        margin: 0 auto;
        display: flex ;
    }
    .dc-h-value{
        display: flex;
        justify-content: center;
        gap: 20px;
        .hr-box{
            width: 92px;
            min-height: 122px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            justify-content: space-between;
        }
        label{
            font-size: 13px;
        }
        p{
            font-size: 13px;
        }
        img{
            width: 30px;
        }
    }

    
`