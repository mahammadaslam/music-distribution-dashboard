import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Upload() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [date, setDate] = useState('');
  const [genre, setGenre] = useState('');
  const [msg, setMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !artist || !date || !genre) {
      setMsg('Please fill all fields');
      return;
    }
    const payload = { title, artist, releaseDate: date, genre };
    const res = await fetch('/api/tracks', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (res.ok) {
      router.push('/dashboard');
    } else {
      setMsg('Failed to add track');
    }
  };

  return (
    <div className="center-wrap">
      <form className="card" onSubmit={handleSubmit}>
        <h2>Upload Track (mock)</h2>
        <label>Title
          <input value={title} onChange={(e)=>setTitle(e.target.value)} />
        </label>
        <label>Artist
          <input value={artist} onChange={(e)=>setArtist(e.target.value)} />
        </label>
        <label>Release Date
          <input type="date" value={date} onChange={(e)=>setDate(e.target.value)} />
        </label>
        <label>Genre
          <input value={genre} onChange={(e)=>setGenre(e.target.value)} />
        </label>
        {msg && <p className="error">{msg}</p>}
        <div style={{display:'flex',gap:8}}>
          <button className="btn" type="submit">Add Track</button>
          <button className="btn ghost" type="button" onClick={()=>router.push('/dashboard')}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
