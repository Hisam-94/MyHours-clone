import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

export const ProjectsData = ({ project }) => {
  console.log("project",project)
  return (
    <>
        {project.map((item) => {
            return (
                <Tr key={item._id}>
                    <Td>{item.name}</Td>
                    <Td>{item.client}</Td>
                    <Td> 0 H </Td>
                    <Td>₹0.00</Td>
                    <Td>10/2/2022</Td>
                    <Td>Active</Td>
                </Tr>
            )
        })}
    </>
  )
}
