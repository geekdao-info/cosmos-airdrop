import axios from 'axios';
import { ProjectBaseInfo } from '@/types/types';
import racoonLogo from '../assets/logo/racoon-logo.png';
import gravityLogo from '../assets/logo/gravity-logo.png';

export const noCheckProjectList: ProjectBaseInfo[] = [
    {
        key: 'gravity', // 必须唯一
        icon: gravityLogo,
        name: 'GRAVITY',
        coin: 'GRAVITON',
        label: ['ATOM'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2021-06-28',
        airdropDate: '2022-02-09',
        description: '',
        detail: 'gravity-info',
        officialWeb: 'https://www.gravitybridge.net/',
        airdropLink: 'https://spacestation.zone/',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            if (address?.trim()) {
                // {
                //   "balances": [
                //   ],
                //   "pagination": {
                //     "next_key": null,
                //     "total": "0"
                //   }
                // }
                const response = await axios.get(
                    `https://lcd-gravity-bridge.cosmostation.io/cosmos/bank/v1beta1/balances/${address}`
                );
                return response.data?.balances ?? 0;
            } else {
                return 0;
            }
        }
    },
    {
        key: 'racoon', // 必须唯一
        icon: racoonLogo,
        name: 'RACOON',
        coin: 'RAC',
        label: ['JUNO'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2022-02-08',
        airdropDate: '2022-02-28',
        description: '',
        detail: 'racoon-info',
        officialWeb: 'https://www.racoon.supply/',
        airdropLink: 'https://racoon-supply.vercel.app/',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    }
];
