import axios from 'axios';
import { ProjectBaseInfo } from '@/types/types';
export const projectList: ProjectBaseInfo[] = [
    {
        key: 'desmos',
        icon: 'https://cosmospug.com/wp-content/uploads/2022/01/dsm.png',
        name: 'DESMOS',
        coin: 'DSM',
        label: ['ATOM', 'Osmosis'],
        snapDate: '2021-11',
        airdropDate: '2022-01-11',
        description: 'Stakers (and Osmosis liquidity providers) of below tokens - ATOM/OSMO/AKT...',
        detail: 'Stakers (and Osmosis liquidity providers) of below tokens are conditionally eligible for the airdrop according to these snapshot dates: ',
        officialWeb: 'https://airdrop.desmos.network/',
        airdropLink:
            'https://medium.com/desmosnetwork/announcing-dsm-airdrop-to-the-interchain-community-39d9837dcc5c',
        checkAccount: async (address: string) => {
            if (address?.trim()) {
                const response = await axios.get(
                    `https://api.airdrop.desmos.network/users/${address}`
                );
                return response.data?.dsm_allotted ?? 0;
            } else {
                return 0;
            }
        }
    },
    {
        key: 'desmos1',
        icon: 'https://cosmospug.com/wp-content/uploads/2022/01/dsm.png',
        name: 'DESMOS',
        coin: 'DSM',
        label: ['ATOM', 'Osmosis'],
        snapDate: '2021-11-11',
        airdropDate: '2022-01-11',
        description: 'Stakers (and Osmosis liquidity providers) of below tokens - ATOM/OSMO/AKT...',
        detail: 'Stakers (and Osmosis liquidity providers) of below tokens are conditionally eligible for the airdrop according to these snapshot dates: ATOM / OSMO / OSMO(liquidity providers) / AKT / BAND / CRO / JUNO / KAVA / LIKE / LUNA / NGM / REGEN.',
        officialWeb: 'https://airdrop.desmos.network/',
        airdropLink:
            'https://medium.com/desmosnetwork/announcing-dsm-airdrop-to-the-interchain-community-39d9837dcc5c',
        checkAccount: async (address: string) => {
            if (address?.trim()) {
                const response = await axios.get(
                    `https://api.airdrop.desmos.network/users/${address}`
                );
                return response.data?.dsm_allotted ?? 0;
            } else {
                return 0;
            }
        }
    }
];
