import React, { useCallback } from 'react'
import { FlatList } from 'react-native'

import { Project } from 'app/types/Project'

import { Header } from 'app/ds'

import { ProjectItemView } from './ProjectItemView'
import styles from './ProjectsListView.styles'

export const ProjectsListView: React.FC<{
  projects: Project[]
  onProjectPress: (project: Project) => void
  selectedProjectIndex: number
}> = ({ projects, onProjectPress, selectedProjectIndex }) => {

  const renderItem = useCallback(
    ({ item, index }: { item: Project , index: number}) => <ProjectItemView selected={selectedProjectIndex === index ? true : false} project={item} onPress={onProjectPress} />,
    [selectedProjectIndex]
  )

  return (
    <FlatList
      data={projects}
      ListHeaderComponent={<Header mb={12}>Projects</Header>}
      renderItem={renderItem}
      style={styles.list}
    />
  )
}
