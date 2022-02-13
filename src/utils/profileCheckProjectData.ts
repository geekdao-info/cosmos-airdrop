import axios from 'axios';
import { ProjectBaseInfo } from '@/types/types';
import { netaAirdropList } from '@/utils/neta-airdrop';
import { getActualAmount, getFormatAmount } from '@/utils';

export const projectList: ProjectBaseInfo[] = [
    {
        key: 'desmos',
        icon: 'https://cosmospug.com/wp-content/uploads/2022/01/dsm.png',
        name: 'DESMOS',
        coin: 'DSM',
        label: ['ATOM', 'Osmosis'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2021-11',
        airdropDate: '2022-01-11',
        description: 'Stakers (and Osmosis liquidity providers) of below tokens - ATOM/OSMO/AKT...',
        detail: 'Stakers (and Osmosis liquidity providers) of below tokens are conditionally eligible for the airdrop according to these snapshot dates: ',
        officialWeb: 'https://airdrop.desmos.network/',
        airdropLink:
            'https://medium.com/desmosnetwork/announcing-dsm-airdrop-to-the-interchain-community-39d9837dcc5c',
        isCheckAccount: true,
        checkAccount: async (address: string) => {
            if (address?.trim()) {
                const response = await axios.get(
                    `https://api.airdrop.desmos.network/users/${address}`
                );
                return getFormatAmount(response.data?.dsm_allotted ?? 0);
            } else {
                return 0;
            }
        }
    },
    {
        key: 'neta',
        icon: 'https://neta.money/static/netaCoin-ff914cf961aa01f8dd347705d6238480.png',
        name: 'NETA',
        coin: 'NETA',
        label: ['ATOM', 'JUNO'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2021-12-15',
        airdropDate: '2022/02/01 - 28',
        description:
            'NETA is money on the Juno Network. For the Juno ecosystem and inter-chain Cosmos...',
        detail: 'NETA is money on the Juno Network. It‘s sole purpose is to function as a scarce decentralized store of value asset for the Juno ecosystem and inter-chain Cosmos at large. Claimable for free by thousands of Juno delegates at inception. Never a seed sale, private sale or public sale. Verifiable zero NETA is held in reserve by any third party ie. developers, teams, founders or companies. The Juno community owns all NETA in existence. Distributed widely and fairly via the criteria, listed in the distribution section. How & when is NETA distributed ? All NETA enter general public circulation between February 1st – February 28th, 2022. At the time of the Moneta upgrade (December 15th) a snapshot was taken of the Juno Network distributed ledger. The smart contract enabled NETA genesis claim window opens on February 1st 2022 based on the following criteria designed to mitigate gaming of the distribution and incentivize loyal network supporters only:(1)Person delegated at least 25 JUNO on-chain = 1 NETA,(2)Person voted on at least 1 on-chain governance proposal = 10 bonus NETA,(3)Person voted on all on-chain governance proposals = 5 bonus NETA,(4)Person delegated to at least 1 validator outside the top 20 = 0.2 bonus NETA. Starting February 1st NETA is claimable. Unclaimed NETA will hard-decay on day 28. Meaning all unclaimed NETA will automatically permanently burn on February 28th 2022',
        officialWeb: 'https://neta.money/',
        airdropLink: 'https://cosmospug.com/neta-airdrop-for-juno-holders/',
        isCheckAccount: true,
        checkAccount: (address: string) => {
            if (address?.trim()) {
                const neta = netaAirdropList.find((e) => e.address === address.trim());
                return getActualAmount(neta?.amount ?? 0);
            } else {
                return 0;
            }
        }
    }
];
