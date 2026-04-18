import { getSubjectMeta } from "../data/subjects";
import { withBaseAsset } from "./base";

const DEFAULT_MASCOT_ICON = "math.png";

export const getDefaultMascotSrc = () => withBaseAsset(`assets/mascots/${DEFAULT_MASCOT_ICON}`);

export const getSubjectMascotSources = (slug: string) => {
  const meta = getSubjectMeta(slug);
  const icon = meta?.icon || DEFAULT_MASCOT_ICON;

  return {
    imageSrc: withBaseAsset(`assets/mascots/${icon}`),
    fallbackImageSrc: getDefaultMascotSrc(),
  };
};
