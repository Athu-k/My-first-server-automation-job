pipeline {
    agent any

    stages {
        stage('Hello') {
            steps {
		echo "Hello world"
                node sample_node_server.js
            }
        }
    }
}

