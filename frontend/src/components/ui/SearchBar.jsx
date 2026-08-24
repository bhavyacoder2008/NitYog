function SearchIcon() {
  return (
    <svg
      className="size-5 fill-none stroke-current stroke-2"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="m16 16 4 4" />
    </svg>
  )
}

function ClearIcon() {
  return (
    <svg
      className="size-4 fill-none stroke-current stroke-2"
      viewBox="0 0 20 20"
      aria-hidden="true"
    >
      <path strokeLinecap="round" d="m5 5 10 10M15 5 5 15" />
    </svg>
  )
}

function SearchBar({
  value,
  onChange,
  onSubmit,
  placeholder = 'Search for toys...',
  label = 'Search toys',
}) {
  function handleSubmit(event) {
    event.preventDefault()
    onSubmit(value.trim())
  }

  return (
    <form
      className="flex w-full items-center gap-2 rounded-2xl border border-brand-brown/20 bg-[#fffaf0] p-2 shadow-[0_0.5rem_1.5rem_rgb(77_44_2_/_0.1)] focus-within:border-brand-orange focus-within:ring-3 focus-within:ring-brand-orange/20"
      role="search"
      onSubmit={handleSubmit}
    >
      <label className="sr-only" htmlFor="toy-search">
        {label}
      </label>

      <span className="ml-2 shrink-0 text-brand-brown">
        <SearchIcon />
      </span>

      <input
        className="min-w-0 flex-1 bg-transparent px-1 py-2.5 font-body text-base text-ink outline-none placeholder:text-ink/55 md:text-lg"
        id="toy-search"
        type="search"
        value={value}
        placeholder={placeholder}
        autoComplete="off"
        onChange={(event) => onChange(event.target.value)}
      />

      {value && (
        <button
          className="inline-flex size-10 shrink-0 cursor-pointer items-center justify-center rounded-xl border-0 bg-transparent text-ink/65 hover:bg-brand-brown/10 hover:text-brand-brown focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
          type="button"
          aria-label="Clear search"
          onClick={() => onChange('')}
        >
        </button>
      )}

      <button
        className="min-h-10 shrink-0 cursor-pointer rounded-xl border-0 bg-brand-orange px-4 font-body font-semibold text-ink transition-colors hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-50 md:px-6"
        type="submit"
        disabled={!value.trim()}
      >
        Search
      </button>
    </form>
  )
}

export default SearchBar
