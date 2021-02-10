import Star from "./Star";

export default function Stars({ count }) {
  function showStars() {
    if (typeof count !== 'number' || count > 5) return null;

    const stars = [];
    for (let i = 0; i < count; i++) {
      stars.push(<Star />);
    }
    return stars;
  }

  return (
    <ul className="stars">
      {showStars()}
    </ul>
  )
}
