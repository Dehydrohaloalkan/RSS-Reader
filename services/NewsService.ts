import { parse } from 'react-native-rss-parser';

const url = 'https://habr.com/ru/rss/news/?fl=ru';

export async function getNews() {
    const response = await fetch(url);
    const data = await response.text();
    const rss = await parse(data);
    return rss;
};