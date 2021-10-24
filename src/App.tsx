import React, { FC } from 'react'

import MDEditor from './Components/MDEditor'

import './App.scss'

interface Props {
    tabSize?: number
}

const App: FC<Props> = ({ tabSize = 4 }) => {
    return <MDEditor />
}

export default App
