import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
`

const Caption = styled.div`
  margin-top: 4px;
  text-align: center;
  font-size: 13px;
`

const Container = styled.div`
  margin: 10px;
  padding: 10px;
  
  border: 2px solid black;
  
  width: fit-content;
  
  &:has(img) {
    border-color: green;
    border-style: dashed;
  }
  
  &:has(img) ${Caption} {
    color: red;
  }
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  min-height: 100px;
`

export const Has = () => {
  return (
      <Main>
        <Container>
          <Item>I don't have image :( <Caption>This is caption</Caption></Item>
        </Container>
        <Container>
          <Item>
            I have image!
            <img src="https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385"/>
          </Item>
        </Container>
        <Container>
          <Item>
            I have image and caption!
            <img src="https://ps.w.org/tiny-compress-images/assets/icon-256x256.png?rev=1088385"/>
            <Caption>Panda picture</Caption>
          </Item>
        </Container>
      </Main>
  )
}
