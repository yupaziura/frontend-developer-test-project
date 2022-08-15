import React, { useCallback } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const onProjectPress = useCallback((project: Project) => {
    // TODO
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView projects={PROJECTS} onProjectPress={onProjectPress} />
      </View>
      <View style={styles.column}></View>
    </View>
  )
}

export default App
