var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// external-global-plugin:react
var require_react = __commonJS({
  "external-global-plugin:react"(exports, module) {
    module.exports = window.React;
  }
});

// external-global-plugin:react-dom
var require_react_dom = __commonJS({
  "external-global-plugin:react-dom"(exports, module) {
    module.exports = window.ReactDOM;
  }
});

// external-global-plugin:@progress/kendo-react-all
var require_kendo_react_all = __commonJS({
  "external-global-plugin:@progress/kendo-react-all"(exports, module) {
    module.exports = window.KendoReactAll;
  }
});

// node_modules/dotvvm-jscomponent-react/dist/dotvvm-react.js
var React = __toESM(require_react());
var ReactDOM = __toESM(require_react_dom());
function getKnockoutContext(element) {
  while (element) {
    const cx = ko.contextFor(element);
    if (cx)
      return cx;
    element = element.parentElement;
  }
  throw new Error("Could not find knockout context");
}
var KnockoutTemplateReactComponent = class extends React.Component {
  constructor() {
    super(...arguments);
    this.wrapRef = React.createRef();
    this.templateName = ko.observable();
  }
  // TODO: how to dispose the template?
  // componentWillUnmount() {
  // }
  componentDidMount() {
    this.initializeTemplate();
  }
  initializeTemplate() {
    const e = this.wrapRef.current;
    let context = getKnockoutContext(e);
    if (this.props.getChildContext) {
      context = this.props.getChildContext(context);
    } else if (this.props.viewModel !== void 0) {
      const updateEvent = new dotvvm.DotvvmEvent("templateInReact.newState");
      this.viewModelStateManager = new dotvvm.StateManager(this.props.viewModel, updateEvent);
      context = context.createChildContext(this.viewModelStateManager.stateObservable);
    }
    this.updateStuff();
    ko.renderTemplate(this.templateName, context, {}, e);
  }
  componentDidUpdate() {
    this.updateStuff();
  }
  updateStuff() {
    if (this.templateName() !== this.props.templateName)
      this.templateName(this.props.templateName);
    if (this.viewModelStateManager) {
      this.viewModelStateManager.setState(this.props.viewModel);
    }
  }
  render() {
    return React.createElement(this.props.wrapperTag, Object.assign({ ref: this.wrapRef }, this.props.wrapperAttributes));
  }
};
KnockoutTemplateReactComponent.defaultProps = {
  wrapperTag: "div"
};
var registerReactControl = (ReactControl, defaultProps = {}) => ({
  create: (elm, props, commands, templates, setPropsRaw) => {
    const initialProps = Object.assign(Object.assign(Object.assign({ setProps }, defaultProps), commands), templates);
    let currentProps = Object.assign(Object.assign({}, initialProps), props);
    rerender();
    return {
      updateProps(updatedProps) {
        currentProps = Object.assign(Object.assign({}, currentProps), updatedProps);
        rerender();
      },
      dispose() {
        ReactDOM.unmountComponentAtNode(elm);
      }
    };
    function rerender() {
      ReactDOM.render(React.createElement(ReactControl, Object.assign({}, currentProps)), elm);
    }
    function setProps(updatedProps) {
      currentProps = Object.assign(Object.assign({}, currentProps), updatedProps);
      setPropsRaw(updatedProps);
      rerender();
    }
  }
});

// wwwroot/Scheduler.tsx
var React2 = __toESM(require_react(), 1);
var import_kendo_react_all = __toESM(require_kendo_react_all(), 1);
var testDate = /* @__PURE__ */ new Date("2023-08-27T08:00:00.000Z");
var data = [
  {
    id: 0,
    title: "Breakfast with Tom",
    start: /* @__PURE__ */ new Date("2023-08-27T08:30:00.000Z"),
    end: /* @__PURE__ */ new Date("2023-08-27T09:00:00.000Z")
  }
];
function scheduler(props) {
  const data2 = props.sampleData.map((item) => ({ ...item, start: dotvvm.serialization.parseDate(item.start), end: dotvvm.serialization.parseDate(item.end) }));
  return /* @__PURE__ */ React2.createElement(import_kendo_react_all.Scheduler, { data: data2, defaultDate: dotvvm.serialization.parseDate(props.displayDate), timezone: "Etc/UTC" }, /* @__PURE__ */ React2.createElement(import_kendo_react_all.DayView, null), /* @__PURE__ */ React2.createElement(import_kendo_react_all.WeekView, null), /* @__PURE__ */ React2.createElement(import_kendo_react_all.AgendaView, null), /* @__PURE__ */ React2.createElement(import_kendo_react_all.TimelineView, null), /* @__PURE__ */ React2.createElement(import_kendo_react_all.MonthView, null));
}
;
var Scheduler_default = (context) => ({
  $controls: {
    schedulerComponent: registerReactControl(scheduler, {
      context,
      sampleData: data,
      displayDate: testDate,
      onClick() {
      }
    })
  }
});
export {
  Scheduler_default as default
};
//# sourceMappingURL=Scheduler.js.map
