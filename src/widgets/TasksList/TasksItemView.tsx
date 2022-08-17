import React, { useCallback } from 'react'

import { Task } from 'app/types/Task'

import { Text, Card, Pressable } from 'app/ds'

export const TaskItemView: React.FC<{
  task: Task
  onPress: (task: Task) => void
  completed: boolean | undefined
}> = ({ task, onPress, completed }) => {
  return (
    <Pressable onPress={useCallback(() => onPress(task), [onPress, task])}>
      <Card my={4} style={completed? {backgroundColor: '#a4fc81'} : null}>
        <Text typeface='default/14' color='default' mb={2}>
          {task.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {task.description}
        </Text>
      </Card>
    </Pressable>
  )
}
