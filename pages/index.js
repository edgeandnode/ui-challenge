import { useProjects } from '../hooks/queries'
import { useRouter } from 'next/router'


export default function Home() {
  const { data } = useProjects()

  // This is the list of projects to render on the page
  const projects = data?.projects || []

  return (
    <div>
      <main>
        <h1>
          Welcome to our coding challenge!
        </h1>
        {projects.map(project =>
          <a href={`/project/${project.id}`}>Lalala {project.name}</a>)}
      </main>
    </div>
  )
}
