module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      options: {
        separator: ";"
      },
      dist: {
        src:  ["src/**/*.js"],
        dest: "dist/<%= pkg.name %>.js"
      }
    },
    qunit: {
      files: ["test/**/*.html"]
    },
    jshint: {
      files: ["Gruntfile.js", "src/**/*.js", "test/*.js"],
    },
    uglify: {
      dist: {
        files: {
          "dist/<%= pkg.name %>.min.js": ["<%= concat.dist.dest %>"]
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("test",    ["jshint", "qunit"]);
  grunt.registerTask("default", ["test", "concat", "uglify"]);
};
