module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-grunticon');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
	grunticon: {
		myIcons: {
			options: {
			src: "images/icons/",
			dest: "stylesheets/icons/"
			}
		}
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);

  // Default task(s).
  grunt.registerTask('icon', ['lint qunit concat min grunticon']);

};