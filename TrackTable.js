import Link from 'next/link';
import { format } from 'date-fns';

export default function TrackTable({ tracks }) {
  const fmt = (d) => {
    try { return format(new Date(d), 'PPP'); } catch { return d; }
  };

  return (
    <div className="table-wrap">
      <table className="track-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Release Date</th>
            <th>Status</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {tracks.length === 0 && (
            <tr><td colSpan={5}>No tracks found</td></tr>
          )}
          {tracks.map((t) => (
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.artist}</td>
              <td>{fmt(t.releaseDate)}</td>
              <td>{t.status || 'Uploaded'}</td>
              <td><Link href={`/track/${t.id}`}><a className="link">View</a></Link></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
