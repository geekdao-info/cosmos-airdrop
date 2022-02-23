import axios from 'axios';
import { ProjectBaseInfo } from '@/types/types';
import racoonLogo from '../assets/logo/racoon-logo.png';

export const noCheckProjectList: ProjectBaseInfo[] = [
    {
        key: 'gravity', // 必须唯一
        icon: 'https://static.wixstatic.com/media/c07978_50ca8b446f49409c894085ac86dcf0e1~mv2.png/v1/fill/w_478,h_478,fp_0.50_0.50,q_95/c07978_50ca8b446f49409c894085ac86dcf0e1~mv2.webp',
        name: 'GRAVITY',
        coin: 'GRAVITON',
        label: ['ATOM'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2021-06-28',
        airdropDate: '2022-02-09',
        description: 'Airdrop for ATOM holders voted on proposal 49 & ION holders',
        detail: 'Airdrop for ATOM holders voted on proposal 49 & ION holders',
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
        description:
            'Eligibility: 10 Juno staked on February 8, 2022. $RAC tokens are airdropped on February 28, 2022.',
        detail: 'Eligibility: 10 Juno staked on February 8, 2022. $RAC tokens are airdropped on February 28, 2022. Holding $RAC and providing liquidity makes you eligible for the 2nd airdrop and increase your odds to get airdropped an NFT.',
        officialWeb: 'https://www.racoon.supply/',
        airdropLink: 'https://racoon-supply.vercel.app/',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    }
];
