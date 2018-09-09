module.exports = function(grunt) {
    'use strict';

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        paths: {
          custom:    '/Minimalista/',
        },      
       // Sass: compiles SCSS files
       sass : {
         dist : {
           options : { style : 'compressed' },
           files : {
             '<%= paths.custom %>css/personalized.css' : 'sass/main.scss',
           }
         }
       }, // sass
       watch : {
             css: {
               files: 'sass/**/*.scss',
               tasks : ['sass']
           }
       }
    });
    
    // Tarefas que serão executadas
    grunt.registerTask( 'default', ['sass'] );

    // Tarefa para Watch
    grunt.registerTask('w', ['watch'] );
};