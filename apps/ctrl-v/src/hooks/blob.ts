import { useEffect, useState, type ChangeEvent } from 'react'
import { toast } from 'sonner'

export type BlobState = {
  blob?: Blob | File
  url?: string
}

export const useBlobUrl = () => {
  const [blob, setBlob] = useState<BlobState['blob']>()
  const [blobUrl, setBlobUrl] = useState<BlobState['url']>()

  const handlePaste = (event: ClipboardEvent) => {
    if (event.clipboardData?.files.length) {
      const file = event.clipboardData.files.item(0) as File
      const url = URL.createObjectURL(file)

      toast.success(`Copied ${file.name} from clipboard!`)

      setBlob(file)
      setBlobUrl(url)
    } else {
      const text = event.clipboardData?.getData('text') as string
      const textBlob = new Blob([text], { type: 'text/plain' })
      const url = URL.createObjectURL(textBlob)

      toast.success('Copied text from clipboard!')

      setBlob(textBlob)
      setBlobUrl(url)
    }
  }

  const onPasteFromClipboard = async () => {
    try {
      const [clipboardItem] = await navigator.clipboard.read()

      const imageType = clipboardItem.types.find((type) => type.includes('image'))
      const textType = clipboardItem.types.find((type) => type.includes('text'))

      const clipboardItemBlob = await clipboardItem.getType((imageType ?? textType) as string)
      const url = URL.createObjectURL(clipboardItemBlob)

      toast.success('Copied from clipboard!')

      setBlob(clipboardItemBlob)
      setBlobUrl(url)
    } catch (error) {
      toast.error(`${error}`)
    }
  }

  const onPasteFromFileSystem = (event: ChangeEvent<HTMLInputElement>) => {
    const [file] = event.currentTarget.files as FileList
    const url = URL.createObjectURL(file)

    toast.success(`Copied ${file.name} from file system!`)

    setBlob(file)
    setBlobUrl(url)
  }

  useEffect(() => {
    document.addEventListener('paste', handlePaste)

    return () => document.removeEventListener('paste', handlePaste)
  }, [])

  return {
    blob,
    blobUrl,
    onPasteFromClipboard,
    onPasteFromFileSystem
  }
}
