pipeline {
    agent any

    environment {
        IMAGE_NAME = "express-app"
        APP_PORT = "5000"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/Chathubha/express-app.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    // Build Docker image locally
                    docker.build("${IMAGE_NAME}:latest")
                }
            }
        }

        stage('Deploy Container') {
            steps {
                script {
                    sh """
                    # Stop existing container if running
                    docker stop ${IMAGE_NAME} || true
                    docker rm ${IMAGE_NAME} || true

                    # Run new container with local Docker image
                    docker run -d -p ${APP_PORT}:${APP_PORT} --name ${IMAGE_NAME} --env-file .env ${IMAGE_NAME}:latest
                    """
                }
            }
        }
    }

    post {
        always {
            echo "Pipeline finished"
        }
    }
}