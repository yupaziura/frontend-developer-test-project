import { Project } from '../types/Project'

export const PROJECTS: Project[] = [
  {
    name: 'Twitter',
    description: 'Twitter is a web application that allows users to post and share messages.',
    tasks: [
      {
        name: 'Create a new project',
        description: 'Setup a new project with React Native',
        completed: true
      },
      {
        name: 'Add sign in',
        description: 'Add sign in functionality to the application',
        completed: false
      },
      {
        name: 'Add sign up',
        description: 'Add sign up functionality to the application'
      }
    ]
  },

  {
    name: 'Complete Test Task',
    description: 'Complete a test task for Factorial Complexity.',
    tasks: [
      {
        name: 'Fork a project on GitHub',
        description: 'Create a github account if you do not have one and fork the project'
      },
      {
        name: 'Show tasks for a selected project',
        description: 'When user presses on a project, show all of the tasks for that project'
      }
    ]
  }
]
