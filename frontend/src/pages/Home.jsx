
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [image, setImage] = useState(null)
  const [preview, setPreview] = useState('')
  const [result, setResult] = useState(false)
  const [error, setError] = useState('')
  const fileRef = useRef(null)

  function handleImage(file) {
    setError('')
    setResult(false)

    if (!file) return

    if (!file.type.startsWith('image/')) {
      setError('Please select an image file.')
      return
    }

    if (!['image/jpeg', 'image/png', 'image/webp'].includes(file.type)) {
      setError('Please upload a JPG, PNG, or WebP image.')
      return
    }

    if (file.size > 10 * 1024 * 1024) {
      setError('Image size must be less than 10 MB.')
      return
    }

    setImage(file)
    setPreview(URL.createObjectURL(file))
  }

  function resetImage() {
    if (preview) URL.revokeObjectURL(preview)
    setImage(null)
    setPreview('')
    setResult(false)
    setError('')
    if (fileRef.current) fileRef.current.value = ''
  }

  function analyzeImage() {
    setError(
      'Your image is ready. The backend API is not connected yet. Ask your teammates for the prediction API endpoint.'
    )
  }

  return (
    <div className="min-h-screen bg-[#f7faf9] text-slate-800">
      <header className="sticky top-0 z-10 border-b border-slate-100 bg-white/95">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-700 text-2xl text-white">
              ✳
            </div>
            <div>
              <p className="text-lg font-bold tracking-tight">
                Derma<span className="text-teal-700">Vision</span>
              </p>
              <p className="text-xs text-slate-500">
                AI Skin Health Assistant
              </p>
            </div>
          </a>

          
<div className="hidden items-center gap-8 text-sm font-medium md:flex">
  <Link to="/" className="hover:text-teal-700">
    Home
  </Link>

  <a href="/#how-it-works" className="hover:text-teal-700">
    How it works
  </a>

  <Link to="/analyze" className="hover:text-teal-700">
    Skin analysis
  </Link>

  <Link to="/results" className="hover:text-teal-700">
    Results
  </Link>
</div>


        
        <Link 
            to="/analyze"
            className="rounded-full bg-teal-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-teal-800"
        >
            Get started ↗
          </Link>
        </nav>
      </header>

      <main>
        <section id="home" className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:px-8 md:py-24">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-medium text-teal-800">
              <span>✦</span> AI-powered skin image analysis
            </div>

            <h1 className="max-w-xl text-4xl font-bold leading-tight tracking-tight md:text-6xl">
              Understand your skin.
              <span className="mt-2 block text-teal-700">
                Take the next step.
              </span>
            </h1>

            <p className="mt-6 max-w-lg text-base leading-8 text-slate-600 md:text-lg">
              Explore an AI-assisted approach to skin health. Upload a skin
              image to prepare it for analysis and learn about possible
              skin conditions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              
            <Link
            to="/analyze"
            className="rounded-xl bg-teal-700 px-6 py-4 font-semibold text-white shadow-lg shadow-teal-900/10 transition hover:-translate-y-0.5 hover:bg-teal-800"
            >
            Analyze a skin image →
            </Link>

              <a
                href="#how-it-works"
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold hover:border-teal-600"
              >
                Learn more
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-slate-500">
              <span>✓ Simple image upload</span>
              <span>✓ Easy-to-read results</span>
              <span>✓ Privacy-conscious design</span>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-teal-100/60 blur-2xl" />
            <div className="relative rounded-[2rem] border border-white bg-white p-5 shadow-xl shadow-slate-200/70 md:p-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-teal-700">DERMAVISION</p>
                  <h2 className="mt-1 text-xl font-bold">Your skin health journey</h2>
                </div>
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-2xl">
                  ♡
                </div>
              </div>

              <div className="my-6 flex min-h-56 flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal-200 bg-[#f5fbf9] p-6 text-center">
                <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-white text-4xl shadow-sm">
                  🔬
                </div>
                <p className="font-semibold">Your skin, better understood</p>
                <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500">
                  Start with a clear image and explore AI-assisted skin analysis.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl">◎</p>
                  <p className="mt-2 font-semibold">Image analysis</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Model-assisted observations
                  </p>
                </div>
                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-2xl">♡</p>
                  <p className="mt-2 font-semibold">Skin education</p>
                  <p className="mt-1 text-xs leading-5 text-slate-500">
                    Information and precautions
                  </p>
                </div>
              </div>
              <p className="mt-5 text-center text-xs text-slate-400">
                AI support, with professional care when needed
              </p>
            </div>
          </div>
        </section>

        <section id="how-it-works" className="border-y border-slate-100 bg-white py-16 md:py-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
                Simple process
              </p>
              <h2 className="mt-3 text-3xl font-bold md:text-4xl">
                How it works
              </h2>
              <p className="mt-4 leading-7 text-slate-500">
                Three simple steps to prepare your skin image for AI-assisted analysis.
              </p>
            </div>

            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {[
                { number: '01', icon: '↑', title: 'Upload an image', description: 'Choose a clear JPG, PNG, or WebP image from your device.' },
                { number: '02', icon: '⌕', title: 'Analyze the image', description: 'The connected AI model will examine the image for learned visual patterns.' },
                { number: '03', icon: '♡', title: 'Review the results', description: 'Read the model output alongside educational information and appropriate next steps.' },
              ].map((step) => (
                <article key={step.number} className="rounded-3xl border border-slate-100 bg-[#f9fbfa] p-7 transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex items-center justify-between">
                    <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-teal-100 text-2xl font-bold text-teal-800">
                      {step.icon}
                    </span>
                    <span className="text-sm font-bold text-slate-300">{step.number}</span>
                  </div>
                  <h3 className="mt-6 text-xl font-bold">{step.title}</h3>
                  <p className="mt-3 leading-7 text-slate-500">{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="analyze" className="mx-auto max-w-4xl px-5 py-16 md:px-8 md:py-24">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-teal-700">
              Image workspace
            </p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Start your skin analysis
            </h2>
            <p className="mx-auto mt-4 max-w-xl leading-7 text-slate-500">
              Upload a clear image of the skin area you want to examine.
              Your image will be previewed before analysis.
            </p>
          </div>

          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/40 md:p-9">
            {!preview ? (
              <button
                type="button"
                onClick={() => fileRef.current?.click()}
                className="flex min-h-64 w-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-teal-200 bg-[#f6fbf9] p-6 text-center transition hover:border-teal-500 hover:bg-teal-50"
              >
                <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl shadow-sm">
                  ↑
                </span>
                <span className="mt-5 text-lg font-bold">Upload your skin image</span>
                <span className="mt-2 text-sm text-slate-500">
                  Click here to browse your device
                </span>
                <span className="mt-4 rounded-lg bg-teal-700 px-5 py-3 text-sm font-semibold text-white">
                  Choose image
                </span>
                <span className="mt-4 text-xs text-slate-400">
                  JPG, PNG or WebP · Maximum 10 MB
                </span>
              </button>
            ) : (
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <p className="font-bold">Image preview</p>
                    <p className="mt-1 break-all text-sm text-slate-500">{image?.name}</p>
                  </div>
                  <button
                    type="button"
                    onClick={resetImage}
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
                  Choose a different image
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
              <div role="status" className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
                {error}
              </div>
            )}

            <button
              type="button"
              disabled={!image}
              onClick={analyzeImage}
              className="mt-5 w-full rounded-xl bg-teal-700 px-6 py-4 font-bold text-white transition hover:bg-teal-800 disabled:cursor-not-allowed disabled:bg-slate-300"
            >
              Prepare for AI analysis →
            </button>

            {result && (
              <p className="mt-4 text-sm text-slate-600">
                Your image is ready for analysis.
              </p>
            )}

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Frontend preview only. Predictions become available after backend integration.
            </p>
          </div>
        </section>

        <section className="bg-teal-900 px-5 py-12 text-center text-white">
          <h2 className="text-2xl font-bold">Your skin deserves informed care.</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-teal-100">
            AI-generated observations are not a medical diagnosis. Consult a
            qualified dermatologist for diagnosis and treatment. Do not start
            medicines based solely on a model prediction.
          </p>
        </section>
      </main>

      <footer className="bg-white px-5 py-6 text-center text-sm text-slate-500">
        <p>© {new Date().getFullYear()} DermaVision · AI Skin Health Assistant</p>
        <p className="mt-2">Academic project · For educational purposes</p>
      </footer>
    </div>
  )
}
