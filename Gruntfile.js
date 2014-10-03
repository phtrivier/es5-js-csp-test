module.exports = function(grunt) {

    grunt.loadNpmTasks("grunt-regenerator");

    grunt.initConfig({
        regenerator: {
            sources: {
                options: {
                    includeRuntime: false
                },
                files: [{
                    expand: true,
                    cwd: 'src/es6',
                    src: ['**/*.js'],
                    dest: 'build/es5'
                }]
            },
            index : {
                options : {
                    includeRuntime : true,
                },
                files : [{
                    expand : true,
                    cwd : 'src/es6',
                    src : ["./index-*.js"],
                    dest : 'build/es5'
                }]
            }
        }
    });

    grunt.registerTask("default",["regenerator:sources", "regenerator:index"]);

        // grunt.loadNpmTasks("grunt-traceur");

    // grunt.initConfig({
    //     traceur: {
    //         options : {

    //         },
    //         sources : {
    //             files: [{
    //                 expand: true,
    //                 cwd: 'src/es6',
    //                 src: ['**/*.js'],
    //                 dest: 'src/es5'
    //             }]
    //         },
    //         index : {
    //             options : {
    //                 includeRuntime : true,
    //             },
    //             files : [{
    //                 expand : true,
    //                 cwd : 'src/es6',
    //                 src : ["./index.js"],
    //                 dest : 'src/es5'
    //             }]
    //         }
    //     },
    // });

    // grunt.registerTask("default",["traceur:sources", "traceur:index"]);

};

