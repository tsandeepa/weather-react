import styled from "styled-components";

export const DayCast = styled.div`
    .day-cast-bg{
        position: fixed;
        left: 0;
        z-index: -1;
        top: -22px;
        transform: rotate(180deg);
    }
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
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: 10px;
            border-radius: 4px;
            color: #171717 !important;
            img{
                width: 50px;
            }
        }
        .Mui-selected{
            background: #ebeff3;
            box-shadow: 0px 24px 15px #d4cfcf;
        }
    }
    
    .dc-placeholder{
        max-width: 80%;
        overflow: hidden;
        margin: 0 auto;
        display: flex ;
        position: relative;
        &::before{
            content: " ";
            width: 40px;
            height: 100%;
            background: #ebeff3;
            display: block;
            position: absolute;
            left: -40px;
            z-index: 1;
            box-shadow: 11px 0px 11px #ebeff3;
        }
        &::after{
            content: " ";
            width: 40px;
            height: 100%;
            background: #ebeff3;
            display: block;
            position: absolute;
            right: -40px;
            z-index: 1;
            box-shadow: -21px -2px 11px #ebeff3;
        }
    }
    .dc-h-value{
        display: flex;
        justify-content: center;
        gap: 20px;
        .hr-box{
            width: 92px;
            min-height: 126px;
            display: flex;
            flex-direction: column;
            align-items: center;
            height: 100%;
            justify-content: space-between;
            cursor: grab;
        }
        label{
            font-size: 13px;
        }
        label{
            font-size: 13px;

            &:last-child{
                color: #93a1b8;
            }
        }
        p{
            font-size: 13px;
            color: #93a1b8;
            min-height: 40px;
            display: flex;
            align-items: center;
        }
        img{
            width: 30px;
            pointer-events: none;
        }
        
    }

    @media only screen and (max-width: 900px){
        .dc-placeholder{
            max-width: 100%;
        }
        .day-cast-bg{
            display: none;
        }
    }

    
`