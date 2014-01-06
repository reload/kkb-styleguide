module.exports = function (grunt) {

    grunt.initConfig({
        compass: {
            dev: {
                options: {
                    config: 'config.rb'
                }
            }
        },
        watch: {
            files: ['_/sass/**/*.{scss,sass}','_/js/**/*.js','index.html', 'gruntfile.js', 'config.rb'],
            tasks:['compass:dev'],
            options: {
                livereload: true,
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-compass');

    grunt.registerTask('default', ['watch']);

};



