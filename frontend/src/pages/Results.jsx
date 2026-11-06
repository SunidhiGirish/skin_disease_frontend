
export default function Results() {
  return (
    <main className="mx-auto max-w-4xl px-5 py-16">
      <p className="font-semibold text-teal-700">
        DERMAVISION
      </p>

      <h1 className="mt-3 text-3xl font-bold">
        Skin Analysis Results
      </h1>

      <div className="mt-8 rounded-2xl border border-slate-200 bg-white p-6">
        <h2 className="text-xl font-bold">
          Waiting for analysis
        </h2>

        <p className="mt-3 leading-7 text-slate-600">
          Your predicted skin condition and model confidence
          will appear here once the backend is connected.
        </p>

        <p className="mt-5 rounded-xl bg-amber-50 p-4 text-sm leading-6 text-amber-900">
          AI predictions are not medical diagnoses. Consult a
          qualified dermatologist for diagnosis and treatment.
        </p>
      </div>
    </main>
  )
}
