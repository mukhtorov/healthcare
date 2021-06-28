import styled,{css} from 'styled-components';


export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

const Main = css`
display: flex;
`
 const Content = css`
 display: flex;
 `
 export const GoogleMap = styled.div`
 width: 100%;
 height: 50vh;
 margin: 40px 0;
 `
export const Wrapper = styled.div`
${({main})=>main && Main};
${({content})=>content && Content};
margin-right: ${({section})=>section && '60px'};
`
const TitLe = css`
font-size: 16px;
line-height: 20px;
margin-bottom: 20px;

`

const Desc = css`
font-weight: normal;
font-size: 14px;
line-height: 24px;

`
export const Title = styled.div`
 font-family: 'Open Sans', sans-serif;
font-style: normal;
font-weight: 800;
font-size: 44px;
line-height: 52px;
text-transform:${({main})=>main && 'uppercase'} ;
color:var(--text-title-color);
${({title})=>title && TitLe};
${({desc})=>desc && Desc};

`