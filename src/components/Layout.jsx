import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { DesLogo } from './DesLogo'

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col text-center">
        {/* <Header /> */}

        <DesLogo className="mx-auto block" />
        <p className="text-lg text-zinc-800 dark:text-zinc-400 sm:-mt-40 lg:-mt-40 ">
          Website is under construction <br />
          Check back soon!
        </p>

        {/* <Footer /> */}
      </div>
    </>
  )
}
