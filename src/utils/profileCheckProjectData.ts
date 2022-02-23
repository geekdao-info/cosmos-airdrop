import axios from 'axios';
import { ProjectBaseInfo } from '@/types/types';
import { netaAirdropList } from '@/utils/neta-airdrop';
import { getActualAmount, getFormatAmount } from '@/utils';
import netaLogo from '../assets/logo/neta-logo.png';
import dsmLogo from '../assets/logo/dsm-logo.png';
import pstakeLogo from '../assets/logo/pstake-logo.png';
import likeLogo from '../assets/logo/like-logo.png';

export const projectList: ProjectBaseInfo[] = [
    {
        key: 'desmos',
        icon: dsmLogo,
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
            try {
                if (address?.trim()) {
                    const response = await axios.get(
                        `https://api.airdrop.desmos.network/users/${address}`
                    );
                    return getFormatAmount(response.data?.dsm_allotted ?? 0);
                } else {
                    return 0;
                }
            } catch (e) {
                console.log('err', e);
                return 0;
            }
        }
    },
    {
        key: 'neta',
        icon: netaLogo,
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
        isCheckAccount: false,
        checkAccount: (address: string) => {
            try {
                if (address?.trim()) {
                    const neta = netaAirdropList.find((e) => e.address === address.trim());
                    return getActualAmount(neta?.amount ?? 0);
                } else {
                    return 0;
                }
            } catch (e) {
                console.log('err', e);
                return 0;
            }
        }
    },
    {
        key: 'pstake',
        icon: pstakeLogo,
        name: 'PSTAKE',
        coin: 'PSTAKE',
        label: ['ATOM', 'OSMO', 'XPRT', 'CRV', 'stkAAVE'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: 'many Date - detail',
        airdropDate: 'many Date - detail',
        description:
            'Airdrop tokens are vested over 6 months and released monthly, with the first distribution taking place on February 24th, 2022',
        detail: 'Allocation: (1) pSTAKE’s governance token, $PSTAKE, will be distributed to key stakeholders within the pSTAKE ecosystem.(2) 30M $PSTAKE (6% of the total genesis supply) will be distributed, based on the snapshots previously taken. (3) 21.25M $PSTAKE will be distributed to eligible stakers of ATOM, XPRT and OSMO. (4) 5M $PSTAKE will be distributed to the communities of certain DeFi protocols (Aave and Curve Finance). (5) 750K $PSTAKE will be equally distributed amongst all eligible early adopters of the pSTAKE protocol. (6) 450K $PSTAKE will be distributed to our Cosmos StakeDrop campaign participants, with 50K additional tokens distributed to those who delegated with AUDIT.one during the StakeDrop. (7) 2.5M $PSTAKE tokens have been set aside in a Strategic Reserve for future airdrops. Distribution: (1) All airdrop tokens will be distributed directly on the Persistence Core-1 chain. Eligible airdrop recipients will need to create and submit a Persistence wallet addresses (except for StakeDrop participants and XPRT stakers). (2) Airdrop tokens are vested over 6 months and released monthly, with the first distribution taking place on February 24th, 2022. (3) To be eligible for distributions in months 2-6, recipients must deposit and stake at least 20 ATOM via pSTAKE (mint 20 stkATOM) in the eligible ERC20 wallet after the first distribution but before 20th March 2022 (only required once to receive the remaining 5 distributions). A dedicated article will be released for ATOM, XPRT and OSMO stakers (who do not have an eligible ERC20 address) after the first airdrop distribution (which will be sent to all eligible airdrop recipients). ',
        officialWeb: 'https://airdrop.pstake.finance/',
        airdropLink: 'https://blog.pstake.finance/2022/02/18/pstake-airdrop-explained-2/',
        isCheckAccount: true,
        checkAccount: async (address: string) => {
            try {
                if (address?.trim()) {
                    const response = await axios.get(
                        `https://vercel-serverless-geekdao.vercel.app/api/fetchAridropPStake?address=${address}`
                    );
                    let resultTotal = 0;
                    if (response.data?.success) {
                        const airdropDetail = response.data?.message?.eligibility;
                        console.log('airdropDetail - pstake', airdropDetail);
                        resultTotal =
                            airdropDetail?.atomStakeDrop ||
                            0 + airdropDetail?.auditAtomStakeDrop ||
                            0 + airdropDetail?.cosmosStaker ||
                            0 + airdropDetail?.crvHolder ||
                            0 + airdropDetail?.cvxcrvHolder ||
                            0 + airdropDetail?.osmosisStaker ||
                            0 + airdropDetail?.persistenceStaker ||
                            0 + airdropDetail?.stkAaveHolder ||
                            0 + airdropDetail?.stkAtomHolder ||
                            0 + airdropDetail?.stkXprtHolder ||
                            0 + airdropDetail?.yvecrvHolder ||
                            0;

                        console.log('airdropDetail - pstake - resultTotal000', resultTotal);
                    }
                    console.log('airdropDetail - pstake - resultTotal', resultTotal);
                    return getFormatAmount(resultTotal ?? 0);
                } else {
                    return 0;
                }
            } catch (e) {
                console.log('err', e);
                return 0;
            }
        }
    },
    {
        key: 'like',
        icon: likeLogo,
        name: 'LIKE',
        coin: 'LIKE',
        label: ['ATOM', 'Osmosis', 'Civic Liker'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2021-11-30',
        airdropDate: '2022-02-22',
        description:
            'If you are ATOM/OSMO holders or Civic Liker before 2021.11.30, you can claim LIKE and participate in LikeCoin governance.',
        detail: 'If you are ATOM/OSMO holders or Civic Liker before 2021.11.30, you can claim LIKE and participate in LikeCoin governance. ',
        officialWeb: 'https://app.like.co/',
        airdropLink: 'https://app.like.co/airdrop/check',
        isCheckAccount: true,
        checkAccount: async (address: string) => {
            try {
                if (address?.trim()) {
                    const response = await axios.get(
                        `https://vercel-serverless-geekdao.vercel.app/api/getLikeAirdropInfo?address=${address}`
                    );
                    if (response.data?.isEligibleAddress) {
                        return getActualAmount(response.data?.allocatedAmount ?? 0, 1e9);
                    } else {
                        return 0;
                    }
                } else {
                    return 0;
                }
            } catch (e) {
                console.log('err', e);
                return 0;
            }
        }
    }
];
