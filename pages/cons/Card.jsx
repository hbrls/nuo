export default function Card({ name, address, start_date, end_date }) {
  return (
    <div className="card card-compact w-80 xs:w-96 shadow-xl glass">
      <figure className="my-1"><img src="/rsrc/img/placeholder-400x180.jpg" alt="Figure" /></figure>
      <div className="card-body">
        <h2 className="card-title my-1">{name}</h2>
        <p className="my-1 font-mono">{start_date} ~ {end_date}</p>
        <p className="my-1 italic">{address}</p>
      </div>
    </div>
  );
}
