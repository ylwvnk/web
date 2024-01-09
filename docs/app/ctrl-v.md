# [CTRL + V](https://web-ctrl-v.vercel.app/)

A simple web app that allows you to paste "any" file and it will be a [`blob url`](https://w3c.github.io/FileAPI/#url)

## Features

It was really simple to make, maybe if you want to make the same thing you can learn the following things:

- [URL.createObjectURL](https://developer.mozilla.org/en-US/docs/Web/API/URL/createObjectURL_static)
- [Clipboard API](https://developer.mozilla.org/en-US/docs/Web/API/Clipboard)

::: details Random Features

> When I was making this web app, I discober that you can replace this:

```tsx
export const Upload = () => {
  const onUpload = (event) => {
    const [file] = event.target.files
    const url = URL.createObjectURL(file)
  }

  return (
    <>
      <label ...>
        <input type='file' onChange={onUpload} ... />
        <svg ...></svg>
      </label>
    </>
  )
}
```

> With the [FileSystem API](https://developer.mozilla.org/en-US/docs/Web/API/FileSystem):

```tsx
export const Upload = () => {
  const onUpload = () => {
    const [filePicked] = await window.showOpenFilePicker({
      excludeAcceptAllOption: true,
      types: [
        ...
      ],
    })
    const blob = await filePicked.getFile()
    const url = URL.createObjectURL(blob)
  }

  return (
    <>
      <button onClick={onUpload}>
        ...
      </button>
    </>
  )
}
```

:::

### Random

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/TV03LRcRhGs?si=KpvqXT7BIgWjA4xX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
