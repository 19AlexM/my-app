/* eslint-disable @next/next/no-before-interactive-script-outside-document */
import Script from 'next/script'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        
        {/*<Script  src="https://example.com/rootlayout-script/beforeinteractive/script.js" strategy="beforeInteractive"/>*/}

      </body>
    </html>
  )
}
