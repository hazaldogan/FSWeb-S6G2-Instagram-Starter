import React from "react";
import Gonderi from "./Gonderi";
import "./Gonderiler.css";

const Gonderiler = (props) => {
  // 🔥 Gönderiler'in ebeveyninin doğru değişkenleri doğru şekilde ilettiğine emin olun!
  const gonderiyiBegenFnProp = props.gonderiyiBegenFnProp;
  const gonderilerProp = props.gonderilerProp;

  return (
    <div className="posts-container-wrapper">
      {/* gönderiler dizisini işleyip her döngüde bir Gönderi bileşeni çağırın*/}
      {gonderilerProp.map((postData, indeks) => {
        return (
          <Gonderi
            key={indeks}
            gonderi={postData}
            gonderiyiBegen={gonderiyiBegenFnProp}
          />
        );
      })}
      {/* Gönderi'nin çağırılmasında hangi propları kullanmanız gerektiğine dikkat edin! */}
    </div>
  );
};

export default Gonderiler;
