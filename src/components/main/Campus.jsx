import "./Campus.css";
export function Campus() {
  return (
    <section className="campus" id="campus">
      <div className="info">
        <p className="blue-color">Gallery</p>
        <h1 className="dark-blue-color">Campus Photos</h1>
      </div>
      <div className="box-container">
        <div className="box">
          <img src="/campus/image-1.png" />
        </div>
        <div className="box">
          <img src="/campus/image-2.png" />
        </div>
        <div className="box">
          <img src="/campus/image-3.png" />
        </div>
        <div className="box">
          <img src="/campus/image-4.png" />
        </div>
      </div>
      <div className="see-more">
        See more here <img src="/campus/arrow.png" />
      </div>
    </section>
  );
}
