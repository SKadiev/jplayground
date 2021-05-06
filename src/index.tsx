import * as esbuild from 'esbuild-wasm';
import { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

const App = () => {
  const [input, setInput] = useState('');
  const [code, setCode] = useState('');

  const startService = async () => {
    const startService = await esbuild.startService({
      worker: true,
      wasmURL: '/esbuild.wasm',
    });

    console.log(startService);
  };

  useEffect(() => {
    startService();
  }, []);

  return (
    <div>
      <textarea
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></textarea>
      <div>
        <button onClick={() => console.log(input)}>Submit</button>
      </div>
      <pre>{code}</pre>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
