pipeline {
  agent any

  environment {
    PLAYWRIGHT_VERSION = '1.41.1-jammy'
  }

  tools {
    nodejs 'NodeJS 20.9'
    // Specify other tools as needed
  }
  
    stage('Unit test function-generateID') {
      steps {
        sh '''
            npm test generateID.test.js
        '''
      }
    }
    stage('Unit test function-generateEmail') {
      steps {
        sh '''
            npm test generateEmail.test.js
        '''
      }
    }
  }

