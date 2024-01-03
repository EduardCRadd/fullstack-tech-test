import type { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Character Info',
  description: 'Character Info',
}
export default function characterLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
