import React, { FC, useEffect, Dispatch, ChangeEventHandler } from 'react'

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
            <p className="section-title"> MARKDOWN </p>
            <textarea onChange={handleChange} value={text} rows={60} />
        </div>
    )
}

export default Editor
