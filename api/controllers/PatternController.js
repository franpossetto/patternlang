/**
 * PatternController
 *
 * @description :: Server-side logic for managing Patterns
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	create: function(req,res){

		patternParams={
			name: req.param('name'),
			problem: req.param('problem'),
			body: req.param('body'),
			solution: req.param('solution'),
			scale: req.param('scale'),
			degreeOfFaith: req.param('faith')
		}

		Pattern.create(patternParams, function patternCreated(err,pattern){
			if (err) return res.negotiate(err);
			return res.json(pattern);
		})
	},

	index: function(req,res){
		Pattern.find().exec(function(err,patterns){
			if(err) return res.negotiate(err);
			return res.json(patterns);
		})
	},

	show: function(req,res){
		Pattern.findOne().exec(function(err,pattern){
			if(err) return res.negotiate(err);
			return res.json(pattern);
		})
	},

	edit: function (req,res){
		Pattern.findOne(req.param('id'), function foundPattern(err, pattern) {
    		if (err) return next(err);
    		if (!pattern) return next('Pattern doesn\'t exist.');
    		return res.view({
    			pattern: pattern
    		});
    	})
	},

	update: function(req,res){
		Pattern.update(req.param('id'), req.params.all(), function userUpdated(err) {
    		if (err) {
    			return res.redirect('/pattern/edit/' + req.param('id'));
    		} return res.redirect('/pattern/show/' + req.param('id'));
    	});
	}
	
};

