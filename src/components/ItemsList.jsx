function ItemsList({ data }) {
  return (
    <div className="card flex-col md:flex-row justify-center items-center bg-white mx-16 sm:mx-28 p-12 mb-8">
      {data.map((item, key) => {
        return (
          <div className="card-body p-4 flex-1" key={key}>
            <div className="card-title">
              <img
                src={item.img}
                alt=""
                className=" w-20 h-20 sm:w-28 sm:h-28 mx-auto"
              />
            </div>
            <p className="text-center text-xl md:text-2xl">
              <span className="font-bold">{item.num}</span> {item.desc}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default ItemsList;
