import { SidebarTrigger } from '@/components/ui/sidebar'
import { Separator } from '@/components/ui/separator'
import { ModeToggle } from './ModeToggle'
import { useLocation } from 'react-router'

export function SiteHeader() {
  const { pathname } = useLocation()

  return (
    <header className='group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 flex h-12 shrink-0 items-center gap-2 border-b transition-[width,height] ease-linear'>
      <div className='flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6'>
        <ModeToggle />
        <SidebarTrigger className='-ml-1' title='Press Ctrl + B' />
        <Separator
          orientation='vertical'
          className='mx-2 data-[orientation=vertical]:h-4'
        />
        <h1 className='text-base font-medium capitalize'>
          { pathname === '/' ? 'Dashboard' : pathname.replace('/', '') }
        </h1>
      </div>
    </header>
  )
}
