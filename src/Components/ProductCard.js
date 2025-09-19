export function ProductCard() {
  const product = {
    imageSrc: "images/iphone.png",
    title: "iPhone 15 Pro",
    Specification: [
      "A17 Pro chip with 6-core GPU",
      "3x or 5x Telephoto camera",
      "Up to 29 hours video playback",
    ],
    price: 999,
  };
  return (
    <article
      style={{
        border: "1PX solid white",
        borderRadius: "8px",
        padding: "16px",
        textAlign: "center",
      }}
    >
      <h2>{product.title}</h2>
      <img
        src={product.imageSrc}
        alt="iPhone 15 Pro"
        width="128px"
        height="128px"
      />
      <p>Specification:</p>
      <ul>
        <li>{product.Specification[0]}</li>
        <li>{product.Specification[1]}</li>
        <li>{product.Specification[2]}</li>
      </ul>
      <button>Buy (From ${product.price})</button>
    </article>
  );
}
