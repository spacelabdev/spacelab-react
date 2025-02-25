/**
 * GlossaryEntries.jsx
 * For Glossary.jsx, alphabetically sorts glossary entries and renders them alphabetically.
 */

import React from "react";
import "./glossary.scss";

export default function GlossaryEntries({ terms }) {
    // Copy glossary, sort terms alphabetcially
    const sortedTerms = [...terms].sort((a, b) =>
        a.term.localeCompare(b.term)
    );

    // Group terms by first letter
    const groupedTerms = sortedTerms.reduce((collector, item) => {
        const firstLetter = item.term.charAt(0).toUpperCase();
        // If group DNE, create one
        if (!collector[firstLetter]) {
            collector[firstLetter] = [];
        }
        // Add item to group
        collector[firstLetter].push(item);
        return collector;
    }, {});

    return (
        <>
        {Object.keys(groupedTerms)
            .sort() // Ensure the letter headers are in alphabetical order
            .map((letter) => (
                <div key={letter} className="alphabetical-section">
                    <h2 className="alphabetical-header">{letter}</h2>
                    {groupedTerms[letter].map((item, index) => (
                        <div key={index} className="glossary-entry" id={item.term}>
                            <h3>{item.term}:</h3>
                            <p>{item.definition}</p>
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
}
