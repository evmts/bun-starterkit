import { ExampleContract } from './ExampleContract.sol'
import { JsonRpcProvider } from 'ethers'
import { createEthersContract } from '@evmts/ethers'

const defaultOwner = '0x8f0ebdaa1cf7106be861753b0f9f5c0250fe0819' as const

const chainId: '1' | '420' = process.env.BUN_RPC_URL as '1' | '420' ?? "420"
const rpcUrl = process.env.BUN_RPC_URL ?? 'https://goerli.optimism.io'

const publicProvider = new JsonRpcProvider(rpcUrl)

const ethersContract = createEthersContract(ExampleContract, {
	runner: publicProvider,
	address: ExampleContract.addresses[chainId]
})

ExampleContract.read({ chainId }).hello()
export const readContract = (owner: `0x${string}` = defaultOwner) => {
	return ethersContract.balanceOf(owner)
}

if (import.meta.main) {
	readContract().then(console.log)
}

