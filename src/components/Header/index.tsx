import { Box, Button, Center, Text } from "@chakra-ui/react";

export const Header = ({ count }: { count: number }) => {
  return (
    <Box
      p="16px 0"
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
    >
      <h1>Redux Todo</h1>
      <Box display="flex" gap={8}>
        <Box
          backgroundColor="#fff"
          borderRadius={5}
          boxShadow="inset 7px 7px 11px #d6d6d6, inset -7px -7px 11px #ffffff"
          w={35}
          h={35}
          display="flex"
          justifyContent='center'
          alignItems='center'
          fontWeight='bold'
        >
          {count}
        </Box>
        <Button
          border={0}
          background="#12a5dd"
          fontWeight="bold"
          color="#fff"
          h="fit-content"
          p="10px 18px"
          borderRadius={8}
          colorScheme="blue"
          boxShadow="4px 4px 8px #cfcfcf, -4px -4px 8px #fff"
          alignItems="center"
          transition='background-color .3s'
          cursor='pointer'
          _hover={{backgroundColor: '#159acd'}}
        >
          Добавить задачу
        </Button>
      </Box>
    </Box>
  );
};
