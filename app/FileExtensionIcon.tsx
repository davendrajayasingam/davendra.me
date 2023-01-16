// source: https://icon-sets.iconify.design/vscode-icons
import { Icon } from '@iconify/react'

type Props = {
    extension: string
}

const FileExtensionIcon = ({ extension }: Props) =>
{
    switch (extension)
    {
        case 'ts':
        case 'tsx':
            return <Icon icon='vscode-icons:file-type-typescript' className='text-xl' />
        case 'js':
        case 'jsx':
            return <Icon icon='vscode-icons:file-type-js' className='text-xl' />
        case 'json':
            return <Icon icon='vscode-icons:file-type-json' className='text-xl' />
        case 'md':
            return <Icon icon='vscode-icons:file-type-markdown' className='text-xl' />
        case 'css':
            return <Icon icon='vscode-icons:file-type-css' className='text-xl' />
        case 'gitignore':
            return <Icon icon='vscode-icons:file-type-git' className='text-xl' />
        default:
            return <></>
    }
}

export default FileExtensionIcon