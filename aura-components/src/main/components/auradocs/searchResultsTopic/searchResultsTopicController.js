/*
 * Copyright (C) 2012 salesforce.com, inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
{
	searchDocs : function(cmp,event){
		console.log("in search results");
		var include_num = 1;
		var bold = 1;
		var s = new Array();

		/**Indexer**/
		//Components
		s[0] = "Components Overview^helloWorld^Components are the functional units of Aura. They encapsulate a modular and potentially reusable section of UI, and can range in granularity from a single line of text to an entire application...^markup, bundles, browser, url";
		s[1] = "Component Bundles^compBundle^A component bundle is a folder containing a component or an app and all related resources for that component or app. It can contain the following files...^ resources, css, controller, renderer, helper, provider, app, client-side";
		s[2] = "Component IDs^compIds^A component has two types of IDs: a local ID and a global ID...^getCmp, globalId, localId, aura:id";
		s[3] = "Applying HTML and CSS^helloHTML^Components can contain more than just text. Let's add some HTML and CSS to the mix...^unescape, unescapedHtml, expressions, selector, top-level element";
		s[4] = "Component Attributes^helloAttributes^Let's see how we can make components more dynamic by using attributes...^aura:attribute, expressions, validation";
		s[5] = "Component Composition^nestedComponents^The strength of a component-based UI framework is in combining components to make a more interesting application. Let's take a look at how components fit together...^attributes, instance, definition, passing attributes";
		s[6] = "Component Body and Facets^helloFacets^All components inherently extend <aura:component> at the root of their hierarchy. When you extend a component, you inherit all its attributes...^aura:attribute, aura:registerEvent, aura:handler, aura:set, access body, expression";
		s[7] = "Lazy loading^lazyload^A lazily loaded component is rendered after its parent component is loaded. This can improve the apparent response time of your app if you have many components that users don't need all at once...^aura:load, aura:placeholder, exlusive load, aysnchronous";
		s[8] = "Positioning UI Components^useLayout^You can position your components easily using several Aura ui components. The ui:block component positions page elements horizontally, while the ui:vbox component positions them vertically...^left, right, body, north, south, div, aura:set";
		s[9] = "Getting User Input^useForm^Aura provides out-of-the-box input components that enable you to easily retrieve and process user input with built-in features such as value binding and event handling...^attributes, controller, updateOn, error handling, events, ui:input, ui:inputText, ui:inputPhone, ui:inputEmail, ui:inputSecret, ui:inputURL, ui:inputDate, ui:inputTime, ui:inputNumber, ui:inputTextArea";
		s[10]= "Using Menus^useMenu^ui:menu is a menu component that contains list items. You can wire up list items to actions in a client-side controller, so that selection of the item triggers an action. List items in the menu can be initialized from the menu's mode...^ui:menuItem, ui:actionMenuItem, ui:checkboxMenuItem, ui:radioMenuItem, ui:menuItemSeparator, dropdown, trigger, ui:menuTriggerLink";
		
		//Expressions
		s[11]= "Expressions^expressions^Aura expressions allow you to make calculations and access property values and other data within Aura markup. Use expressions for dynamic output or passing values into components by assigning them to attributes...^variables, operators, primitive, integer, string, boolean, object, collection, controller, syntax";
		s[12]= "Example Expressions^expressionsExamples^Here are a few examples of expressions used in Aura code that illustrate various interesting aspects of Aura expressions. Don't worry if you understand them completely yet, later sections will explain...^dynamic output, values, attributes, view, property values, model, passing values, conditional, true, false, aura:renderif";
		s[13]= "Accessing Data Using Value Providers^expressionsSourceValues^Value providers are one way to access data. Value providers encapsulate related values together, similarly to how an object encapsulates properties and methods. A number of value providers were introduced in Example Expressions, for example, m, v, and c...^model, view, controller, fields, objects, dot notation";
		s[14]= "Global Value Providers^globalValueProviders^Global value providers are global values and methods that a component can use in expressions. Global value providers are: $Label, globalID, $Browser...^formFactor, isAndroid, isIOS, isIPad, isIPhone, isPhone, isTablet";
		s[15]= "Although you will generally use expressions as though they resolve to simple values, under the hood expressions resolve to a value object. This thin wrapper around the actual data is used by Aura to notice changes to data and selectively re-render and update the user interface in response...^primitive value, value object, getValue, setParams, commit";
		s[16]= "Expression Evaluation^expressionsEvaluation^Expressions are evaluated much the same way that expressions in JavaScript or other programming languages are evaluated. Operators are a subset of those available in JavaScript, and evaluation order and precedence are generally the same as JavaScript...^parentheses, action methods, expressions, user interface events, onclick, onhover, controller";
		s[17]= "Expression Operators Reference^expressionsOperators^The following operators are available in the Aura expression language...^arithmetic operators, numerical values, add, substract, multiply, divide, integer, unary, float, null, string, literal, escape, comparison, operands, logical operators, logical literals";
		s[18]= "Expression Functions Reference^expressionsFunctions^The following functions are available in the Aura expression language. The Corresponding Operator column lists equivalent operators, if any. All functions are case-sensitive...^math functions, add, sub, mult, div, mod, abs, negate, concat, string functions, comparison functions, true, false, equals, noteequals, lessthan, greaterthan, lessthanorequal, greaterthanorequal, boolean functions, conditional function";
		s[19]= "Client-Side Controllers^helloActions^A client-side controller is a JavaScript file containing all the component's actions, which are used to handle events within the component. The syntax of a client-side controller file is just a simple JavaScript object that defines action functions. The syntax of a client-side controller file is just a simple JavaScript object that defines action functions...^ action parameters, auto-wire, call action, handle events, onclick, getAttributes, getRawValue, attribute values";
		s[20]= "Event Handling Lifecycle^eventsOverview^Aura events are declared by the aura:event tag in a .evt file, and they can have one of two types: component or application. Application and component events are declared in separate files, for example, drawApp/pickBrushComp/pickBrushComp.evt and drawApp/pickBrushApp/pickBrushApp.evt...^events demo, detect firing, event type, execute handler, rerender component";
		s[21]= "Component Events^eventsComp^Component events have attributes to pass relevant data from the firing component to any handling components. A component event is fired from an instance of a component...^handle events, register event, event handler, event notifier, aura:handler, controller";
		s[22]= "Application Events^eventsApp^Application events follow a traditional publish-subscribe model. An application event is fired from an instance of a component...^handle events, register events, event notifier, aura:handler";
		s[23]= "Events Demo^eventsDemo^Events Handling Lifecycle gives an overview of how events are handled in Aura. This topic leads you through an events demo. Before we see a component wired up to events, let's look at the individual files involved...^notifier, handler, container, fire event, application event, component event";
		s[24]= "Firing Aura Events from Non-Aura Code^eventsExternal^You can fire an Aura event from JavaScript code outside an Aura app. For example, your Aura app might need to call out to some non-Aura code, and then have that code communicate back to the Aura code once it's done...^window.opener, master window, external js, fire externally";
		
		//Creating Apps
		s[25]= "Designing App UI^designAppLayout^An Aura app is a special top-level component whose markup is in a .app file. The markup looks similar to HTML and can contain components as well as a set of supported HTML tags. Design your app's UI by including markup in the .app file, which starts with the <aura:application> tag...^sample app, notes.app, aura demo, aura:template, layout";
		s[26]= "Creating App Templates^createAppTemplate^An app template bootstraps the loading of the Aura framework and the app. The default template is aura:template. Customize the default template by creating your own component that extends the default template...^sample app, aura:template, aura:application, js libraries, external CSS, extraStyleTags, aura:set, inlineStyle";
		s[27]= "Adding Components^addAppComponents^When you're ready to add components to your app, you should first look at the out-of-the-box components that come with Aura. You'll save yourself development time if you can directly use existing components. You can also leverage these components by extending them or using composition to add them to custom components that you're building...^design components, combine components, API";
		s[28]= "Styling Apps^styleApp^An app is a special top-level component whose markup is in a .app file. Just like any other component, you can put CSS in the component bundle in a file called <appName>.css. For example, the demo app markup is in notes.app. Its CSS is in notes.css...^apply HTML, apply CSS, style";
		s[29]= "URL-Centric Navigation^urlNav^It's useful to understand how Aura handles page requests. The initial GET request for an app retrieves a template containing all the Aura JavaScript and a skeletal HTML response. All subsequent changes to everything after the # in the URL trigger an XMLHttpRequest (XHR) request for the content. The client service makes the request, and returns the result to the browser...^initial request, navigation events, custom events, aura:locationChange, AuraHistoryService, locationChangeEvent, tokenized attributes, AuraEnabled";
		s[30]= "Using Layouts for Metadata-Driven Navigation^layouts^Layouts are a metadata-driven description of navigation in an application. You can describe in an XML file how you want the application to respond to changes to everything after the # (hash) in the URL. You can use Aura without layouts, but they offer a centralized location for managing URL-centric navigation...^container, aside, article, aura:layout, aura:layoutItem, sidebar, content, regex, regular expression, aura:layouts, custom events, override layout, layout handling, handle layout, layout service, AuraLayoutService, changeLocation, aura:layoutHandler";
		s[31]= "Using Appcache^appcache^Application cache (AppCache) speeds up app response time and reduces server load by only downloading resources that have changed. It improves page loads affected by limited browser cache persistence on some devices. You can take advantage of application cache capabilities in Aura...^useAppcache, aura:application, cache, browser, load resources, load js, load css, manifest, preload";
		s[32]= "Controlling Access with Security Providers^securityProviders^A security provider centralizes the security logic to control access to your app, including components and actions. The default security provider is aura/components/DefaultSecurityProvider.java. It doesn't allow access to any resources when the app is in PROD (production) mode so you must write a Java class to implement your own security provider to enable access in PROD mode...^securityprovider, interface, DefDescriptor, metadata";
		
		//Code
		s[33]= "Code^code^The quick start introduces you to the structure of apps and components but there is no code beyond markup. This section helps you to start writing code...^JavaScript, Java, sample app, sample code";
		s[34]= "JavaScript^codeJavaScriptIntro^Use JavaScript for client-side Aura code. The Aura object is the top-level object in the JavaScript framework code. For all the methods available in the Aura class, see Aura in the JavaScript API in the Reference tab. You can use $A in JavaScript code to denote the Aura object...^controller, helper, renderer, testing, DOM, API, mode";
		s[35]= "Accessing the DOM^domAccess^The Document Object Model (DOM) is the language-independent model for representing and interacting with objects in HTML and XML documents. The Aura rendering service takes in-memory component state and updates the component in the DOM...^rendering service, renderer";
		s[36]= "Using JavaScript Libraries^jsLibs^To use a JavaScript library, you must reference it in your app's template. Use aura:set to set the extraScriptTags attribute in the template component. This sets the extraScriptTags attribute in aura:template, which your app's template extends...^third-party, library";
		s[37]= "Helpers^helper^A helper file contains JavaScript functions that can be called from a client-side controller or renderer for a component. Put functions that you want to reuse and call from a controller and renderer in the component's helper file...^renderer, bundle, controller";
		s[38]= "Renderers^renderers^The Aura rendering service takes in-memory component state and updates the component in the Document Object Model (DOM). The DOM is the language-independent model for representing and interacting with objects in HTML and XML documents...^rendering lifecycle, component rendering, customize rendering, rerendering, unrendering, render";
		s[39]= "Client-side Providers^providersClientSide^A provider enables you to use an abstract component or an interface in markup. The framework uses the provider to determine the concrete component to use at runtime. Server-side providers are more common, but if you don't need to access the server when you're creating a component, you can use a client-side provider instead...^external provider, componentDef, concrete, reuse provider";
		s[30]= "JavaScript Services^services^Aura provides a set of client-side services that helps you develop apps faster. You can call these services from your JavaScript code, using the syntax $A.<service>.<method>. For example, use $A.componentService.newComponent() to create a component dynamically...^AuraComponentService, AuraDevToolService, AuraEventService, AuraExpressionService, AuraHistoryService, AuraLayoutService, AuraRenderingService";
		s[31]= "Error Handling^error^This topic shows you how to handle client-side errors using JavaScript. Typically, you validate the user input, identify any errors, and display the error messages. You can use Aura's default error handling or customize it with your own error handlers.^ui:inputDefaultError, custom error handling, input error, validation error";
		s[32]= "Testing Components^docTests^Aura's loosely coupled components facilitate maintainability, enable efficient testing, and isolate each component from their application context for easier testing. Aura supports JavaScript testing for components and applications in production mode when you develop using the framework...^debugging, user interactions, tools, JavaScript test, JSTEST, test mode";
		s[33]= "Assertions^testsAssert^Assertions evaluate an object or expression for expected results and are the foundation of Aura Component testing. Each JavaScript test can contain one or more assertions. The test passes only when all the assertions are successful...^assert, fail, assertTrue";
		s[34]= "Utility Functions^testsUtility^Utility functions provide additional support for Aura's unit testing and should be prefixed with aura.test or $A.test...^addFunctionHandler, addWaitFor, callServerAction, getDump, getErrors, outer HTML, prototype, getAction, getText, isComplete,overrideFunction, runAfterIf, select, setTestTimeout";
		s[35]= "Sample Test Cases^testsCases^ The following test case use the utility function runAfterIf and assert statements to check that the right buttons are displayed in order...^initial render, rerender";
		s[36]= "Value Objects^valueObjects^All expressions resolve to a value object, which is a thin wrapper around the actual data. The wrapper layer around the literal JavaScript objects enables you to modify data in a transactional manner and selectively rerender and update the UI in response to data changes...^access value, set value, getValue, setValue, literal value, expressions, rerender, isDirty, commit, rollback, getPreviousValue, get previous value";
		s[37]= "Value Object Types^valueObjectTypes^These are the most commonly used value object types. Available methods can be found via the links in the Value Object column...^simple value, array, map, action reference, function call, property reference, immutable types";
		s[38]= "Detecting a Value Object Change^onchange^You can configure a component to automatically invoke a client-side controller action when a value in one of the component's model or attributes changes. When the value changes, the valueChange.evt event is automatically fired...^events, handler, value change, aura:handler, attribute change, aura:iteration,";
		s[39]= "Dynamically Creating Components^dynamicCmp^When the value changes, the valueChange.evt event is automatically fired. This sample code adds a component to a div element...^setParams, set parameters, destroy component, setValue, getValue, set value, get value, localId, local id, newComponent, action value, API";
		s[40]= "Finding Components by ID^findById^You want to retrieve a component by its ID in JavaScript code. For example, a component has a local ID of button1...^get, find, value provider, global id, globalId";
		s[41]= "Dynamically Showing or Hiding Markup^hideMarkup^You want to show or hide markup when a button is pressed...^toggle, visible, renderIf, toggle value, DOM";
		s[42]= "Invoking Actions on Component Initialization^initHandler^You want to update a component or fire an event after component construction but before rendering...^set init value, initialize, controller";
		s[43]= "Java^codeJavaIntro^Use Java for server-side Aura code. Services are the API in front of Aura. The Aura class is the entry point in Java for accessing server-side services...^models, initialize data, controller, provider, security provider, control access, definition, metadata, defdescriptor, instance, registry";
		s[44]= "Models^models^A model is a component's main source for dynamic data. Use a model to read your initial component data in Aura. For example, the model could read the component's data from a database. The component generates an appropriate user interface from the model's data...^value provider, rendering, evaluate value, initialize data, auraenabled, client-side model, java model, access model";
		s[45]= "Server-Side Controllers^serverSideControllers^ You can use client-side and server-side controllers in Aura. An event is always wired to a client-side controller action, which can in turn call a server-side controller action. For example, a client-side controller might handle an event and call a server-side controller action to persist data to a database...^call action, server action, callback, JSON, name-value, echo, abortable, action queue, auraenabled, serverEcho";
		s[46]= "Server-Side Renderers^renderersServerSide^The Aura rendering service takes in-memory component state and updates the component in the Document Object Model (DOM). The DOM is the language-independent model for representing and interacting with objects in HTML and XML documents...^Java renderer, rerender";
		s[47]= "Registering a Custom Converter^registerCustomConverter^A custom converter enables the conversion of one Java type to another Java type for client data sent to the server or for server markup data. When a client calls a server-side controller action, data that the client sends, such as input parameters for a server action, is sent in JSON format...^register converter, auraconfiguration, configuration, impl, custom type conversion, attribute conversion, action call conversion, parameterized type, convert type";
		s[48]= "Converter Interface^converterInterface^ The Converter interface is a type converter that converts a value from one Java type to another Java type. You can implement this interface to provide a custom converter for your own custom type for converting data sent from the client to the server, such as input parameters of server-side controller actions or component attributes...^return Java type, return Java parameter";
		s[49]= "Getting a DefDescriptor^javaDefDesc^A DefDescriptor is an Aura class that contains the metadata for any definition used in Aura, such as a component, action, or event. In the example of a model, it is a nicely parsed description with methods to retrieve the language, class name, and package name. Rather than passing a more heavyweight definition around in code, Aura usually passes around a DefDescriptor instead...^definitionservice, definition service, metadata";
		s[50]= "Getting an Instance of a Component^javaInstanceCmp^An instance represents the data for a component. You want to get an instance of a component in Java code...^instanceservice, instance service, get instance, componentdef, map, attribute map";
		s[51]= "Setting a Component ID^setIDdefref^You want to create a component with a local ID and attributes in Java code. If you want to create a component and set its local Id on the client, see Dynamically Creating Components...^componentdefrefbuilder, component definition reference, set id, set facet, set body, instance";
		
			
			
		
		cookies = document.cookie;
		var p = cookies.indexOf("d=");
		console.log("p = " + p);
		
		if (p != -1) {
			var st = p + 2;
			var en = cookies.indexOf(";", st);
			if (en == -1) {
				en = cookies.length;
			}
			var d = cookies.substring(st, en);
			d = unescape(d);
			console.log("cookies.substring d= " + d);
		}
		od = d;
		console.log("od = " + od);
		var m = 0;
		if (d.charAt(0) == '"' && d.charAt(d.length - 1) == '"') {
			m = 1;
		}

		var r = new Array();
		var co = 0;

		if (m == 0) {
			var woin = new Array();
			var w = d.split(" ");
			for (var a = 0; a < w.length; a++) {
				woin[a] = 0;
				if (w[a].charAt(0) == '-') {
					woin[a] = 1;
				}
			}
			for (var a = 0; a < w.length; a++) {
				w[a] = w[a].replace(/^\-|^\+/gi, "");
			}
			a = 0;
			for (var c = 0; c < s.length; c++) {
				pa = 0;
				nh = 0;
				for (var i = 0; i < woin.length; i++) {
					if (woin[i] == 0) {
						nh++;
						var pat = new RegExp(w[i], "i");
						var rn = s[c].search(pat);
						if (rn >= 0) {
							pa++;
						} else {
							pa = 0;
						}
					}
					if (woin[i] == 1) {
						var pat = new RegExp(w[i], "i");
						var rn = s[c].search(pat);
						if (rn >= 0) {
							pa = 0;
						}
					}
				}
				if (pa == nh) {
					r[a] = s[c];
					a++;
				}
			}
			co = a;
		}

		if (m == 1) {
			d = d.replace(/\"/gi, "");
			var a = 0;
			var pat = new RegExp(d, "i");
			for (var c = 0; c < s.length; c++) {
				var rn = s[c].search(pat);
				if (rn >= 0) {
					r[a] = s[c];
					a++;
				}
			}
			co = a;
		}
		console.log("return query");
		//Return search term
		var searchTerm = cmp.getValue("v.searchTerm");
		searchTerm.setValue(od);
		
		//Return number of results found
		var queryCount = cmp.getValue("v.queryNum");
		queryCount.setValue(co);
		var myQuery = cmp.getValue("v.myQuery");
		var noResults = cmp.getValue("v.noResults");
		//Display results
		if (co==0){
			var noneFound = "Please try another search term.";
			noResults.setValue(noneFound);
			return;
		}
		
			for (var a=0; a < r.length; a++){
				var os = r[a].split("^");
				var br="<b>" + d + "</b>";
				os[2] = os[2].replace(pat, br);
			
				var result = [];
				//for (var i=0; i<co; i++){ 
					result[a] = "<a href=\"#help?topic=" + os[1] + "\" />" + os[0] + "</a><br/>" + os[2];
				//}
				myQuery.setValue(result);
				console.log(result[a]);
			}
	}
}