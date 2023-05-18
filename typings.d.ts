type RepoFileData = {
    name: string,
    extension: string,
    path: string,
    url: string,
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

type ActivityBarTab = 'home' | 'code' | 'resume' | 'contact'

type SocialSites = 'LinkedIn' | 'Instagram' | 'Facebook'