import React from "react";
import {Route, Switch, Redirect} from 'react-router';
import About from "./pages/about/about";
import Blog from "./pages/blog/blog";
import Discovery from "./pages/discovery/discovery";
import Glossary from "./pages/glossary/glossary";
import Home from "./pages/home/home";
import Projects from "./pages/projects/projects";
import Contact from "./pages/contact/contact";
import BlogArchives from "./pages/blog/blogArchives/blogArchives";
import BlogDetails from "./pages/blog/blogDetails/blogDetails";

/**
 * Handles Routing
 * @returns {JSX.Element}
 * @constructor
 */
export default function Main() {
	return (
		<Switch>
			<Route exact path="/" component={Home}/>
			<Route exact path="/about" component={About}/>
			<Route exact path="/archives" component={BlogArchives}/>
			<Route exact path="/blog" component={Blog}/>
			<Route exact path="/blogdetails" component={BlogDetails}/>
			<Route exact path="/contact" component={Contact}/>
			<Route exact path="/discovery" component={Discovery}/>
			<Route exact path="/glossary" component={Glossary}/>
			<Route exact path="/home" component={Home}/>
			<Route exact path="/projects" component={Projects}/>
			<Redirect to='/home'/>
		</Switch>
	);
};
