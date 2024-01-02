// 'use client'

import type { Metadata } from 'next'
import React from 'react'

// The Next.js 'metadata' API is not allowed in a client component.
export const metadata: Metadata = {
  title: 'Character Info',
  description: 'Character Info',
}
export default function routeNameLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
