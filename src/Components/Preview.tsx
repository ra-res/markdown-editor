import React, { FC } from 'react'
import marked from 'marked'

interface Props {
    text: string
}

const Preview: FC<Props> = ({ text }) => {
    const render = (text: string | null) => {
        if (text) {
            const __html = marked(text, { sanitize: true })
            return { __html }
        }
    }

    return (
        <div className="preview">
            <div dangerouslySetInnerHTML={render(text)} />
        </div>
    )
}

export default Preview
