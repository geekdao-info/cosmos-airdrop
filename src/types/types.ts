export interface Profile {
    key: number;
    name: string;
    address: string[];
    createDate?: string;
    updateDate?: string;
}

export interface ProjectBaseInfo {
    key: string;
    icon: string;
    name: string;
    label: string[];
    snapDate: string;
    airdropDate: string;
    description: string;
    detail?: string;
    airdropLink?: string;
    officialWeb: string;
    coin: string;
    checkAccount: Function;
}

export interface AirdropInfo {
    address: string;
    amount: number | string;
    coin?: string;
}

export interface ProfileAllotted {
    profileKey: number;
    projectKey: string;
    checkTime?: number;
    airdrop?: AirdropInfo[];
}

export interface Project {
    info: ProjectBaseInfo;
    profileAllotted: ProfileAllotted[];
    airdropTotalAmount: number | string;
}
