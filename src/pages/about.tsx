import IndexLayout from '../layouts';
import Wrapper from '../components/Wrapper';
import SiteNav from '../components/header/SiteNav';
import { SiteHeader, outer, inner, SiteMain } from '../styles/shared';
import * as React from 'react';
import { css } from '@emotion/core';

import { PostFullHeader, PostFullTitle, NoImage, PostFull } from '../templates/post';
import { PostFullContent } from '../components/PostContent';
import Footer from '../components/Footer';
import Helmet from 'react-helmet';

const PageTemplate = css`
  .site-main {
    background: #fff;
    padding-bottom: 4vw;
  }
`;

const About: React.FC = () => (
  <IndexLayout>
    <Helmet>
      <title>Dlaczego historia?</title>
    </Helmet>
    <Wrapper css={PageTemplate}>
      <header css={[outer, SiteHeader]}>
        <div css={inner}>
          <SiteNav />
        </div>
      </header>
      <main id="site-main" className="site-main" css={[SiteMain, outer]}>
        <article className="post page" css={[PostFull, NoImage]}>
          <PostFullHeader>
            <PostFullTitle>Dlaczego historia?</PostFullTitle>
          </PostFullHeader>

          <PostFullContent className="post-full-content">
            <div className="post-content">
              <p>
                „Naród, który nie szanuje swej przeszłości nie zasługuje na szacunek teraźniejszości i nie ma prawa do przyszłości”
              </p>
              <p>
                Dlaczego? Bo mam mnóstwo notatek które robię i zapisuję w różnych miejscach a efekt był taki, że wszędzie było trochę. Ta strona to agregat moich notatek
                który z czasem będę aktualizował. W najbliższych miesiącach zrobię:
              </p>
              <p>
              - działający newsletter
              </p>
              <p>
              - aktualizacja poszczególnych dni  (ten proces właściwie będzie trwał latami) + zdjęcia + sztuka
              </p>
              <p>
                Bez historii nie ma wspomnień. Bez wspomnień nie ma przyszłości.
              </p>
            </div>
          </PostFullContent>
        </article>
      </main>
      <Footer />
    </Wrapper>
  </IndexLayout>
);

export default About;
