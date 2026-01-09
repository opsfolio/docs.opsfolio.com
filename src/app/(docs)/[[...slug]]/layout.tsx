import { ReactNode } from 'react';

export default function Layout({
    children,
    params
}: {
    children: ReactNode;
    params?: Promise<{ slug?: string[] }>
}) {
    return children;
}
