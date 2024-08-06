'use client';

import SearchHeader from '@/components/SearchPage/SearchHeader';
import { cx } from 'class-variance-authority';
import { usePathname } from 'next/navigation';
import { PropsWithChildren, useCallback, useEffect, useState } from 'react';
import Header from './_components/Header';
import TopBanner from './_components/Header/_components/TopBanner';

const RootLayout = ({ children }: PropsWithChildren) => {
  const pathname = usePathname();
  const isCategoryPage = pathname.startsWith('/category');
  const isProductOrHomePage = pathname.startsWith('/products') || pathname === '/';

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 0);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="container mx-auto min-h-screen grid">
      <div className="bg-white w-full max-w-[600px] h-full mx-auto flex flex-col">
        {isCategoryPage ? (
          <SearchHeader />
        ) : (
          isProductOrHomePage && (
            <>
              <div
                className={cx('transition-all duration-300 overflow-hidden', {
                  'max-h-0 opacity-0': isScrolled,
                  'max-h-[50px] opacity-100': !isScrolled
                })}
              >
                <TopBanner />
              </div>
              <div className="sticky top-0 z-10">
                <Header />
              </div>
            </>
          )
        )}
        {children}
      </div>
    </div>
  );
};

export default RootLayout;
