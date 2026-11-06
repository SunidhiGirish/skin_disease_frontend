
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Analyze() {
  const fileRef = useRef(null)
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('')
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')

  function handleImage(file) {
    setError('')
    setMessage('')

    if (!file) return

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Please select a JPG, PNG, or WebP image.')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Image size must be less than 10 MB.')
      return
    }

    if (preview) URL.revokeObjectURL(preview)

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  function removeImage() {
    if (preview) URL.revokeObjectURL(preview)

    setImage(null)
    setPreview('')
    setError('')
    setMessage('')

    if (fileRef.current) {
      fileRef.current.value = ''
    }
  }

  function handleAnalyze() {
    setMessage(
      'Your image is ready. Prediction will be available after the backend API is connected.'
    )
  }

  return (
    <main className="min-h-screen bg-[#f7faf9] px-5 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <Link
          to="/"
          className="text-sm font-semibold text-teal-700 hover:underline"
        >
          ← Back to Home
        </Link>

        <div className="mt-8 text-center">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
            DERMAVISION
          </p>

          <h1 className="mt-3 text-3xl font-bold md:text-4xl">
            Analyze Your Skin
          </h1>

          <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
            Upload a clear image to prepare it for AI-assisted skin
            condition analysis.
          </p>
        </div>

        <section className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 md:p-9">
          {!preview ? (
            <button
              type="button"
              onClick={() => fileRef.current?.click()}
              className="flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal-200 bg-[#f6fbf9] p-6 text-center transition hover:border-teal-500 hover:bg-teal-50"
            >
              <span className="text-5xl text-teal-700">↑</span>

              <span className="mt-4 text-xl font-bold">
                Upload your skin image
              </span>

              <span className="mt-2 text-sm text-slate-500">
                Click to browse images on your device
              </span>

              <span className="mt-5 rounded-xl bg-teal-700 px-6 py-3 font-semibold text-white">
                Choose Image
              </span>

              <span className="mt-4 text-xs text-slate-400">
                JPG, PNG or WebP · Maximum 10 MB
              </span>
            </button>
          ) : (
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-bold">Image preview</h2>
                  <p className="mt-1 break-all text-sm text-slate-500">
                    {image.name}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={removeImage}
                  className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-semibold hover:bg-slate-50"
                >
                  Remove image
                </button>
              </div>

              <img
                src={preview}
                alt="Selected skin image preview"
                className="mx-auto mt-6 max-h-96 w-full rounded-2xl bg-slate-50 object-contain"
              />

              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="mt-4 w-full rounded-xl border border-teal-200 py-3 font-semibold text-teal-800 hover:bg-teal-50"
              >
                Replace image
              </button>
            </div>
          )}

          <input
            ref={fileRef}
            type="file"
            accept="image/jpeg,image/png,image/webp"
            className="hidden"
            onChange={(event) => handleImage(event.target.files?.[0])}
          />

          {error && (
            <p
              role="alert"
              className="mt-5 rounded-xl bg-red-50 p-4 text-sm text-red-700"
            >
              {error}
            </p>
          )}

          <button
            type="button"
            disabled={!image}
            onClick={handleAnalyze}
            className="mt-5 w-full rounded-xl bg-teal-700 px-6 py-4 font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
          >
            Prepare for AI Analysis →
          </button>

          {message && (
            <p
              role="status"
              className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900"
            >
              {message}
            </p>
          )}
        </section>

        <p className="mx-auto mt-6 max-w-2xl text-center text-xs leading-6 text-slate-500">
          This is an educational project. Image upload currently works
          locally in your browser; actual predictions require backend
          integration. AI results are not a medical diagnosis.
        </p>
      </div>
    </main>
  )
}
