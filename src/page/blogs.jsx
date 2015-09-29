import React from "react";

export default class Blogs extends React.Component {	
	static getMeta () {
		return {
			cssFile: [ "/css/theme.css" ],
			// jsFile: [ "/page/blogs.js" ]
		}
	}
	renderList () {
		var blogs = this.props.data;
		var html = [];
		blogs.map((blog, i) => {
			html.push(<li className="item" key={i}>
				<span className="time">{blog.createTime}</span>
				<span>
					<a href={"/blog/" + blog.id}>{"《" + blog.title + "》"}</a>
				</span>
			</li>);
		});
		return html;
	}
  	render() {
	    return (
	    	<div className="content">
				<ul className="list">
					{ this.renderList() }
				</ul>
			</div>
	    );
  	}	
}