// source: https://icon-sets.iconify.design/vscode-icons
import Iconify from '@/utils/components/Iconify'

type Props = {
    extension: string
}

const FileExtensionIcon = ({ extension }: Props) =>
{
    switch (extension)
    {
        case 'ts':
        case 'tsx':
            return <Iconify icon='vscode-icons:file-type-typescript' className='text-xl' />
        case 'js':
        case 'jsx':
            return <Iconify icon='vscode-icons:file-type-js' className='text-xl' />
        case 'json':
            return <Iconify icon='vscode-icons:file-type-json' className='text-xl' />
        case 'md':
            return <Iconify icon='vscode-icons:file-type-markdown' className='text-xl' />
        case 'css':
            return <Iconify icon='vscode-icons:file-type-css' className='text-xl' />
        case 'gitignore':
            return <Iconify icon='vscode-icons:file-type-git' className='text-xl' />
        default:
            return <></>
    }
}

export default FileExtensionIcon