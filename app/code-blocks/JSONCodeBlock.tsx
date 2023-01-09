import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import json from 'react-syntax-highlighter/dist/esm/languages/hljs/json'
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs'

SyntaxHighlighter.registerLanguage('json', json)

type Props = {
    codeString: string
}

const JSONCodeBlock = ({ codeString }: Props) => (
    <SyntaxHighlighter
        language='json'
        style={railscasts}
    >
        {codeString}
    </SyntaxHighlighter>
)

export default JSONCodeBlock