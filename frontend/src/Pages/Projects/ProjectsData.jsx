import { Td, Tr } from '@chakra-ui/react'
import React from 'react'

export const ProjectsData = ({ project }) => {
  return (
    <>
        {project.map((item) => {
            return (
                <Tr key={item.id}>
                    <Td>{item.project_name}</Td>
                    <Td>{item.client}</Td>
                    <Td> 0 H </Td>
                    <Td>₹0.00</Td>
                    <Td>{item.date}</Td>
                    <Td>Active</Td>
                </Tr>
            )
        })}
    </>
  )
}
