export default function ShopFilter({ showPhones, showLaps, onToggle }) {
  const handleToggle = (e) => {
    onToggle(e.target.id);
  };
  return (
    <div>
      <label htmlFor="phones">Phones</label>
      <input
        type="checkbox"
        name="phones"
        id="phones"
        checked={showPhones}
        onChange={handleToggle}
      />
      <label htmlFor="laps">Laps</label>
      <input
        type="checkbox"
        name="laps"
        id="laps"
        checked={showLaps}
        onChange={handleToggle}
      />
    </div>
  );
}
