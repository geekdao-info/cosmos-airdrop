import axios from 'axios';
import { ProjectBaseInfo } from '@/types/types';
import { netaAirdropList } from '@/utils/neta-airdrop';
import { getActualAmount, getFormatAmount } from '@/utils';
import netaLogo from '../assets/logo/neta-logo.png';
import dsmLogo from '../assets/logo/dsm-logo.png';
import pstakeLogo from '../assets/logo/pstake-logo.png';
import likeLogo from '../assets/logo/like-logo.png';
import racoonLogo from '../assets/logo/racoon-logo.png';
import gravityLogo from '../assets/logo/gravity-logo.png';
import hansumLogo from '../assets/logo/hansum-logo.jpeg';
import exswapLogo from '../assets/logo/exswap-logo.jpeg';

export const projectList: ProjectBaseInfo[] = [
    {
        key: 'hansum',
        icon: hansumLogo,
        name: 'HANSUM',
        coin: 'HANSUM',
        label: ['ATOM', 'OSMO', 'JUNO'],
        claimStatus: 'Upcoming',
        claimStatusClass: 'bg-secondary',
        snapDate: '2022-03-01',
        airdropDate: '-',
        description: '',
        detail: 'hansum-info',
        airdropClaim: '',
        officialWeb: '',
        airdropLink: 'https://medium.com/@hansumteam/hansum-token-distribution-e6369f2d814f',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'exswap',
        icon: exswapLogo,
        name: 'EXSWAP',
        coin: 'EX',
        label: ['ATOM', 'OSMO'],
        claimStatus: 'Twitter Notice',
        claimStatusClass: 'bg-accent',
        snapDate: '-',
        airdropDate: '-',
        description: '',
        detail: 'exswap-info',
        airdropClaim: '',
        officialWeb: '',
        airdropLink: '',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
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
        description: '',
        detail: 'like-info',
        airdropClaim: 'https://app.like.co/',
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
    },
    {
        key: 'pstake',
        icon: pstakeLogo,
        name: 'PSTAKE',
        coin: 'PSTAKE',
        label: ['ATOM', 'OSMO', 'XPRT', 'CRV', 'AAVE'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: 'many Date',
        airdropDate: 'many Date',
        description: '',
        detail: 'pstake-info',
        airdropClaim: 'https://airdrop.pstake.finance/',
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
        key: 'desmos',
        icon: dsmLogo,
        name: 'DESMOS',
        coin: 'DSM',
        label: ['ATOM', 'Osmosis'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: '2021-11',
        airdropDate: '2022-01-11',
        description: '',
        detail: 'desmos-info',
        airdropClaim: 'https://airdrop.desmos.network/',
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
        airdropClaim: 'https://spacestation.zone/',
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
        airdropClaim: 'https://racoon-supply.vercel.app/',
        officialWeb: 'https://www.racoon.supply/',
        airdropLink: 'https://racoon-supply.vercel.app/',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'neta',
        icon: netaLogo,
        name: 'NETA',
        coin: 'NETA',
        label: ['ATOM', 'JUNO'],
        claimStatus: 'Close',
        claimStatusClass: 'bg-base-300',
        snapDate: '2021-12-15',
        airdropDate: '2022/02/01 - 28',
        description: '',
        detail: 'neta-info',
        officialWeb: 'https://neta.money/',
        airdropClaim: 'https://neta.money/',
        airdropLink: 'https://neta.money/NETA_Money.pdf',
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
    }
];
