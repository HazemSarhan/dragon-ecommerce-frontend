import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

export default function AdminDataTableSkeleton() {
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <TableRow key={index}>
          <TableCell>
            <div className="h-5 w-4 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-5 w-16 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-5 w-32 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-5 w-48 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-5 w-24 bg-muted animate-pulse rounded" />
          </TableCell>
          <TableCell>
            <div className="h-5 w-10 bg-muted animate-pulse rounded" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
