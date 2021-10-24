import React, { FC } from 'react'

import Editor from './Editor'
import Preview from './Preview'

import '../Styles/MDEditor.scss'

const MDEditor: FC = () => {
    return (
        <div className="md-editor">
            <Editor />
            <Preview />
        </div>
    )
}

export default MDEditor
