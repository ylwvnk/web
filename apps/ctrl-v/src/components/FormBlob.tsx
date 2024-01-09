import { toast } from 'sonner'
import { type BlobState } from '../hooks/blob'

export const FormBlob = ({ url }: BlobState) => {
  const handleCopyUrlToClipboard = () => {
    if (!url) return

    toast.promise(navigator.clipboard.writeText(url), {
      loading: 'Copying to clipboard...',
      success: 'Copied to clipboard!',
      error: 'Could not copy to clipboard.'
    })
  }

  return (
    <form
      name='blob_url'
      className='group relative w-72 border-b-2 border-gray-400 dark:border-gray-600 md:w-80 md:border-b-4'
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='size-6 md:size-7 absolute left-1 top-0 text-gray-400 transition-colors group-hover:text-black dark:group-hover:text-white'
      >
        <path
          fillRule='evenodd'
          d='M10.5 3A1.501 1.501 0 0 0 9 4.5h6A1.5 1.5 0 0 0 13.5 3h-3Zm-2.693.178A3 3 0 0 1 10.5 1.5h3a3 3 0 0 1 2.694 1.678c.497.042.992.092 1.486.15 1.497.173 2.57 1.46 2.57 2.929V19.5a3 3 0 0 1-3 3H6.75a3 3 0 0 1-3-3V6.257c0-1.47 1.073-2.756 2.57-2.93.493-.057.989-.107 1.487-.15Z'
          clipRule='evenodd'
        />
      </svg>

      <input
        type='text'
        name='blob_url'
        className='w-full cursor-pointer truncate p-1 pl-8 text-sm tracking-tight outline-none dark:bg-black dark:text-white md:text-base'
        placeholder='Blob URL'
        defaultValue={url}
        onClick={handleCopyUrlToClipboard}
        readOnly
      />

      <span className='absolute -bottom-0.5 left-0 h-1 w-0 bg-black transition-[width] group-hover:w-full dark:bg-white md:-bottom-1' />
    </form>
  )
}
