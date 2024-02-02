pipeline {
    agent any

    environment {
        // Define any environment variables needed
        CI = 'true'
    }

    stages {
        stage('Checkout') {
            steps {
                // Checks out the source code
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                // Use Node's package manager to install dependencies
                script {
                    sh 'npm install'
                }
            }
        }

        stage('Run Tests') {
            steps {
                // Executes Jest tests
                script {
                    sh 'npm test'
                }
            }
        }

        // You can add more stages for building, deploying, etc.
    }

    
}
