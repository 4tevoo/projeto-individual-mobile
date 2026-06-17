import { ContentItem, MenuItem } from "../types/content";

export const novidadesData: ContentItem[] = [
  { 
    id: '1', 
    title: 'DROPS DA TWITCH DE SOMBRAS DA JADE: CONSTELAÇÕES!', 
    image: require('../assets/novidades/nov/nov1-banner.png'),
    url: 'https://forums.warframe.com/topic/1508881-jade-shadows-constellations-directory-wide-twitch-drops-campaign-starts-june-17/?utm_medium=mobileapp&utm_source=in-game&utm_campaign=2026-06-JadeShadowsConstellationsDirectoryDrops-15' 
  },
  {
    id: '2',
    title: 'RESSURGÊNCIA PRIME: EQUINOX PRIME E WUKONG PRIME!',
    image: require('../assets/novidades/nov/nov2-banner.png'),
    url: 'https://www.warframe.com/en/prime-resurgence?utm_campaign=2026-PR-Equinox-Prime-and-Wukong-Prime&utm_medium=mobileapp&utm_source=in-game'
  },
  {
    id: '3',
    title: 'DESCUBRA OS PACOTES DE SOMBRAS DA JADE: CONSTELAÇÕES!',
    image: require('../assets/novidades/nov/nov3-banner.png'),
    url: 'https://www.warframe.com/pt-br/news/jade-shadows-constellations-packs-coming-soon?utm_medium=mobileapp&utm_source=in-game&utm_campaign=2026-06-JS2SKUS'
  },
  {
    id: '4',
    title: 'SOMBRAS DA JADE: CONSTELAÇÕES CHEGARÁ NO DIA 17 DE JUNHO!',
    image: require('../assets/novidades/nov/nov4-banner.png'),
    url: 'https://www.warframe.com/pt-br/jade-shadows-constellations?utm_campaign=2026-JadeShadowsConstellationsDateAnnounce&utm_medium=mobileapp&utm_source=in-game'
  }
];

export const comunidadeData: ContentItem[] = [
  { 
    id: '1', 
    title: 'JUNTE-SE AO SERVIDOR OFICIAL DO WARFRAME NO DISCORD!', 
    image: require('../assets/novidades/comunidade/discord-banner.png'),
    url: 'https://discord.com/invite/playwarframe' 
  },
  {
    id: '2',
    title: 'DIRETRIZES DA COMUNIDADE: CÓDIGO DE CONDUTA',
    image: require('../assets/novidades/comunidade/notfound-banner.jpg'),
    url: 'https://forums.warframe.com/topic/1492036-diretrizes-da-comunidade-c%C3%B3digo-de-conduta/'
  },
  {
    id: '3',
    title: 'DIRETRIZES DA COMUNIDADE: USO DO BATE-PAPO',
    image: require('../assets/novidades/comunidade/notfound-banner.jpg'),
    url: 'https://forums.warframe.com/topic/1492034-diretrizes-da-comunidade-uso-dos-canais-de-bate-papo/'
  }
];

export const atividadesData: MenuItem[] = [
  { id: '1', title: 'Alertas', image: require('../assets/atividades/alertas-icon.png') },
  { id: '2', title: 'Baro Ki\'Teer', image: require('../assets/atividades/baro-icon.png') },
  { id: '3', title: 'Nightwave', image: require('../assets/atividades/nightwave-icon.png') },
  { id: '4', title: 'Invasões', image: require('../assets/atividades/invasoes-icon.png') },
  { id: '5', title: 'Extratores', image: require('../assets/atividades/extrator-icon.png') },
  { id: '6', title: 'Incursões', image: require('../assets/atividades/incursao-icon.png') },
  { id: '7', title: 'Fendas do Void', image: require('../assets/atividades/fenda-icon.png') },
  { id: '8', title: 'Ciclos Globais', image: require('../assets/atividades/ciclos-icon.png') },
  { id: '9', title: 'Sindicatos', image: require('../assets/atividades/sindicatos-icon.png') },
];

export const equipamentosData: MenuItem[] = [
  { id: '1', title: 'Códex', image: require('../assets/equipamentos/codex-icon.png') },
  { id: '2', title: 'Inventário', image: require('../assets/equipamentos/inventario-icon.png') },
  { id: '3', title: 'Mods', image: require('../assets/equipamentos/mod-icon.png') },
  { id: '4', title: 'Arsenal', image: require('../assets/equipamentos/arsenal-icon.png') },
  { id: '5', title: 'Forja', image: require('../assets/equipamentos/forja-icon.png') },
  { id: '6', title: 'Companheiros', image: require('../assets/equipamentos/companheiros-icon.png') },
  { id: '7', title: 'Relíquias do Void', image: require('../assets/equipamentos/reliquias-icon.png') },
]