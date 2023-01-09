type RepoFileData = {
    name: string,
    path: string,
    type: 'dir' | 'file',
    /**
     * Only present if type is 'file'
     */
    data?: string,
    /**
     * Only present if type is 'dir'
     */
    children?: RepoFileData[],
}