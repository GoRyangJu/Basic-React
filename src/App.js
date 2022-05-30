import { useState } from "react";
import Modal from "./Modal";

function App() {
  const initData = [
    {
      name: "소주",
      content: "저는 소주를 안 좋아해요!",
      image:
        "https://cdn.pixabay.com/photo/2017/10/22/08/02/bottle-2877005__340.jpg",
    },
    {
      name: "맥주",
      content: "요즘 흑맥주가 좋아요.",
      image:
        "https://cdn.pixabay.com/photo/2015/06/24/13/31/beer-820011_1280.jpg",
    },
    {
      name: "샴페인",
      content: "샴페인 좋아요~ 샴페인 좋아요~",
      image:
        "https://cdn.pixabay.com/photo/2017/03/27/13/36/champagne-2178775__340.jpg",
    },
  ];

  const [data, setData] = useState(initData);
  const [isModalOpen, setIsModalOpen] = useState(false);

  let handleAddItem = (item) => {
    setData([...data, item]);
  };

  let handleModalOpen = (value) => {
    setIsModalOpen(value);
  };

  return (
    <>
      <header>
        <span className="title">고량주</span>
      </header>
      <main>
        <div className="sidebar">
          <button
            type="button"
            className="add-button"
            onClick={() => setIsModalOpen(true)}
          >
            추가
          </button>
          {data.map((item) => (
            <span key={item.name}>{item.name}</span>
          ))}
        </div>
        <section className="container">
          {data.map((item) => (
            <div className="card" key={item.name}>
              <img src={item.image} alt={item.name} />
              <span>{item.content}</span>
            </div>
          ))}
        </section>
      </main>
      <Modal
        handleAddItem={handleAddItem}
        isModalOpen={isModalOpen}
        handleModalOpen={handleModalOpen}
      />
    </>
  );
}

export default App;
