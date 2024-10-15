import Link from 'next/link'
import React from 'react'

export default function page() {
  return (
    <div>
      <p>
        this is the first page!
        <br />
        <Link href="/">Home</Link>
      </p>
    </div>
    )
}

