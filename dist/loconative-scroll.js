/* loconative-scroll v1.0.1 | MIT License | https://github.com/quentinhocde/loconative-scroll */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.LoconativeScroll = factory());
}(this, (function () { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();

    return function _createSuperInternal() {
      var Super = _getPrototypeOf(Derived),
          result;

      if (hasNativeReflectConstruct) {
        var NewTarget = _getPrototypeOf(this).constructor;

        result = Reflect.construct(Super, arguments, NewTarget);
      } else {
        result = Super.apply(this, arguments);
      }

      return _possibleConstructorReturn(this, result);
    };
  }

  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }

    return object;
  }

  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);

        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);

        if (desc.get) {
          return desc.get.call(receiver);
        }

        return desc.value;
      };
    }

    return _get(target, property, receiver || target);
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var defaults = {
    el: document,
    wrapper: window,
    name: 'scroll',
    offset: [0, 0],
    repeat: false,
    smooth: true,
    smoothTouch: false,
    initPosition: {
      x: 0,
      y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: true,
    "class": 'is-inview',
    scrollingClass: 'has-scroll-scrolling',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    duration: 1.2,
    easing: function easing(t) {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    },
    // https://easings.net
    scrollFromAnywhere: false,
    touchMultiplier: 3,
    resetNativeScroll: true,
    tablet: {
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'horizontal',
      breakpoint: 1024
    },
    smartphone: {
      smooth: true,
      direction: 'vertical',
      gestureDirection: 'vertical'
    }
  };

  var _default = /*#__PURE__*/function () {
    function _default() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet) Object.assign(this.tablet, options.tablet);
      this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
      this.isTablet = this.isMobile && window.innerWidth >= this.tablet.breakpoint;

      if (this.isMobile) {
        this.smooth = this.smartphone.smooth;
      }

      if (this.isTablet) {
        this.smooth = this.tablet.smooth;
      }

      this.namespace = 'locomotive';
      this.html = document.documentElement;
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      this.windowMiddle = {
        x: this.windowWidth / 2,
        y: this.windowHeight / 2
      };
      this.els = {};
      this.currentElements = {};
      this.listeners = {};
      this.hasScrollTicking = false;
      this.hasCallEventSet = false;
      this.onScroll = this.onScroll.bind(this);
      this.checkResize = this.checkResize.bind(this);
      this.checkEvent = this.checkEvent.bind(this);
      this.instance = {
        scroll: {
          x: 0,
          y: 0
        },
        delta: {
          x: 0,
          y: 0
        },
        limit: {
          x: this.html.offsetWidth,
          y: this.html.offsetHeight
        },
        currentElements: this.currentElements
      };

      if (this.isMobile) {
        if (this.isTablet) {
          this.context = 'tablet';
        } else {
          this.context = 'smartphone';
        }
      } else {
        this.context = 'desktop';
      }

      if (this.isMobile) this.direction = this[this.context].direction;
      if (this.isMobile) this.gestureDirection = this[this.context].gestureDirection;

      if (this.direction === 'horizontal') {
        this.directionAxis = 'x';
      } else {
        this.directionAxis = 'y';
      }

      this.instance.direction = null;
      this.instance.speed = 0;
      this.html.classList.add(this.initClass);
      window.addEventListener('resize', this.checkResize, false);
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        this.initEvents();
      }
    }, {
      key: "onScroll",
      value: function onScroll() {
        this.dispatchScroll();
      }
    }, {
      key: "checkResize",
      value: function checkResize() {
        var _this = this;

        if (!this.resizeTick) {
          this.resizeTick = true;
          requestAnimationFrame(function () {
            _this.resize();

            _this.resizeTick = false;
          });
        }
      }
    }, {
      key: "resize",
      value: function resize() {}
    }, {
      key: "checkContext",
      value: function checkContext() {
        if (!this.reloadOnContextChange) return;
        this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
        this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
        var oldContext = this.context;

        if (this.isMobile) {
          if (this.isTablet) {
            this.context = 'tablet';
          } else {
            this.context = 'smartphone';
          }
        } else {
          this.context = 'desktop';
        }

        if (oldContext != this.context) {
          var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
          var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
          if (oldSmooth != newSmooth) window.location.reload();
        }
      }
    }, {
      key: "initEvents",
      value: function initEvents() {
        var _this2 = this;

        this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
        this.setScrollTo = this.setScrollTo.bind(this);
        this.scrollToEls.forEach(function (el) {
          el.addEventListener('click', _this2.setScrollTo, false);
        });
      }
    }, {
      key: "setScrollTo",
      value: function setScrollTo(event) {
        event.preventDefault();
        this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
          offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
        });
      }
    }, {
      key: "addElements",
      value: function addElements() {}
    }, {
      key: "detectElements",
      value: function detectElements(hasCallEventSet) {
        var _this3 = this;

        var scrollTop = this.instance.scroll.y;
        var scrollBottom = scrollTop + this.windowHeight;
        var scrollLeft = this.instance.scroll.x;
        var scrollRight = scrollLeft + this.windowWidth;
        Object.entries(this.els).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              i = _ref2[0],
              el = _ref2[1];

          if (el && (!el.inView || hasCallEventSet)) {
            if (_this3.direction === 'horizontal') {
              if (scrollRight >= el.left && scrollLeft < el.right) {
                _this3.setInView(el, i);
              }
            } else {
              if (scrollBottom >= el.top && scrollTop < el.bottom) {
                _this3.setInView(el, i);
              }
            }
          }

          if (el && el.inView) {
            if (_this3.direction === 'horizontal') {
              var width = el.right - el.left;
              el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);

              if (scrollRight < el.left || scrollLeft > el.right) {
                _this3.setOutOfView(el, i);
              }
            } else {
              var height = el.bottom - el.top;
              el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);

              if (scrollBottom < el.top || scrollTop > el.bottom) {
                _this3.setOutOfView(el, i);
              }
            }
          }
        }); // this.els = this.els.filter((current, i) => {
        //     return current !== null;
        // });

        this.hasScrollTicking = false;
      }
    }, {
      key: "setInView",
      value: function setInView(current, i) {
        this.els[i].inView = true;
        current.el.classList.add(current["class"]);
        this.currentElements[i] = current;

        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, 'enter');

          if (!current.repeat) {
            this.els[i].call = false;
          }
        } // if (!current.repeat && !current.speed && !current.sticky) {
        //     if (!current.call || current.call && this.hasCallEventSet) {
        //        this.els[i] = null
        //     }
        // }

      }
    }, {
      key: "setOutOfView",
      value: function setOutOfView(current, i) {
        var _this4 = this;

        // if (current.repeat || current.speed !== undefined) {
        this.els[i].inView = false; // }

        Object.keys(this.currentElements).forEach(function (el) {
          el === i && delete _this4.currentElements[el];
        });

        if (current.call && this.hasCallEventSet) {
          this.dispatchCall(current, 'exit');
        }

        if (current.repeat) {
          current.el.classList.remove(current["class"]);
        }
      }
    }, {
      key: "dispatchCall",
      value: function dispatchCall(current, way) {
        this.callWay = way;
        this.callValue = current.call.split(',').map(function (item) {
          return item.trim();
        });
        this.callObj = current;
        if (this.callValue.length == 1) this.callValue = this.callValue[0];
        var callEvent = new Event(this.namespace + 'call');
        this.el.dispatchEvent(callEvent);
      }
    }, {
      key: "dispatchScroll",
      value: function dispatchScroll() {
        var scrollEvent = new Event(this.namespace + 'scroll');
        this.el.dispatchEvent(scrollEvent);
      }
    }, {
      key: "setEvents",
      value: function setEvents(event, func) {
        if (!this.listeners[event]) {
          this.listeners[event] = [];
        }

        var list = this.listeners[event];
        list.push(func);

        if (list.length === 1) {
          this.el.addEventListener(this.namespace + event, this.checkEvent, false);
        }

        if (event === 'call') {
          this.hasCallEventSet = true;
          this.detectElements(true);
        }
      }
    }, {
      key: "unsetEvents",
      value: function unsetEvents(event, func) {
        if (!this.listeners[event]) return;
        var list = this.listeners[event];
        var index = list.indexOf(func);
        if (index < 0) return;
        list.splice(index, 1);

        if (list.index === 0) {
          this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
        }
      }
    }, {
      key: "checkEvent",
      value: function checkEvent(event) {
        var _this5 = this;

        var name = event.type.replace(this.namespace, '');
        var list = this.listeners[name];
        if (!list || list.length === 0) return;
        list.forEach(function (func) {
          switch (name) {
            case 'scroll':
              return func(_this5.instance);

            case 'call':
              return func(_this5.callValue, _this5.callWay, _this5.callObj);

            default:
              return func();
          }
        });
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        this.stop = false;
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        this.stop = true;
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.instance.scroll = {
          x: 0,
          y: 0
        };
      }
    }, {
      key: "destroy",
      value: function destroy() {
        var _this6 = this;

        window.removeEventListener('resize', this.checkResize, false);
        Object.keys(this.listeners).forEach(function (event) {
          _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
        });
        this.listeners = {};
        this.scrollToEls.forEach(function (el) {
          el.removeEventListener('click', _this6.setScrollTo, false);
        });
        this.html.classList.remove(this.initClass);
      }
    }]);

    return _default;
  }();

  function getTranslate(el) {
    var translate = {};
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);

    if (mat) {
      translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
      mat = transform.match(/^matrix\((.+)\)$/);
      translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
      translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }

    return translate;
  }

  function E () {
    // Keep this empty so it's easier to inherit from
    // (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
  }

  E.prototype = {
    on: function (name, callback, ctx) {
      var e = this.e || (this.e = {});

      (e[name] || (e[name] = [])).push({
        fn: callback,
        ctx: ctx
      });

      return this;
    },

    once: function (name, callback, ctx) {
      var self = this;
      function listener () {
        self.off(name, listener);
        callback.apply(ctx, arguments);
      }
      listener._ = callback;
      return this.on(name, listener, ctx);
    },

    emit: function (name) {
      var data = [].slice.call(arguments, 1);
      var evtArr = ((this.e || (this.e = {}))[name] || []).slice();
      var i = 0;
      var len = evtArr.length;

      for (i; i < len; i++) {
        evtArr[i].fn.apply(evtArr[i].ctx, data);
      }

      return this;
    },

    off: function (name, callback) {
      var e = this.e || (this.e = {});
      var evts = e[name];
      var liveEvents = [];

      if (evts && callback) {
        for (var i = 0, len = evts.length; i < len; i++) {
          if (evts[i].fn !== callback && evts[i].fn._ !== callback)
            liveEvents.push(evts[i]);
        }
      }

      // Remove event from queue to prevent memory leak
      // Suggested by https://github.com/lazd
      // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910

      (liveEvents.length)
        ? e[name] = liveEvents
        : delete e[name];

      return this;
    }
  };

  var tinyEmitter = E;
  var TinyEmitter = E;
  tinyEmitter.TinyEmitter = TinyEmitter;

  var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var virtualscroll = createCommonjsModule(function (module, exports) {
  !function(e,t){module.exports=t();}(commonjsGlobal,function(){var e=0;function t(t){return "__private_"+e+++"_"+t}function i(e,t){if(!Object.prototype.hasOwnProperty.call(e,t))throw new TypeError("attempted to use private field on non-instance");return e}function n(){}n.prototype={on:function(e,t,i){var n=this.e||(this.e={});return (n[e]||(n[e]=[])).push({fn:t,ctx:i}),this},once:function(e,t,i){var n=this;function o(){n.off(e,o),t.apply(i,arguments);}return o._=t,this.on(e,o,i)},emit:function(e){for(var t=[].slice.call(arguments,1),i=((this.e||(this.e={}))[e]||[]).slice(),n=0,o=i.length;n<o;n++)i[n].fn.apply(i[n].ctx,t);return this},off:function(e,t){var i=this.e||(this.e={}),n=i[e],o=[];if(n&&t)for(var s=0,h=n.length;s<h;s++)n[s].fn!==t&&n[s].fn._!==t&&o.push(n[s]);return o.length?i[e]=o:delete i[e],this}};var o=n;o.TinyEmitter=n;var s,h="virtualscroll",r=t("options"),a=t("el"),l=t("emitter"),u=t("event"),c=t("touchStart"),d=t("bodyTouchAction");return function(){function e(e){var t=this;Object.defineProperty(this,r,{writable:!0,value:void 0}),Object.defineProperty(this,a,{writable:!0,value:void 0}),Object.defineProperty(this,l,{writable:!0,value:void 0}),Object.defineProperty(this,u,{writable:!0,value:void 0}),Object.defineProperty(this,c,{writable:!0,value:void 0}),Object.defineProperty(this,d,{writable:!0,value:void 0}),this._onWheel=function(e){var n=i(t,r)[r],o=i(t,u)[u];o.deltaX=e.wheelDeltaX||-1*e.deltaX,o.deltaY=e.wheelDeltaY||-1*e.deltaY,s.isFirefox&&1===e.deltaMode&&(o.deltaX*=n.firefoxMultiplier,o.deltaY*=n.firefoxMultiplier),o.deltaX*=n.mouseMultiplier,o.deltaY*=n.mouseMultiplier,t._notify(e);},this._onMouseWheel=function(e){var n=i(t,u)[u];n.deltaX=e.wheelDeltaX?e.wheelDeltaX:0,n.deltaY=e.wheelDeltaY?e.wheelDeltaY:e.wheelDelta,t._notify(e);},this._onTouchStart=function(e){var n=e.targetTouches?e.targetTouches[0]:e;i(t,c)[c].x=n.pageX,i(t,c)[c].y=n.pageY;},this._onTouchMove=function(e){var n=i(t,r)[r];n.preventTouch&&!e.target.classList.contains(n.unpreventTouchClass)&&e.preventDefault();var o=i(t,u)[u],s=e.targetTouches?e.targetTouches[0]:e;o.deltaX=(s.pageX-i(t,c)[c].x)*n.touchMultiplier,o.deltaY=(s.pageY-i(t,c)[c].y)*n.touchMultiplier,i(t,c)[c].x=s.pageX,i(t,c)[c].y=s.pageY,t._notify(e);},this._onKeyDown=function(e){var n=i(t,u)[u];n.deltaX=n.deltaY=0;var o=window.innerHeight-40;switch(e.keyCode){case 37:case 38:n.deltaY=i(t,r)[r].keyStep;break;case 39:case 40:n.deltaY=-i(t,r)[r].keyStep;break;case 32:n.deltaY=o*(e.shiftKey?1:-1);break;default:return}t._notify(e);},i(this,a)[a]=window,e&&e.el&&(i(this,a)[a]=e.el,delete e.el),s||(s={hasWheelEvent:"onwheel"in document,hasMouseWheelEvent:"onmousewheel"in document,hasTouch:"ontouchstart"in document,hasTouchWin:navigator.msMaxTouchPoints&&navigator.msMaxTouchPoints>1,hasPointer:!!window.navigator.msPointerEnabled,hasKeyDown:"onkeydown"in document,isFirefox:navigator.userAgent.indexOf("Firefox")>-1}),i(this,r)[r]=Object.assign({mouseMultiplier:1,touchMultiplier:2,firefoxMultiplier:15,keyStep:120,preventTouch:!1,unpreventTouchClass:"vs-touchmove-allowed",useKeyboard:!0,useTouch:!0},e),i(this,l)[l]=new o,i(this,u)[u]={y:0,x:0,deltaX:0,deltaY:0},i(this,c)[c]={x:null,y:null},i(this,d)[d]=null,void 0!==i(this,r)[r].passive&&(this.listenerOptions={passive:i(this,r)[r].passive});}var t=e.prototype;return t._notify=function(e){var t=i(this,u)[u];t.x+=t.deltaX,t.y+=t.deltaY,i(this,l)[l].emit(h,{x:t.x,y:t.y,deltaX:t.deltaX,deltaY:t.deltaY,originalEvent:e});},t._bind=function(){s.hasWheelEvent&&i(this,a)[a].addEventListener("wheel",this._onWheel,this.listenerOptions),s.hasMouseWheelEvent&&i(this,a)[a].addEventListener("mousewheel",this._onMouseWheel,this.listenerOptions),s.hasTouch&&i(this,r)[r].useTouch&&(i(this,a)[a].addEventListener("touchstart",this._onTouchStart,this.listenerOptions),i(this,a)[a].addEventListener("touchmove",this._onTouchMove,this.listenerOptions)),s.hasPointer&&s.hasTouchWin&&(i(this,d)[d]=document.body.style.msTouchAction,document.body.style.msTouchAction="none",i(this,a)[a].addEventListener("MSPointerDown",this._onTouchStart,!0),i(this,a)[a].addEventListener("MSPointerMove",this._onTouchMove,!0)),s.hasKeyDown&&i(this,r)[r].useKeyboard&&document.addEventListener("keydown",this._onKeyDown);},t._unbind=function(){s.hasWheelEvent&&i(this,a)[a].removeEventListener("wheel",this._onWheel),s.hasMouseWheelEvent&&i(this,a)[a].removeEventListener("mousewheel",this._onMouseWheel),s.hasTouch&&(i(this,a)[a].removeEventListener("touchstart",this._onTouchStart),i(this,a)[a].removeEventListener("touchmove",this._onTouchMove)),s.hasPointer&&s.hasTouchWin&&(document.body.style.msTouchAction=i(this,d)[d],i(this,a)[a].removeEventListener("MSPointerDown",this._onTouchStart,!0),i(this,a)[a].removeEventListener("MSPointerMove",this._onTouchMove,!0)),s.hasKeyDown&&i(this,r)[r].useKeyboard&&document.removeEventListener("keydown",this._onKeyDown);},t.on=function(e,t){i(this,l)[l].on(h,e,t);var n=i(this,l)[l].e;n&&n[h]&&1===n[h].length&&this._bind();},t.off=function(e,t){i(this,l)[l].off(h,e,t);var n=i(this,l)[l].e;(!n[h]||n[h].length<=0)&&this._unbind();},t.destroy=function(){i(this,l)[l].off(),this._unbind();},e}()});
  });

  function i(t,e){for(var i=0;i<e.length;i++){var o=e[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,o.key,o);}}function o(t,e,o){return e&&i(t.prototype,e),o&&i(t,o),Object.defineProperty(t,"prototype",{writable:!1}),t}function r(){return r=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);}return t},r.apply(this,arguments)}function n(t,e){return n=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},n(t,e)}function s(t,e){var i=t%e;return (e>0&&i<0||e<0&&i>0)&&(i+=e),i}var l=["duration","easing"],a=/*#__PURE__*/function(){function t(){}var e=t.prototype;return e.to=function(t,e){var i=this,o=void 0===e?{}:e,n=o.duration,s=void 0===n?1:n,a=o.easing,c=void 0===a?function(t){return t}:a,h=function(t,e){if(null==t)return {};var i,o,r={},n=Object.keys(t);for(o=0;o<n.length;o++)e.indexOf(i=n[o])>=0||(r[i]=t[i]);return r}(o,l);this.target=t,this.fromKeys=r({},h),this.toKeys=r({},h),this.keys=Object.keys(r({},h)),this.keys.forEach(function(e){i.fromKeys[e]=t[e];}),this.duration=s,this.easing=c,this.currentTime=0,this.isRunning=!0;},e.stop=function(){this.isRunning=!1;},e.raf=function(t){var e=this;if(this.isRunning){this.currentTime=Math.min(this.currentTime+t,this.duration);var i=this.progress>=1?1:this.easing(this.progress);this.keys.forEach(function(t){var o=e.fromKeys[t];e.target[t]=o+(e.toKeys[t]-o)*i;}),1===i&&this.stop();}},o(t,[{key:"progress",get:function(){return this.currentTime/this.duration}}]),t}(),c=/*#__PURE__*/function(t){var i,r;function l(i){var o,r,n,s,l=void 0===i?{}:i,c=l.duration,h=void 0===c?1.2:c,p=l.easing,u=void 0===p?function(t){return Math.min(1,1.001-Math.pow(2,-10*t))}:p,d=l.smooth,f=void 0===d||d,v=l.mouseMultiplier,w=void 0===v?1:v,g=l.smoothTouch,m=void 0!==g&&g,y=l.touchMultiplier,b=void 0===y?2:y,S=l.direction,N=void 0===S?"vertical":S,O=l.gestureDirection,z=void 0===O?"vertical":O,R=l.infinite,W=void 0!==R&&R,M=l.wrapper,T=void 0===M?window:M,k=l.content,j=void 0===k?document.body:k;(s=t.call(this)||this).onWindowResize=function(){s.wrapperWidth=window.innerWidth,s.wrapperHeight=window.innerHeight;},s.onWrapperResize=function(t){var e=t[0];if(e){var i=e.contentRect;s.wrapperWidth=i.width,s.wrapperHeight=i.height;}},s.onContentResize=function(t){var e=t[0];if(e){var i=e.contentRect;s.contentWidth=i.width,s.contentHeight=i.height;}},s.onVirtualScroll=function(t){var e=t.deltaY,i=t.deltaX,o=t.originalEvent;if(!("vertical"===s.gestureDirection&&0===e||"horizontal"===s.gestureDirection&&0===i)){var r=!!o.composedPath().find(function(t){return t.hasAttribute&&t.hasAttribute("data-lenis-prevent")});o.ctrlKey||r||(s.smooth=o.changedTouches?s.smoothTouch:s.options.smooth,s.stopped?o.preventDefault():s.smooth&&4!==o.buttons&&(s.smooth&&o.preventDefault(),s.targetScroll-="both"===s.gestureDirection?i+e:"horizontal"===s.gestureDirection?i:e,s.scrollTo(s.targetScroll)));}},s.onScroll=function(t){s.isScrolling&&s.smooth||(s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.notify());},window.lenisVersion="0.2.28",s.options={duration:h,easing:u,smooth:f,mouseMultiplier:w,smoothTouch:m,touchMultiplier:b,direction:N,gestureDirection:z,infinite:W,wrapper:T,content:j},s.duration=h,s.easing=u,s.smooth=f,s.mouseMultiplier=w,s.smoothTouch=m,s.touchMultiplier=b,s.direction=N,s.gestureDirection=z,s.infinite=W,s.wrapperNode=T,s.contentNode=j,s.wrapperNode.addEventListener("scroll",s.onScroll),s.wrapperNode===window?(s.wrapperNode.addEventListener("resize",s.onWindowResize),s.onWindowResize()):(s.wrapperHeight=s.wrapperNode.offsetHeight,s.wrapperWidth=s.wrapperNode.offsetWidth,s.wrapperObserver=new ResizeObserver(s.onWrapperResize),s.wrapperObserver.observe(s.wrapperNode)),s.contentHeight=s.contentNode.offsetHeight,s.contentWidth=s.contentNode.offsetWidth,s.contentObserver=new ResizeObserver(s.onContentResize),s.contentObserver.observe(s.contentNode),s.targetScroll=s.scroll=s.lastScroll=s.wrapperNode[s.scrollProperty],s.animate=new a;var D=(null==(o=navigator)||null==(r=o.userAgentData)?void 0:r.platform)||(null==(n=navigator)?void 0:n.platform)||"unknown";return s.virtualScroll=new virtualscroll({el:s.wrapperNode,firefoxMultiplier:50,mouseMultiplier:s.mouseMultiplier*(D.includes("Win")||D.includes("Linux")?.84:.4),touchMultiplier:s.touchMultiplier,passive:!1,useKeyboard:!1,useTouch:!0}),s.virtualScroll.on(s.onVirtualScroll),s}r=t,(i=l).prototype=Object.create(r.prototype),i.prototype.constructor=i,n(i,r);var c=l.prototype;return c.start=function(){var t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.remove("lenis-stopped"),this.stopped=!1;},c.stop=function(){var t=this.wrapperNode;this.wrapperNode===window&&(t=document.documentElement),t.classList.add("lenis-stopped"),this.stopped=!0,this.animate.stop();},c.destroy=function(){var t;this.wrapperNode===window&&this.wrapperNode.removeEventListener("resize",this.onWindowResize),this.wrapperNode.removeEventListener("scroll",this.onScroll),this.virtualScroll.destroy(),null==(t=this.wrapperObserver)||t.disconnect(),this.contentObserver.disconnect();},c.raf=function(t){var e=t-(this.now||0);this.now=t,!this.stopped&&this.smooth&&(this.lastScroll=this.scroll,this.animate.raf(.001*e),this.scroll===this.targetScroll&&(this.lastScroll=this.scroll),this.isScrolling&&(this.setScroll(this.scroll),this.notify()),this.isScrolling=this.scroll!==this.targetScroll);},c.setScroll=function(t){var e=this.infinite?s(t,this.limit):t;"horizontal"===this.direction?this.wrapperNode.scrollTo(e,0):this.wrapperNode.scrollTo(0,e);},c.notify=function(){var t=this.infinite?s(this.scroll,this.limit):this.scroll;this.emit("scroll",{scroll:t,limit:this.limit,velocity:this.velocity,direction:0===this.velocity?0:this.velocity>0?1:-1,progress:t/this.limit});},c.scrollTo=function(t,e){var i=void 0===e?{}:e,o=i.offset,r=void 0===o?0:o,n=i.immediate,s=void 0!==n&&n,l=i.duration,a=void 0===l?this.duration:l,c=i.easing,h=void 0===c?this.easing:c;if(null!=t&&!this.stopped){var p;if("number"==typeof t)p=t;else if("top"===t||"#top"===t)p=0;else if("bottom"===t)p=this.limit;else {var u;if("string"==typeof t)u=document.querySelector(t);else {if(null==t||!t.nodeType)return;u=t;}if(!u)return;var d=0;if(this.wrapperNode!==window){var f=this.wrapperNode.getBoundingClientRect();d="horizontal"===this.direction?f.left:f.top;}var v=u.getBoundingClientRect();p=("horizontal"===this.direction?v.left:v.top)+this.scroll-d;}p+=r,this.targetScroll=this.infinite?p:Math.max(0,Math.min(p,this.limit)),!this.smooth||s?(this.animate.stop(),this.scroll=this.lastScroll=this.targetScroll,this.setScroll(this.targetScroll)):this.animate.to(this,{duration:a,easing:h,scroll:this.targetScroll});}},o(l,[{key:"scrollProperty",get:function(){return this.wrapperNode===window?"horizontal"===this.direction?"scrollX":"scrollY":"horizontal"===this.direction?"scrollLeft":"scrollTop"}},{key:"limit",get:function(){return "horizontal"===this.direction?this.contentWidth-this.wrapperWidth:this.contentHeight-this.wrapperHeight}},{key:"velocity",get:function(){return this.scroll-this.lastScroll}}]),l}(TinyEmitter);

  var _default$1 = /*#__PURE__*/function (_Core) {
    _inherits(_default, _Core);

    var _super = _createSuper(_default);

    function _default() {
      var _this;

      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, _default);

      _this = _super.call(this, options);

      if (_this.resetNativeScroll) {
        if (history.scrollRestoration) {
          history.scrollRestoration = 'manual';
        }

        window.scrollTo(0, 0);
      }

      return _this;
    }

    _createClass(_default, [{
      key: "init",
      value: function init() {
        if (this.smooth) {
          this.html.classList.add(this.smoothClass);
          this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
        }

        this.addElements();
        this.detectElements();
        this.transformElements(true, true);
        this.initContainerSize();
        this.lenis = new c({
          wrapper: this.wrapper,
          content: this.el,
          duration: this.duration,
          easing: this.easing,
          direction: this.direction,
          gestureDirection: this.gestureDirection,
          smooth: this.smooth,
          smoothTouch: this.smoothTouch,
          touchMultiplier: this.touchMultiplier
        });
        this.bindOnScroll = this.onScroll.bind(this);
        this.lenis.on('scroll', this.bindOnScroll); //get scroll value

        this.lenis.on('scroll', function (_ref) {// console.log({ scroll, limit, velocity, direction, progress });
          // console.log(this.lenis);

          var scroll = _ref.scroll,
              limit = _ref.limit,
              velocity = _ref.velocity,
              direction = _ref.direction,
              progress = _ref.progress;
        });
        this.raf(0);

        _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
      }
    }, {
      key: "raf",
      value: function raf(time) {
        var _this2 = this;

        this.lenis.raf(time);
        this.rafInstance = requestAnimationFrame(function () {
          return _this2.raf(Date.now());
        });
      }
    }, {
      key: "onScroll",
      value: function onScroll(_ref2) {
        var _this3 = this;

        var scroll = _ref2.scroll,
            velocity = _ref2.velocity;

        if (scroll > this.instance.scroll[this.directionAxis]) {
          if (this.instance.direction !== 'down') {
            this.instance.direction = 'down';
          }
        } else if (scroll < this.instance.scroll[this.directionAxis]) {
          if (this.instance.direction !== 'up') {
            this.instance.direction = 'up';
          }
        }

        this.instance.scroll[this.directionAxis] = scroll;
        this.instance.speed = velocity;

        if (Object.entries(this.els).length) {
          if (!this.hasScrollTicking) {
            requestAnimationFrame(function () {
              _this3.detectElements();
            });
            this.hasScrollTicking = true;
          }
        }

        _get(_getPrototypeOf(_default.prototype), "onScroll", this).call(this);

        this.transformElements();
      }
    }, {
      key: "resize",
      value: function resize() {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
          x: this.windowWidth / 2,
          y: this.windowHeight / 2
        };
        this.checkContext();
        this.initContainerSize();

        if (Object.entries(this.els).length) {
          this.update();
        }
      }
    }, {
      key: "initContainerSize",
      value: function initContainerSize() {
        if (this.direction === 'horizontal') {
          var elWidth = 0;

          for (var childIndex = 0; childIndex < this.el.children.length; childIndex++) {
            var child = this.el.children[childIndex];
            elWidth += child.getBoundingClientRect().width;
          }

          this.el.style.setProperty('--scrollContainerWidth', elWidth + 'px');
        }
      }
    }, {
      key: "addElements",
      value: function addElements() {
        var _this4 = this;

        this.els = {};
        this.parallaxElements = {};
        var els = this.el.querySelectorAll('[data-' + this.name + ']');
        els.forEach(function (el, index) {
          var BCR = el.getBoundingClientRect();
          var cl = el.dataset[_this4.name + 'Class'] || _this4["class"];
          var id = typeof el.dataset[_this4.name + 'Id'] === 'string' ? el.dataset[_this4.name + 'Id'] : index;
          var top;
          var left;
          var offset = typeof el.dataset[_this4.name + 'Offset'] === 'string' ? el.dataset[_this4.name + 'Offset'].split(',') : _this4.offset;
          var repeat = el.dataset[_this4.name + 'Repeat'];
          var call = el.dataset[_this4.name + 'Call'];
          var position = el.dataset[_this4.name + 'Position'];
          var delay = el.dataset[_this4.name + 'Delay'];
          var direction = el.dataset[_this4.name + 'Direction'];
          var sticky = typeof el.dataset[_this4.name + 'Sticky'] === 'string';

          if (sticky) {
            console.warn("You use data-scroll-sticky, it's not recommended for performances. Please adapt your code and play with position:sticky.");
          }

          var target = el.dataset[_this4.name + 'Target'];
          var targetEl;

          if (target !== undefined) {
            targetEl = document.querySelector("".concat(target));
          } else {
            targetEl = el;
          }

          var targetElBCR = targetEl.getBoundingClientRect();
          top = targetElBCR.top + _this4.instance.scroll.y - getTranslate(targetEl).y;
          left = targetElBCR.left + _this4.instance.scroll.x - getTranslate(targetEl).x;
          var bottom = top + targetEl.offsetHeight;
          var right = left + targetEl.offsetWidth;
          var middle = {
            x: (right - left) / 2 + left,
            y: (bottom - top) / 2 + top
          };

          if (sticky) {
            var elBCR = el.getBoundingClientRect();
            var elTop = elBCR.top;
            var elLeft = elBCR.left;
            var elDistance = {
              x: elLeft - left,
              y: elTop - top
            };
            top += window.innerHeight;
            left += window.innerWidth;
            bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this4.directionAxis];
            right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this4.directionAxis];
            middle = {
              x: (right - left) / 2 + left,
              y: (bottom - top) / 2 + top
            };
          }

          if (repeat == 'false') {
            repeat = false;
          } else if (repeat != undefined) {
            repeat = true;
          } else {
            repeat = _this4.repeat;
          }

          var speed = el.dataset[_this4.name + 'Speed'] ? parseFloat(el.dataset[_this4.name + 'Speed']) / 10 : false;

          if (speed) {
            offset = 0;
          }

          var relativeOffset = [0, 0];

          if (offset) {
            if (_this4.direction === 'horizontal') {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == 'string') {
                  if (offset[i].includes('%')) {
                    relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this4.windowWidth / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }

              left = left + relativeOffset[0];
              right = right - relativeOffset[1];
            } else {
              for (var i = 0; i < offset.length; i++) {
                if (typeof offset[i] == 'string') {
                  if (offset[i].includes('%')) {
                    relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this4.windowHeight / 100);
                  } else {
                    relativeOffset[i] = parseInt(offset[i]);
                  }
                } else {
                  relativeOffset[i] = offset[i];
                }
              }

              top = top + relativeOffset[0];
              bottom = bottom - relativeOffset[1];
            }
          }

          var mappedEl = {
            el: el,
            targetEl: targetEl,
            id: id,
            "class": cl,
            top: top,
            bottom: bottom,
            middle: middle,
            left: left,
            right: right,
            position: position,
            delay: delay,
            direction: direction,
            offset: offset,
            progress: 0,
            repeat: repeat,
            inView: false,
            call: call,
            speed: speed,
            sticky: sticky
          };
          _this4.els[id] = mappedEl;

          if (el.classList.contains(cl)) {
            _this4.setInView(_this4.els[id], id);
          }

          if (speed !== false || sticky) {
            _this4.parallaxElements[id] = mappedEl;
          }
        });
      }
    }, {
      key: "updateElements",
      value: function updateElements() {
        var _this5 = this;

        Object.entries(this.els).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              i = _ref4[0],
              el = _ref4[1];

          var top = el.targetEl.getBoundingClientRect().top + _this5.instance.scroll.y;

          var bottom = top + el.targetEl.offsetHeight;

          var relativeOffset = _this5.getRelativeOffset(el.offset);

          _this5.els[i].top = top + relativeOffset[0];
          _this5.els[i].bottom = bottom - relativeOffset[1];
        });
        this.hasScrollTicking = false;
      }
    }, {
      key: "transform",
      value: function transform(element, x, y, delay) {
        var transform;

        if (!delay) {
          transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
          element.style.webkitTransform = transform;
          element.style.msTransform = transform;
          element.style.transform = transform;
        } else {
          setTimeout(function () {
            transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
            element.style.webkitTransform = transform;
            element.style.msTransform = transform;
            element.style.transform = transform;
          }, delay);
        }
      }
    }, {
      key: "transformElements",
      value: function transformElements(isForced) {
        var _this6 = this;

        var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        if (!this.smooth) return;
        var scrollRight = this.instance.scroll.x + this.windowWidth;
        var scrollBottom = this.instance.scroll.y + this.windowHeight;
        var scrollMiddle = {
          x: this.instance.scroll.x + this.windowMiddle.x,
          y: this.instance.scroll.y + this.windowMiddle.y
        };
        Object.entries(this.parallaxElements).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              i = _ref6[0],
              current = _ref6[1];

          var transformDistance = false;

          if (isForced) {
            transformDistance = 0;
          }

          if (current.inView || current.delay || setAllElements) {
            switch (current.position) {
              case 'top':
                transformDistance = _this6.instance.scroll[_this6.directionAxis] * -current.speed;
                break;

              case 'elementTop':
                transformDistance = (scrollBottom - current.top) * -current.speed;
                break;

              case 'bottom':
                transformDistance = (_this6.instance.limit[_this6.directionAxis] - scrollBottom + _this6.windowHeight) * current.speed;
                break;

              case 'left':
                transformDistance = _this6.instance.scroll[_this6.directionAxis] * -current.speed;
                break;

              case 'elementLeft':
                transformDistance = (scrollRight - current.left) * -current.speed;
                break;

              case 'right':
                transformDistance = (_this6.instance.limit[_this6.directionAxis] - scrollRight + _this6.windowHeight) * current.speed;
                break;

              default:
                transformDistance = (scrollMiddle[_this6.directionAxis] - current.middle[_this6.directionAxis]) * -current.speed;
                break;
            }
          }

          if (current.sticky) {
            if (current.inView) {
              if (_this6.direction === 'horizontal') {
                transformDistance = _this6.instance.scroll.x - current.left + _this6.windowWidth;
              } else {
                transformDistance = _this6.instance.scroll.y - current.top + _this6.windowHeight;
              }
            } else {
              if (_this6.direction === 'horizontal') {
                if (_this6.instance.scroll.x < current.left - _this6.windowWidth && _this6.instance.scroll.x < current.left - _this6.windowWidth / 2) {
                  transformDistance = 0;
                } else if (_this6.instance.scroll.x > current.right && _this6.instance.scroll.x > current.right + 100) {
                  transformDistance = current.right - current.left + _this6.windowWidth;
                } else {
                  transformDistance = false;
                }
              } else {
                if (_this6.instance.scroll.y < current.top - _this6.windowHeight && _this6.instance.scroll.y < current.top - _this6.windowHeight / 2) {
                  transformDistance = 0;
                } else if (_this6.instance.scroll.y > current.bottom && _this6.instance.scroll.y > current.bottom + 100) {
                  transformDistance = current.bottom - current.top + _this6.windowHeight;
                } else {
                  transformDistance = false;
                }
              }
            }
          }

          if (transformDistance !== false) {
            if (current.direction === 'horizontal' || _this6.direction === 'horizontal' && current.direction !== 'vertical') {
              _this6.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
            } else {
              _this6.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
            }
          }
        });
      }
    }, {
      key: "getRelativeOffset",
      value: function getRelativeOffset(offset) {
        var relativeOffset = [0, 0];

        if (offset) {
          for (var i = 0; i < offset.length; i++) {
            if (typeof offset[i] == 'string') {
              if (offset[i].includes('%')) {
                relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
              } else {
                relativeOffset[i] = parseInt(offset[i]);
              }
            } else {
              relativeOffset[i] = offset[i];
            }
          }
        }

        return relativeOffset;
      }
      /**
       * Scroll to a desired target.
       *
       * @param  Available options :
       *          target - node, string, "top", "bottom", int - The DOM element we want to scroll to
       *          options {object} - Options object for additional settings.
       * @return {void}
       */

    }, {
      key: "scrollTo",
      value: function scrollTo(target) {
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        // Parse options
        var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target

        var duration = options.duration || 1;
        this.lenis.scrollTo(target, {
          offset: offset,
          immediate: options.immediate,
          duration: duration
        });
      }
    }, {
      key: "update",
      value: function update() {
        this.addElements();
        this.detectElements();
        this.transformElements(true);
      }
    }, {
      key: "startScroll",
      value: function startScroll() {
        if (this.lenis != undefined) {
          this.lenis.start();
        }
      }
    }, {
      key: "stopScroll",
      value: function stopScroll() {
        if (this.lenis != undefined) {
          this.lenis.stop();
        }
      }
    }, {
      key: "destroy",
      value: function destroy() {
        _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);

        cancelAnimationFrame(this.rafInstance);
      }
    }]);

    return _default;
  }(_default);

  var Main = /*#__PURE__*/function () {
    function Main() {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      _classCallCheck(this, Main);

      this.options = options; // Override default options with given ones

      Object.assign(this, defaults, options);
      this.smartphone = defaults.smartphone;
      if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
      this.tablet = defaults.tablet;
      if (options.tablet) Object.assign(this.tablet, options.tablet);
      if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
      if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
      if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
      this.init();
    }

    _createClass(Main, [{
      key: "init",
      value: function init() {
        this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
        this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;

        if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) {
          this.smooth = true;
        } else {
          this.smooth = false;
        }

        this.scroll = new _default$1(this.options);
        this.scroll.init();

        if (window.location.hash) {
          // Get the hash without the '#' and find the matching element
          var id = window.location.hash.slice(1, window.location.hash.length);
          var target = document.getElementById(id); // If found, scroll to the element

          if (target) this.scroll.scrollTo(target);
        }
      }
    }, {
      key: "update",
      value: function update() {
        this.scroll.update();
      }
    }, {
      key: "start",
      value: function start() {
        this.scroll.startScroll();
      }
    }, {
      key: "stop",
      value: function stop() {
        this.scroll.stopScroll();
      }
    }, {
      key: "scrollTo",
      value: function scrollTo(target, options) {
        this.scroll.scrollTo(target, options);
      }
    }, {
      key: "setScroll",
      value: function setScroll(x, y) {
        this.scroll.setScroll(x, y);
      }
    }, {
      key: "on",
      value: function on(event, func) {
        this.scroll.setEvents(event, func);
      }
    }, {
      key: "off",
      value: function off(event, func) {
        this.scroll.unsetEvents(event, func);
      }
    }, {
      key: "destroy",
      value: function destroy() {
        this.scroll.destroy();
      }
    }]);

    return Main;
  }();

  return Main;

})));
