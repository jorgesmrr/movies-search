import ResponsiveProperty from "../../models/ResponsiveProperty";
import theme from "../style/theme";

export interface ImageSource {
  src: string;
  width: number;
}

interface ImageProps {
  alt: string;
  loading?: "eager" | "lazy";
  sources: ResponsiveProperty<ImageSource>;
  onError: (event) => void;
  onLoad: (event) => void;
}

const ResponsiveImage: React.FC<ImageProps> = ({ sources, ...imgProps }) => {
  const { sm, md, lg } = theme.breakpoints;

  const sizesRules = [];
  const srcSetRules = [];

  let biggestSrc;

  if (sources.lg) {
    srcSetRules.push(`${sources.lg.src} ${sources.lg.width}w`);
    sizesRules.push(`(min-width: ${lg}) ${sources.lg.width}px`);
    biggestSrc = sources.lg;
  }

  if (sources.md) {
    srcSetRules.push(`${sources.md.src} ${sources.md.width}w`);
    sizesRules.push(`(min-width: ${md}) ${sources.md.width}px`);

    if (sources.md.width > (biggestSrc?.width || 0)) {
      biggestSrc = sources.md;
    }
  }

  if (sources.sm) {
    srcSetRules.push(`${sources.sm.src} ${sources.sm.width}w`);
    sizesRules.push(`(min-width: ${sm}) ${sources.sm.width}px`);

    if (sources.sm.width > (biggestSrc?.width || 0)) {
      biggestSrc = sources.sm;
    }
  }

  srcSetRules.push(`${sources.xs.src} ${sources.xs.width}w`);
  sizesRules.push(`${sources.xs.width}px`);

  if (sources.xs.width > (biggestSrc?.width || 0)) {
    biggestSrc = sources.xs;
  }

  const srcSet = srcSetRules.join(", ");
  const sizes = sizesRules.join(", ");

  return (
    <img src={biggestSrc.src} srcSet={srcSet} sizes={sizes} {...imgProps} />
  );
};

export default ResponsiveImage;
