/**
 * GlossaryNav.jsx
 * For Glossary.jsx, links to jump to specific alphabetical section.
 */

import "./glossary.scss";

export default function GlossaryNav() {
	return (
            <div className="glossary-nav-container">
                  <div className="glossary-nav">
                        <p>Jump to:</p>
                        <a href="#section-A">A - H</a>
                        <a href="#section-I">I - Q</a>
                        <a href="#section-P">P - Z</a>
                  </div>
            </div>
		
	);
}