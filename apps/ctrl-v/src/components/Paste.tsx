export const Paste = ({ onPaste }: { onPaste: () => void }) => (
  <button
    className='rounded border border-black px-2.5 py-1.5 text-sm font-bold tracking-tight shadow-sm transition-colors hover:border-white hover:bg-black hover:text-white dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black sm:text-base'
    onClick={onPaste}
  >
    Click to paste
  </button>
)
