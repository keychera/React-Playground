import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Space } from 'antd'

const Home = () => {
  return (
    <Space align="center">
      <Link to='/cv'>
        <Button>CV</Button>
      </Link>
      <Link to='/tictactoe'>
        <Button>React Tutorial result: Tic Tac Toe</Button>
      </Link>
    </Space>
  )
}

export default Home