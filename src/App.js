import React, { useEffect, useState, } from 'react';
import './App.css';

// JSX - Javascript ile html'in birleştirildiği yapı
// HTML'de keyword'u değiştirme
// class -> className

//bu şekilde de export edilebilir

export default function App() { //App() gibi görünümlere component denir.
  // let count = 0;
  // react hoocks
  // useState -> değişken tanımlamak için kullanılan hoock
  // React içerisinde normal bir şekilde tanımlanan değişkenler takip edilmez, UI update yapılmaz. Bu yüzden useState hoock'u kullanılır
  // getTotal, setTotal=> initial value
  const [total, setTotal] = useState(0);
  // ES7 Extension ile yukarıdaki syntax useStateSnippet şeklinde oluşturulabilir 

  // useEffect hoock'u -> Dependency listesindeki veriler değiştiğinde tekrar tetiklenen yapıdır
  // component ilk render edildiğinde çalışır
  useEffect(() => {
    if (total > 10) {
      alert('total 10 dan büyük olamaz!');
      setTotal(10);
    }
  }, [total]);
  useEffect(() => {
    console.log("useEffect 2");
  }, [])



  const Increase = () => {
    setTotal(total + 1);// useState fonlsiyonları async çalışır
    // count++;
    // console.log(count);
  }
  const Decrease = () => {
    setTotal(total - 1);
    // count--;
    // console.log(count);
  }
  const [activity, setActivity] = useState("");
  const clearActivity = () => { setActivity(""); }
  const [activityList, setActivityList] = useState(["Aktivite 1", "Aktivite 2", "Aktivite 3"])

  const addActivity = () => {
    // setactivityList((prevState) => {
    //   prevState.push(activity);
    //   console.log(activity);
    //   return prevState;
    // })

    //... -> Destructuring assignment -> bir array'i parçalmamıza olanak sağlar
    setActivityList([...activityList, activity])
    clearActivity();
  }

  const removeActivity = (activity) => {
    setActivityList(activityList.filter(i => i !== activity));
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
          <br />
          Merhaba
        </p>
      </div>
      <div>
        <p >
          <button onClick={Increase}>Increase</button>  <br></br>
          {/* İsteğe göre onclick içerisine fonksiyon yazılabilir */}
          <button onClick={() => { setTotal(total - 1) }}>Decrease</button>


        </p>
      </div>
      <hr />
      <div>
        <span> To Do List Uygulaması</span><br />
        {/* Two Way Data Binding -> Çift Yönlü Eşleştirme */}
        <input value={activity} onChange={(event) => { setActivity(event.target.value) }} type='text' placeholder='Aktivite giriniz'></input>
        <br />
        <button onClick={() => { addActivity(); }}>Ekle</button>
        <ul>
          {/* JSX iterasyonlar her zaman map ile yapılmalıdır */}
          {activityList.map((element) => <li key={element}>{element}<button onClick={() => { removeActivity(element); }}>x</button></li>)}
        </ul>

      </div>
    </React.Fragment>
  );
}
export const var1 = 1;

// JS'te bir nesnenin import edilebilmesi için o nesnenin export edilmesi gerekiyor
// default olarak export edilmeyen şeyi yukarıdaki gibi doğrudan export etmeliyiz.
// export default App;
