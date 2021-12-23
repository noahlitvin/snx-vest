import { useWallet } from 'use-wallet'
import { Text } from '@chakra-ui/react'
import GrantStatus from '../components/Home/GrantStatus'
import RedeemSnx from '../components/Home/RedeemSnx'
import RecentActivity from '../components/Home/RecentActivity'

export default function Home() {
  const wallet = useWallet()

  return (
    <div>
      <main>
        {wallet.status === 'connected' ? (
          <>
            <GrantStatus />
            <RedeemSnx />
            <RecentActivity />
          </>
        ) : (
          <Text textAlign="center" py={16} fontWeight="thin" fontSize="3xl" letterSpacing={1.5}>Connect your wallet to view your SNX grant and redeem available tokens.</Text>
        )}
      </main>
    </div >
  )
}
