import { useQuery } from 'react-query'
import { useProject } from '../../hooks/queries'
import { useRouter } from 'next/router'


export default function Project() {
  const router = useRouter()
  const projectId = router?.query?.id ?? ''

  const { data: project, error } = useProject(projectId)

  // This is a project that should be rendered
  console.log("project: ", project)

  return (
    <div>
      <main>
        <h1>
          Welcome to our coding challenge!
        </h1>
      </main>
    </div>
  )
}
