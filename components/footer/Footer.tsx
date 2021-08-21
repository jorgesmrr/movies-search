import * as S from "./Footer.styles";

const Footer: React.FC = () => (
  <S.Footer>
    <S.List>
      <S.Item>
        Designed and developed by{" "}
        <a
          href="https://github.com/jorgesmrr/"
          target="_blank"
          rel="noreferrer"
        >
          Jorge Moreira
        </a>
      </S.Item>
      <S.Item>
        Powered by{" "}
        <a
          href="https://developers.themoviedb.org/"
          target="_blank"
          rel="noreferrer"
        >
          The Movie Database API
        </a>
      </S.Item>
      <S.Item>
        Visit the{" "}
        <a
          href="https://github.com/jorgesmrr/movies-search"
          target="_blank"
          rel="noreferrer"
        >
          GitHub Repo
        </a>
      </S.Item>
    </S.List>
  </S.Footer>
);
export default Footer;
