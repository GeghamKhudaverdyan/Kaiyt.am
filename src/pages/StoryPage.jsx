
import { useParams } from 'react-router-dom';
import NotFound from './404NotFound';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

export default function StoryPage() {
  const { storyNumber } = useParams();
  const n = parseInt(storyNumber, 10);
  const { t, i18n } = useTranslation();
  const language = useSelector((state) => state.language.selected);
  const storyImages = [
    `/images/stories/${n}/firstStory.svg`,
    `/images/stories/${n}/secondStory.svg`,
    `/images/stories/${n}/thirdStory.svg`,
    `/images/stories/${n}/forthStory.svg`,
  ];
  
  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n])

  if (!Number.isInteger(n) || n < 1 || n > 10) {
    return (
      <NotFound />
    )
  }

  return (
    <div className='w-[960px] m-auto' >
      <div >
        <button className='flex items-center gap-2'>
          <span className="material-symbols-outlined">
            arrow_left_alt
          </span><span>{t("home")}</span>
        </button>
      </div>
      <div className='flex justify-center flex-col items-center mt-6'>
        <h1 className='text-3xl'>{t(`hayrik&fox.${n}.storyName`)}</h1>
        <div className='flex justify-between w-[100%] mt-10'>
          <iframe
            width="468"
            height="240"
            src="https://www.youtube.com/embed/ViwtNLUqkMY?list=RD6Mgqbai3fKo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='rounded-3xl'
          ></iframe>
          <iframe
            width="468"
            height="240"
            src="https://www.youtube.com/embed/DUT5rEU6pqM?list=RD6Mgqbai3fKo"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className='rounded-3xl'
          ></iframe>
        </div>
        <div className='w-[100%] mt-16'>
          <h2 className='text-lg text-[#E84125]' >{t(`hayrik&fox.${n}.subheader`)}</h2>
          <p style={{ whiteSpace: "pre-line" }} className='text-lg mt-3'>{t(`hayrik&fox.${n}.text`)}</p>
        </div>
        <div className='flex flex-wrap justify-between gap-6 mt-16'>
          <img src={storyImages[0]} alt="" className='w-[468px] h-[240px]' />
          <img src={storyImages[1]} alt="" className='w-[468px] h-[240px]' />
          <img src={storyImages[2]} alt="" className='w-[468px] h-[240px]' />
          <img src={storyImages[3]} alt="" className='w-[468px] h-[240px]' />
        </div>
      </div>
    </div>
  );
}
