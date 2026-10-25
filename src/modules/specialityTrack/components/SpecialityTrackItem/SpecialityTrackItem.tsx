import { mediaUrl } from '@/shared/constants';
import { SpecialityTrackItemProps } from './SpecialityTrackItem.props';
import Image from 'next/image';
export const SpecialityTrackItem = ({ track }: SpecialityTrackItemProps) => {
  const src = /^https?:\/\//.test(track.imageLink)
    ? track.imageLink
    : `${mediaUrl.replace(/\/$/, '')}/${track.imageLink.replace(/^\//, '')}`;
  return (
    <figure className="track-figure">
      <figcaption>{track.title}</figcaption>
      <a
        href={src}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Открыть изображение: ${track.title}`}
      >
        <Image
          className="track-image"
          src={src}
          width={688}
          height={460}
          unoptimized
          alt={track.title}
        />
      </a>
    </figure>
  );
};
