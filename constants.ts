import { MenuItem, Chef, Review, ThemeConfig, ThemeStyle, TimeOfDay } from './types';

// Theme Configurations adapted for Weather (Morning=Sun, Noon=Rain, Night=Snow)
export const THEMES: Record<ThemeStyle, Record<TimeOfDay, ThemeConfig>> = {
  [ThemeStyle.ROYAL]: {
    [TimeOfDay.MORNING]: {
      bg: 'bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-200', // Warm Sunny
      text: 'text-amber-950',
      accent: 'bg-amber-600',
      accentText: 'text-amber-700',
      navBg: 'bg-amber-50/80 backdrop-blur-md shadow-amber-200/50',
      cardBg: 'bg-white/70 shadow-xl border border-amber-200/50',
      fontHeading: 'font-playfair',
      fontBody: 'font-lato',
    },
    [TimeOfDay.NOON]: {
      bg: 'bg-gradient-to-b from-slate-300 via-blue-200 to-slate-400', // Rainy/Cloudy
      text: 'text-slate-900',
      accent: 'bg-blue-700',
      accentText: 'text-blue-900',
      navBg: 'bg-slate-200/80 backdrop-blur-md shadow-lg border-b border-white/20',
      cardBg: 'bg-white/60 shadow-2xl border border-blue-200/30',
      fontHeading: 'font-playfair',
      fontBody: 'font-lato',
    },
    [TimeOfDay.NIGHT]: {
      bg: 'bg-gradient-to-br from-gray-900 via-indigo-950 to-black', // Snowy Night
      text: 'text-indigo-50',
      accent: 'bg-indigo-500',
      accentText: 'text-indigo-300',
      navBg: 'bg-black/60 backdrop-blur-xl border-b border-white/5',
      cardBg: 'bg-white/5 shadow-2xl border border-white/10 backdrop-blur-sm', 
      fontHeading: 'font-playfair',
      fontBody: 'font-lato',
    },
  },
  [ThemeStyle.MODERN]: {
    [TimeOfDay.MORNING]: {
      bg: 'bg-gradient-to-tr from-sky-100 to-indigo-100',
      text: 'text-slate-800',
      accent: 'bg-sky-500',
      accentText: 'text-sky-600',
      navBg: 'bg-white/90 backdrop-blur-md shadow-sm',
      cardBg: 'bg-white shadow-lg',
      fontHeading: 'font-sans',
      fontBody: 'font-sans',
    },
    [TimeOfDay.NOON]: {
      bg: 'bg-gradient-to-b from-gray-400 to-slate-600',
      text: 'text-white',
      accent: 'bg-teal-500',
      accentText: 'text-teal-200',
      navBg: 'bg-slate-800/80 backdrop-blur-md shadow-md',
      cardBg: 'bg-slate-700/80 shadow-xl border border-white/10',
      fontHeading: 'font-sans',
      fontBody: 'font-sans',
    },
    [TimeOfDay.NIGHT]: {
      bg: 'bg-[conic-gradient(at_bottom_left,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900',
      text: 'text-white',
      accent: 'bg-purple-500',
      accentText: 'text-purple-300',
      navBg: 'bg-black/50 backdrop-blur-xl border-b border-white/10',
      cardBg: 'bg-black/40 backdrop-blur-md border border-white/5',
      fontHeading: 'font-sans',
      fontBody: 'font-sans',
    },
  },
  [ThemeStyle.ORGANIC]: {
    [TimeOfDay.MORNING]: {
      bg: 'bg-gradient-to-br from-lime-50 via-green-100 to-emerald-50',
      text: 'text-emerald-900',
      accent: 'bg-emerald-600',
      accentText: 'text-emerald-700',
      navBg: 'bg-white/70 backdrop-blur-lg border-b border-emerald-100',
      cardBg: 'bg-white/80 shadow-lg border border-emerald-50',
      fontHeading: 'font-cormorant',
      fontBody: 'font-lato',
    },
    [TimeOfDay.NOON]: {
      bg: 'bg-gradient-to-b from-stone-300 to-stone-500', // Wet Earth
      text: 'text-stone-950',
      accent: 'bg-stone-700',
      accentText: 'text-stone-900',
      navBg: 'bg-stone-200/80 backdrop-blur-md shadow-md',
      cardBg: 'bg-stone-100/90 shadow-xl border border-stone-300',
      fontHeading: 'font-cormorant',
      fontBody: 'font-lato',
    },
    [TimeOfDay.NIGHT]: {
      bg: 'bg-gradient-to-b from-stone-900 to-neutral-900',
      text: 'text-stone-200',
      accent: 'bg-orange-600', // Fire/Warmth in cold
      accentText: 'text-orange-400',
      navBg: 'bg-stone-900/80 backdrop-blur-md border-b border-white/5',
      cardBg: 'bg-stone-800/60 shadow-2xl border border-white/5',
      fontHeading: 'font-cormorant',
      fontBody: 'font-lato',
    },
  },
};

// Data
export const MENU_ITEMS: MenuItem[] = [
  { id: 1, name: "Фуа-гра с инжиром", description: "Нежный паштет с карамелизированным инжиром и бальзамическим кремом.", price: "2 500 ₽", category: "Закуски" },
  { id: 2, name: "Тартар из говядины", description: "Мраморная говядина, каперсы, трюфельное масло, перепелиное яйцо.", price: "1 800 ₽", category: "Закуски" },
  { id: 3, name: "Стейк Рибай", description: "Мраморная говядина Prime, подается с овощами гриль и перечным соусом.", price: "4 200 ₽", category: "Основные блюда" },
  { id: 4, name: "Утка конфи", description: "Томленая утиная ножка с пюре из батата и ягодным соусом.", price: "2 100 ₽", category: "Основные блюда" },
  { id: 5, name: "Морской гребешок", description: "Обжаренные гребешки с пюре из цветной капусты и икрой.", price: "2 900 ₽", category: "Морепродукты" },
  { id: 6, name: "Шоколадная сфера", description: "Бельгийский шоколад, мусс из маракуйи, горячий шоколадный соус.", price: "1 200 ₽", category: "Десерты" },
];

export const CHEFS: Chef[] = [
  {
    id: 1,
    name: "Станислав Петров",
    role: "Шеф-повар",
    bio: "Основатель и вдохновитель. Стажировался в лучших ресторанах Парижа и Токио. Мастер сочетания текстур.",
    image: "https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    name: "Елена Смирнова",
    role: "Су-шеф",
    bio: "Специалист по молекулярной кухне. Отвечает за инновации в нашем меню и идеальную подачу.",
    image: "https://images.unsplash.com/photo-1566554273541-37a9ca77b91f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    name: "Дмитрий Волков",
    role: "Шеф-кондитер",
    bio: "Волшебник десертов. Его шоколадная сфера известна на весь город.",
    image: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?auto=format&fit=crop&w=600&q=80"
  }
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Алексей М.", text: "Лучший ресторан в городе. Атмосфера просто невероятная, а еда — это искусство.", rating: 5 },
  { id: 2, name: "Мария К.", text: "Удивительное обслуживание. Шеф лично вышел в зал поприветствовать гостей.", rating: 5 },
  { id: 3, name: "Иван Д.", text: "Стейк был идеальной прожарки. Обязательно вернусь снова.", rating: 5 },
];