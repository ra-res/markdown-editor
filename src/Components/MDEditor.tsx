import React, { FC, useState } from 'react'

import Editor from './Editor'
import Preview from './Preview'
import { sampleText } from '../sampleText'

import '../Styles/MDEditor.scss'

const MDEditor: FC = () => {
    const [text, setText] = useState<string>(sampleText)

    return (
        <div className="md-editor">
            <h1> Online Markdown Editor </h1>
            <div className="container">
                <Editor text={text} setText={setText} />
                <Preview text={text} />
            </div>
        </div>
    )
}

export default MDEditor
