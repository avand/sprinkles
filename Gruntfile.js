module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    concat: {
      css: {
        src: "src/css/**/*.css",
        dest: "dist/<%= pkg.name %>-<%= pkg.version %>.css"
      },
      js: {
        options: {
          separator: ";"
        },
        dist: {
          src:  ["src/js/**/*.js"],
          dest: "dist/<%= pkg.name %>-<%= pkg.version %>.js"
        }
      }
    },
    jshint: {
      files: ["Gruntfile.js", "src/**/*.js", "test/*.js"],
    },
    uglify: {
      dist: {
        files: {
          "dist/<%= pkg.name %>-<%= pkg.version %>.min.js": ["<%= concat.js.dist.dest %>"]
        }
      }
    },
    cssmin: {
      target: {
        files: [{
          src: "<%= concat.css.dest %>",
          dest: "<%= concat.css.dest.replace('.css', '.min.css') %>"
        }]
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-cssmin");

  grunt.registerTask("default", ["jshint", "concat", "uglify", "cssmin"]);
};
