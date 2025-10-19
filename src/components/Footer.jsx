import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'

const Footer = () => {
    const language = useSelector((state) => state.language.selected)
    const { t, i18n } = useTranslation();
    useEffect(() => {
        i18n.changeLanguage(language)
    }, [language, i18n])
    return (
        <div className='w-[100vw] h-[108px] bg-[#E84125] flex justify-center mt-[96px]'>
            <div className='flex items-center justify-between w-[90%]'>
                <div className='flex items-center'>
                    <img src="/images/AxvesikLogoWhite.svg" alt="Logo" className="w-[90px] h-6" />
                    <ul className="flex">
                        <li><button className='text-white' >{t("home")}</button></li>
                        <li><button className='text-white' onClick={() => navigate('/KaytArt-Production/Little-Fox')}>{t("stories")}</button></li>
                        <li><button className='text-white'>{t("about")}</button></li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <span className='text-white'>© 2025 Aghvesik</span>
                    <div className='flex gap-1'>
                        <img src="/images/socialIcons/instagram.svg" alt="" className='w-5 h-5' />
                        <img src="/images/socialIcons/facebook.svg" alt="" className='w-5 h-5' />
                        <img src="/images/socialIcons/linkdin.svg" alt="" className='w-5 h-5' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
