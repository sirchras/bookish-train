import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.form`
  padding: 16px;
  border-bottom: 1px solid hsl(200, 15%, 95%);
`

const Status = styled.textarea`
  display: block;
  width: 100%;
  resize: none;
  margin: 0;
  margin-bottom: 8px;
  border: 1px solid transparent;
  &:focus-visible {
    outline: none;
    border-bottom: 1px solid hsl(200, 15%, 95%);
  }
`

const ButtonPanel = styled.div`
  display: flex;
  justify-content: flex-end;
`

const Submit = styled.button`
  display: block;
  background: hsl(207, 60%, 52%);
  color: white;
  cursor: pointer;
  border: 1px solid transparent;
  border-radius: 24px;
  padding: 4px 24px;
`

function NewPost () {
  return (
    <Wrapper>
      <Status rows='3' placeholder={'What\'s up?'}/>
      <ButtonPanel>
        <Submit>Post</Submit>
      </ButtonPanel>
    </Wrapper>
  )
}

export default NewPost
