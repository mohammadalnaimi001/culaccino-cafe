'use strict';

/* ============================================================
   كولاتشينو — Culaccino Coffee House · شارع الكرامة، الزرقاء
   Central configuration — edit this file to change café details,
   areas, and capacity.
   ============================================================ */

const cafe = {
  nameAr: 'كولاتشينو',
  nameEn: 'Culaccino',
  taglineAr: 'قهوة، فطور، وجلسات هادية — على شارع الكرامة في الزرقاء',
  taglineEn: 'Coffee, breakfast and a calm place to sit — on Al-Karama St, Zarqa',
  categoryAr: 'مقهى',
  categoryEn: 'Café',
  rating: 4.6,
  reviewsCount: 978,
  priceRangeAr: '١ – ٥ د.أ للشخص',
  priceRangeEn: '1 – 5 JOD per person',
  phoneDisplay: '077 018 6360',
  phoneIntl: '962770186360',
  email: 'info@culaccino.jo',
  cityAr: 'الزرقاء، الأردن',
  cityEn: 'Zarqa, Jordan',
  streetAr: 'شارع الكرامة',
  streetEn: 'Al-Karama St',
  plusCode: '33WP+9X',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Culaccino+Coffee+House+Al-Karama+St+Zarqa',
  mapsEmbed: 'https://maps.google.com/maps?q=33WP%2B9X%20Zarqa&t=&z=16&ie=UTF8&iwloc=&output=embed',

  // خرائط جوجل بتعرض زر "تقديم طلب" عبر طلبات — بدّل الرابط لصفحتكم المباشرة على طلبات
  orderUrl: 'https://www.talabat.com/jordan',
  // ما في موقع إلكتروني أو صفحة مسجّلة على خرائط جوجل — الرابط مخفي تلقائياً.
  // حط رابط صفحتكم هون وبيظهر لحاله في الفوتر.
  facebookUrl: '',

  // ساعات العمل: جوجل بتذكر إنه بيسكّر ١٢ منتصف الليل. ← وقت الافتتاح غير مذكور،
  // خلّيناه ١٠ ص (قيمة القالب) — غيّره لوقتك الحقيقي.
  openHour: 10,
  closeHour: 0, // 0 = منتصف الليل (مؤكّد من خرائط جوجل)

  // المقهى مش مقهى أرجيلة — قسم الأرجيلة والمباريات مخفي.
  // خلّيها true إذا بدك ترجّعه (وارجع ضيف تصنيف "أرجيلة" في data/menu.json).
  showShishaSection: false,

  bookingPrefix: 'CU', // بادئة رقم الحجز، مثال: CU-A7X2QM
  currencyAr: 'د.أ',
  currencyEn: 'JOD'
};

/* الأقسام القابلة للحجز — المقهى طابقين حسب مراجعات جوجل
   ("الطابق العلوي بيسكر الساعة ١١").
   ⚠️ أعداد المقاعد تقديرية — عدّلها لأرقامك الحقيقية. */
const areas = [
  {
    id: 'ground',
    nameAr: 'الطابق الأرضي',
    nameEn: 'Ground Floor',
    descAr: 'الطابق الرئيسي — الكاشير والمنيو هون، والجلسات مريحة ومناسبة للعائلات.',
    descEn: 'The main floor — the counter and menu are here, with comfortable seating suited to families.',
    capacity: 60,
    shisha: false,
    icon: 'sofa'
  },
  {
    id: 'upper',
    nameAr: 'الطابق العلوي',
    nameEn: 'Upper Floor',
    descAr: 'جلسات أهدأ فوق — مناسبة للدراسة والشغل. بيسكّر الساعة ١١ مساءً.',
    descEn: 'Quieter seating upstairs — good for studying and working. Closes at 11 PM.',
    capacity: 40,
    shisha: false,
    icon: 'star'
  }
];

const occasions = [
  { id: 'casual',   nameAr: 'قعدة عادية',        nameEn: 'Casual visit' },
  { id: 'family',   nameAr: 'قعدة عائلية',        nameEn: 'Family gathering' },
  { id: 'study',    nameAr: 'دراسة أو شغل',       nameEn: 'Study or work' },
  { id: 'business', nameAr: 'اجتماع عمل',         nameEn: 'Business meeting' },
  { id: 'birthday', nameAr: 'عيد ميلاد',          nameEn: 'Birthday' }
];

/* A reservation is assumed to hold its seats for this many minutes. */
const SLOT_HOLD_MINUTES = 120;
/* Reservations can be made this many days ahead. */
const MAX_DAYS_AHEAD = 60;
/* Minimum minutes ahead of now that a booking can be made. */
const MIN_LEAD_MINUTES = 45;

module.exports = { cafe, areas, occasions, SLOT_HOLD_MINUTES, MAX_DAYS_AHEAD, MIN_LEAD_MINUTES };
