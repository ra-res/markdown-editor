import React, { FC, useEffect, useState, ChangeEventHandler } from 'react'

import { sampleText } from '../sampleText'

const Editor: FC = () => {
    const [text, setText] = useState<string>(sampleText)

    const handleChange: ChangeEventHandler<HTMLTextAreaElement> = e => {
        const _text = e.target.value
        setText(_text)
    }

    useEffect(() => {
        if (text) {
            localStorage.setItem('text', text)
        }
    }, [text])

    return (
        <div className="editor">
            <textarea onChange={handleChange} value={text} rows={35} />
        </div>
    )
}

export default Editor
