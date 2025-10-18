export function Navigators({ orientation, hide }) {
  return (
    <ul className={orientation + " " + (hide && "hide")}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#program">Program</a>
      </li>
      <li>
        <a href="#about-us">About us</a>
      </li>
      <li>
        <a href="#">Campus</a>
      </li>
      <li>
        <a href="#">Testimonials</a>
      </li>
      <li>
        <a href="#" className="contact">
          Contact us
        </a>
      </li>
    </ul>
  );
}
