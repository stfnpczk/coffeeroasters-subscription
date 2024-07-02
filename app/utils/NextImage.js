import { useWindowWidth } from '../hooks/useWindowWidth';
import Image from 'next/image';

export default function NextImage({
  mobileImgSrc,
  tabletImgSrc,
  desktopImgSrc,
  alt,
}) {
  const windowSize = useWindowWidth();

  const imageLoader = (width) =>
    width < 768 ? mobileImgSrc : width < 1200 ? tabletImgSrc : desktopImgSrc;

  return (
    <Image
      className='heroImage'
      src={imageLoader(windowSize.width)}
      alt={alt}
      fill
      sizes='100%'
      style={{
        objectFit: 'cover',
        width: '100%',
      }}
      priority
    />
  );
}
