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
import senatusLogo from '../assets/logo/senatus-logo.png';
import hopeLogo from '../assets/logo/hope-logo.png';
import cronusLogo from '../assets/logo/cronus-logo.jpeg';
import craftLogo from '../assets/logo/craft-logo.jpeg';
import fotLogo from '../assets/logo/fot-logo.jpeg';
import diffusionLogo from '../assets/logo/diffusion-logo.jpeg';
import coolCatLogo from '../assets/logo/coolCat-logo.jpeg';
import cosmicHorizonLogo from '../assets/logo/cosmic-horizon-logo.png';

export const projectList: ProjectBaseInfo[] = [
    {
        key: 'CoolCatChain',
        icon: coolCatLogo,
        name: 'CoolCatChain',
        coin: 'CCAT',
        label: ['ATOM', 'JUNO', 'OSMO', 'HUAHUA'],
        claimStatus: 'Twitter Notice',
        claimStatusClass: 'bg-accent',
        snapDate: 'TBA',
        airdropDate: 'TBA',
        description: '',
        detail: 'cool-cat-info',
        twitter: 'https://twitter.com/CoolCatChain',
        discord: 'https://discord.com/invite/mnyvNG9ejf',
        airdropClaim: '',
        officialWeb: 'https://linktr.ee/coolcatchain',
        airdropLink: '',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'Cronus',
        icon: cronusLogo,
        name: 'Cronus',
        coin: 'CRN',
        label: ['ATOM', 'OSMO', 'JUNO', 'Evmos'],
        claimStatus: 'Upcoming',
        claimStatusClass: 'bg-secondary',
        snapDate: '2022/03/06-28',
        airdropDate: 'TBA',
        description: '',
        detail: 'cronus-info',
        twitter: 'https://twitter.com/cronusfinance',
        discord: 'https://discord.com/invite/cronusfinance',
        airdropClaim: '',
        officialWeb: '',
        airdropLink: 'https://medium.com/@cronusfinance/the-cronus-airdrop-e387aceca90c',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'Senatus',
        icon: senatusLogo,
        name: 'Senatus',
        coin: 'SPQR',
        label: ['ATOM', 'JUNO'],
        claimStatus: 'Twitter Notice',
        claimStatusClass: 'bg-accent',
        snapDate: 'TBA',
        airdropDate: 'TBA',
        description: '',
        detail: 'senatus-info',
        twitter: 'https://twitter.com/SenatusWorld',
        discord: '',
        airdropClaim: '',
        officialWeb: '',
        airdropLink: 'https://www.docdroid.net/c9r6BP4/spqr-whitepaper-v01-pdf',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'Craft',
        icon: craftLogo,
        name: 'Craft Economy',
        coin: 'CRAFT',
        label: ['CRAFT/OSMO', 'CRAFT/ATOM'],
        claimStatus: 'Twitter Notice',
        claimStatusClass: 'bg-accent',
        snapDate: 'TBA',
        airdropDate: 'TBA',
        description: '',
        detail: 'craft-info',
        twitter: 'https://twitter.com/crafteconomy_',
        discord: 'https://discord.com/invite/crafteconomy',
        airdropClaim: '',
        officialWeb: 'https://crafteconomy.io/',
        airdropLink: 'https://docs.crafteconomy.io/tokenomics/craft',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'diffusion',
        icon: diffusionLogo,
        name: 'Diffusion Finance',
        coin: 'DIFF',
        label: ['UNI', 'OSMO', 'Evmos Community'],
        claimStatus: 'Twitter Notice',
        claimStatusClass: 'bg-accent',
        snapDate: 'TBA',
        airdropDate: 'TBA',
        description: '',
        detail: 'diffusion-info',
        twitter: 'https://twitter.com/diffusion_fi',
        discord: 'https://discord.com/invite/diffusion-fi',
        airdropClaim: '',
        officialWeb: 'https://diffusion.fi/',
        airdropLink: 'https://medium.com/@diffusion_fi/diffusion-tokenomics-ae7ee46e36c7',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'hope',
        icon: hopeLogo,
        name: 'Hope Galaxy',
        coin: 'HOPE',
        label: ['NETA', 'OSMO', 'JUNO'],
        claimStatus: 'Upcoming',
        claimStatusClass: 'bg-secondary',
        snapDate: '2022-03',
        airdropDate: '2022-04',
        description: '',
        detail: 'hope-info',
        twitter: 'https://twitter.com/HopeGalaxyNFT',
        discord: 'https://discord.com/invite/BfKPacc5jF',
        airdropClaim: '',
        officialWeb: 'https://linktr.ee/HopeGalaxy',
        airdropLink: 'https://hopegalaxy.medium.com/airdrop-live-hope-cw20-7a0cff53d28b',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'hansum',
        icon: hansumLogo,
        name: 'HANSUM',
        coin: 'HANSUM',
        label: ['ATOM', 'OSMO', 'JUNO'],
        claimStatus: 'Snapshot',
        claimStatusClass: 'bg-warning',
        snapDate: '2022-03-01',
        airdropDate: 'TBA',
        description: '',
        detail: 'hansum-info',
        twitter: 'https://twitter.com/HANSUMtoken',
        discord: '',
        airdropClaim: '',
        officialWeb: '',
        airdropLink: 'https://medium.com/@hansumteam/hansum-token-distribution-e6369f2d814f',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'fot',
        icon: fotLogo,
        name: 'Fortis Oeconomia',
        coin: 'FOT',
        label: ['ATOM', 'JUNO'],
        claimStatus: 'Snapshot',
        claimStatusClass: 'bg-warning',
        snapDate: '2021-12-14',
        airdropDate: '2022-03-28 | 2022-04-14',
        description: '',
        detail: 'fortis-info',
        twitter: 'https://twitter.com/Fortisoeconomia',
        discord: '',
        airdropClaim: '',
        officialWeb: 'https://www.fortisoeconomia.com',
        airdropLink:
            'https://fortisoeconomia.medium.com/fortis-oeconomia-airdrop-announcement-ec0990219184',
        isCheckAccount: false,
        checkAccount: async (address: string) => {
            return 0;
        }
    },
    {
        key: 'coho',
        icon: cosmicHorizonLogo,
        name: 'Cosmic Horizon',
        coin: 'COHO',
        label: ['COSMOS'],
        claimStatus: 'Twitter Notice',
        claimStatusClass: 'bg-accent',
        snapDate: 'TBA',
        airdropDate: 'TBA',
        description: '',
        detail: 'cosmic-horizon-info',
        twitter: 'https://twitter.com/CoHo_Cosmos',
        discord: 'https://discord.com/invite/GTWQCMKvud',
        airdropClaim: '',
        officialWeb: 'https://www.cosmic-horizon.com/',
        airdropLink: '',
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
        claimStatus: 'Snapshot',
        claimStatusClass: 'bg-warning',
        snapDate: '2022-02-23',
        airdropDate: 'TBA',
        description: '',
        detail: 'exswap-info',
        twitter: 'https://twitter.com/Exswapdotxyz',
        discord: 'https://discord.com/invite/exswap',
        airdropClaim: '',
        officialWeb: 'https://www.exswap.xyz/',
        airdropLink:
            'https://medium.com/@1964681304joker/exswap-%E5%8D%B3%E5%B0%86%E5%88%B0%E6%9D%A5%E7%9A%84%E7%A9%BA%E6%8A%95-ef3a912b2e04',
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
        twitter: 'https://twitter.com/likecoin',
        discord: 'https://discord.com/invite/W4DQ6peZZZ',
        airdropClaim: 'https://app.like.co/airdrop/',
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
        twitter: 'https://twitter.com/pStakeFinance',
        discord: '',
        airdropClaim: 'https://airdrop.pstake.finance/',
        officialWeb: 'https://pstake.finance/',
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
        twitter: 'https://twitter.com/DesmosNetwork',
        discord: 'https://discord.com/invite/ckFcU5vxxc',
        airdropClaim: 'https://airdrop.desmos.network/',
        officialWeb: 'https://desmos.network/',
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
        twitter: 'https://twitter.com/gravity_bridge',
        discord: 'https://discord.com/invite/d3DshmHpXA',
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
        twitter: 'https://twitter.com/RacoonSupply',
        discord: 'https://discord.com/invite/QV5cDdxn4q',
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
        twitter: 'https://twitter.com/NetaMoney',
        discord: 'https://discord.com/invite/bK2YYYvjCQ',
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
