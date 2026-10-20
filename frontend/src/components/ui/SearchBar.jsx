import { useState } from 'react'

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

function SearchBar({
  value,
  onChange,
  onSubmit,
  suggestions = [],
  placeholder = 'Search for toys...',
  label = 'Search toys',
}) {
  const [isSuggestionsOpen, setIsSuggestionsOpen] = useState(false)
  const [highlightedSuggestion, setHighlightedSuggestion] = useState(0)

  function handleSubmit(event) {
    // Prevent the browser's default form submission, which would reload the page.
    event.preventDefault()
    const query = value.trim()
    if (!query) return

    setIsSuggestionsOpen(false)
    onSubmit(query)
  }

  function handleQueryChange(query) {
    onChange(query)
    setHighlightedSuggestion(0)
    setIsSuggestionsOpen(Boolean(query.trim()))
  }

  function handleKeyDown(event) {
    if (!isSuggestionsOpen || suggestions.length === 0) return

    if (event.key === 'ArrowDown') {
      event.preventDefault()
      setHighlightedSuggestion((index) => (index + 1) % suggestions.length)
    }

    if (event.key === 'ArrowUp') {
      event.preventDefault()
      setHighlightedSuggestion((index) => (index - 1 + suggestions.length) % suggestions.length)
    }

    if (event.key === 'Enter' && suggestions[highlightedSuggestion]) {
      event.preventDefault()
      onChange(suggestions[highlightedSuggestion])
      setIsSuggestionsOpen(false)
      onSubmit(suggestions[highlightedSuggestion])
    }

    if (event.key === 'Escape') {
      setIsSuggestionsOpen(false)
    }
  }

  return (
    <div className="relative w-full">
      <form
        className="relative z-10 flex w-full items-center gap-2 rounded-2xl border border-brand-brown/20 bg-[#fffaf0] p-2 shadow-[0_0.5rem_1.5rem_rgb(77_44_2_/_0.1)] focus-within:border-brand-orange focus-within:ring-3 focus-within:ring-brand-orange/20"
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
          role="combobox"
          aria-autocomplete="list"
          aria-expanded={isSuggestionsOpen && suggestions.length > 0}
          aria-controls="toy-search-suggestions"
          aria-activedescendant={
            isSuggestionsOpen && suggestions[highlightedSuggestion]
              ? `toy-suggestion-${highlightedSuggestion}`
              : undefined
          }
          onChange={(event) => handleQueryChange(event.target.value)}
          onFocus={() => setIsSuggestionsOpen(Boolean(value.trim()))}
          onKeyDown={handleKeyDown}
        />

        <button
          className="min-h-10 shrink-0 cursor-pointer rounded-xl border-0 bg-brand-orange px-4 font-body font-semibold text-ink transition-colors hover:bg-brand-brown hover:text-white focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand-orange disabled:cursor-not-allowed disabled:opacity-50 md:px-6"
          type="submit"
          disabled={!value.trim()}
        >
          Search
        </button>
      </form>

      {isSuggestionsOpen && suggestions.length > 0 && (
        <ul
          className="absolute inset-x-0 top-[calc(100%+0.5rem)] z-20 m-0 grid list-none gap-1 rounded-2xl border border-brand-brown/15 bg-[#fffaf0] p-2 shadow-[0_1rem_2rem_rgb(77_44_2_/_0.14)]"
          id="toy-search-suggestions"
          role="listbox"
          aria-label="Search suggestions"
        >
          {suggestions.map((suggestion, index) => (
            <li key={suggestion} role="presentation">
              <button
                className={`w-full cursor-pointer rounded-xl border-0 px-3 py-2.5 text-left font-body text-sm text-ink transition-colors hover:bg-brand-orange/15 focus-visible:outline-3 focus-visible:outline-offset-[-3px] focus-visible:outline-brand-orange md:text-base ${index === highlightedSuggestion ? 'bg-brand-orange/15 text-brand-brown' : 'bg-transparent'}`}
                id={`toy-suggestion-${index}`}
                type="button"
                role="option"
                aria-selected={index === highlightedSuggestion}
                onMouseDown={(event) => event.preventDefault()}
                onClick={() => {
                  onChange(suggestion)
                  setIsSuggestionsOpen(false)
                  onSubmit(suggestion)
                }}
              >
                {suggestion}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default SearchBar
