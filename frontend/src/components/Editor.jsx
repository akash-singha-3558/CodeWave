import React from 'react';
import { useEffect } from 'react';
import CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/dracula.css';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/addon/edit/closetag';
import 'codemirror/addon/edit/closebrackets';
import 'codemirror/addon/hint/show-hint.css';
import 'codemirror/addon/hint/show-hint';
import 'codemirror/addon/hint/javascript-hint';
const Editor = () => {
  useEffect(() => {
    initCodeMirror()
  }, [])

  async function initCodeMirror() {
    CodeMirror.fromTextArea(document.querySelector("#realTimeEditor"), {
      mode: { name: "javascript", json: true },
      theme: 'dracula',
      autoCloseTags: true,
      autoCloseBrackets: true,
      lineNumbers: true,
      extraKeys: {
        'Ctrl-Space': 'autocomplete', // Enable auto-suggestion on Ctrl+Space
      },

    });
  }

  return (
    <textarea id="realTimeEditor">

    </textarea>
  )
}

export default Editor