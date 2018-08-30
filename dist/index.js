'use strict';
module.exports = function (self, options) {
	options = Object.assign({}, options);

	var filter = function filter(key) {
		var match = function match(pattern) {return typeof pattern === 'string' ? key === pattern : pattern.test(key);};

		if (options.include) {
			return options.include.some(match);
		}

		if (options.exclude) {
			return !options.exclude.some(match);
		}

		return true;
	};var _iteratorNormalCompletion = true;var _didIteratorError = false;var _iteratorError = undefined;try {

		for (var _iterator = Object.getOwnPropertyNames(self.constructor.prototype)[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {var key = _step.value;
			var value = self[key];

			if (key !== 'constructor' && typeof value === 'function' && filter(key)) {
				self[key] = value.bind(self);
			}
		}} catch (err) {_didIteratorError = true;_iteratorError = err;} finally {try {if (!_iteratorNormalCompletion && _iterator.return) {_iterator.return();}} finally {if (_didIteratorError) {throw _iteratorError;}}}

	return self;
};

var excludedReactMethods = [
'componentWillMount',
'UNSAFE_componentWillMount',
'render',
'getSnapshotBeforeUpdate',
'componentDidMount',
'componentWillReceiveProps',
'UNSAFE_componentWillReceiveProps',
'shouldComponentUpdate',
'componentWillUpdate',
'UNSAFE_componentWillUpdate',
'componentDidUpdate',
'componentWillUnmount',
'componentDidCatch',
'setState',
'forceUpdate'];


module.exports.react = function (self, options) {
	options = Object.assign({}, options);
	options.exclude = (options.exclude || []).concat(excludedReactMethods);
	return module.exports(self, options);
};
//# sourceMappingURL=index.js.map