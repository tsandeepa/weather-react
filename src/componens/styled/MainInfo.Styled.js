import styled from "styled-components";

export const MainInfo = styled.div`
    flex-grow: 1;
    display: flex;
    justify-content: center;
    align-items: center;

    .main-ifo-area{
        font-weight: 300;
        display: flex;
        gap: 20px;
        justify-content: center;
    }

    .main-ifo{
        display: flex;
        justify-content: center;
        .main-ico{
            width: 70px;
        }

    }
    
    .wiv_temp{
        font-size: 7em;
        font-weight: 200;
    }
    .w-info-values{
        display: flex;
        gap: 30px;
        label{
            font-weight: 300;
            span{
                font-weight: 600;
            }
        }
    }
    
`