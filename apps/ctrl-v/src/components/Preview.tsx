import { type BlobState } from '../hooks/blob'

type Props = { url: string }

const ImagePreview = ({ url }: Props) => (
  <img
    src={url}
    alt='Blob Image Preview'
    className='size-64 md:size-72 lg:size-80 mx-auto rounded'
  />
)

const VideoPreview = ({ url }: Props) => (
  <video src={url} className='size-64 md:size-72 lg:size-80 mx-auto rounded' controls>
    <track default kind='captions' />
  </video>
)

const AudioPreview = ({ url }: Props) => {
  return <audio src={url} controls />
}

const DefaultPreview = ({ url }: Props) => {
  return <iframe src={url} className='size-64 md:size-72 lg:size-80 mx-auto rounded' />
}

export const Preview = ({ blob, url }: BlobState) => {
  return (
    <>
      <p className='mb-0.5 mt-2 text-center dark:text-white'>Preview:</p>
      {/* looks ugly */}
      {blob && url ? (
        <a href={url} target='_blank' rel='noopener noreferrer'>
          {blob.type.includes('image') ? (
            <ImagePreview url={url} />
          ) : blob.type.includes('video') ? (
            <VideoPreview url={url} />
          ) : blob.type.includes('audio') ? (
            <AudioPreview url={url} />
          ) : (
            <DefaultPreview url={url} />
          )}
        </a>
      ) : (
        <div className='size-64 md:size-72 lg:size-80 mx-auto animate-pulse rounded bg-gray-300 dark:bg-gray-600' />
      )}
    </>
  )
}
