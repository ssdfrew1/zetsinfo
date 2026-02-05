
import { Cheat, SocialLink, NewsItem } from './types';

export const CHEATS_DATA: Cheat[] = [
  {
    id: 'zet-client',
    name: 'Zet Client',
    description: 'Премиальное решение для доминирования. Полный набор функций, обходы и оптимизация под любые ПК. Самый популярный выбор в комьюнити.',
    imageUrl: './zet.jpg', 
    discordLink: 'https://discord.gg/kKY437NH6c',
    primaryLink: 'https://funpay.com/users/10234938/',
    primaryLinkText: 'Магазин FunPay',
    isPaid: true,
    status: 'Undetected',
    version: 'v4.2.1'
  },
  {
    id: 'asterix-client',
    name: 'Asterix Client',
    description: 'Надежный бесплатный клиент. Простота в установке и мощный функционал для каждого игрока. Лучший выбор для старта.',
    imageUrl: './asterix.jpg',
    discordLink: 'https://discord.gg/yZEBcFFtTr',
    primaryLink: 'https://t.me/asterixclient/93',
    primaryLinkText: 'Скачать бесплатно',
    isPaid: false,
    status: 'Undetected',
    version: 'v1.0.5'
  }
];

export const NEWS_DATA: NewsItem[] = [
  { id: '1', date: 'СЕГОДНЯ', title: 'Zet Client Update', content: 'Обновлены обходы античита. Статус: Безопасно.' },
  { id: '2', date: 'ВЧЕРА', title: 'Asterix Fix', content: 'Исправлена работа визуальных функций на новых версиях.' }
];

export const SOCIALS: SocialLink[] = [
  {
    label: 'YouTube',
    value: '@HiNTi.k',
    icon: '📺',
    href: 'https://www.youtube.com/@HiNTi.k'
  },
  {
    label: 'Telegram',
    value: '@akex_C',
    icon: '💬',
    href: 'https://t.me/akex_C'
  },
  {
    label: 'Discord',
    value: 'grozoz',
    icon: '🤝',
    href: 'https://discord.gg/kKY437NH6c'
  }
];
