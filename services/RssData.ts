export type RssType = {
    title: string,
    url: string,
}

const RssData: RssType[] = [
    {
        title: 'Habr',
        url: 'https://habr.com/ru/rss/news/?fl=ru'
    },
    {
        title: 'OON',
        url: 'https://news.un.org/feed/subscribe/ru/news/topic/climate-change/feed/rss.xml'
    },
    {
        title: 'Dev.by',
        url: 'https://devby.io/rss'
    }
];

export default RssData