import "./HeroHorizon.css";

const stars = [
  ["8%", "27%", "2px", "0s"],
  ["15%", "62%", "1px", "1.7s"],
  ["23%", "17%", "2px", "3.1s"],
  ["31%", "48%", "1px", "2.2s"],
  ["39%", "24%", "1px", "4s"],
  ["48%", "58%", "2px", "1.1s"],
  ["57%", "19%", "1px", "2.8s"],
  ["66%", "42%", "2px", "3.5s"],
  ["73%", "13%", "1px", "1.4s"],
  ["82%", "52%", "1px", "2.5s"],
  ["91%", "29%", "2px", "0.8s"],
  ["95%", "65%", "1px", "3.8s"],
  ["5%", "48%", "1px", "2.9s"],
  ["27%", "70%", "1px", "0.5s"],
  ["77%", "68%", "1px", "4.2s"],
];

export const HeroHorizon = () => (
  <div className="hero-horizon" aria-hidden="true">
    <div className="horizon-nebula" />
    <div className="horizon-arc horizon-arc-outer" />
    <div className="horizon-arc horizon-arc-middle" />
    <div className="horizon-arc horizon-arc-inner" />
    <div className="horizon-core-glow" />
    <div className="horizon-star-field">
      {stars.map(([left, top, size, delay], index) => (
        <span
          className="horizon-star"
          key={index}
          style={{ left, top, width: size, height: size, animationDelay: delay }}
        />
      ))}
    </div>
  </div>
);
