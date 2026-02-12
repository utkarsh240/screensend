import React from 'react'

const FileInput = ({id, label, accept, file, previewUrl, inputRef, onChange, onReset, type}: FileInputProps) => {
  return (
    <section className='file-input'>
      <label htmlFor="id">{label}</label>
      <input type="file"
      id={id}
      accept={accept}
      ref={inputRef}
      hidden

      onChange={onChange}
      />
    </section>
  )
}

export default FileInput