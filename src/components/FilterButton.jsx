export default function Filter({ setFilter }) {
  return (
    <div className="filter-buttons">
      <button onClick={() => setFilter('All')} className="filter-btn">All</button>
      <button onClick={() => setFilter('Completed')} className="filter-btn">Completed</button>
      <button onClick={() => setFilter('Pending')} className="filter-btn">Pending</button>
    </div>
  );
}