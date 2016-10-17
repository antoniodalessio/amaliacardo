module.exports = function(grunt) {

	grunt.initConfig({
	  compass: {
	    dist: {
	      options: {
	        sassDir: 'scss',
	        cssDir: 'dist/css',
	        environment: 'production'
	      }
	    },
	    dev: {
	      options: {
	        sassDir: 'scss',
	        cssDir: 'dist/css'
	      }
	    }
	  },
	  uglify: {
	    options: {
	      mangle: false
	    },
	    my_target: {
	      files: {
	        'dist/js/index.min.js': ['js/index.js'],
	        'dist/js/about.min.js': ['js/about.js'],
	        'dist/js/contact.min.js': ['js/contact.js'],
	      }
	    }
	  },
	  assemble: {
		  options: {
		  	flatten: true,
		    partials: ['templates/partials/**/*.hbs'],
		    layout: ['templates/layout/default.hbs'],
		    data: ['templates/*.json']
		  },
		  site: {
		    src: ['templates/*.hbs'],
		    dest: './dist'
		  }
		},
		responsive_images: {
	    images: {
	      options: {
	        sizes: [
	        {
	          width: 640,
	          suffix: "_normal",
	          quality: 79,
	          rename: false,
	        },
	        {
	          width: 1024,
	          suffix: "_x2",
	          quality: 60,
	          rename: false,
	        }]
	      },
	      files: [{
	        expand: true,
	        src: ['*.{jpg,gif,png,jpeg}'],
	        cwd: './images',
	        dest: './dist/images'
	      }]
	    }
	  },
	  webfont: {
	    icons: {
	    	options: {
            stylesheet: 'scss',
            relativeFontPath: '../fonts'
        },
        src: 'svg/*.svg',
        dest: 'dist/fonts',
        destCss: 'scss/'
	    }
		},
	  watch: {
		  css: {
		    files: ['scss/**/*.scss'],
		    tasks: ['compass'],
		    options: {
		      spawn: false,
		    },
		  },
		  js: {
		    files: ['js/**/*.scss'],
		    tasks: ['uglify'],
		    options: {
		      spawn: false,
		    },
		  },
		  templates: {
		    files: ['templates/**/*.hbs'],
		    tasks: ['assemble'],
		    options: {
		      spawn: false,
		    },
		  },
		  images: {
		    files: ['images/**/*.{jpg,gif,png,jpeg}'],
		    tasks: ['responsive_images'],
		    options: {
		      spawn: false,
		    },
		  },
		  webfont: {
		    files: ['svg/**/*.svg'],
		    tasks: ['webfont'],
		    options: {
		      spawn: false,
		    },
		  },
		},
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-assemble');
	grunt.loadNpmTasks('grunt-responsive-images');
	grunt.loadNpmTasks('grunt-webfont');


	grunt.registerTask('default', ['compass', 'uglify', 'assemble', 'responsive_images', 'webfont', 'watch']);

}