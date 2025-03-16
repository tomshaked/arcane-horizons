
import React from 'react';
import { Publication } from '@/data/researchProjects';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';

interface PublicationsListProps {
  publications: Publication[];
}

const PublicationsList: React.FC<PublicationsListProps> = ({ publications }) => {
  if (publications.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-foreground/70">No publications available for this research area yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[60%]">Publication</TableHead>
            <TableHead>Authors</TableHead>
            <TableHead className="text-right">Year</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {publications.map((pub, idx) => (
            <TableRow key={idx} className="hover:bg-secondary/5 transition-colors">
              <TableCell className="font-medium">
                {pub.link ? (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-start"
                  >
                    {pub.title}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1 mt-1">
                      <path d="M7 7l10 10M7 17V7h10" />
                    </svg>
                  </a>
                ) : (
                  pub.title
                )}
                {pub.source && <div className="text-sm text-foreground/60 mt-1">{pub.source}</div>}
              </TableCell>
              <TableCell className="text-sm">{pub.authors}</TableCell>
              <TableCell className="text-right">{pub.year}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default PublicationsList;
