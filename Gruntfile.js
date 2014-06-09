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
    connect: {
      server: {
        options: { port: "8000", base: "." }
      }
    },
    jshint: {
      files: ["Gruntfile.js", "src/**/*.js", "test/*.js"],
    },
    qunit: {
      all: {
        options: {
          urls: ["http://localhost:8000/test/index.html"]
        }
      }
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
  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-qunit");
  grunt.loadNpmTasks("grunt-contrib-uglify");

  grunt.registerTask("default", ["test", "concat", "uglify"]);
  grunt.registerTask("build",   ["jshint", "concat", "uglify"]);
  grunt.registerTask("test",    ["jshint", "connect", "qunit"]);
};
