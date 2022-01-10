/** @jsx jsx */
/** @jsxRuntime classic */
import { jsx } from 'theme-ui'
import { useProjects } from '../hooks/queries'
import { useRouter } from 'next/router'


export default function Home() {
  const { data } = useProjects()

  // This is the list of projects to render on the page
  const projects = data?.projects || []

  return (
    <div>
      <main>
        <h1 sx={{ fontSize: '2rem' }}>
          Welcome to our coding challenge!
        </h1>
      </main>
    </div>
  )
}
