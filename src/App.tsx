import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'

import { Project } from 'app/types/Project'
import {Task} from 'app/types/Task'
import { ProjectsListView } from 'app/widgets/ProjectsList'
import { TasksListView } from './widgets/TasksList'
import { PROJECTS } from 'app/mock/data'

import styles from './App.styles'

function App() {
  const [activeProject, setActiveProject] = useState(99);
  const [projects, setProjects] = React.useState(PROJECTS)

  let fullTaskList: Task[] = [];
    PROJECTS.forEach((project) => {
      project.tasks.forEach((task)=> {
          fullTaskList.push(task)
        })
      })
  


  const onProjectPress = useCallback((project: Project) => {
    
    activeProject === 99 || activeProject !== PROJECTS.indexOf(project)? setActiveProject(PROJECTS.indexOf(project)) : setActiveProject(99)
  }, [activeProject])

  const onTaskPress = useCallback((task: Task) => {
    console.log('activeProject')
  }, [])

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <ProjectsListView projects={PROJECTS} onProjectPress={onProjectPress} selectedProjectIndex={activeProject}/>
      </View>
      <View style={styles.column}>
        <TasksListView tasks={activeProject!==99? PROJECTS[activeProject].tasks : fullTaskList}  onTaskPress={onTaskPress}/>
      </View>
    </View>
  )
}

export default App
