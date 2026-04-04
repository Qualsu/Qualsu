import { links } from "./links.route";
import { images } from "./images.route";
import { pages } from "./pages.rourte";

export const projects = {
    MAIN: [
        {
            title: "Notter",
            description: "Планируйте и разрабатывайте с командой в удобной для вас атмосфере",
            image: images.PREVIEW.NOTTER,
            link: links.NOTTER,
            logo: images.LOGO.NOTTER
        },
        {
            title: "InSDL",
            description: "Создавайте игры на sdl3 при помощи простой и удобной оболочки",
            image: images.PREVIEW.INSDL,
            link: links.INSDL,
            logo: images.LOGO.INSDL
        },
        {
            title: "Shrtl://",
            description: "Быстро сокращайте ссылки и делитесь файлами без лишнего шума",
            image: images.PREVIEW.SHRTL,
            link: links.SHRTL,
            logo: images.LOGO.SHRTL
        },
        {
            title: "Omi",
            description: "Интерпретируемый язык программирования на Python",
            image: images.PREVIEW.OMI,
            link: links.OMI,
            logo: images.LOGO.OMI
        }
    ],
    DEVELOP: [
        {
            title: "Notter ToDo",
            description: "Превращайте хаос в четкие шаги. Работайте так, как вам удобно",
            image: images.PREVIEW.TODO,
            link: pages.ROOT,
            logo: images.LOGO.TODO
        },
        {
            title: "Voicy",
            description: "Слушайте любимую музыку без ограничений в любое время",
            image: images.PREVIEW.UNISON,
            link: pages.ROOT,
            logo: images.LOGO.UNISON
        },
        {
            title: "Qual Cloud",
            description: "Форк KenyCloud для работы с файлами всех проектов Qualsu в одном месте",
            image: images.PREVIEW.QUALCLOUD,
            link: pages.ROOT,
            logo: images.LOGO.QUALCLOUD
        }
    ],
    ARCHIVE: [
        {
            title: "KenyCloud",
            description: "open source файловое хранилище",
            image: images.PREVIEW.KENYCLOUD,
            link: links.KENYCLOUD,
            logo: images.LOGO.KENYCLOUD
        },
        {
            title: "Notter Code",
            description: "браузерный редактор кода",
            image: images.PREVIEW.CODE,
            link: links.CODE_NOTTER,
            logo: images.LOGO.CODE
        },
        {
            title: "Voicy",
            description: "discord радио-бот",
            image: images.PREVIEW.VOICY,
            link: links.VOICY_DISCORD,
            logo: images.LOGO.VOICY,
            freaze: true
        }
    ]
}