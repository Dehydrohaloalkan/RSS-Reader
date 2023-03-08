import { parse } from 'react-native-rss-parser';
import { RssType } from './RssData';

export async function getNews(item: RssType) {
    const response = await fetch(item.url);
    const data = await response.text();
    const rss = await parse(data);
    return rss;
};

