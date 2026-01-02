import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-2">
          <Image src="/Opsfolio-Logo-icon.png" alt="Spry Logo" width={32} height={32} className="rounded" />
          <span>Opsfolio</span>
        </div>
      ),
    },
  };
}
