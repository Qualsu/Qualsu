import { links } from "./links.route";
import { images } from "./images.route";
import { pages } from "./pages.rourte";

export const projects = {
    MAIN: [
        {
            title: "Notter",
            description: "Приложение для заметок и командной работы с текстом",
            image: images.PREVIEW.NOTTER,
            link: links.NOTTER,
            logo: images.LOGO.NOTTER
        },
        {
            title: "Shrtl://",
            description: "Сократитель ссылок и быстрый шейринг файлов",
            image: images.PREVIEW.SHRTL,
            link: links.SHRTL,
            logo: images.LOGO.SHRTL
        },
        {
            title: "Qual Cloud",
            description: "Файловое хранилище, форк KenyCloud",
            image: images.PREVIEW.QUALCLOUD,
            link: links.QUALCLOUD,
            logo: images.LOGO.QUALCLOUD
        }
    ],
    TOOLS: [
        {
            title: "InSDL",
            description: "C++ Фреймворк для SDL3",
            image: images.PREVIEW.INSDL,
            link: links.INSDL,
            logo: images.LOGO.INSDL
        },
        {
            title: "InAPI",
            description: "С++ библиотека для HTTP приложений с FastAPI-подобным синтаксисом",
            image: images.PREVIEW.INAPI,
            link: links.INAPI,
            logo: images.LOGO.INAPI
        },
        {
            title: "Omi",
            description: "Интерпретируемый язык программирования",
            image: images.PREVIEW.OMI,
            link: links.OMI,
            logo: images.LOGO.OMI
        }
    ],
    DEVELOP: [
        {
            title: "Notter ToDo",
            description: "Приложение для списков дел и командной организации",
            image: images.PREVIEW.TODO,
            link: pages.ROOT,
            logo: images.LOGO.TODO
        },
        {
            title: "Voicy",
            description: "Клиент для Spotify",
            image: images.PREVIEW.UNISON,
            link: pages.ROOT,
            logo: images.LOGO.UNISON
        },
    ],
    ARCHIVE: [
        {
            title: "KenyCloud",
            description: "Файловое хранилище",
            image: images.PREVIEW.KENYCLOUD,
            link: links.KENYCLOUD,
            logo: images.LOGO.KENYCLOUD
        },
        {
            title: "Notter Code",
            description: "Браузерный редактор кода",
            image: images.PREVIEW.CODE,
            link: links.CODE_NOTTER,
            logo: images.LOGO.CODE
        },
        {
            title: "Voicy",
            description: "Discord радио-бот",
            image: images.PREVIEW.VOICY,
            link: links.VOICY_DISCORD,
            logo: images.LOGO.VOICY,
            freaze: true
        },
        {
            title: "BGDPS GlobalList",
            description: "Сайт с списками уровней для GDPS",
            image: images.PREVIEW.BGDPS,
            link: links.BGDPS,
            logo: images.LOGO.BGDPS
        }
    ]
}
