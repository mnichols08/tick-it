function Header() {
  return (
    <header>
      <a href="/"><h1>tick.it</h1></a>

      <nav>
        <ul>
          <li>
            <a href="/customers">Customers</a>
          </li>
          {/*&nbsp;|&nbsp;
        <li>
          <a href='#'>Tickets</a>
        </li>&nbsp;|&nbsp; 
        <li>
          <a href='#'>Notes</a>
  </li>*/}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
