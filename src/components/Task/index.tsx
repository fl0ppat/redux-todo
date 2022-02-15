import { Box, Button, Checkbox, CloseButton, Text } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../../features/todoList/todoListSlice";
import { Task as TaskType } from "../../types";

export const Task = ({ data }: { data: TaskType }) => {
  const dispatch = useDispatch();

  return (
    <Box
      display="flex"
      flexDirection="row"
      position="relative"
      borderRadius={24}
      backgroundColor="#fff"
      boxShadow="10px 10px 20px #d5d5d5, -10px -10px 20px #ffffff"
      minHeight={180}
      padding="32px 32px 32px 62px"
    >
      <CloseButton
        position="absolute"
        top={16}
        right={16}
        background="none"
        border="none"
        opacity={0.3}
        transition="opacity .3s"
        _hover={{ opacity: 0.5 }}
        cursor='pointer'
        onClick={() => dispatch(removeTask(data.uuid))}
      />
      <Checkbox
        checked={data.status}
        position="absolute"
        left={16}
        top={32}
        isInvalid={data.expired}
        onChange={() => dispatch(toggleTask(data.uuid))}
        w={24}
        h={24}
        iconSize={18}
        backgroundColor="#e0e0e0"
        borderRadius={6}
      />
      <Text m={0}>{data.title}</Text>
    </Box>
  );
};
