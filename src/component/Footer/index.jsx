import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
		<div className="footer">
			<p>@author&lt;<a href="mailto:liaozhongwu95@163.com">liaozhongwu95@163.com</a>&gt;</p>
			<p>Friend Link: <a href="http://guoyc.com" target='_blank'>Heychen</a></p>
		</div>
    );
  }
}