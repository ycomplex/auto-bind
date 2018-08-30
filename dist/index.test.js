'use strict';var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);var _createClass2 = require('babel-runtime/helpers/createClass');var _createClass3 = _interopRequireDefault(_createClass2);var _ava = require('ava');var _ava2 = _interopRequireDefault(_ava);
var _ = require('.');var _2 = _interopRequireDefault(_);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}

(0, _ava2.default)('autoBind()', function (t) {
	var bounded = void 0;var

	Unicorn = function () {
		function Unicorn(name) {(0, _classCallCheck3.default)(this, Unicorn);
			this.name = name;
			bounded = (0, _2.default)(this);
		}(0, _createClass3.default)(Unicorn, [{ key: 'message', value: function message()

			{
				return this.name + ' is awesome!';
			} }]);return Unicorn;}();


	var unicorn = new Unicorn('Rainbow');
	t.is(bounded, unicorn);var

	message = unicorn.message;
	t.is(message(), 'Rainbow is awesome!');
});

(0, _ava2.default)('include option', function (t) {var
	Unicorn = function () {
		function Unicorn(name) {(0, _classCallCheck3.default)(this, Unicorn);
			this.name = name;
			(0, _2.default)(this, { include: ['bar'] });
		}(0, _createClass3.default)(Unicorn, [{ key: 'foo', value: function foo()

			{
				return this.name;
			} }, { key: 'bar', value: function bar()

			{
				return this.name;
			} }]);return Unicorn;}();var _ref =


	new Unicorn('Rainbow'),foo = _ref.foo,bar = _ref.bar;

	t.throws(function () {
		foo();
	});

	t.is(bar(), 'Rainbow');
});

(0, _ava2.default)('exclude option', function (t) {var
	Unicorn = function () {
		function Unicorn(name) {(0, _classCallCheck3.default)(this, Unicorn);
			this.name = name;
			(0, _2.default)(this, { exclude: ['bar'] });
		}(0, _createClass3.default)(Unicorn, [{ key: 'foo', value: function foo()

			{
				return this.name;
			} }, { key: 'bar', value: function bar()

			{
				return this.name;
			} }]);return Unicorn;}();var _ref2 =


	new Unicorn('Rainbow'),foo = _ref2.foo,bar = _ref2.bar;

	t.is(foo(), 'Rainbow');

	t.throws(function () {
		bar();
	});
});

(0, _ava2.default)('autoBind.react()', function (t) {var
	Unicorn = function () {
		function Unicorn(name) {(0, _classCallCheck3.default)(this, Unicorn);
			this.name = name;
			_2.default.react(this);
		}(0, _createClass3.default)(Unicorn, [{ key: 'componentWillMount', value: function componentWillMount()

			{
				return this.name;
			} }, { key: 'foo', value: function foo()

			{
				return this.name;
			} }]);return Unicorn;}();var _ref3 =


	new Unicorn('Rainbow'),foo = _ref3.foo,componentWillMount = _ref3.componentWillMount;

	t.throws(function () {
		componentWillMount();
	});

	t.is(foo(), 'Rainbow');
});
//# sourceMappingURL=index.test.js.map