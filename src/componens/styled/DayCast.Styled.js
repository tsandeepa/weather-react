import styled from "styled-components";

export const DayCast = styled.div`
    background: #ccc;
    padding: 50px 0;
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