import React from "react";
import { getDictionary } from "@/dictionaries/dictionaries";
import { TeaserBanner } from "@/components/teaser-banner/teaser-banner";
import { TeaserNav } from "@/components/teaser-nav/teaser-nav";
import { FocusModule } from "@/components/workfocus/focus";
import { Offers } from "@/components/offer/offer";
import { PageContainer } from "@/components/page-container/page-container";

export const App = async () => {
  const { home } = await getDictionary("de");
  const { welcome, offersNav, workFocus, offers } = home;

  return (
    <PageContainer>
      <TeaserBanner welcome={welcome} />
      <TeaserNav offersNav={offersNav} />
      <FocusModule workFocus={workFocus} />
      <Offers offers={offers} />
    </PageContainer>
  );
};

export default App;
