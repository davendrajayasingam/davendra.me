import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import plaintext from 'react-syntax-highlighter/dist/esm/languages/hljs/plaintext'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('plaintext', plaintext)

type Props = {
    codeString: string
}

const PlainTextCodeBlock = ({ codeString }: Props) => (
    <SyntaxHighlighter
        language='plaintext'
        style={railscasts}
    >
        {codeString}
    </SyntaxHighlighter>
)

export default PlainTextCodeBlock