export default function SearchBar({ searchWord, onSearchWordChange }) {
  return (
    <div className="flex gap-3 self-center">
      <label htmlFor="search" className="text-xl font-bold">
        Search Products:{" "}
      </label>
      <input
        type="text"
        id="search"
        name="search"
        value={searchWord}
        onChange={onSearchWordChange}
        className="border-2 text-inherit px-2 rounded-md"
        autoFocus
      />
    </div>
  );
}
