var e=0;const t=e=>{let t=new TextEncoder().encode(e),n=o(t.length+1);if(0==n)throw allocationFailed;let r=new Uint8Array(a.buffer,n,t.length+1);return r.set(t),r[t.length]=0,n},n=(e,t)=>{let n=new Uint8Array(a.buffer,e,t);return new TextDecoder().decode(n)};var r=!1;const{instance:{exports:{memory:a,evaluate:l,alloc:o}}}=await WebAssembly.instantiateStreaming(fetch("./Calculator.wasm"),{env:{print:(e,t)=>{let r=n(e,t);console.log(`${r}`)},inputError:(e,t)=>{let a=n(e,t);s.innerHTML="<div class='alert alert-danger mb-0' data-bs-theme='dark' role='alert'>"+a+"</div>",r=!0}}});console.log(l(t("10+10"),0));var d=window.document.getElementById("input"),i=window.document.getElementById("form"),s=window.document.getElementById("lower-row");i.addEventListener("submit",function(n){n.preventDefault();let a=l(t(d.value),e);r||(e=a,d.value=a),r=!1}),window.addEventListener("keyup",()=>{let n=l(t(d.value),e);r||(s.innerHTML="<div class='alert alert-dark mb-0 text-end' data-bs-theme='dark' role='alert'>"+n+"</div>"),r=!1});
//# sourceMappingURL=index.f70ac879.js.map
