import { accDiv } from './acc';

export function getActualAmount(amount: string | number) {
    return Number(accDiv(Number(amount), 1e6).toFixed(2));
}

export function getFormatAmount(amount: string | number) {
    return Number(Number(amount).toFixed(2));
}

/*
 * cosmos1p2s0gv05xkm2ajrrku4xv2t9e64cvu4tn289zt 换为 cosmos1p2s0gv...n289zt
 */
export function encodeAddress(address: string) {
    if (address.trim() && address.length > 20) {
        return `${address.substring(0, 13)}...${address.substring(address.length - 6)}`;
    } else {
        return address.trim();
    }
}
