import React, { FC } from 'react'
import marked from 'marked'

const Preview: FC = () => {
    const text = localStorage.getItem('text')
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
