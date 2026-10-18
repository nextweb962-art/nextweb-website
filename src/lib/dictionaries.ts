export type Locale = "en" | "ar";

const en = {
  nav: {
    services: "Services",
    work: "Our Work",
    testimonials: "Testimonials",
    faq: "FAQ",
    contact: "Contact",
    cta: "Get a Quote",
  },
  hero: {
    badge: "AI-Powered Web Design & Development",
    titleStart: "Websites that grow",
    titleHighlight: "your business",
    subtitle:
      "We design and build fast, modern websites for businesses of every size. From your first landing page to a full online store, we handle everything so you can focus on your work.",
    primaryCta: "Start your project",
    secondaryCta: "See our work",
    livePreview: "Live preview",
    daylightLabel: "Daylight • High-gloss",
    furnitureLabel: "Furniture",
    compareLabel: "Hold to compare",
    floatValue: "+120%",
    floatLabel: "Sales growth",
    stats: [
      { value: "40+", label: "Projects delivered" },
      { value: "25+", label: "Happy clients" },
      { value: "98%", label: "On-time delivery" },
    ],
  },
  services: {
    eyebrow: "Services",
    title: "Everything you need online",
    subtitle:
      "We are two web developers handling your whole online presence. Pick what you need today and add more as you grow.",
    items: [
      {
        title: "Web Design",
        description:
          "Clean, modern designs that reflect your brand and turn visitors into customers.",
      },
      {
        title: "Web Development",
        description:
          "Fast, secure and reliable websites built with the latest technologies.",
      },
      {
        title: "E-commerce",
        description:
          "Online stores with smooth checkout, payments and inventory made simple.",
      },
      {
        title: "SEO & Performance",
        description:
          "Get found on Google with pages that load fast and rank higher.",
      },
      {
        title: "Maintenance & Support",
        description:
          "Updates, backups and fixes handled for you, so your site never sleeps.",
      },
      {
        title: "Branding",
        description:
          "Logos, colors and a consistent identity that makes you memorable.",
      },
    ],
  },
  process: {
    eyebrow: "How we work",
    title: "From idea to launch in 4 steps",
    subtitle: "A simple, clear process. You always know what happens next.",
    steps: [
      {
        title: "Tell us your idea",
        description:
          "Share your project and goals in a short call or message.",
      },
      {
        title: "We design",
        description:
          "You get a clean, modern design to review within days.",
      },
      {
        title: "We build",
        description: "We turn the design into a fast, responsive website.",
      },
      {
        title: "We launch",
        description: "We publish your site and stay by your side after launch.",
      },
    ],
  },
  faq: {
    eyebrow: "FAQ",
    title: "Common questions",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "It depends on the size and features you need. We always give you a clear, free quote before starting — no surprises.",
      },
      {
        question: "How long does it take?",
        answer:
          "A landing page takes a few days. Full websites and online stores take one to three weeks, depending on content and feedback speed.",
      },
      {
        question: "Can I update my website myself later?",
        answer:
          "Yes. We build on easy-to-manage platforms and hand over full access, or we can handle updates for you as a maintenance service.",
      },
      {
        question: "Will my website appear on Google?",
        answer:
          "Yes. Every site we build is fast, mobile-friendly and optimized with SEO basics so Google can find it and rank it.",
      },
      {
        question: "What do you need from me to start?",
        answer:
          "Your logo, texts and images if you have them. If you do not, we can help you create them.",
      },
      {
        question: "Do you offer support after launch?",
        answer:
          "Yes — 30 days of free support for bug fixes, plus ongoing maintenance plans if you want us to keep caring for your site.",
      },
    ],
  },
  ctaBand: {
    title: "Ready to start your project?",
    subtitle: "Get your free quote today — we reply within 24 hours.",
    button: "Get a Quote",
  },
  work: {
    eyebrow: "Our Work",
    title: "Websites we built for customers",
    subtitle:
      "A few recent projects. Every site is custom-built, fast and made to convert.",
    cta: "Want yours here? Let us talk",
    items: [
      {
        name: "Nova Store",
        tag: "E-commerce",
        description: "Online fashion store with fast checkout and 2x more sales.",
      },
      {
        name: "Bloom Studio",
        tag: "Portfolio",
        description:
          "Elegant portfolio for a photography studio with galleries.",
      },
      {
        name: "FinTrack",
        tag: "SaaS Dashboard",
        description:
          "Analytics dashboard for tracking business finances live.",
      },
      {
        name: "Urban Eats",
        tag: "Restaurant",
        description:
          "Menu, reservations and online ordering in one clean site.",
      },
      {
        name: "Peak Fitness",
        tag: "Landing Page",
        description:
          "High-converting landing page for a gym membership offer.",
      },
      {
        name: "MediCare Plus",
        tag: "Clinic Website",
        description: "Appointment booking and services for a medical clinic.",
      },
    ],
  },
  testimonials: {
    eyebrow: "Testimonials",
    title: "What our clients say",
    items: [
      {
        quote:
          "NextWeb rebuilt our store from scratch and sales doubled in three months. The site is fast, clean and our customers love it.",
        name: "Sara Mahmoud",
        role: "Owner, Nova Store",
      },
      {
        quote:
          "Working with them was easy from day one. They understood exactly what we needed and delivered ahead of schedule.",
        name: "Omar Khaled",
        role: "Founder, FinTrack",
      },
      {
        quote:
          "Our bookings went up 40% after the new website launched. Very professional, great communication, real results.",
        name: "Lina Haddad",
        role: "Manager, MediCare Plus",
      },
    ],
  },
  contact: {
    title: "Let us build your website",
    subtitle:
      "Tell us about your project and we will get back to you within 24 hours with a free quote.",
    phoneLabel: "Phone",
    phone: "+962 79 000 0000",
    locationLabel: "Location",
    location: "Remote — worldwide",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      email: "Email",
      emailPlaceholder: "you@company.com",
      type: "Project type",
      typePlaceholder: "Select a project type",
      types: [
        "Landing Page",
        "Business Website",
        "E-commerce Store",
        "Redesign / Improvement",
        "Something else",
      ],
      message: "Message",
      messagePlaceholder: "Tell us a little about your project...",
      submit: "Send message",
      note: "Free quote. No spam. We reply within 24 hours.",
    },
    success: {
      title: "Message sent",
      body: "Thanks for reaching out. We will reply within 24 hours with next steps.",
      again: "Send another message",
    },
  },
  footer: {
    tagline: "We build fast, modern websites that help businesses grow.",
    menu: "Menu",
    services: "Services",
    rights: "All rights reserved.",
  },
  terms: {
    title: "Terms & Conditions",
    updated: "Last updated: September 2026",
    intro:
      "These terms apply to all website design and development services provided by NextWeb, a web design and development service run by two freelance developers. By requesting a website from us, you agree to these terms.",
    sections: [
      {
        heading: "Services",
        body: "We design and build websites, landing pages and online stores as agreed in each project quote. Any work outside the agreed scope is quoted separately before it starts.",
      },
      {
        heading: "Payments",
        body: "Projects require a 50% deposit before work starts. The remaining 50% is due on completion, before the website goes live.",
      },
      {
        heading: "Revisions",
        body: "Each project includes up to three rounds of revisions during the design phase. Additional revisions can be quoted separately.",
      },
      {
        heading: "Content & Ownership",
        body: "You are responsible for providing the content of your website (text, images and logos). Once full payment is received, you own the final website design and code.",
      },
      {
        heading: "Timeline",
        body: "Delivery times are estimates and depend on timely feedback and content from your side. We will always keep you updated on progress.",
      },
      {
        heading: "Support",
        body: "We include 30 days of free support after launch for bug fixes. Ongoing maintenance and updates are available as a separate service.",
      },
      {
        heading: "Contact",
        body: "Questions about these terms? Call us at +962 79 000 0000.",
      },
    ],
  },
  meta: {
    title: "NextWeb — Websites that grow your business",
    description:
      "NextWeb designs and builds fast, modern websites for businesses of every size. See our work and get a free quote within 24 hours.",
  },
};

const ar: typeof en = {
  nav: {
    services: "الخدمات",
    work: "أعمالنا",
    testimonials: "آراء العملاء",
    faq: "الأسئلة الشائعة",
    contact: "تواصل معنا",
    cta: "اطلب عرض سعر",
  },
  hero: {
    badge: "تصميم وتطوير مواقع بالذكاء الاصطناعي",
    titleStart: "مواقع تنمّي",
    titleHighlight: "أعمالك",
    subtitle:
      "نصمّم ونبني مواقع سريعة وعصرية للشركات بكل أحجامها. من صفحتك الأولى على الإنترنت إلى متجر إلكتروني متكامل، نتولى كل شيء لتتفرّغ أنت لعملك.",
    primaryCta: "ابدأ مشروعك",
    secondaryCta: "شاهد أعمالنا",
    livePreview: "معاينة حية",
    daylightLabel: "نهاري • لمعان عالي",
    furnitureLabel: "الأثاث",
    compareLabel: "اضغط للمقارنة",
    floatValue: "+120%",
    floatLabel: "نمو في المبيعات",
    stats: [
      { value: "+40", label: "مشروع منجز" },
      { value: "+25", label: "عميل سعيد" },
      { value: "98%", label: "تسليم في الوقت" },
    ],
  },
  services: {
    eyebrow: "خدماتنا",
    title: "كل ما تحتاجه على الإنترنت",
    subtitle:
      "نحن مطوّران اثنان نتكفّل بكل حضورك الرقمي. اختر ما تحتاجه اليوم وأضف المزيد كلما نمت أعمالك.",
    items: [
      {
        title: "تصميم المواقع",
        description:
          "تصاميم عصرية وأنيقة تعكس هوية علامتك وتحوّل الزوّار إلى عملاء.",
      },
      {
        title: "تطوير المواقع",
        description: "مواقع سريعة وآمنة وموثوقة مبنية بأحدث التقنيات.",
      },
      {
        title: "المتاجر الإلكترونية",
        description: "متاجر إلكترونية مع تجربة دفع سلسة وإدارة مخزون بسيطة.",
      },
      {
        title: "السيو والأداء",
        description: "ظهور أعلى في نتائج جوجل بصفحات سريعة التحميل ومحسّنة.",
      },
      {
        title: "الصيانة والدعم",
        description:
          "تحديثات ونسخ احتياطية وإصلاحات نتولاها نيابة عنك ليبقى موقعك نشطاً دائماً.",
      },
      {
        title: "الهوية البصرية",
        description: "شعارات وألوان وهوية متناسقة تجعل علامتك لا تُنسى.",
      },
    ],
  },
  process: {
    eyebrow: "كيف نعمل",
    title: "من الفكرة إلى الإطلاق في 4 خطوات",
    subtitle: "عملية بسيطة وواضحة. تعرف دائماً ما الخطوة التالية.",
    steps: [
      {
        title: "أخبرنا بفكرتك",
        description: "شارك مشروعك وأهدافك في مكالمة أو رسالة قصيرة.",
      },
      {
        title: "نصمّم",
        description: "تحصل على تصميم عصري وأنيق للمراجعة خلال أيام.",
      },
      {
        title: "نبني",
        description: "نحوّل التصميم إلى موقع سريع ومتوافق مع كل الشاشات.",
      },
      {
        title: "نطلق موقعك",
        description: "ننشر موقعك ونبقى بجانبك بعد الإطلاق.",
      },
    ],
  },
  faq: {
    eyebrow: "الأسئلة الشائعة",
    title: "إجابات على أسئلتك",
    items: [
      {
        question: "كم تكلفة الموقع؟",
        answer:
          "تعتمد على حجم الموقع والمميزات التي تحتاجها. نعطيك دائماً عرض سعر واضحاً ومجانياً قبل البدء — بدون مفاجآت.",
      },
      {
        question: "كم يستغرق التنفيذ؟",
        answer:
          "صفحة الهبوط تستغرق أياماً قليلة. المواقع الكاملة والمتاجر الإلكترونية تستغرق من أسبوع إلى ثلاثة أسابيع حسب المحتوى وسرعة التغذية الراجعة.",
      },
      {
        question: "هل أستطيع تحديث موقعي بنفسي لاحقاً؟",
        answer:
          "نعم. نبني على منصات سهلة الإدارة ونسلّمك الوصول الكامل، أو نتولى التحديثات عنك كخدمة صيانة.",
      },
      {
        question: "هل سيظهر موقعي في جوجل؟",
        answer:
          "نعم. كل موقع نبنيه سريع ومتوافق مع الجوال ومحسّن بأساسيات السيو ليجده جوجل ويترتب فيه.",
      },
      {
        question: "ماذا تحتاجون مني للبدء؟",
        answer:
          "شعارك ونصوص وصور موقعك إن وجدت. وإن لم تتوفر، نساعدك في إنشائها.",
      },
      {
        question: "هل تقدمون دعماً بعد الإطلاق؟",
        answer:
          "نعم — 30 يوماً من الدعم المجاني لإصلاح الأخطاء، إضافة إلى خطط صيانة مستمرة إن أردتنا نعتني بموقعك دائماً.",
      },
    ],
  },
  ctaBand: {
    title: "جاهز تبدأ مشروعك؟",
    subtitle: "اطلب عرضك المجاني اليوم — نرد خلال 24 ساعة.",
    button: "اطلب عرض سعر",
  },
  work: {
    eyebrow: "أعمالنا",
    title: "مواقع بنيناها لعملائنا",
    subtitle:
      "مجموعة من مشاريعنا الأخيرة. كل موقع مبني خصيصاً، سريع ومصمّم لتحقيق نتائج حقيقية.",
    cta: "تريد موقعك هنا؟ لنتحدّث",
    items: [
      {
        name: "Nova Store",
        tag: "متجر إلكتروني",
        description: "متجر أزياء إلكتروني مع دفع سريع ضاعف المبيعات مرتين.",
      },
      {
        name: "Bloom Studio",
        tag: "معرض أعمال",
        description: "معرض أنيق لاستوديو تصوير فوتوغرافي مع معارض صور.",
      },
      {
        name: "FinTrack",
        tag: "لوحة تحكم SaaS",
        description: "لوحة تحليلات لتتبّع أموال شركتك لحظة بلحظة.",
      },
      {
        name: "Urban Eats",
        tag: "مطعم",
        description: "قائمة طعام وحجوزات وطلب أونلاين في موقع واحد نظيف.",
      },
      {
        name: "Peak Fitness",
        tag: "صفحة هبوط",
        description: "صفحة هبوط عالية التحويل لعرض اشتراك في نادٍ رياضي.",
      },
      {
        name: "MediCare Plus",
        tag: "موقع عيادة",
        description: "حجز مواعيد وخدمات لموقع عيادة طبية.",
      },
    ],
  },
  testimonials: {
    eyebrow: "آراء العملاء",
    title: "ماذا يقول عملاؤنا",
    items: [
      {
        quote:
          "أعادت NextWeb بناء متجرنا من الصفر، وتضاعفت المبيعات خلال ثلاثة أشهر. الموقع سريع وأنيق وعملاؤنا يحبونه.",
        name: "سارة محمود",
        role: "صاحبة Nova Store",
      },
      {
        quote:
          "كان العمل معهم سهلاً من اليوم الأول. فهموا تماماً ما احتجناه وسلّموا قبل الموعد المحدد.",
        name: "عمر خالد",
        role: "مؤسس FinTrack",
      },
      {
        quote:
          "ارتفعت حجوزاتنا بنسبة 40% بعد إطلاق الموقع الجديد. عمل احترافي وتواصل ممتاز ونتائج حقيقية.",
        name: "لينا حدّاد",
        role: "مديرة MediCare Plus",
      },
    ],
  },
  contact: {
    title: "لنبنِ موقعك معاً",
    subtitle:
      "أخبرنا عن مشروعك وسنعاود التواصل معك خلال 24 ساعة مع عرض سعر مجاني.",
    phoneLabel: "الهاتف",
    phone: "+962 79 000 0000",
    locationLabel: "الموقع",
    location: "عن بُعد — حول العالم",
    form: {
      name: "الاسم",
      namePlaceholder: "اسمك",
      email: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      type: "نوع المشروع",
      typePlaceholder: "اختر نوع المشروع",
      types: [
        "صفحة هبوط",
        "موقع شركة",
        "متجر إلكتروني",
        "إعادة تصميم أو تطوير",
        "شيء آخر",
      ],
      message: "رسالتك",
      messagePlaceholder: "حدّثنا قليلاً عن مشروعك...",
      submit: "إرسال الرسالة",
      note: "عرض سعر مجاني. بدون إزعاج. نرد خلال 24 ساعة.",
    },
    success: {
      title: "تم إرسال رسالتك",
      body: "شكراً لتواصلك معنا. سنرد عليك خلال 24 ساعة مع الخطوات التالية.",
      again: "إرسال رسالة أخرى",
    },
  },
  footer: {
    tagline: "نبني مواقع سريعة وعصرية تساعد الشركات على النمو.",
    menu: "روابط",
    services: "الخدمات",
    rights: "جميع الحقوق محفوظة.",
  },
  terms: {
    title: "الشروط والأحكام",
    updated: "آخر تحديث: سبتمبر 2026",
    intro:
      "تنطبق هذه الشروط على جميع خدمات تصميم وتطوير المواقع التي تقدمها NextWeb، خدمة تصميم وتطوير مواقع يديرها مطوّران مستقلان. بطلبك موقعاً مننا، فإنك توافق على هذه الشروط.",
    sections: [
      {
        heading: "الخدمات",
        body: "نصمم ونبني المواقع وصفحات الهبوط والمتاجر الإلكترونية حسب ما يُتفق عليه في عرض السعر لكل مشروع. أي عمل خارج النطاق المتفق عليه يُسعّر بشكل منفصل قبل البدء.",
      },
      {
        heading: "المدفوعات",
        body: "يتطلب المشروع دفعة مقدمة 50% قبل بدء العمل، ويُستحق الـ 50% المتبقية عند الإنجاز وقبل إطلاق الموقع.",
      },
      {
        heading: "التعديلات",
        body: "يشمل كل مشروع حتى ثلاث جولات من التعديلات خلال مرحلة التصميم. يمكن تسعير التعديلات الإضافية بشكل منفصل.",
      },
      {
        heading: "المحتوى والملكية",
        body: "أنت مسؤول عن توفير محتوى موقعك (النصوص والصور والشعارات). بعد استلام كامل المبلغ، تصبح مالك التصميم النهائي وكود الموقع.",
      },
      {
        heading: "الجدول الزمني",
        body: "أوقات التسليم تقديرية وتعتمد على سرعة ردك وتزويدنا بالمحتوى. سنطلعك دائماً على حالة العمل.",
      },
      {
        heading: "الدعم",
        body: "نوفر 30 يوماً من الدعم المجاني بعد الإطلاق لإصلاح الأخطاء. الصيانة والتحديثات المستمرة متوفرة كخدمة منفصلة.",
      },
      {
        heading: "التواصل",
        body: "لديك أسئلة حول هذه الشروط؟ اتصل بنا على +962 79 000 0000.",
      },
    ],
  },
  meta: {
    title: "NextWeb — مواقع تنمّي أعمالك",
    description:
      "نصمّم ونبني مواقع سريعة وعصرية للشركات بكل أحجامها. شاهد أعمالنا واحصل على عرض سعر مجاني خلال 24 ساعة.",
  },
};

export const locales: Locale[] = ["en", "ar"];

export const dictionaries: Record<Locale, typeof en> = { en, ar };

export type Dictionary = typeof en;

export const hasLocale = (value: string): value is Locale =>
  locales.includes(value as Locale);

export const getDictionary = (locale: Locale): Dictionary => dictionaries[locale];
