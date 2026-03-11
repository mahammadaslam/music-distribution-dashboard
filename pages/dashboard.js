import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import TrackTable from '../src/components/TrackTable';

export default function Dashboard({ theme, toggleTheme }) {
  const router = useRouter();
  const [tracks, setTracks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const s = localStorage.getItem('session');
    if (!s) router.replace('/');
  }, []);

  useEffect(() => {
    fetchTracks();
  }, []);

  const fetchTracks = async () => {
    setLoading(true);
    const res = await fetch('/api/tracks');
    const data = await res.json();
    setTracks(data);
    setLoading(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('session');
    router.push('/');
  };

  const filtered = tracks.filter((t) => {
    const q = query.toLowerCase();
    return (
      t.title.toLowerCase().includes(q) ||
      t.artist.toLowerCase().includes(q) ||
      t.genre.toLowerCase().includes(q)
    );
  });

  return (
    <div className="page-wrap">
      <header className="topbar">
        <h2>LabelLift — Dashboard</h2>
        <div className="top-actions">
          <input placeholder="Search title, artist or genre" value={query} onChange={(e)=>setQuery(e.target.value)} />
          <Link href="/upload"><a className="btn">Upload Track</a></Link>
          <button className="btn ghost" onClick={toggleTheme}>Theme: {theme}</button>
          <button className="btn outline" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main className="container">
        {loading ? (
          <p>Loading tracks...</p>
        ) : (
          <TrackTable tracks={filtered} />
        )}
      </main>

      <footer className="footer">Made for Frontend Assessment</footer>
    </div>
  );
}
