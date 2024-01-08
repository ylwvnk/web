import { FormBlob } from './FormBlob'
import { Preview } from './Preview'
import { Paste } from './Paste'
import { Upload } from './Upload'
import { useBlobUrl } from '../hooks/blob'

export type State = {
  blob?: Blob
  url?: string
}

export const MainContent = () => {
  const { blob, blobUrl, onPasteFromClipboard, onPasteFromFileSystem } = useBlobUrl()

  return (
    <main>
      <section className='relative mb-3 grid place-items-center'>
        <Paste onPaste={onPasteFromClipboard} />
        <Upload onUpload={onPasteFromFileSystem} />
      </section>

      <FormBlob url={blobUrl} />
      <Preview url={blobUrl} blob={blob} />
    </main>
  )
}
