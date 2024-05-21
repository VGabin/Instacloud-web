import React, {ReactNode} from 'react';
import BottomNavigation from "@/components/layout/BottomNavigation";

interface LayoutProps {
    children: ReactNode
}

const Layout = ({children}: LayoutProps) => {
    return (
        <>
            {children}
            <div className="py-10"/>
            <BottomNavigation/>
        </>
    );
};

export default Layout;