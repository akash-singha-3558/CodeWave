import React from 'react';
import { useEffect } from 'react';
import CodeMirror from 'codemirror/lib/codemirror';
 import 'codemirror/lib/codemirror.css';
import 'codemirror/mode/javascript/javascript';


const Editor = () => {
    useEffect(()=>{
      async function initCodeMirror(){
        CodeMirror.fromTextArea(document.querySelector("#realTimeEditor"),{
            mode:{name:"javascript",json:true},
            theme:'dracula'
        });
      }
      initCodeMirror()
    },[])
  return (
    <textarea id="realTimeEditor">

    </textarea>
  )
}

export default Editor