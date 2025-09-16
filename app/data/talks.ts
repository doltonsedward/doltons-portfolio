import dayjs from 'dayjs';
import { TalkDataTypes, TalkStatusType } from '../talks/types';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

export const TALKS_DATA: TalkDataTypes[] = [
  {
    id: 'cmf2n209q000704jmgjwaewel',
    title: 'Membangun Personal Branding Melalui Website sebagai Mahasiswa IT',
    shortDesc:
      'Pelajari cara membangun personal branding profesional melalui website untuk mahasiswa IT.',
    description:
      'Sebagai mahasiswa di bidang IT, personal branding yang baik akan menjadi nilai tambah besar dalam perjalanan kariermu. Webinar ini menghadirkan Doltons Edward (Mentor Coding Skilvul) bersama Satrio Binusa Suryadi, S.S, M.Pd (Dosen Teknologi Informasi Politeknik Negeri Malang), yang akan membagikan strategi dan praktik membangun personal branding melalui website. Sesi ini dirancang agar mahasiswa dapat memahami pentingnya profil digital profesional untuk membuka peluang karier di masa depan.',
    type: 'webinar',
    datetime: '2023-09-07T19:00:00',
    duration: 7200,
    audience: 'Skilhub x ITDEC Polinema Students',
    platform: 'Zoom',
    registrationUrl: 'http://bit.ly/skilhub-itdec',
    topics: ['Personal Branding', 'Web Development', 'Career'],
    bannerImage:
      'https://assets.skilvul.com/webinarSession/skilhub-x-itdec-polinema-membangun-personal-branding-melalui-website-sebagai-mahasiswa-it-1693360310187.jpg',
    cardImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/Membangun-Personal-Branding-Melalui-Website-sebagai-Mahasiswa-IT.jpg',
    bannerAlt:
      'Webinar membangun personal branding melalui website untuk mahasiswa IT',
    attendees: 290,
  },
  {
    id: 'cmf2n1ngf000104jm8c481e6e',
    title: 'Why Should You Learn Typescript',
    shortDesc:
      'Kenalan dengan TypeScript, perbedaannya dengan JavaScript, dan cara memulainya.',
    description:
      "Talk ini mengangkat topik 'Why Should You Learn TypeScript' bersama Doltons Edward (Mentor Skilvul). Peserta akan diajak memahami apa itu TypeScript, mengapa TypeScript menjadi penting dalam pengembangan modern, serta bagaimana perbedaannya dengan JavaScript. Sesi ini juga akan membahas langkah awal belajar TypeScript disertai dengan studi kasus sederhana agar peserta bisa langsung merasakan manfaatnya.",
    type: 'webinar',
    datetime: '2022-05-20T19:00:00',
    duration: 5400,
    audience: 'Frontend Developers & SkilHub Members',
    platform: 'Zoom',
    registrationUrl: 'https://bit.ly/Join-SkilHub',
    topics: ['TypeScript', 'JavaScript', 'Frontend Development'],
    bannerImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/why-should-you-learn-typescript.jpg',
    cardImage:
      'https://assets.skilvul.com/webinarSession/skilmate-talk-why-should-you-learn-typescript-details-1652773624046.jpg',
    bannerAlt: 'Webinar banner Why Should You Learn TypeScript',
    attendees: 54,
  },
  {
    id: 'cmf4abc0000104jm8c481e6e',
    title: 'Malam Minggu Happy: Mengenal Cyber Security',
    shortDesc:
      'Sesi santai di malam minggu untuk mengenal dasar-dasar cyber security bersama Skilvul dan GDSC Universitas Hasanudin.',
    description:
      "Talk ini mengangkat topik 'Malam Minggu Happy: Mengenal Cyber Security' hasil kolaborasi Skilvul x GDSC Universitas Hasanudin. Peserta akan diperkenalkan pada konsep dasar cyber security, tantangan keamanan digital masa kini, serta praktik baik menjaga keamanan diri di dunia maya. Sesi ini dikemas secara ringan agar tetap seru di malam minggu.",
    type: 'webinar',
    datetime: '2023-11-04T19:00:00',
    duration: 5400,
    audience: 'Skilvul x GDSC Universitas Hasanudin',
    platform: 'Zoom',
    registrationUrl:
      'https://skilvul.com/events/skilvul-x-gdsc-universitas-hasanudin-x-coder-institute-malam-minggu-happy-mengenal-cyber-security/',
    topics: ['Cyber Security', 'Digital Safety', 'Awareness'],
    bannerImage:
      'https://assets.skilvul.com/webinarSession/skilvul-x-gdsc-universitas-hasanudin-x-coder-institute-malam-minggu-happy-mengenal-cyber-security-details-1698051448740.jpg',
    cardImage:
      'https://assets.skilvul.com/webinarSession/skilvul-x-gdsc-universitas-hasanudin-x-coder-institute-malam-minggu-happy-mengenal-cyber-security-details-1698051448740.jpg',
    bannerAlt: 'Webinar banner Malam Minggu Happy: Mengenal Cyber Security',
    attendees: 204,
  },
  {
    id: 'cmf2n1gc5000004jm2hkngzc0',
    title: 'Membangun Karir Sukses Sebagai Web Developer',
    shortDesc:
      'Cari tahu realita dan strategi membangun karier sebagai web developer bersama Doltons Edward di sesi webinar ini.',
    description:
      'Apakah berkarier sebagai web developer sesulit yang dibayangkan? Dalam webinar ini, Doltons Edward (Coding Mentor di Skilvul) akan membagikan pengalaman dan pengetahuan seputar perjalanan karier seorang web developer, mulai dari tantangan awal, keterampilan yang perlu dikuasai, hingga tips praktis menghadapi persaingan industri. Sesi ini juga akan menjadi ruang interaktif untuk menjawab pertanyaan peserta seputar roadmap karier dan pengembangan diri sebagai developer.',
    type: 'webinar',
    datetime: '2023-10-05T19:00:00',
    duration: 5400,
    audience: 'Mahasiswa & Calon Web Developers',
    platform: 'Zoom',
    registrationUrl: 'https://bit.ly/skilhub-irichundip',
    topics: ['Career', 'Web Development', 'Frontend', 'Backend'],
    bannerImage:
      'https://assets.skilvul.com/webinarSession/skilhub-x-i-rich-undip-membangun-karier-sukses-sebagai-web-developer-details-1695714477710.jpg',
    cardImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/Membangun-Karier-Sukses-Sebagai-Web-Developer.jpg',
    bannerAlt: 'Webinar membangun karier sukses sebagai web developer',
    attendees: 100,
  },

  {
    id: 'cmf2n1qr4000204jm1o2j1t6j',
    title: 'Roadmap to Web Development Mastery: A Comprehensive Guide',
    shortDesc:
      'Panduan roadmap lengkap untuk menjadi web developer profesional.',
    description:
      'Sesi webinar kolaborasi SkilHub x HIMSI UMDP ini akan membahas roadmap komprehensif menuju penguasaan web development. Mulai dari keterampilan dasar, tools penting, hingga teknologi terbaru yang perlu dipelajari untuk mencapai level profesional. Doltons Edward akan memandu peserta memahami tahapan belajar, strategi efisien, serta tips menghadapi dinamika industri teknologi.',
    type: 'webinar',
    datetime: '2023-08-18T19:00:00',
    duration: 5400,
    audience: 'SkilHub x HIMSI UMDP',
    platform: 'Zoom',
    registrationUrl: 'https://bit.ly/SkilhubXHIMSIUMDP',
    topics: ['Roadmap', 'Web Development', 'Career'],
    bannerImage:
      'https://assets.skilvul.com/webinarSession/skilhub-x-himsi-umdp-roadmap-to-web-development-mastery-a-comprehensive-guide-1689581674201.jpg',
    cardImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/Roadmap-to-Web-Development-Mastery-A-Comprehensive-Guide.jpg',
    bannerAlt: 'Webinar roadmap to web development mastery',
    attendees: 354,
  },
  {
    id: 'cmf2n25op000804jmbpqtdwn6',
    title: 'Exploring the World of Web Development',
    shortDesc: 'Eksplorasi dunia web development dan peluang yang bisa digali.',
    description:
      'Webinar ini mengajak peserta untuk mengeksplorasi dunia web development, mulai dari fondasi teknologi, tren industri, hingga peluang karier yang tersedia. Doltons Edward akan memandu peserta memahami cakupan web development dan bagaimana memulai perjalanan sebagai developer.',
    type: 'webinar',
    datetime: '2024-07-31T19:00:00',
    duration: 5400,
    audience: 'Skilhub CodeLab Members',
    platform: 'Zoom',
    registrationUrl: 'https://bit.ly/codeLab-8',
    topics: ['Web Development', 'Career', 'Frontend', 'Backend'],
    bannerImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/codeLab-Eps-8-Exploring-the-World-of-Web-Development.png',
    cardImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/codeLab-Eps-8-Exploring-the-World-of-Web-Development.png',
    bannerAlt: 'Webinar exploring the world of web development',
    attendees: 196,
  },
  {
    id: 'cmf2n2axw000904jm72bu18id',
    title: 'Unveiling the Career Opportunity of Web Development',
    shortDesc: 'Temukan peluang karier menarik di bidang web development.',
    description:
      'Web development tidak hanya soal coding, tetapi juga tentang peluang karier yang luas di industri teknologi. Dalam webinar ini, Doltons Edward akan membahas potensi karier web developer, skill yang dibutuhkan, serta bagaimana membangun jalur profesional di dunia digital.',
    type: 'webinar',
    datetime: '2023-07-14T19:00:00',
    duration: 3600,
    audience: 'Skilvul CommuniTalks Members',
    platform: 'Zoom',
    registrationUrl: '',
    topics: ['Web Development', 'Career Opportunities', 'Tech Industry'],
    bannerImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/Unveiling-the-Career-Opportunity-of-Web-Development.png',
    cardImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/Unveiling-the-Career-Opportunity-of-Web-Development.png',
    bannerAlt: 'Webinar unveiling the career opportunity of web development',
    attendees: 12,
  },
  {
    id: 'cmf2n2j6j000a04jm526k9vj6',
    title: 'Learning About Tailwind Framework',
    shortDesc: 'Belajar Tailwind CSS Framework untuk membangun website modern.',
    description:
      'Sesi ini mengajak peserta memahami dasar-dasar penggunaan Tailwind CSS Framework untuk membangun website modern yang responsif dan efisien. Doltons Edward akan menjelaskan konsep utility-first CSS, praktik implementasi, serta tips mempercepat workflow dalam pengembangan frontend.',
    type: 'webinar',
    datetime: '2024-05-28T19:00:00',
    duration: 5400,
    audience: 'Skilhub CodeLab Members',
    platform: 'Zoom',
    registrationUrl: 'https://bit.ly/codeLab-6',
    topics: ['Tailwind CSS', 'Frontend Development', 'Web Design'],
    bannerImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/codeLab-Eps-6-Learning-About-Tailwind-Framework.jpeg',
    cardImage:
      'https://skilvul-prod-01.s3.ap-southeast-1.amazonaws.com/webinarSession/codeLab-Eps-6-Learning-About-Tailwind-Framework.jpeg',
    bannerAlt: 'Webinar learning about Tailwind framework',
    attendees: 207,
  },
];

const now = dayjs();

export const upcomingTalks = TALKS_DATA.filter((talk) =>
  dayjs(talk.datetime).isAfter(now)
);

export const pastTalks = TALKS_DATA.filter((talk) =>
  dayjs(talk.datetime).add(talk.duration, 'second').isBefore(now)
);

export const ongoingTalks = TALKS_DATA.filter((talk) =>
  now.isBetween(
    dayjs(talk.datetime),
    dayjs(talk.datetime).add(talk.duration, 'second'),
    null,
    '[)'
  )
);

export function getTalksWithStatus(): (TalkDataTypes & {
  status: TalkStatusType;
})[] {
  const now = dayjs();

  return TALKS_DATA.map((talk) => {
    const start = dayjs(talk.datetime);
    const end = start.add(talk.duration, 'second');

    let status: TalkStatusType;
    if (start.isAfter(now)) {
      status = 'upcoming';
    } else if (end.isBefore(now)) {
      status = 'past';
    } else {
      status = 'ongoing';
    }

    return {
      ...talk,
      status,
    };
  });
}
