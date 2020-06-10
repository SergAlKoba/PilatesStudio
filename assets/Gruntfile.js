module.exports = function(grunt){

grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),

	// Concatenate Configuration
	concat: {
		options: {
			separator: ';'
		},
		script: {
			src: [
				'dist/js/script.js'
			],
			dest: '../markup/js/script.min.js'
		}
	},

	// Uglify Configuration
	uglify: {
		dist: {
			files: {
				'../markup/js/jquery.min.js': ['dist/js/plugin/jquery.js'],
				'../markup/js/wow.min.js': ['dist/js/plugin/wow.js'],
				'../markup/js/jquery.mask.min.js': ['dist/js/plugin/jquery.mask.js'],
				'../markup/js/accordion.min.js': ['dist/js/plugin/accordion.js'],
				'../markup/js/jquery-ui.min.js': ['dist/js/plugin/jquery-ui.js'],
				'../markup/js/jquery.animateNumber.min.js': ['dist/js/plugin/jquery.animateNumber.js'],
				'../markup/js/readmore.min.js': ['dist/js/plugin/readmore.js'],
				'../markup/js/jquery.expandable.min.js': ['dist/js/plugin/jquery.expandable.js'],
				'../markup/js/slick.min.js': ['dist/js/plugin/slick.js'],
				'../markup/js/jquery.responsiveTabs.min.js': ['dist/js/plugin/jquery.responsiveTabs.js'],
				'../markup/js/jquery.matchHeight.min.js': ['dist/js/plugin/jquery.matchHeight.js'],
				'../markup/js/jquery.responsiveTabs.min.js': ['dist/js/plugin/jquery.responsiveTabs.js'],
				'../markup/js/info.min.js': ['dist/js/info.js'],
				'../markup/js/script.min.js': ['dist/js/script.js'],
				'../markup/js/home.min.js': ['dist/js/home.js'],
				'../markup/js/home-slider.min.js': ['dist/js/home-slider.js'],
				'../markup/js/homeMatchHeight.min.js': ['dist/js/homeMatchHeight.js'],
				'../markup/js/fitness-tv.min.js': ['dist/js/fitness-tv.js'],
				'../markup/js/training-code.min.js': ['dist/js/training-code.js'],
				'../markup/js/payment.min.js': ['dist/js/payment.js'],
				'../markup/js/thanks.min.js': ['dist/js/thanks.js'],
				'../markup/js/price.min.js': ['dist/js/price.js'],
				'../markup/js/contacts.min.js': ['dist/js/contacts.js'],
				'../markup/js/reviews.min.js': ['dist/js/reviews.js'],
			}
		}
	},

	// Sass Configuration
	sass: {
		options: {
			loadPath: ['bower_components/foundation/foundation.scss']
		},
		dist: {
			options: {
				sourcemap: 'none',
				style: 'compressed'
			},
			files: [{
				expand: true,
				cwd: 'dist/scss/',
				src: ['*.scss'],
				dest: '../markup/css/',
				ext: '.css'
			}]
		}
	},

	// Watch Configuration
	watch: {
		grunt: { files: ['Gruntfile.js'], tasks: ['default'] },

		sass: {
			files: 'dist/scss/*.scss',
			tasks: ['buildCss']
		},

		script: {
			files: 'dist/js/*.js',
			tasks: ['buildJs']
		},

		markup: {
			files: '*.html',
			tasks: ['htmlbuild']
		}
	},

	fixturesPath: './',
	sourcesPath: '../markup',

    htmlbuild: {
        dist: {
            src: '*.html',
            dest: '<%= sourcesPath %>/templates/',
            options: {
                beautify: true,
                prefix: '../',
                relative: false,
                sections: {
                    views: '<%= fixturesPath %>/*.html',
                    templates: '<%= fixturesPath %>/*.html',
                    layout: {
						header: '<%= fixturesPath %>/templates/header.html',
						header_tv: '<%= fixturesPath %>/templates/header-tv.html',
                    	footer: '<%= fixturesPath %>/templates/footer.html'
					}
                },
            }
        }
    }


});

// Load Grunt tasks
grunt.loadNpmTasks('grunt-contrib-sass');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-html-build');

// Register Grunt tasks
grunt.registerTask('buildCss', ['sass']);
grunt.registerTask('buildJs',  ['concat', 'uglify']);
grunt.registerTask('default',  ['buildCss', 'buildJs', 'watch', 'sass']);

}
