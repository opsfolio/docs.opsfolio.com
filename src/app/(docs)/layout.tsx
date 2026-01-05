import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { AISearchTrigger } from '@/components/search';
import { FleetFolioIcon, QualityFolioIcon, SurveilrIcon } from '@/components/icons';

export default function Layout({ children }: LayoutProps<'/'>) {
  // Map folder dirname to custom icons
  const iconMap: { [key: string]: React.ReactNode } = {
    'surveilr': <SurveilrIcon />,
    'qualityfolio': <QualityFolioIcon />,
    'fleetfolio': <FleetFolioIcon />, // You can adjust this if you have a 4th icon
  };

  return (
    <DocsLayout
      tree={source.pageTree}
      {...baseOptions()}
      sidebar={{
        collapsible: true,
        defaultOpenLevel: 0,
        tabs: {
          transform(option, node) {
            console.log('Option:', option); // Check the structure here
            console.log('Node:', node);
            let menuKey = option.url?.split('/')[1] || '';
            menuKey = menuKey.toLowerCase();
            return {
              ...option,
              description: node.description ?? option.description,
              icon: iconMap[menuKey] || option.icon, // Adjust the index based on the URL structure
            };
          },
        },
      }}
    >
      {children}
      <div className='fixed !right-0 w-[100px]'>
        <AISearchTrigger />
      </div>
    </DocsLayout>
  );
}