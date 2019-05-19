# Reacthing - PWA in da house
#### Basic boilerplate to build easy Web Apps using react-static fucss styled-components

Init `npm install` it has already predefined fucss and styled-components support  
Start dev server `npm start` it is using port **8080** by default  
Build `npm run build` it exports default static site to **dist** directory  
Preview `npm run serve` it lets to preview exported app  

# Fucss and styled components example

```jsx
import { fustyle, cssReload } from 'next-fucss/utils'

export default () => {
  cssReload();
  return (
    <div style={{ textAlign: 'center' }}>
      <Title size={300}>Welcome to React-Statics</Title>
      <Paragraph>This is Fucss working example. Dont forget to use <strong>cssReload();</strong> for hot fucss reload</Paragraph>
      <Button>FUCSS POWER</Button>
    </div>
  )
}

// p:10px fs:230pc

const Paragraph = styled.p`
  ${fustyle('p:20px fs:120pc fw:600')}
`;

export const Title = styled.h1`
  ${props => fustyle({
    'p:10px mdx-fs:500pc': true,
    'fw:800 fs:400pc p:25px': props.big,
    'fw:100 fs:10pc': props.stupid
  })}
`

const Button = styled.button`
  ${fustyle('p:15px-30px br:5px bs:1 bd:0 bg:prim c:white m-t:30px hv-bg:green_scl:1.05 ts:all')}
`
```
