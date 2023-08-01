import { Logo } from "./nav-components/Logo";
import { SearchInput } from "./nav-components/SearchInput";
import { NumResults } from "./nav-components/NumResults";

export function NavBar({ movies }) {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchInput />
      <NumResults movies={movies} />
    </nav>
  );
}
