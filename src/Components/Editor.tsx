import React, { FC, useEffect, Dispatch, ChangeEventHandler } from 'react'

import { sampleText } from '../sampleText'

interface Props {
    text: string
    setText: Dispatch<React.SetStateAction<string>>
}

const Editor: FC<Props> = ({ text, setText }) => {
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
