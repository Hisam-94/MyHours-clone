import React from "react";
import { ChevronDownIcon, SettingsIcon } from "@chakra-ui/icons";
import {
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  Tr,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();

  return (
    <Tr>
      <Td w={"50%"} fontSize="15">
        {client.name}
      </Td>
      <Td fontSize="15">{client.contact_person}</Td>
      <Td fontSize="15">{client.email}</Td>
      <Td fontSize="15">Active</Td>
      <Td fontSize="15">
        <Menu>
          {({ isOpen }) => (
            <>
              <MenuButton
                isActive={isOpen}
                as={Button}
                variant="ghost"
                color={"gray"}
                rightIcon={<ChevronDownIcon />}
              >
                {isOpen ? (
                  <SettingsIcon boxSize="5" mb="1" />
                ) : (
                  <SettingsIcon boxSize="5" mb="1" />
                )}
              </MenuButton>
              <MenuList>
                <MenuItem onClick={() => navigate(`/editclient/${client._id}`)}>
                  Edit
                </MenuItem>
                <MenuItem>Archive</MenuItem>
                <MenuItem onClick={() => handleDelete(client._id)}>
                  Delete
                </MenuItem>
              </MenuList>
            </>
          )}
        </Menu>
      </Td>
    </Tr>
  );
};

export default Client;
