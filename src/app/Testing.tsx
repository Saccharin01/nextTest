// src/app/page.tsx

// 클라이언트 컴포넌트로 명시
"use client";


// pages/index.tsx

const testFunc =  () => {
  let message = ""
  
    fetch('http://localhost:3000/hello')
      .then(response => response.text())
      .then(data => message += data);

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

export default testFunc;