'use client';
import useAlert from '@/hooks/useAlert';
import Image from 'next/image';

interface EventLinkCardProps {
  item: {
    ThumbnailImg: string;
    title: string;
  };
}

const EventLinkCard = ({ item }: EventLinkCardProps) => {
  const { showInfoAlert } = useAlert();
  const handleClick = () => showInfoAlert('준비중입니다!');
  return (
    <div key={item.title} className="flex flex-col items-center cursor-pointer">
      <div className="relative rounded-[14px] w-[50px] h-[50px] sm:w-[72px] sm:h-[72px]" onClick={handleClick}>
        <Image className="absolute object-contain" src={item.ThumbnailImg} fill alt={item.title} />
      </div>
      <span className="text-xs mt-1 font-bold">{item.title}</span>
    </div>
  );
};

export default EventLinkCard;
