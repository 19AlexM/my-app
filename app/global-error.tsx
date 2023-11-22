'use client'
 
export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Globaler Errorhandler für das Root Layout und Template File</h2>
        <button onClick={() => reset()}>Try again</button>
      </body>
    </html>
  )
}