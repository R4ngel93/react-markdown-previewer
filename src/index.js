import React from 'react';
import ReactDOM from 'react-dom';
import marked from 'marked';
import './styles.css';

// ALLOWS LINE BREAKS WITH RETURN BUTTON
marked.setOptions({
  breaks: true,
});

// INSERTS target="_blank" INTO HREF TAGS (required for codepen links)
const renderer = new marked.Renderer();
renderer.link = function (href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + '</a>';
}


/* App Component */
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: placeholder
    };
  }
  handleChange = event => {
    this.setState({
      input: event.target.value
    });
  }
  render() {

    const renderer = new marked.Renderer();
    renderer.link = (href, title, text) => `<a href="${href}" target="_blank">${text}</a>`;

    return (
      <div>

        {/* EDITOR */}
        <div id='editor-wrap' className='centered'>
          <h6>Editor</h6>
          <textarea id='editor' name='textArea1' className='centered' placeholder='Editor area...' value={this.state.input} onChange={this.handleChange} />
        </div>

        {/* PREVIEWER */}
        <div id='preview-wrap'>
          <h6>Previewer</h6>
          <div id='preview' dangerouslySetInnerHTML={{ __html: marked(this.state.input, { breaks: true, renderer }) }}>
          </div>
        </div>
      </div>
    );
  }
}
/* Test Text */
const placeholder =
  `# Welcome to my React Markdown Previewer!

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

There's also [links](https://www.freecodecamp.com), and
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


1. And there are numbererd lists too.
1. Use just 1s if you want! 
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`

ReactDOM.render(<App />, document.getElementById('root'));

