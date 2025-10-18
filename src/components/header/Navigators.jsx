export function Navigators({ orientation, hide }) {
  return (
    <ul className={orientation + " " + (hide && "hide")}>
      <li>
        <a href="#">Home</a>
      </li>
      <li>
        <a href="#">Program</a>
      </li>
      <li>
        <a href="#">About us</a>
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
