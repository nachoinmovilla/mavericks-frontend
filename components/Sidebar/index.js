import { navRoutes } from '@/lib/routes';
import Link from 'next/link';
import React from 'react'
import { Badge } from '../ui/badge';
import { useRouter } from 'next/router';

const Sidebar = () => {

    const pathname = useRouter().pathname

    console.log("pathname", pathname)

    return (
        <div className="hidden border-r bg-white lg:block dark:bg-gray-800/40">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-[60px] items-center border-b px-6">
                    <Link className="flex items-center gap-2 font-semibold" href="#">
                        <img src="/logomavericks.png" className='w-40' />
                    </Link>
                </div>
                <div className="flex-1 overflow-auto py-2">
                    <nav className="grid items-start py-4 text-sm font-medium space-y-4">
                        {navRoutes?.map((nav, index)=>(
                            <React.Fragment key={index}>
                                {index !== 0 && <div className='h-[1px] bg-muted' />}
                                <div className='pt-2'>
                                    <div className='uppercase px-6 text-xs font-semibold text-muted-foreground'>
                                        {nav?.title}
                                    </div>
                                    <div className='py-4 space-y-2'>
                                        {nav?.items?.map((item, u)=>(
                                            <Link
                                                key={u}
                                                className={`capitalize flex items-center justify-between border-r-2 gap-3 px-6 py-2.5 transition-all hover:brightness-75 ${item?.path === pathname ? "bg-primary/10 text-primary border-primary" : " text-muted-foreground border-transparent hover:border-muted"}`}
                                                href={item?.path}
                                            >
                                                <div className='flex items-center space-x-2 text-base'>
                                                    <span>
                                                        {item?.icon}
                                                    </span>
                                                    <span>
                                                        {item?.title}
                                                    </span>
                                                </div>
                                                {item?.badge > 0 &&
                                                    <Badge variant="destructive">
                                                        <span>{item?.badge}</span>
                                                    </Badge>
                                                }
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;