import { getSubjectMeta, resolvePrimarySubjectSlug, type PrimarySubjectSlug } from "../data/subjects";
import { withBaseAsset } from "./base";

const DEFAULT_MASCOT_ICON = "math.png";

const mascotIconOverrides: Partial<Record<PrimarySubjectSlug, string>> = {
  elektrotechnik: "electro.png",
};

const unique = <T,>(items: T[]) => [...new Set(items)];

export const getDefaultMascotSrc = () => withBaseAsset(`assets/mascots/${DEFAULT_MASCOT_ICON}`);

export const getSubjectMascotSources = (slug: string) => {
  const resolved = resolvePrimarySubjectSlug(slug);
  const meta = getSubjectMeta(slug);
  const configuredIcon = meta?.icon || DEFAULT_MASCOT_ICON;
  const preferredIcon = (resolved && mascotIconOverrides[resolved]) || configuredIcon;

  const candidates = unique([
    preferredIcon,
    configuredIcon,
    DEFAULT_MASCOT_ICON,
  ]).map((icon) => withBaseAsset(`assets/mascots/${icon}`));

  return {
    imageSrc: candidates[0],
    fallbackImageSrc: candidates.at(1) ?? getDefaultMascotSrc(),
  };
};
