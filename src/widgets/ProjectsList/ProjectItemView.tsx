import React, { useCallback } from 'react'

import { Project } from 'app/types/Project'

import { Text, Card, Pressable } from 'app/ds'

export const ProjectItemView: React.FC<{
  project: Project
  onPress: (project: Project) => void
  selected: boolean
}> = ({ project, onPress, selected }) => {
  return (
    <Pressable onPress={useCallback(() => onPress(project), [onPress, project])}>
      <Card my={4} style={selected? {backgroundColor:'#dbdbdb', borderColor:'#858585'}: null}>
        <Text typeface='default/14' color='default' mb={2}>
          {project.name}
        </Text>
        <Text typeface='default/12' color='dimmed'>
          {project.description}
        </Text>
      </Card>
    </Pressable>
  )
}
