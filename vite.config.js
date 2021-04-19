export default ({ command, mode }) => {
    if (command === 'build') {
        return {
            base: '/goodbye/',
            build: {
                terserOptions: {
                  parse: {
                    html5_comments: false,
                  }
                }
            }
        }
    } else return {}
}