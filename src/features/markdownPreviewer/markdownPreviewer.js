import React, { Component } from "react";
import "./markdownPreviewer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import marked from "marked";

const defaultState = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
      - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

class MarkdownPreviewer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: defaultState,
    };
  }

  handleChange = (e) => {
    this.setState({
      inputText: e.target.value,
    });
  };

  render() {
    const markdown = marked(this.state.inputText, { breaks: true });

    return (
      <div className="container">
        <form>
          <div className="form-group">
            <label for="editor">Enter Here..!!</label>
            <textarea
              id="editor"
              className="form-control"
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)}
            ></textarea>
          </div>

          <div className="form-group">
            <label for="preview">Result</label>
            <div
              id="preview"
              className="form-control"
              dangerouslySetInnerHTML={{ __html: markdown }}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default MarkdownPreviewer;
