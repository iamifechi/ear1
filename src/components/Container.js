import styled,{css} from 'styled-components';

const flex=()=>{
    
}

const Container= styled.div`
    position: relative;
    margin:0;
    min-height:70vh;
    width:80%;
    padding:10%;
    overflow:hidden;
    display:column;
    justify-content:center;
    align-items:flex-start;
    @include flex(column,center,flex-start);



    @media screen and (min-width:762px){
        height:100vh;
        min-height:500px;
        width:100%;
        padding:0%;
    } 

    ${props=>props && css`
       color:black;
    `}
`

export default Container;