import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import css from 'react-syntax-highlighter/dist/esm/languages/hljs/css'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('css', css)

type Props = {
    codeString: string
}

const CSSCodeBlock = ({ codeString }: Props) => (
    <SyntaxHighlighter
        language='typescript'
        style={railscasts}
    >
        {codeString}
    </SyntaxHighlighter>
)

export default CSSCodeBlock