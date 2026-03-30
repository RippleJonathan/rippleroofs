import { ImageResponse } from 'next/og'
import { NextRequest } from 'next/server'

export const runtime = 'edge'

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params

  // Derive a readable title from the slug (edge runtime has no fs access)
  const title = slug
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())

  // Word-wrap title into lines of ~30 chars
  const words = title.split(' ')
  const lines: string[] = []
  let currentLine = ''
  words.forEach((word) => {
    if ((currentLine + word).length > 30) {
      if (currentLine) lines.push(currentLine.trim())
      currentLine = word + ' '
    } else {
      currentLine += word + ' '
    }
  })
  if (currentLine) lines.push(currentLine.trim())
  const displayLines = lines.slice(0, 3)

  return new ImageResponse(
    (
      <div
        style={{
          width: '1200px',
          height: '630px',
          background: 'linear-gradient(135deg, #1e3a5f 0%, #0f172a 100%)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          alignItems: 'flex-start',
          padding: '80px',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Logo badge */}
        <div
          style={{
            position: 'absolute',
            top: '80px',
            left: '80px',
            width: '100px',
            height: '100px',
            borderRadius: '16px',
            background: '#f97316',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '60px',
            fontWeight: 'bold',
            color: '#ffffff',
          }}
        >
          R
        </div>

        {/* Title lines */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            marginBottom: '40px',
          }}
        >
          {displayLines.map((line, i) => (
            <span
              key={i}
              style={{
                fontSize: '56px',
                fontWeight: 'bold',
                color: '#ffffff',
                lineHeight: 1.2,
              }}
            >
              {line}
            </span>
          ))}
        </div>

        {/* Branding */}
        <span style={{ fontSize: '26px', color: '#f97316', fontWeight: '600' }}>
          Ripple Roofing &amp; Construction
        </span>
      </div>
    ),
    { width: 1200, height: 630 }
  )
}
