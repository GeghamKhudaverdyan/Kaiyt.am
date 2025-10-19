import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../features/store/languageSlice';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';

const Header = () => {
  const language = useSelector((state) => state.language.selected);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const flags = {
    arm: "/images/ArmFlag.svg",
    en: "/images/EngFlag.svg"
  };

  return (
    <div className="w-[100vw] h-[84px] flex items-center">
      <div className="flex items-center justify-between w-[90%] m-auto">
        <div className="w-[33%]">
          <img src="/images/AxvesikLogo.svg" alt="Logo" className="w-[90px] h-6" />
        </div>
        <ul className="flex w-[33%] justify-center gap-4">
          <li><button >{t("home")}</button></li>
          <li><button onClick={() => navigate('/KaytArt-Production/Little-Fox')}>{t("stories")}</button></li>
          <li><button>{t("about")}</button></li>
        </ul>
        <div className="flex items-center gap-6 w-[33%] justify-end">
          <div className="flex items-center">
            <select
              name="language"
              value={language}
              onChange={(e) => dispatch(setLanguage(e.target.value))}
              className="appearance-none bg-transparent px-3 py-2 focus:outline-none border-none"
            >
              <option value="arm">Հայ</option>
              <option value="en">En</option>
            </select>
            <img src={flags[language]} alt="" className="w-[26px] h-5" />
          </div>
          <button className="bg-[#E84125] text-white rounded-3xl px-4 py-2">
            {t("contact")}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
