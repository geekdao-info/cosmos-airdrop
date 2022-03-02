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
        description: '',
        detail: 'desmos-info',
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
        description: '',
        detail: 'neta-info',
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
        label: ['ATOM', 'OSMO', 'XPRT', 'CRV', 'AAVE'],
        claimStatus: 'Claimable',
        claimStatusClass: 'bg-primary',
        snapDate: 'many Date',
        airdropDate: 'many Date',
        description: '',
        detail: 'pstake-info',
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
        description: '',
        detail: 'like-info',
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
