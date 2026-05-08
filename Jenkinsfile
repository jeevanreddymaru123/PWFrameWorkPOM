pipeline {
    agent any
    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/jeevanreddymaru123/PWFrameWorkPOM.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                bat 'npm ci'
                bat 'npx playwright install'
            }
        }

       stage('Run Playwright Tests') {
            steps {
                bat 'npx playwright test --grep @master'
            }
        }  

        stage('Generate Allure Report') {
            steps {
                bat 'allure generate allure-results --clean -o allure-report && allure open allure-report'
            }
        }
    }

    post {
        always {

            // Archive artifacts
            archiveArtifacts artifacts: 'test-results/**/*', allowEmptyArchive: true

            // Publish Allure Report
            allure(
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            )
        }
    }
}