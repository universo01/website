/*! For license information please see 7428.66161305.js.LICENSE.txt */
(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7428],{1410:function(e,t,n){var i,r,o;r=[t,n(7206)],i=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(t);function i(e){return e&&e.__esModule?e:{default:e}}e.default=n.default},void 0===(o="function"==typeof i?i.apply(t,r):i)||(e.exports=o)},7206:function(e,t,n){var i,r,o;r=[t,n(6540),n(5556)],i=function(e,t,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setHasSupportToCaptureOption=d;var i=o(t),r=o(n);function o(e){return e&&e.__esModule?e:{default:e}}var s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e};function a(e,t){var n={};for(var i in e)t.indexOf(i)>=0||Object.prototype.hasOwnProperty.call(e,i)&&(n[i]=e[i]);return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}var l=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}();function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function p(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var f=!1;function d(e){f=e}try{addEventListener("test",null,Object.defineProperty({},"capture",{get:function(){d(!0)}}))}catch(y){}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{capture:!0};return f?e:e.capture}function m(e){if("touches"in e){var t=e.touches[0];return{x:t.pageX,y:t.pageY}}return{x:e.screenX,y:e.screenY}}var v=function(e){function t(){var e;u(this,t);for(var n=arguments.length,i=Array(n),r=0;r<n;r++)i[r]=arguments[r];var o=c(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(i)));return o._handleSwipeStart=o._handleSwipeStart.bind(o),o._handleSwipeMove=o._handleSwipeMove.bind(o),o._handleSwipeEnd=o._handleSwipeEnd.bind(o),o._onMouseDown=o._onMouseDown.bind(o),o._onMouseMove=o._onMouseMove.bind(o),o._onMouseUp=o._onMouseUp.bind(o),o._setSwiperRef=o._setSwiperRef.bind(o),o}return p(t,e),l(t,[{key:"componentDidMount",value:function(){this.swiper&&this.swiper.addEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"componentWillUnmount",value:function(){this.swiper&&this.swiper.removeEventListener("touchmove",this._handleSwipeMove,h({capture:!0,passive:!1}))}},{key:"_onMouseDown",value:function(e){this.props.allowMouseEvents&&(this.mouseDown=!0,document.addEventListener("mouseup",this._onMouseUp),document.addEventListener("mousemove",this._onMouseMove),this._handleSwipeStart(e))}},{key:"_onMouseMove",value:function(e){this.mouseDown&&this._handleSwipeMove(e)}},{key:"_onMouseUp",value:function(e){this.mouseDown=!1,document.removeEventListener("mouseup",this._onMouseUp),document.removeEventListener("mousemove",this._onMouseMove),this._handleSwipeEnd(e)}},{key:"_handleSwipeStart",value:function(e){var t=m(e),n=t.x,i=t.y;this.moveStart={x:n,y:i},this.props.onSwipeStart(e)}},{key:"_handleSwipeMove",value:function(e){if(this.moveStart){var t=m(e),n=t.x,i=t.y,r=n-this.moveStart.x,o=i-this.moveStart.y;this.moving=!0,this.props.onSwipeMove({x:r,y:o},e)&&e.cancelable&&e.preventDefault(),this.movePosition={deltaX:r,deltaY:o}}}},{key:"_handleSwipeEnd",value:function(e){this.props.onSwipeEnd(e);var t=this.props.tolerance;this.moving&&this.movePosition&&(this.movePosition.deltaX<-t?this.props.onSwipeLeft(1,e):this.movePosition.deltaX>t&&this.props.onSwipeRight(1,e),this.movePosition.deltaY<-t?this.props.onSwipeUp(1,e):this.movePosition.deltaY>t&&this.props.onSwipeDown(1,e)),this.moveStart=null,this.moving=!1,this.movePosition=null}},{key:"_setSwiperRef",value:function(e){this.swiper=e,this.props.innerRef(e)}},{key:"render",value:function(){var e=this.props,t=(e.tagName,e.className),n=e.style,r=e.children,o=(e.allowMouseEvents,e.onSwipeUp,e.onSwipeDown,e.onSwipeLeft,e.onSwipeRight,e.onSwipeStart,e.onSwipeMove,e.onSwipeEnd,e.innerRef,e.tolerance,a(e,["tagName","className","style","children","allowMouseEvents","onSwipeUp","onSwipeDown","onSwipeLeft","onSwipeRight","onSwipeStart","onSwipeMove","onSwipeEnd","innerRef","tolerance"]));return i.default.createElement(this.props.tagName,s({ref:this._setSwiperRef,onMouseDown:this._onMouseDown,onTouchStart:this._handleSwipeStart,onTouchEnd:this._handleSwipeEnd,className:t,style:n},o),r)}}]),t}(t.Component);v.displayName="ReactSwipe",v.propTypes={tagName:r.default.string,className:r.default.string,style:r.default.object,children:r.default.node,allowMouseEvents:r.default.bool,onSwipeUp:r.default.func,onSwipeDown:r.default.func,onSwipeLeft:r.default.func,onSwipeRight:r.default.func,onSwipeStart:r.default.func,onSwipeMove:r.default.func,onSwipeEnd:r.default.func,innerRef:r.default.func,tolerance:r.default.number.isRequired},v.defaultProps={tagName:"div",allowMouseEvents:!1,onSwipeUp:function(){},onSwipeDown:function(){},onSwipeLeft:function(){},onSwipeRight:function(){},onSwipeStart:function(){},onSwipeMove:function(){},onSwipeEnd:function(){},innerRef:function(){},tolerance:0},e.default=v},void 0===(o="function"==typeof i?i.apply(t,r):i)||(e.exports=o)},7845:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(e,t,n){var i=0===e?e:e+t;return"translate3d"+("("+("horizontal"===n?[i,0,0]:[0,i,0]).join(",")+")")}},3613:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fadeAnimationHandler=t.slideStopSwipingHandler=t.slideSwipeAnimationHandler=t.slideAnimationHandler=void 0;var i,r=n(6540),o=(i=n(7845))&&i.__esModule?i:{default:i},s=n(929);function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.slideAnimationHandler=function(e,t){var n={},i=t.selectedItem,a=i,l=r.Children.count(e.children)-1;if(e.infiniteLoop&&(i<0||i>l))return a<0?e.centerMode&&e.centerSlidePercentage&&"horizontal"===e.axis?n.itemListStyle=(0,s.setPosition)(-(l+2)*e.centerSlidePercentage-(100-e.centerSlidePercentage)/2,e.axis):n.itemListStyle=(0,s.setPosition)(100*-(l+2),e.axis):a>l&&(n.itemListStyle=(0,s.setPosition)(0,e.axis)),n;var c=(0,s.getPosition)(i,e),p=(0,o.default)(c,"%",e.axis),f=e.transitionTime+"ms";return n.itemListStyle={WebkitTransform:p,msTransform:p,OTransform:p,transform:p},t.swiping||(n.itemListStyle=u(u({},n.itemListStyle),{},{WebkitTransitionDuration:f,MozTransitionDuration:f,OTransitionDuration:f,transitionDuration:f,msTransitionDuration:f})),n};t.slideSwipeAnimationHandler=function(e,t,n,i){var o={},a="horizontal"===t.axis,u=r.Children.count(t.children),l=(0,s.getPosition)(n.selectedItem,t),c=t.infiniteLoop?(0,s.getPosition)(u-1,t)-100:(0,s.getPosition)(u-1,t),p=a?e.x:e.y,f=p;0===l&&p>0&&(f=0),l===c&&p<0&&(f=0);var d=l+100/(n.itemSize/f),h=Math.abs(p)>t.swipeScrollTolerance;return t.infiniteLoop&&h&&(0===n.selectedItem&&d>-100?d-=100*u:n.selectedItem===u-1&&d<100*-u&&(d+=100*u)),(!t.preventMovementUntilSwipeScrollTolerance||h||n.swipeMovementStarted)&&(n.swipeMovementStarted||i({swipeMovementStarted:!0}),o.itemListStyle=(0,s.setPosition)(d,t.axis)),h&&!n.cancelClick&&i({cancelClick:!0}),o};t.slideStopSwipingHandler=function(e,t){var n=(0,s.getPosition)(t.selectedItem,e);return{itemListStyle:(0,s.setPosition)(n,e.axis)}};t.fadeAnimationHandler=function(e,t){var n=e.transitionTime+"ms",i="ease-in-out",r={position:"absolute",display:"block",zIndex:-2,minHeight:"100%",opacity:0,top:0,right:0,left:0,bottom:0,transitionTimingFunction:i,msTransitionTimingFunction:i,MozTransitionTimingFunction:i,WebkitTransitionTimingFunction:i,OTransitionTimingFunction:i};return t.swiping||(r=u(u({},r),{},{WebkitTransitionDuration:n,MozTransitionDuration:n,OTransitionDuration:n,transitionDuration:n,msTransitionDuration:n})),{slideStyle:r,selectedStyle:u(u({},r),{},{opacity:1,position:"relative"}),prevStyle:u({},r)}}},2504:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==d(e)&&"function"!=typeof e)return{default:e};var t=f();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(6540)),r=p(n(1410)),o=p(n(2775)),s=p(n(1292)),a=p(n(9960)),u=p(n(2069)),l=n(929),c=n(3613);function p(e){return e&&e.__esModule?e:{default:e}}function f(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return f=function(){return e},e}function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function h(){return h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},h.apply(this,arguments)}function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){O(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function b(e,t){return b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},b(e,t)}function w(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=g(e);if(t){var r=g(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===d(t)||"function"==typeof t))return t;return S(e)}(this,n)}}function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function g(e){return g=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},g(e)}function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var P=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(d,e);var t,n,p,f=w(d);function d(e){var t;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,d),O(S(t=f.call(this,e)),"thumbsRef",void 0),O(S(t),"carouselWrapperRef",void 0),O(S(t),"listRef",void 0),O(S(t),"itemsRef",void 0),O(S(t),"timer",void 0),O(S(t),"animationHandler",void 0),O(S(t),"setThumbsRef",(function(e){t.thumbsRef=e})),O(S(t),"setCarouselWrapperRef",(function(e){t.carouselWrapperRef=e})),O(S(t),"setListRef",(function(e){t.listRef=e})),O(S(t),"setItemsRef",(function(e,n){t.itemsRef||(t.itemsRef=[]),t.itemsRef[n]=e})),O(S(t),"autoPlay",(function(){i.Children.count(t.props.children)<=1||(t.clearAutoPlay(),t.props.autoPlay&&(t.timer=setTimeout((function(){t.increment()}),t.props.interval)))})),O(S(t),"clearAutoPlay",(function(){t.timer&&clearTimeout(t.timer)})),O(S(t),"resetAutoPlay",(function(){t.clearAutoPlay(),t.autoPlay()})),O(S(t),"stopOnHover",(function(){t.setState({isMouseEntered:!0},t.clearAutoPlay)})),O(S(t),"startOnLeave",(function(){t.setState({isMouseEntered:!1},t.autoPlay)})),O(S(t),"isFocusWithinTheCarousel",(function(){return!!t.carouselWrapperRef&&!((0,a.default)().activeElement!==t.carouselWrapperRef&&!t.carouselWrapperRef.contains((0,a.default)().activeElement))})),O(S(t),"navigateWithKeyboard",(function(e){if(t.isFocusWithinTheCarousel()){var n="horizontal"===t.props.axis,i=n?37:38;(n?39:40)===e.keyCode?t.increment():i===e.keyCode&&t.decrement()}})),O(S(t),"updateSizes",(function(){if(t.state.initialized&&t.itemsRef&&0!==t.itemsRef.length){var e="horizontal"===t.props.axis,n=t.itemsRef[0];if(n){var i=e?n.clientWidth:n.clientHeight;t.setState({itemSize:i}),t.thumbsRef&&t.thumbsRef.updateSizes()}}})),O(S(t),"setMountState",(function(){t.setState({hasMount:!0}),t.updateSizes()})),O(S(t),"handleClickItem",(function(e,n){0!==i.Children.count(t.props.children)&&(t.state.cancelClick?t.setState({cancelClick:!1}):(t.props.onClickItem(e,n),e!==t.state.selectedItem&&t.setState({selectedItem:e})))})),O(S(t),"handleOnChange",(function(e,n){i.Children.count(t.props.children)<=1||t.props.onChange(e,n)})),O(S(t),"handleClickThumb",(function(e,n){t.props.onClickThumb(e,n),t.moveTo(e)})),O(S(t),"onSwipeStart",(function(e){t.setState({swiping:!0}),t.props.onSwipeStart(e)})),O(S(t),"onSwipeEnd",(function(e){t.setState({swiping:!1,cancelClick:!1,swipeMovementStarted:!1}),t.props.onSwipeEnd(e),t.clearAutoPlay(),t.state.autoPlay&&t.autoPlay()})),O(S(t),"onSwipeMove",(function(e,n){t.props.onSwipeMove(n);var i=t.props.swipeAnimationHandler(e,t.props,t.state,t.setState.bind(S(t)));return t.setState(v({},i)),!!Object.keys(i).length})),O(S(t),"decrement",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.moveTo(t.state.selectedItem-("number"==typeof e?e:1))})),O(S(t),"increment",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;t.moveTo(t.state.selectedItem+("number"==typeof e?e:1))})),O(S(t),"moveTo",(function(e){if("number"==typeof e){var n=i.Children.count(t.props.children)-1;e<0&&(e=t.props.infiniteLoop?n:0),e>n&&(e=t.props.infiniteLoop?0:n),t.selectItem({selectedItem:e}),t.state.autoPlay&&!1===t.state.isMouseEntered&&t.resetAutoPlay()}})),O(S(t),"onClickNext",(function(){t.increment(1)})),O(S(t),"onClickPrev",(function(){t.decrement(1)})),O(S(t),"onSwipeForward",(function(){t.increment(1),t.props.emulateTouch&&t.setState({cancelClick:!0})})),O(S(t),"onSwipeBackwards",(function(){t.decrement(1),t.props.emulateTouch&&t.setState({cancelClick:!0})})),O(S(t),"changeItem",(function(e){return function(n){(0,l.isKeyboardEvent)(n)&&"Enter"!==n.key||t.moveTo(e)}})),O(S(t),"selectItem",(function(e){t.setState(v({previousItem:t.state.selectedItem},e),(function(){t.setState(t.animationHandler(t.props,t.state))})),t.handleOnChange(e.selectedItem,i.Children.toArray(t.props.children)[e.selectedItem])})),O(S(t),"getInitialImage",(function(){var e=t.props.selectedItem,n=t.itemsRef&&t.itemsRef[e];return(n&&n.getElementsByTagName("img")||[])[0]})),O(S(t),"getVariableItemHeight",(function(e){var n=t.itemsRef&&t.itemsRef[e];if(t.state.hasMount&&n&&n.children.length){var i=n.children[0].getElementsByTagName("img")||[];if(i.length>0){var r=i[0];if(!r.complete){r.addEventListener("load",(function e(){t.forceUpdate(),r.removeEventListener("load",e)}))}}var o=(i[0]||n.children[0]).clientHeight;return o>0?o:null}return null}));var n={initialized:!1,previousItem:e.selectedItem,selectedItem:e.selectedItem,hasMount:!1,isMouseEntered:!1,autoPlay:e.autoPlay,swiping:!1,swipeMovementStarted:!1,cancelClick:!1,itemSize:1,itemListStyle:{},slideStyle:{},selectedStyle:{},prevStyle:{}};return t.animationHandler="function"==typeof e.animationHandler&&e.animationHandler||"fade"===e.animationHandler&&c.fadeAnimationHandler||c.slideAnimationHandler,t.state=v(v({},n),t.animationHandler(e,n)),t}return t=d,(n=[{key:"componentDidMount",value:function(){this.props.children&&this.setupCarousel()}},{key:"componentDidUpdate",value:function(e,t){e.children||!this.props.children||this.state.initialized||this.setupCarousel(),!e.autoFocus&&this.props.autoFocus&&this.forceFocus(),t.swiping&&!this.state.swiping&&this.setState(v({},this.props.stopSwipingHandler(this.props,this.state))),e.selectedItem===this.props.selectedItem&&e.centerMode===this.props.centerMode||(this.updateSizes(),this.moveTo(this.props.selectedItem)),e.autoPlay!==this.props.autoPlay&&(this.props.autoPlay?this.setupAutoPlay():this.destroyAutoPlay(),this.setState({autoPlay:this.props.autoPlay}))}},{key:"componentWillUnmount",value:function(){this.destroyCarousel()}},{key:"setupCarousel",value:function(){var e=this;this.bindEvents(),this.state.autoPlay&&i.Children.count(this.props.children)>1&&this.setupAutoPlay(),this.props.autoFocus&&this.forceFocus(),this.setState({initialized:!0},(function(){var t=e.getInitialImage();t&&!t.complete?t.addEventListener("load",e.setMountState):e.setMountState()}))}},{key:"destroyCarousel",value:function(){this.state.initialized&&(this.unbindEvents(),this.destroyAutoPlay())}},{key:"setupAutoPlay",value:function(){this.autoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.addEventListener("mouseenter",this.stopOnHover),e.addEventListener("mouseleave",this.startOnLeave))}},{key:"destroyAutoPlay",value:function(){this.clearAutoPlay();var e=this.carouselWrapperRef;this.props.stopOnHover&&e&&(e.removeEventListener("mouseenter",this.stopOnHover),e.removeEventListener("mouseleave",this.startOnLeave))}},{key:"bindEvents",value:function(){(0,u.default)().addEventListener("resize",this.updateSizes),(0,u.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.props.useKeyboardArrows&&(0,a.default)().addEventListener("keydown",this.navigateWithKeyboard)}},{key:"unbindEvents",value:function(){(0,u.default)().removeEventListener("resize",this.updateSizes),(0,u.default)().removeEventListener("DOMContentLoaded",this.updateSizes);var e=this.getInitialImage();e&&e.removeEventListener("load",this.setMountState),this.props.useKeyboardArrows&&(0,a.default)().removeEventListener("keydown",this.navigateWithKeyboard)}},{key:"forceFocus",value:function(){var e;null===(e=this.carouselWrapperRef)||void 0===e||e.focus()}},{key:"renderItems",value:function(e){var t=this;return this.props.children?i.Children.map(this.props.children,(function(n,r){var s=r===t.state.selectedItem,a=r===t.state.previousItem,u=s&&t.state.selectedStyle||a&&t.state.prevStyle||t.state.slideStyle||{};t.props.centerMode&&"horizontal"===t.props.axis&&(u=v(v({},u),{},{minWidth:t.props.centerSlidePercentage+"%"})),t.state.swiping&&t.state.swipeMovementStarted&&(u=v(v({},u),{},{pointerEvents:"none"}));var l={ref:function(e){return t.setItemsRef(e,r)},key:"itemKey"+r+(e?"clone":""),className:o.default.ITEM(!0,r===t.state.selectedItem,r===t.state.previousItem),onClick:t.handleClickItem.bind(t,r,n),style:u};return i.default.createElement("li",l,t.props.renderItem(n,{isSelected:r===t.state.selectedItem,isPrevious:r===t.state.previousItem}))})):[]}},{key:"renderControls",value:function(){var e=this,t=this.props,n=t.showIndicators,r=t.labels,o=t.renderIndicator,s=t.children;return n?i.default.createElement("ul",{className:"control-dots"},i.Children.map(s,(function(t,n){return o&&o(e.changeItem(n),n===e.state.selectedItem,n,r.item)}))):null}},{key:"renderStatus",value:function(){return this.props.showStatus?i.default.createElement("p",{className:"carousel-status"},this.props.statusFormatter(this.state.selectedItem+1,i.Children.count(this.props.children))):null}},{key:"renderThumbs",value:function(){return this.props.showThumbs&&this.props.children&&0!==i.Children.count(this.props.children)?i.default.createElement(s.default,{ref:this.setThumbsRef,onSelectItem:this.handleClickThumb,selectedItem:this.state.selectedItem,transitionTime:this.props.transitionTime,thumbWidth:this.props.thumbWidth,labels:this.props.labels,emulateTouch:this.props.emulateTouch},this.props.renderThumbs(this.props.children)):null}},{key:"render",value:function(){var e=this;if(!this.props.children||0===i.Children.count(this.props.children))return null;var t=this.props.swipeable&&i.Children.count(this.props.children)>1,n="horizontal"===this.props.axis,s=this.props.showArrows&&i.Children.count(this.props.children)>1,a=s&&(this.state.selectedItem>0||this.props.infiniteLoop)||!1,u=s&&(this.state.selectedItem<i.Children.count(this.props.children)-1||this.props.infiniteLoop)||!1,l=this.renderItems(!0),c=l.shift(),p=l.pop(),f={className:o.default.SLIDER(!0,this.state.swiping),onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:this.state.itemListStyle,tolerance:this.props.swipeScrollTolerance},d={};if(n){if(f.onSwipeLeft=this.onSwipeForward,f.onSwipeRight=this.onSwipeBackwards,this.props.dynamicHeight){var m=this.getVariableItemHeight(this.state.selectedItem);d.height=m||"auto"}}else f.onSwipeUp="natural"===this.props.verticalSwipe?this.onSwipeBackwards:this.onSwipeForward,f.onSwipeDown="natural"===this.props.verticalSwipe?this.onSwipeForward:this.onSwipeBackwards,f.style=v(v({},f.style),{},{height:this.state.itemSize}),d.height=this.state.itemSize;return i.default.createElement("div",{"aria-label":this.props.ariaLabel,className:o.default.ROOT(this.props.className),ref:this.setCarouselWrapperRef,tabIndex:this.props.useKeyboardArrows?0:void 0},i.default.createElement("div",{className:o.default.CAROUSEL(!0),style:{width:this.props.width}},this.renderControls(),this.props.renderArrowPrev(this.onClickPrev,a,this.props.labels.leftArrow),i.default.createElement("div",{className:o.default.WRAPPER(!0,this.props.axis),style:d},t?i.default.createElement(r.default,h({tagName:"ul",innerRef:this.setListRef},f,{allowMouseEvents:this.props.emulateTouch}),this.props.infiniteLoop&&p,this.renderItems(),this.props.infiniteLoop&&c):i.default.createElement("ul",{className:o.default.SLIDER(!0,this.state.swiping),ref:function(t){return e.setListRef(t)},style:this.state.itemListStyle||{}},this.props.infiniteLoop&&p,this.renderItems(),this.props.infiniteLoop&&c)),this.props.renderArrowNext(this.onClickNext,u,this.props.labels.rightArrow),this.renderStatus()),this.renderThumbs())}}])&&y(t.prototype,n),p&&y(t,p),d}(i.default.Component);t.default=P,O(P,"displayName","Carousel"),O(P,"defaultProps",{ariaLabel:void 0,axis:"horizontal",centerSlidePercentage:80,interval:3e3,labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},onClickItem:l.noop,onClickThumb:l.noop,onChange:l.noop,onSwipeStart:function(){},onSwipeEnd:function(){},onSwipeMove:function(){return!1},preventMovementUntilSwipeScrollTolerance:!1,renderArrowPrev:function(e,t,n){return i.default.createElement("button",{type:"button","aria-label":n,className:o.default.ARROW_PREV(!t),onClick:e})},renderArrowNext:function(e,t,n){return i.default.createElement("button",{type:"button","aria-label":n,className:o.default.ARROW_NEXT(!t),onClick:e})},renderIndicator:function(e,t,n,r){return i.default.createElement("li",{className:o.default.DOT(t),onClick:e,onKeyDown:e,value:n,key:n,role:"button",tabIndex:0,"aria-label":"".concat(r," ").concat(n+1)})},renderItem:function(e){return e},renderThumbs:function(e){var t=i.Children.map(e,(function(e){var t=e;if("img"!==e.type&&(t=i.Children.toArray(e.props.children).find((function(e){return"img"===e.type}))),t)return t}));return 0===t.filter((function(e){return e})).length?(console.warn("No images found! Can't build the thumb list without images. If you don't need thumbs, set showThumbs={false} in the Carousel. Note that it's not possible to get images rendered inside custom components. More info at https://github.com/leandrowd/react-responsive-carousel/blob/master/TROUBLESHOOTING.md"),[]):t},statusFormatter:l.defaultStatusFormatter,selectedItem:0,showArrows:!0,showIndicators:!0,showStatus:!0,showThumbs:!0,stopOnHover:!0,swipeScrollTolerance:5,swipeable:!0,transitionTime:350,verticalSwipe:"standard",width:"100%",animationHandler:"slide",swipeAnimationHandler:c.slideSwipeAnimationHandler,stopSwipingHandler:c.slideStopSwipingHandler})},1613:()=>{},929:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.setPosition=t.getPosition=t.isKeyboardEvent=t.defaultStatusFormatter=t.noop=void 0;var i,r=n(6540),o=(i=n(7845))&&i.__esModule?i:{default:i};t.noop=function(){};t.defaultStatusFormatter=function(e,t){return"".concat(e," of ").concat(t)};t.isKeyboardEvent=function(e){return!!e&&e.hasOwnProperty("key")};t.getPosition=function(e,t){if(t.infiniteLoop&&++e,0===e)return 0;var n=r.Children.count(t.children);if(t.centerMode&&"horizontal"===t.axis){var i=-e*t.centerSlidePercentage,o=n-1;return e&&(e!==o||t.infiniteLoop)?i+=(100-t.centerSlidePercentage)/2:e===o&&(i+=100-t.centerSlidePercentage),i}return 100*-e};t.setPosition=function(e,t){var n={};return["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(i){n[i]=(0,o.default)(e,"%",t)})),n}},1292:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==p(e)&&"function"!=typeof e)return{default:e};var t=c();if(t&&t.has(e))return t.get(e);var n={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=i?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n(6540)),r=l(n(2775)),o=n(3619),s=l(n(7845)),a=l(n(1410)),u=l(n(2069));function l(e){return e&&e.__esModule?e:{default:e}}function c(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return c=function(){return e},e}function p(e){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},p(e)}function f(){return f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},f.apply(this,arguments)}function d(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=y(e);if(t){var r=y(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return function(e,t){if(t&&("object"===p(t)||"function"==typeof t))return t;return v(e)}(this,n)}}function v(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},y(e)}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var w=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(p,e);var t,n,l,c=m(p);function p(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,p),b(v(t=c.call(this,e)),"itemsWrapperRef",void 0),b(v(t),"itemsListRef",void 0),b(v(t),"thumbsRef",void 0),b(v(t),"setItemsWrapperRef",(function(e){t.itemsWrapperRef=e})),b(v(t),"setItemsListRef",(function(e){t.itemsListRef=e})),b(v(t),"setThumbsRef",(function(e,n){t.thumbsRef||(t.thumbsRef=[]),t.thumbsRef[n]=e})),b(v(t),"updateSizes",(function(){if(t.props.children&&t.itemsWrapperRef&&t.thumbsRef){var e=i.Children.count(t.props.children),n=t.itemsWrapperRef.clientWidth,r=t.props.thumbWidth?t.props.thumbWidth:(0,o.outerWidth)(t.thumbsRef[0]),s=Math.floor(n/r),a=s<e,u=a?e-s:0;t.setState((function(e,n){return{itemSize:r,visibleItems:s,firstItem:a?t.getFirstItem(n.selectedItem):0,lastPosition:u,showArrows:a}}))}})),b(v(t),"handleClickItem",(function(e,n,i){if(!function(e){return e.hasOwnProperty("key")}(i)||"Enter"===i.key){var r=t.props.onSelectItem;"function"==typeof r&&r(e,n)}})),b(v(t),"onSwipeStart",(function(){t.setState({swiping:!0})})),b(v(t),"onSwipeEnd",(function(){t.setState({swiping:!1})})),b(v(t),"onSwipeMove",(function(e){var n=e.x;if(!t.state.itemSize||!t.itemsWrapperRef||!t.state.visibleItems)return!1;var r=i.Children.count(t.props.children),o=-100*t.state.firstItem/t.state.visibleItems;0===o&&n>0&&(n=0),o===100*-Math.max(r-t.state.visibleItems,0)/t.state.visibleItems&&n<0&&(n=0);var a=o+100/(t.itemsWrapperRef.clientWidth/n);return t.itemsListRef&&["WebkitTransform","MozTransform","MsTransform","OTransform","transform","msTransform"].forEach((function(e){t.itemsListRef.style[e]=(0,s.default)(a,"%",t.props.axis)})),!0})),b(v(t),"slideRight",(function(e){t.moveTo(t.state.firstItem-("number"==typeof e?e:1))})),b(v(t),"slideLeft",(function(e){t.moveTo(t.state.firstItem+("number"==typeof e?e:1))})),b(v(t),"moveTo",(function(e){e=(e=e<0?0:e)>=t.state.lastPosition?t.state.lastPosition:e,t.setState({firstItem:e})})),t.state={selectedItem:e.selectedItem,swiping:!1,showArrows:!1,firstItem:0,visibleItems:0,lastPosition:0},t}return t=p,(n=[{key:"componentDidMount",value:function(){this.setupThumbs()}},{key:"componentDidUpdate",value:function(e){this.props.selectedItem!==this.state.selectedItem&&this.setState({selectedItem:this.props.selectedItem,firstItem:this.getFirstItem(this.props.selectedItem)}),this.props.children!==e.children&&this.updateSizes()}},{key:"componentWillUnmount",value:function(){this.destroyThumbs()}},{key:"setupThumbs",value:function(){(0,u.default)().addEventListener("resize",this.updateSizes),(0,u.default)().addEventListener("DOMContentLoaded",this.updateSizes),this.updateSizes()}},{key:"destroyThumbs",value:function(){(0,u.default)().removeEventListener("resize",this.updateSizes),(0,u.default)().removeEventListener("DOMContentLoaded",this.updateSizes)}},{key:"getFirstItem",value:function(e){var t=e;return e>=this.state.lastPosition&&(t=this.state.lastPosition),e<this.state.firstItem+this.state.visibleItems&&(t=this.state.firstItem),e<this.state.firstItem&&(t=e),t}},{key:"renderItems",value:function(){var e=this;return this.props.children.map((function(t,n){var o=r.default.ITEM(!1,n===e.state.selectedItem),s={key:n,ref:function(t){return e.setThumbsRef(t,n)},className:o,onClick:e.handleClickItem.bind(e,n,e.props.children[n]),onKeyDown:e.handleClickItem.bind(e,n,e.props.children[n]),"aria-label":"".concat(e.props.labels.item," ").concat(n+1),style:{width:e.props.thumbWidth}};return i.default.createElement("li",f({},s,{role:"button",tabIndex:0}),t)}))}},{key:"render",value:function(){var e=this;if(!this.props.children)return null;var t,n=i.Children.count(this.props.children)>1,o=this.state.showArrows&&this.state.firstItem>0,u=this.state.showArrows&&this.state.firstItem<this.state.lastPosition,l=-this.state.firstItem*(this.state.itemSize||0),c=(0,s.default)(l,"px",this.props.axis),p=this.props.transitionTime+"ms";return t={WebkitTransform:c,MozTransform:c,MsTransform:c,OTransform:c,transform:c,msTransform:c,WebkitTransitionDuration:p,MozTransitionDuration:p,MsTransitionDuration:p,OTransitionDuration:p,transitionDuration:p,msTransitionDuration:p},i.default.createElement("div",{className:r.default.CAROUSEL(!1)},i.default.createElement("div",{className:r.default.WRAPPER(!1),ref:this.setItemsWrapperRef},i.default.createElement("button",{type:"button",className:r.default.ARROW_PREV(!o),onClick:function(){return e.slideRight()},"aria-label":this.props.labels.leftArrow}),n?i.default.createElement(a.default,{tagName:"ul",className:r.default.SLIDER(!1,this.state.swiping),onSwipeLeft:this.slideLeft,onSwipeRight:this.slideRight,onSwipeMove:this.onSwipeMove,onSwipeStart:this.onSwipeStart,onSwipeEnd:this.onSwipeEnd,style:t,innerRef:this.setItemsListRef,allowMouseEvents:this.props.emulateTouch},this.renderItems()):i.default.createElement("ul",{className:r.default.SLIDER(!1,this.state.swiping),ref:function(t){return e.setItemsListRef(t)},style:t},this.renderItems()),i.default.createElement("button",{type:"button",className:r.default.ARROW_NEXT(!u),onClick:function(){return e.slideLeft()},"aria-label":this.props.labels.rightArrow})))}}])&&d(t.prototype,n),l&&d(t,l),p}(i.Component);t.default=w,b(w,"displayName","Thumbs"),b(w,"defaultProps",{axis:"horizontal",labels:{leftArrow:"previous slide / item",rightArrow:"next slide / item",item:"slide item"},selectedItem:0,thumbWidth:80,transitionTime:350})},2775:(e,t,n)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,r=(i=n(6942))&&i.__esModule?i:{default:i};var o={ROOT:function(e){return(0,r.default)(function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({"carousel-root":!0},e||"",!!e))},CAROUSEL:function(e){return(0,r.default)({carousel:!0,"carousel-slider":e})},WRAPPER:function(e,t){return(0,r.default)({"thumbs-wrapper":!e,"slider-wrapper":e,"axis-horizontal":"horizontal"===t,"axis-vertical":"horizontal"!==t})},SLIDER:function(e,t){return(0,r.default)({thumbs:!e,slider:e,animated:!t})},ITEM:function(e,t,n){return(0,r.default)({thumb:!e,slide:e,selected:t,previous:n})},ARROW_PREV:function(e){return(0,r.default)({"control-arrow control-prev":!0,"control-disabled":e})},ARROW_NEXT:function(e){return(0,r.default)({"control-arrow control-next":!0,"control-disabled":e})},DOT:function(e){return(0,r.default)({dot:!0,selected:e})}};t.default=o},3619:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.outerWidth=void 0;t.outerWidth=function(e){var t=e.offsetWidth,n=getComputedStyle(e);return t+=parseInt(n.marginLeft)+parseInt(n.marginRight)}},7428:(e,t,n)=>{"use strict";Object.defineProperty(t,"FN",{enumerable:!0,get:function(){return i.default}});var i=s(n(2504)),r=n(1613),o=s(n(1292));function s(e){return e&&e.__esModule?e:{default:e}}},9960:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return document}},2069:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;t.default=function(){return window}},6942:(e,t)=>{var n;!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=s(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)i.call(e,n)&&e[n]&&(t=s(t,n));return t}function s(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(n=function(){return r}.apply(t,[]))||(e.exports=n)}()}}]);