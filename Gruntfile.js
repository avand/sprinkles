module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src:  ["src/**/*.js"],
        dest: "dist/<%= pkg.name %>-<%= pkg.version %>.js"
      }
    },
    jshint: {
      files: ["Gruntfile.js", "src/**/*.js", "test/*.js"],
    },
    uglify: {
      dist: {
        files: {
          "dist/<%= pkg.name %>-<%= pkg.version %>.min.js": ["<%= concat.dist.dest %>"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["concat", "uglify"]);
  grunt.registerTask("build", ["jshint", "concat", "uglify"]);
};
