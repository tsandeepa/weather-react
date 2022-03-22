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
        color: #464646;
    }
    .area-condition{
        color: #454545;
        font-weight: 400;
    }
    .main-ifo{
        display: flex;
        justify-content: center;
        .main-ico{
            width: 70px;
            align-self: center;
        }

    }
    
    .wiv_temp{
        font-size: 7em;
        font-weight: 200;
        text-shadow: 4px 14px 17px #736767;
        color: #fff;
        font-weight: 200;
        position: relative;
        span{
            font-size: 0.5em;
            position: absolute;
            top: 20px;
            right: -35px;
        }
    }
    .w-info-values{
        display: flex;
        gap: 30px;
        img{
            height: 22px;
            margin-right: 5px;
        }
        label{
            font-weight: 300;
            font-size: 14px;
            color: #736767;
            span{
                font-weight: 600;
                margin-left: 10px;
                color: #000;
            }
        }
    }

    @media only screen and (max-width: 900px){
        .w-info-values{
            flex-direction: column;
            gap: 20px;
        }
        .wiv_temp{
            font-size: 5em;
        }
        .main-ifo-area{
            font-size: 1.5em;
        }   
    }

    
`