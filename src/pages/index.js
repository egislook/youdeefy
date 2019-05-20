import React from 'react'
import styled from 'styled-components'
import { fustyle, cssReload } from 'next-fucss/utils'
import { withSiteData } from 'react-static'

export default withSiteData((props) => {
  cssReload();
  return (
    <div className="p:20px" style={{ textAlign: 'center' }}>
      <Title size={300}>Welcome to React-Statics</Title>
      <Paragraph>This is Fucss working example. Dont forget to use <strong>cssReload();</strong> for hot fucss reload</Paragraph>
      <Button>FUCSS POWER</Button>
    </div>
  )
})


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
