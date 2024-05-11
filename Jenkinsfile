pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
		echo "Hello world"
                sh 'node sample_node_server.js'
            }
        }
    }
}

