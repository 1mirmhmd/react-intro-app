import React, { useState, } from 'react';
import './App.css';

// JSX - Javascript ile html'in birleştirildiği yapı
// HTML'de keyword'u değiştirme
// class -> className

//bu şekilde de export edilebilir

export default function App() { //App() gibi görünümlere component denir.
  let count = 0;
  // react hoocks
  // useState -> değişken tanımlamak için kullanılan hoock
  // React içerisinde normal bir şekilde tanımlanan değişkenler takip edilmez, UI update yapılmaz. Bu yüzden useState hoock'u kullanılır
  // getTotal, setTotal=> initial value

  const [ total, setTotal ] = useState(0);
  // ES7 Extension ile yukarıdaki syntax useStateSnippet şeklinde oluşturulabilir 
  const Increase = () => {
    setTotal(total + 1);
    // count++;
    // console.log(count);
  }
  const Decrease = () => {
    setTotal(total - 1);
    // count--;
    // console.log(count);
  }
  return (
    // İki etiketi peşpeşe kullanamayız, Etiketler tek element altında olmalı. 
    // Bu durumu bypass etmek için React.Fragment veya boş etiket <> </> açılıp kapatılır.
    <React.Fragment>
      <div>
        <p>
          {total}
          {/* html'de JS kodu yazmak için {} süslü oarantez kullanılır */}
          {/* {count}"<br></br>"
          {count = 5} */}
          <br></br>
          Merhaba
        </p>
      </div>
      <div>
        <p >
          <button onClick={Increase}>Increase</button>  <br></br>
          <button onClick={Decrease}>Decrease</button>

        </p>
      </div>
    </React.Fragment>
  );
}
export const var1 = 1;

// JS'te bir nesnenin import edilebilmesi için o nesnenin export edilmesi gerekiyor
// default olarak export edilmeyen şeyi yukarıdaki gibi doğrudan export etmeliyiz.
// export default App;

