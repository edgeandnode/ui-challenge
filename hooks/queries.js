import { useQuery } from 'react-query'
import { request, gql } from "graphql-request"

const endpoint = 'https://api.thegraph.com/subgraphs/name/graphprotocol/everest'

export const useProjects = () => {
  return useQuery('projects',
    async () => {
      const data = await request(
        endpoint,
        gql`
          query {
            projects(first: 20) {
              id
              ipfsHash
              name
              description
              image
            }
          }
        `
      );
      return data
    }
  )
}

export const useProject = (projectId) => {
  return useQuery(
    ["project", projectId],
    async () => {
      console.log("projectId: ", projectId)
      const { project } = await request(
        endpoint,
        gql`
            query {
              project(id: "${projectId}") {
                id
                ipfsHash
                name
                description
                image
              }
            }
          `
      )
      return project
    }
  )

}