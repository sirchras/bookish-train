import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { makePost } from './postsSlice'

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
  const dispatch = useDispatch()
  const [status, setStatus] = useState('')

  function onChange (evt) {
    const { value } = evt.target

    setStatus(value)
  }

  function onSubmit (evt) {
    evt.preventDefault()

    dispatch(makePost({ status, userId: 1 }))
    setStatus('')
  }

  return (
    <Wrapper onSubmit={onSubmit}>
      <Status
        rows='3'
        placeholder={'What\'s up?'}
        value={status}
        onChange={onChange}
      />
      <ButtonPanel>
        <Submit type='submit'>Post</Submit>
      </ButtonPanel>
    </Wrapper>
  )
}

export default NewPost
