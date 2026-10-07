import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Map, BookOpen, Terminal, Calendar, Castle, Crown, Sparkles, User, Lock, Unlock, Home, Users } from 'lucide-react';

const Petals = () => {
  const [petals, setPetals] = useState<{ id: number; left: string; duration: string; delay: string; size: string }[]>([]);

  useEffect(() => {
    const newPetals = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      duration: `${Math.random() * 8 + 7}s`,
      delay: `${Math.random() * 10}s`,
      size: `${Math.random() * 0.5 + 0.5}rem`,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 opacity-40">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute top-[-10%] bg-rose-200 rounded-tl-full rounded-br-full animate-fall"
          style={{
            left: petal.left,
            width: petal.size,
            height: petal.size,
            animationDuration: petal.duration,
            animationDelay: petal.delay,
          }}
        />
      ))}
    </div>
  );
};

export type Language = 'ko' | 'en' | 'ja';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
}

const LanguageContext = React.createContext<LanguageContextType>({
  lang: 'ko',
  setLang: () => {},
});

export const useLanguage = () => React.useContext(LanguageContext);

const homeTranslations = {
  ko: {
    titleMain: "악녀 사냥",
    titleSub: "｜황녀의 가면을 벗겨라",
    prologueTitle: "프롤로그",
    prologueTexts: [
      "* 믿었던 '천사' 친구의 배신을 깨달은 순간.",
      "* 지난 학기의 지옥 같았던 고립이 그녀의 완벽한 계략이었음을 인지함.",
      "* 다시 찾아온 새 학기, 가식의 가면을 쓴 황녀와의 은밀한 사냥을 시작함.",
      "* 그녀의 가장 소중한 '말'들을 빼앗아 그녀를 나락으로 떨어뜨리는 피카레스크 로판."
    ],
    academyTitle: "루민플로르 아카데미",
    academyTexts: [
      "* 귀족 자제들만이 입학할 수 있는 4년제 종합 대학임.",
      "* 기숙사 대신 각 가문의 타운하우스에서 통학하는 시스템을 채택함.",
      "* 정해진 교복 없이 자유로운 복장이며, 마력이 깃든 학생증을 신분증으로 사용함.",
      "* 단순한 학업을 넘어 젊은 귀족들이 미래의 권력을 위해 인맥을 형성하는 사교의 중심지임."
    ],
    calendarTitle: "주요 학사일정",
    calendarItems: [
      { m: '3월', d: '개강 / 둘째 주 사교 주간 (티파티 등)' },
      { m: '4월', d: '셋째 주 춘계 중간고사' },
      { m: '5월', d: '첫째 주 개화제 (Floralia) 교내 봄꽃 축제' },
      { m: '6월', d: '셋째 주 춘계 기말고사 및 종강' },
      { m: '7~8월', d: '하계 방학 (과제: 외곽 영지 시찰 보고서)' },
      { m: '9월', d: '개강 / 넷째 주 대풍요제 (Fructus) 건국기념 및 추수감사 주간' },
      { m: '10월', d: '셋째 주 추계 중간고사' },
      { m: '11월', d: '초 졸업 무도회 파트너 등록 시작, 월말 마감' },
      { m: '12월', d: '넷째 주 추계 기말고사 및 종강' },
      { m: '1월', d: '동계 방학 (과제: 관공서 수습 2주)' },
      { m: '2월', d: '둘째 주 수습보고서 마감 / 그랜드 왈츠 (졸업/진급 무도회) / 졸업식' },
    ]
  },
  en: {
    titleMain: "Villainess Hunt",
    titleSub: "| Unmask the Princess",
    prologueTitle: "Prologue",
    prologueTexts: [
      "* The moment you realized the betrayal of your trusted 'angel' friend.",
      "* Realizing that the hellish isolation of last semester was her meticulous scheme.",
      "* With the new semester here, begin a secretive hunt against the princess wearing a mask of deceit.",
      "* A picaresque romance fantasy: strip away her most treasured 'pieces' and cast her down into the abyss."
    ],
    academyTitle: "Luminflor Academy",
    academyTexts: [
      "* A 4-year comprehensive university where only noble scions may matriculate.",
      "* Employs a commuting system from each noble family's townhouses instead of dormitories.",
      "* Free attire with no set uniform; mana-imbued student identification cards serve as status credentials.",
      "* Beyond mere academics, a high-society nexus where young aristocrats forge networks for future power."
    ],
    calendarTitle: "Key Academic Calendar",
    calendarItems: [
      { m: 'Mar', d: 'Semester begins / 2nd week Social Week (tea parties, etc.)' },
      { m: 'Apr', d: '3rd week Spring Midterm Examinations' },
      { m: 'May', d: '1st week Floralia (Campus Spring Flower Festival)' },
      { m: 'Jun', d: '3rd week Spring Final Examinations & Semester ends' },
      { m: 'Jul–Aug', d: 'Summer Vacation (Assignment: Outer Territory Inspection Report)' },
      { m: 'Sep', d: 'Semester begins / 4th week Fructus Festival (Foundation Day & Thanksgiving Week)' },
      { m: 'Oct', d: '3rd week Autumn Midterm Examinations' },
      { m: 'Nov', d: 'Early month Graduation Ball partner registration begins, deadline at month-end' },
      { m: 'Dec', d: '4th week Autumn Final Examinations & Semester ends' },
      { m: 'Jan', d: 'Winter Vacation (Assignment: 2-week Public Office Apprenticeship)' },
      { m: 'Feb', d: '2nd week Apprenticeship Report deadline / Grand Waltz (Graduation/Advancement Ball) / Commencement' },
    ]
  },
  ja: {
    titleMain: "悪女狩り",
    titleSub: "｜皇女の仮面を剥ぎ取れ",
    prologueTitle: "プロローグ",
    prologueTexts: [
      "* 信じていた「天使」の友人の裏切りに気づいた瞬間。",
      "* 前学期の地獄のような孤立が、彼女の完璧な策略であったことを知る。",
      "* 再び訪れた新学期、偽善の仮面をかぶった皇女との秘密裏な狩りを始める。",
      "* 彼女の最も大切な「駒」たちを奪い去り、彼女を奈落へと突き落とすピカレスク・ロファン。"
    ],
    academyTitle: "ルミンフロール・アカデミー",
    academyTexts: [
      "* 貴族の子女のみが入学できる4年制総合大学。",
      "* 寮の代わりに各家門のタウンハウスから通学するシステムを採用。",
      "* 指定の制服はなく自由な服装で、魔力が宿る学生証を身分証として使用。",
      "* 単なる学業にとどまらず、若き貴族たちが未来の権力のために人脈を築く社交の中心地。"
    ],
    calendarTitle: "主な学事日程",
    calendarItems: [
      { m: '3月', d: '開講 / 第2週 社交週間（ティーパーティー等）' },
      { m: '4月', d: '第3週 春季中間考査' },
      { m: '5月', d: '第1週 開花祭（Floralia）学内春花祭り' },
      { m: '6月', d: '第3週 春季期末考査および終講' },
      { m: '7〜8月', d: '夏季休暇（課題：外郭領地視察報告書）' },
      { m: '9月', d: '開講 / 第4週 大豊饒祭（Fructus）建国記念および収穫感謝週間' },
      { m: '10月', d: '第3週 秋季中間考査' },
      { m: '11月', d: '初旬 卒業舞踏会パートナー登録開始、月末締切' },
      { m: '12月', d: '第4週 秋季期末考査および終講' },
      { m: '1月', d: '冬季休暇（課題：官公庁実習2週間）' },
      { m: '2月', d: '第2週 実習報告書締切 / グランドワルツ（卒業・進級舞踏会） / 卒業式' },
    ]
  }
};

const guideTranslations = {
  ko: {
    title: "🌹 경지 가이드",
    intro1: "* 루민플로르 아카데미에서의 원활한 롤플레잉과 페르소나 설정을 위한 무력/마법 등급 안내임.",
    intro2: "* 캐릭터의 설정에 맞게 참고 바람.",
    swordsman: {
      title: "⚔️ 검사 (Swordsman)",
      desc: "* 마나를 육체에 받아들여 신체를 강화하고 검에 담아내는 자들임.",
      ranks: [
        { name: "견습 기사 / 일반 기사", desc: "마나를 느끼고 신체를 강화하며, 검에 옅게 마나를 씌울 수 있는 기본적인 단계임." },
        { name: "소드 엑스퍼트 (Sword Expert)", desc: "마나를 뚜렷한 기운(오라)으로 방출하여 검기를 날릴 수 있는 숙련자임. 기사단장이나 정예 기사들이 이 경지에 머묾." },
        { name: "소드 마스터 (Sword Master)", desc: "오라를 물리적인 검의 형태(검강)로 응집시키는 초인적인 경지임. 제국 전체를 통틀어도 손에 꼽을 만큼 희귀하며, 일당백을 넘어선 절대적인 무력을 자랑함." },
        { name: "그랜드 마스터 (Grand Master)", desc: "인간의 한계를 초월하여 공간을 베어내는 전설 속의 경지임." },
      ]
    },
    mage: {
      title: "🔮 마법사 (Mage)",
      desc1: "* 심장에 마나를 모으는 고리(서클)를 쌓아 올려 세계의 법칙을 비트는 자들임.",
      desc2: "* 서클이 하나 늘어날 때마다 위력과 연산력이 기하급수적으로 증폭됨.",
      circles: [
        { name: "1~2서클", desc: "마나를 느끼고 불피우기, 물방울 만들기 등 일상적인 생활 마법을 구현하는 견습 단계임." },
        { name: "3~4서클", desc: "아카데미를 정식으로 졸업한 평균적인 마법사들의 한계선임. 실전 전투와 실무에 능숙하게 마법을 활용함." },
        { name: "5서클 (상급 마법사)", desc: "재능 있는 자들만이 뼈를 깎는 노력 끝에 오를 수 있는 높은 벽임. 단독으로 전황을 뒤집을 수 있는 파괴력을 지님." },
        { name: "6서클 (대마법사 반열)", desc: "역사에 이름을 남길 만한 천재들이 도달하는 경지임. '걸어 다니는 전략 무기'로 취급받으며 막대한 정치적 영향력을 행사함." },
        { name: "7서클 (인간의 한계)", desc: "국가의 근간을 수호하는 진정한 대마법사임. 대규모 광역 마법과 공간 이동(텔레포트)을 자유롭게 구사함." },
        { name: "8서클 (초월자)", desc: "지형을 바꾸고 기후를 조작하는 등, 자연재해에 맞먹는 힘을 행사하는 초인임." },
        { name: "9서클 (반신)", desc: "마나 그 자체가 되어 영창 없이도 세계의 법칙을 비틀 수 있는 데미갓(Demigod)의 영역임." },
        { name: "10서클 (신의 영역)", desc: "시공간을 다루며 창조와 소멸을 관장하는, 역사서에서나 등장하는 신화적 경지임." },
      ]
    },
    elementalist: {
      title: "🧚 정령사 (Elementalist)",
      desc1: "* 자연의 의지인 정령과 교감하고 계약하여 그들의 힘을 빌려 쓰는 자들임.",
      desc2: "* 마법사와 달리 '친화력'이라는 선천적인 재능이 절대적으로 필요함.",
      ranks: [
        { name: "하급 정령사", desc: "미약한 자아를 가진 하급 정령과 계약함. 작은 불씨를 만들거나 산들바람을 부는 등 기초적인 원소 조종이 가능함." },
        { name: "중급 정령사", desc: "뚜렷한 자아와 형태를 갖춘 중급 정령과 계약함. 본격적인 전투가 가능하며, 정령과의 대화가 원활해짐." },
        { name: "상급 정령사", desc: "고위 지성을 가지고 인간의 형태(폴리모프)를 취할 수 있는 상급 정령과 계약한 극소수의 능력자임. 도시 하나를 날려버릴 수 있는 힘을 다룸." },
        { name: "정령왕의 계약자", desc: "각 원소를 다스리는 정령계의 군주와 계약한 신화적인 존재임." },
      ],
      tableTitle: "💡 원소별 정령 계급표 (참고용)",
      headers: ["속성", "하급 정령", "중급 정령", "상급 정령", "정령왕 (최상급)"],
      rows: [
        { elem: "🔥 불", low: "카사", mid: "샐러맨더", high: "이프리트", king: "이프리트 (동명) / 카리엔" },
        { elem: "💧 물", low: "나이아드", mid: "운디네", high: "실피드 (물)", king: "엘퀴네스" },
        { elem: "🍃 바람", low: "실프", mid: "실피드", high: "진 (Djinn)", king: "미네르바 / 실라이론" },
        { elem: "⛰️ 땅", low: "픽시", mid: "노움", high: "클레이", king: "노아스 / 트로웰" },
        { elem: "✨ 빛", low: "위스프", mid: "루미엘", high: "샤이닝", king: "루미나스" },
        { elem: "🌑 어둠", low: "셰이드", mid: "다크", high: "섀도우", king: "다크니스" },
      ],
      note: "* 안토니아 황실은 대대로 꽃의 정령들과 계약하고 있음."
    }
  },
  en: {
    title: "🌹 Realm & Mastery Guide",
    intro1: "* A guide to martial and magical ranks for smooth roleplaying and persona setup at Luminflor Academy.",
    intro2: "* Please refer to this according to your character's setup.",
    swordsman: {
      title: "⚔️ Swordsman",
      desc: "* Those who channel mana into their flesh to strengthen their physique and imbue it into their blade.",
      ranks: [
        { name: "Apprentice / Regular Knight", desc: "Foundational rank of sensing mana, reinforcing the body, and lightly wreathing the sword in mana." },
        { name: "Sword Expert", desc: "An adept who projects mana as a distinct aura to unleash blade energy. Knight commanders and elite knights reside here." },
        { name: "Sword Master", desc: "A superhuman realm condensing aura into tangible blade force (auragang). Rare enough to count on one hand across the empire, wielding absolute might beyond one-against-a-hundred." },
        { name: "Grand Master", desc: "A legendary realm transcending human limits to cleave space itself." },
      ]
    },
    mage: {
      title: "🔮 Mage",
      desc1: "* Those who construct rings of mana (circles) around the heart to twist the laws of the world.",
      desc2: "* With each additional circle, destructive power and computational capacity amplify exponentially.",
      circles: [
        { name: "1st–2nd Circle", desc: "Apprentice stage of sensing mana and casting everyday utility spells like lighting a fire or creating water droplets." },
        { name: "3rd–4th Circle", desc: "The standard limit for average mages graduated from an academy. Competently utilizes magic in practical affairs and combat." },
        { name: "5th Circle (High Mage)", desc: "A formidable wall climbed only by the talented through grueling efforts. Possesses destructive power capable of turning battle tides alone." },
        { name: "6th Circle (Archmage Rank)", desc: "A realm achieved only by geniuses who write history. Treated as 'walking strategic weapons' wielding immense political sway." },
        { name: "7th Circle (Human Limit)", desc: "A true Archmage safeguarding the foundation of the state. Freely commands wide-area annihilation magic and space-teleportation." },
        { name: "8th Circle (Transcendent)", desc: "A superhuman wielding cataclysmic power on par with natural disasters, reshaping terrain and altering weather." },
        { name: "9th Circle (Demigod)", desc: "The realm of a Demigod, embodying mana itself to rewrite worldly laws without chants." },
        { name: "10th Circle (Divine Realm)", desc: "A mythical realm mentioned only in ancient chronicles, manipulating spacetime and governing creation and oblivion." },
      ]
    },
    elementalist: {
      title: "🧚 Elementalist",
      desc1: "* Those who commune and form pacts with nature's will—spirits—to borrow their power.",
      desc2: "* Unlike mages, an innate talent called 'affinity' is strictly required.",
      ranks: [
        { name: "Lower Elementalist", desc: "Contracts with low spirits having faint egos. Can perform basic manipulation like small sparks or gentle breezes." },
        { name: "Intermediate Elementalist", desc: "Contracts with mid spirits with distinct egos and forms. Capable of active combat and fluid communication with spirits." },
        { name: "High Elementalist", desc: "A rare elite contracted with high spirits possessing great intellect and human shape-shifting (polymorph). Commands power to wipe out an entire city." },
        { name: "Spirit King's Contractor", desc: "A mythical contractor bonded with a sovereign of the spirit world governing their respective element." },
      ],
      tableTitle: "💡 Elemental Spirit Hierarchy (Reference)",
      headers: ["Element", "Low Spirit", "Mid Spirit", "High Spirit", "Spirit King (Highest)"],
      rows: [
        { elem: "🔥 Fire", low: "Kasa", mid: "Salamander", high: "Ifrit", king: "Ifrit / Carien" },
        { elem: "💧 Water", low: "Naiad", mid: "Undine", high: "Sylphid (Water)", king: "Elqueness" },
        { elem: "🍃 Wind", low: "Sylph", mid: "Sylphid", high: "Djinn", king: "Minerva / Silairon" },
        { elem: "⛰️ Earth", low: "Pixie", mid: "Gnome", high: "Clay", king: "Noas / Trowell" },
        { elem: "✨ Light", low: "Wisp", mid: "Lumiel", high: "Shining", king: "Luminas" },
        { elem: "🌑 Darkness", low: "Shade", mid: "Dark", high: "Shadow", king: "Darkness" },
      ],
      note: "* The Antonia Imperial Family has contracted with flower spirits for generations."
    }
  },
  ja: {
    title: "🌹 境地ガイド",
    intro1: "* ルミンフロール・アカデミーでの円滑なロールプレイングとペルソナ設定のための武力・魔法等級案内。",
    intro2: "* キャラクターの設定に合わせてご参考ください。",
    swordsman: {
      title: "⚔️ 剣士 (Swordsman)",
      desc: "* マナを肉体に受け入れて身体を強化し、剣に込める者たち。",
      ranks: [
        { name: "見習い騎士 / 一般騎士", desc: "マナを感じて身体を強化し、剣に薄くマナを纏わせることができる基礎的な段階。" },
        { name: "ソードエキスパート (Sword Expert)", desc: "マナを鮮明な気（オーラ）として放出し、剣気を放つことができる熟練者。騎士団長や精鋭騎士たちがこの境地に位置する。" },
        { name: "ソードマスター (Sword Master)", desc: "オーラを物理的な剣の形態（剣罡）へと凝集させる超人的な境地。帝国全土でも指折りの希少さで、一騎当千を超えた絶対的武力を誇る。" },
        { name: "グランドマスター (Grand Master)", desc: "人間の限界を超越し、空間をも斬り裂く伝説の境地。" },
      ]
    },
    mage: {
      title: "🔮 魔法使い (Mage)",
      desc1: "* 心臓にマナを集める輪（サークル）を積み上げ、世界の法則をねじ曲げる者たち。",
      desc2: "* サークルが1つ増えるごとに、威力と演算能力が指数関数的に増幅する。",
      circles: [
        { name: "第1〜2サークル", desc: "マナを感じて火起こしや水滴作りなど、日常的な生活魔法を具現化する見習い段階。" },
        { name: "第3〜4サークル", desc: "アカデミーを正式に卒業した平均的な魔法使いたちの限界線。実戦戦闘や実務で巧みに魔法を活用する。" },
        { name: "第5サークル (上級魔法使い)", desc: "才能ある者のみが血のにじむ努力の果てに到達できる高い壁。単独で戦況を覆す破壊力を持つ。" },
        { name: "第6サークル (大魔法使いの仲間入り)", desc: "歴史に名を残す天才たちが到達する境地。「歩く戦略兵器」として扱われ、絶大な政治的影響力を行使する。" },
        { name: "第7サークル (人間の限界)", desc: "国家の根幹を守護する真の大魔法使い。大規模な広域魔法や空間移動（テレポート）を自在に操る。" },
        { name: "第8サークル (超越者)", desc: "地形を変え気候を操るなど、自然災害に匹敵する力を行使する超人。" },
        { name: "第9サークル (半神)", desc: "マナそのものとなり、無詠唱で世界の法則をねじ曲げることができるデミゴッド（Demigod）の領域。" },
        { name: "第10サークル (神の領域)", desc: "時空間を操り、創造と消滅を司る、歴史書にのみ登場する神話的な境地。" },
      ]
    },
    elementalist: {
      title: "🧚 精霊士 (Elementalist)",
      desc1: "* 自然の意志である精霊と交感・契約し、その力を借りて行使する者たち。",
      desc2: "* 魔法使いとは異なり、「親和力」という先天的才能が絶対的に不可欠。",
      ranks: [
        { name: "下級精霊士", desc: "微弱な自我を持つ下級精霊と契約。小さな火種を作ったり微風を吹かせるなど、基礎的な元素操作が可能。" },
        { name: "中級精霊士", desc: "明確な自我と姿態を備えた中級精霊と契約。本格的な戦闘が可能となり、精霊との対話が円滑になる。" },
        { name: "上級精霊士", desc: "高位の知性を持ち人型（ポリモフ）をとることができる上級精霊と契約した極少数の能力者。都市一つを消し去るほどの力を操る。" },
        { name: "精霊王の契約者", desc: "各元素を統べる精霊界の君主と契約した神話的な存在。" },
      ],
      tableTitle: "💡 属性別精霊階級表（参考用）",
      headers: ["属性", "下級精霊", "中級精霊", "上級精霊", "精霊王（最上級）"],
      rows: [
        { elem: "🔥 火", low: "カーサ", mid: "サラマンダー", high: "イフリート", king: "イフリート（同名） / カリエン" },
        { elem: "💧 水", low: "ナイアド", mid: "ウンディーネ", high: "シルフィード（水）", king: "エルキネス" },
        { elem: "🍃 風", low: "シルフ", mid: "シルフィード", high: "ジン (Djinn)", king: "ミネルヴァ / シライロン" },
        { elem: "⛰️ 地", low: "ピクシー", mid: "ノーム", high: "クレイ", king: "ノアス / トローウェル" },
        { elem: "✨ 光", low: "ウィスプ", mid: "ルミエル", high: "シャイニング", king: "ルミナス" },
        { elem: "🌑 闇", low: "シェード", mid: "ダーク", high: "シャドウ", king: "ダークネス" },
      ],
      note: "* アントリア皇室は代々、花の精霊たちと契約を結んでいる。"
    }
  }
};

const worldTranslations = {
  ko: {
    title: "세계관 : 안토리아 제국",
    overviewTitle: "제국 개요",
    overviewTexts: [
      "* 제국명은 안토리아, 안토르 가문이 통치하는 꽃의 제국임.",
      "* 수도는 황금 장미의 도시라 불리는 아우레 로사리안임.",
      "* 기후는 서안 해양성이며, 동북부는 화산과 드래곤 지대, 남부는 아열대, 서부 수도권은 온난함.",
      "* 주요 도시로는 군사 중심지 레드라벤, 휴양과 무역의 칼리도마레, 그리고 코프리아나가 있음."
    ],
    imperialTitle: "황실 특징",
    imperialTexts: [
      "* 황실은 대대로 정령 친화력이 탁월하여 꽃의 정령왕 파에오니아와 계약을 맺음.",
      "* 황제는 이 계약을 통해 제국의 끝없는 풍요를 유지함.",
      "* 황태자는 즉위식에서 정령왕과의 계약을 승계받아 정통성을 증명함."
    ]
  },
  en: {
    title: "World: The Antoria Empire",
    overviewTitle: "Empire Overview",
    overviewTexts: [
      "* The empire is named Antoria, an empire of flowers ruled by House Anthor.",
      "* The capital is Aure Rosarian, renowned as the City of the Golden Rose.",
      "* The climate is marine west coast; the northeast features volcanoes and dragon territories, the south is subtropical, and the western capital region is temperate.",
      "* Major cities include the military stronghold Redraven, the resort and trading port Calidomare, and Copriana."
    ],
    imperialTitle: "Imperial House Characteristics",
    imperialTexts: [
      "* Blessed with extraordinary spirit affinity for generations, the imperial family maintains a pact with Paeonia, the Flower Spirit King.",
      "* Through this covenant, the Emperor preserves the boundless prosperity of the empire.",
      "* The Crown Prince inherits the pact with the Spirit King during the coronation to validate his legitimacy."
    ]
  },
  ja: {
    title: "世界観：アントリア帝国",
    overviewTitle: "帝国概要",
    overviewTexts: [
      "* 帝国名はアントリア。アントール家が統治する花の帝国である。",
      "* 首都は黄金の薔薇の都市と呼ばれるアウレ・ロサリアン。",
      "* 気候は西岸海洋性で、北東部は火山とドラゴン地帯、南部は亜熱帯、西部首都圏は温暖。",
      "* 主要都市には軍事の中心地レドラヴェン、保養と貿易のカリドマーレ、そしてコプリアナがある。"
    ],
    imperialTitle: "皇室の特徴",
    imperialTexts: [
      "* 皇室は代々優れた精霊親和力を持ち、花の精霊王パエオニアと契約を結んでいる。",
      "* 皇帝はこの契約を通じて、帝国の果てなき豊穣を維持する。",
      "* 皇太子は即位式で精霊王との契約を継承し、正統性を証明する。"
    ]
  }
};

const Navbar = () => {
  const navItems = [
    { name: 'Home', href: '#home', icon: Home },
    { name: 'Guide', href: '#guide', icon: BookOpen },
    { name: 'World', href: '#world', icon: Map },
    { name: 'Characters', href: '#characters', icon: Users },
    { name: 'Commands', href: '#commands', icon: Terminal },
  ];

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-md bg-white/95 backdrop-blur-md border border-rose-200 shadow-2xl rounded-full z-50 px-6 py-3">
      <div className="flex justify-between items-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <a 
              key={item.name} 
              href={item.href}
              className="flex flex-col items-center gap-1 text-gray-500 hover:text-rose-600 transition-colors"
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{item.name}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

const SectionHome = () => {
  const { lang, setLang } = useLanguage();
  const t = homeTranslations[lang];
  const g = guideTranslations[lang];

  return (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-4 relative z-10 w-full max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-rose-900 mb-6 tracking-tight leading-tight">
        {t.titleMain}<br/>
        <span className="text-2xl md:text-4xl text-rose-800 font-light mt-2 block">{t.titleSub}</span>
      </h1>
      <div className="inline-flex items-center gap-1.5 p-1.5 bg-white/90 backdrop-blur-sm rounded-full border border-rose-200 shadow-md mt-4">
        {(['ko', 'en', 'ja'] as const).map((l) => (
          <button
            key={l}
            type="button"
            onClick={() => setLang(l)}
            className={`px-4 py-1.5 rounded-full text-xs md:text-sm font-semibold transition-all ${
              lang === l
                ? 'bg-gradient-to-r from-rose-500 to-rose-600 text-white shadow-sm'
                : 'text-rose-800 hover:text-rose-950 hover:bg-rose-50'
            }`}
          >
            {l === 'ko' ? 'KO' : l === 'en' ? 'EN' : 'JP'}
          </button>
        ))}
      </div>
    </motion.div>

    <div id="guide" className="w-full bg-white/90 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100 mb-12 scroll-mt-24">
      <h2 className="text-2xl md:text-3xl font-serif text-rose-800 mb-4 flex items-center gap-2">
        {g.title}
      </h2>
      <p className="text-gray-700 mb-8 leading-relaxed">
        {g.intro1}<br/>
        {g.intro2}
      </p>

      <div className="space-y-8">
        {/* 검사 */}
        <div>
          <h3 className="text-xl font-serif text-rose-700 mb-3 border-b border-rose-100 pb-2">
            {g.swordsman.title}
          </h3>
          <p className="text-gray-700 mb-3">{g.swordsman.desc}</p>
          <ul className="space-y-2 text-gray-700">
            {g.swordsman.ranks.map((r, idx) => (
              <li key={idx}>* <strong className="text-rose-900">{r.name}:</strong> {r.desc}</li>
            ))}
          </ul>
        </div>

        {/* 마법사 */}
        <div>
          <h3 className="text-xl font-serif text-rose-700 mb-3 border-b border-rose-100 pb-2">
            {g.mage.title}
          </h3>
          <p className="text-gray-700 mb-3">
            {g.mage.desc1}<br/>
            {g.mage.desc2}
          </p>
          <ul className="space-y-2 text-gray-700">
            {g.mage.circles.map((c, idx) => (
              <li key={idx}>* <strong className="text-rose-900">{c.name}:</strong> {c.desc}</li>
            ))}
          </ul>
        </div>

        {/* 정령사 */}
        <div>
          <h3 className="text-xl font-serif text-rose-700 mb-3 border-b border-rose-100 pb-2">
            {g.elementalist.title}
          </h3>
          <p className="text-gray-700 mb-3">
            {g.elementalist.desc1}<br/>
            {g.elementalist.desc2}
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            {g.elementalist.ranks.map((r, idx) => (
              <li key={idx}>* <strong className="text-rose-900">{r.name}:</strong> {r.desc}</li>
            ))}
          </ul>

          <div className="bg-rose-50/50 rounded-xl p-4 md:p-6 border border-rose-100 overflow-x-auto">
            <h4 className="font-serif text-rose-800 mb-4 flex items-center gap-2">
              {g.elementalist.tableTitle}
            </h4>
            <table className="w-full text-sm text-left whitespace-nowrap">
              <thead className="text-rose-900 border-b border-rose-200">
                <tr>
                  {g.elementalist.headers.map((h, idx) => (
                    <th key={idx} className="py-2 px-4 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-gray-700 divide-y divide-rose-100">
                {g.elementalist.rows.map((row, idx) => (
                  <tr key={idx}>
                    <td className="py-2 px-4 font-medium">{row.elem}</td>
                    <td className="py-2 px-4">{row.low}</td>
                    <td className="py-2 px-4">{row.mid}</td>
                    <td className="py-2 px-4">{row.high}</td>
                    <td className="py-2 px-4">{row.king}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <p className="mt-4 text-rose-800 font-medium text-sm text-center bg-rose-50 py-2 rounded-lg">
            {g.elementalist.note}
          </p>
        </div>
      </div>
    </div>

    <div className="w-full bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100 mb-12">
      <h2 className="text-2xl font-serif text-rose-800 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6" /> {t.prologueTitle}
      </h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">
        {t.prologueTexts.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>
    </div>

    <div className="w-full bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100">
      <h2 className="text-2xl font-serif text-rose-800 mb-6 flex items-center gap-2">
        <Castle className="w-6 h-6" /> {t.academyTitle}
      </h2>
      <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
        {t.academyTexts.map((text, idx) => (
          <p key={idx}>{text}</p>
        ))}
      </div>

      <h3 className="text-xl font-serif text-rose-700 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5" /> {t.calendarTitle}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {t.calendarItems.map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start p-3 bg-rose-50/50 rounded-lg border border-rose-100/50">
            <span className="font-bold text-rose-800 min-w-[3.5rem] whitespace-nowrap">{item.m}</span>
            <span className="text-gray-700 text-sm">* {item.d}.</span>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
};

const SectionWorld = () => {
  const { lang } = useLanguage();
  const w = worldTranslations[lang];

  return (
    <section id="world" className="min-h-screen py-20 px-4 relative z-10 w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-serif text-rose-900 mb-10 text-center border-b border-rose-200 pb-4">
        {w.title}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100">
          <h3 className="text-xl font-serif text-rose-800 mb-4 flex items-center gap-2">
            <Map className="w-5 h-5" /> {w.overviewTitle}
          </h3>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            {w.overviewTexts.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>

        <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100">
          <h3 className="text-xl font-serif text-rose-800 mb-4 flex items-center gap-2">
            <Crown className="w-5 h-5" /> {w.imperialTitle}
          </h3>
          <div className="space-y-3 text-gray-700 leading-relaxed">
            {w.imperialTexts.map((text, idx) => (
              <p key={idx}>{text}</p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const characterTranslations = {
  ko: {
    sectionTitle: "등장인물",
    heightLabel: "키: ",
    secretTitle: "은밀한 치부",
    hideSecret: "숨기기",
    showSecret: "열람하기",
    list: [
      {
        name: "비렉스 파이론",
        engName: "Virex Pyron",
        subtitle: "파이론 공작",
        year: "4학년",
        age: "24세",
        major: "정치/군사학 전공",
        height: "203cm",
        mbti: "INTJ",
        image: "https://gbe88.uk/thum/1.webp",
        desc: [
          "북부 파이론 가문의 젊은 공작이자 소드 마스터 초입에 이른 쿼터 드래곤임.",
          "타고난 감각이 너무 예민한 탓에, 살아남기 위해 의도적으로 감각을 차단하고 세상 모든 일에 무관심한 척 서늘하게 살아감.",
          "하지만 한번 본능의 빗장이 풀리면, 스모크드 시더우드 향과 함께 상대를 짐승처럼 몰아붙임.",
          "상대를 온전히 지배하려 드는 아찔한 포식자의 기질을 깊은 곳에 숨기고 있음."
        ]
      },
      {
        name: "카엘리스 로잔트",
        engName: "Kaelis Rosant",
        subtitle: "로잔트 소후작",
        year: "4학년",
        age: "23세",
        major: "마법학 전공",
        height: "184cm",
        mbti: "ENFP",
        image: "https://gbe88.uk/thum/2.webp?v=update",
        desc: [
          "9서클 대마법사인 남부 마탑주의 외동아들이자 6서클에 도달한 천재 마법사임.",
          "입학식 때 주인공에게 첫눈에 반해 열렬히 짝사랑했으나, 작년 겨울 황녀의 집요하고 치밀한 이간질에 완전히 속아 넘어감.",
          "현재는 주인공을 향한 지독한 증오와 배신감에 사로잡혀 차갑게 흑화한 상태임.",
          "본래는 애정을 갈구하고 질투가 심해, 상처받으면 가차 없이 물어뜯는 극단적이고 맹목적인 성향의 소유자임."
        ]
      },
      {
        name: "필레온 폰 안토르",
        engName: "Phileon von Anthor",
        subtitle: "황태자",
        year: "4학년",
        age: "25세",
        major: "정치행정학 전공",
        height: "187cm",
        mbti: "ENTJ",
        image: "https://gbe88.uk/thum/3.webp",
        desc: [
          "제국의 황태자이자 카멜리아와 계약 중인 상급 정령사이며, 5서클 마법사이기도 한 다재다능한 인물임.",
          "여동생인 황녀 엘리라가 티 없이 순수하다고 굳게 믿고 있어 그녀를 맹목적으로 과보호함.",
          "매사 여유롭고 나긋나긋한 태도를 유지하지만, 속은 엘리트주의로 뭉친 오만한 지략가임.",
          "지적인 우위와 교묘한 언어유희로 상황을 통제하고, 상대에게 정중하게 수치심을 안겨주며 굴복시키는 것을 즐김."
        ]
      },
      {
        name: "엘리라 폰 안토르",
        engName: "Elyra von Anthor",
        subtitle: "황녀",
        year: "2학년",
        age: "23세",
        major: "원예학 전공",
        height: "163cm",
        mbti: "ESFP",
        image: "https://gbe88.uk/thum/4.webp",
        desc: [
          "제국의 보물이자 모두에게 사랑받는 천사 같은 귀염상 황녀임.",
          "하지만 실체는 철저한 계산과 계략으로 타인을 파멸시키는 완벽주의 소시오패스임.",
          "주인공에게 입지를 빼앗길지 모른다는 콤플렉스에 시달리며, 뒤에서는 사람들을 조종해 주인공을 고립시킴.",
          "앞에서는 끝까지 착하고 불쌍한 피해자인 척 완벽한 연기를 펼침."
        ],
        secret: [
          "가슴 확대 마법 시술을 받았다는 은밀한 치부를 주인공에게 들켜 끔찍한 앙심을 품고 있음.",
          "그 시술 덕에 가슴이 살짝 인위적인 마시멜로우 촉감을 띠게 됨."
        ]
      }
    ]
  },
  en: {
    sectionTitle: "Characters",
    heightLabel: "Height: ",
    secretTitle: "Dark Secret",
    hideSecret: "Hide",
    showSecret: "Reveal",
    list: [
      {
        name: "Virex Pyron",
        subtitle: "Duke of Pyron",
        year: "4th Year",
        age: "Age 24",
        major: "Political/Military Studies",
        height: "203cm",
        mbti: "INTJ",
        image: "https://gbe88.uk/thum/1.webp",
        desc: [
          "Young Duke of the northern Pyron family and a quarter-dragon standing at the threshold of Sword Master.",
          "Because his innate senses are overly acute, he deliberately shuts them off and lives coldly, feigning utter indifference to survive.",
          "Yet once the latch on his instincts is unleashed, he corners his counterpart like a beast alongside the scent of smoked cedarwood.",
          "Conceals deep within himself the intoxicating nature of an apex predator seeking total dominance over his prey."
        ]
      },
      {
        name: "Kaelis Rosant",
        subtitle: "Young Marquis of Rosant",
        year: "4th Year",
        age: "Age 23",
        major: "Magic Studies",
        height: "184cm",
        mbti: "ENFP",
        image: "https://gbe88.uk/thum/2.webp?v=update",
        desc: [
          "Only son of the Southern Magic Tower Lord (a 9th-Circle Archmage) and a prodigy who has reached the 6th Circle.",
          "Fell passionately in love with the protagonist at first sight during the entrance ceremony, but was utterly duped by the Princess's relentless and elaborate alienation schemes last winter.",
          "Currently fallen into a cold darkness, consumed by bitter hatred and a burning sense of betrayal toward the protagonist.",
          "Originally craved affection with intense jealousy—an extreme, obsessive soul who ruthlessly bites back whenever wounded."
        ]
      },
      {
        name: "Phileon von Anthor",
        subtitle: "Crown Prince",
        year: "4th Year",
        age: "Age 25",
        major: "Political Science & Public Admin",
        height: "187cm",
        mbti: "ENTJ",
        image: "https://gbe88.uk/thum/3.webp",
        desc: [
          "Crown Prince of the Empire, a High Elementalist contracted with Camellia, and a multi-talented figure who is also a 5th-Circle Mage.",
          "Firmly believes his younger sister, Princess Elyra, is flawlessly pure and overprotects her with blind devotion.",
          "Always maintains a relaxed and suave demeanor, yet underneath is an arrogant mastermind steeped in elitism.",
          "Controls situations through intellectual superiority and subtle wordplay, relishing politely humiliating others to force their submission."
        ]
      },
      {
        name: "Elyra von Anthor",
        subtitle: "Imperial Princess",
        year: "2nd Year",
        age: "Age 23",
        major: "Horticulture",
        height: "163cm",
        mbti: "ESFP",
        image: "https://gbe88.uk/thum/4.webp",
        desc: [
          "The treasure of the Empire and an angelically cute princess beloved by all.",
          "Yet in truth, she is a perfectionist sociopath who ruins others through calculated malice and elaborate conspiracies.",
          "Plagued by an inferiority complex that the protagonist might steal her standing, she manipulates people from behind the scenes to isolate the protagonist.",
          "In public, she puts on a flawless performance as a helpless, innocent victim right to the end."
        ],
        secret: [
          "Holds a venomous grudge after the protagonist discovered her dark secret: receiving breast enlargement magic enhancement.",
          "Due to that magic procedure, her bust ended up having a slightly artificial, marshmallow-like texture."
        ]
      }
    ]
  },
  ja: {
    sectionTitle: "登場人物",
    heightLabel: "身長: ",
    secretTitle: "隠された秘密",
    hideSecret: "隠す",
    showSecret: "閲覧する",
    list: [
      {
        name: "ヴィレックス・パイロン",
        engName: "Virex Pyron",
        subtitle: "パイロン公爵",
        year: "4年生",
        age: "24歳",
        major: "政治・軍事学専攻",
        height: "203cm",
        mbti: "INTJ",
        image: "https://gbe88.uk/thum/1.webp",
        desc: [
          "北部パイロン家の若き公爵であり、ソードマスターの初歩に至ったクォータードラゴン。",
          "生まれつき感覚が鋭敏すぎるため、生き抜くために意図的に感覚を遮断し、万事に無関心を装い冷淡に生きている。",
          "しかし一度本能の閂が外れると、スモークシダーウッドの香りと共に相手を獣のように追い詰める。",
          "相手を完全に支配しようとする、眩暈を覚えるほどの捕食者の気質を心の奥深くに隠している。"
        ]
      },
      {
        name: "カエリス・ロザント",
        engName: "Kaelis Rosant",
        subtitle: "ロザント小侯爵",
        year: "4年生",
        age: "23歳",
        major: "魔法学専攻",
        height: "184cm",
        mbti: "ENFP",
        image: "https://gbe88.uk/thum/2.webp?v=update",
        desc: [
          "第9サークル大魔法使いである南部魔塔主の一人息子であり、第6サークルに到達した天才魔法使い。",
          "入学式で主人公に一目惚れし熱烈に片思いしていたが、昨年の冬、皇女の執拗かつ緻密な離間工作に完全に騙された。",
          "現在は主人公に対する激しい憎悪と裏切りに囚われ、冷酷に闇落ちした状態である。",
          "本来は愛情を渇望し嫉妬心が強く、傷つけられると容赦なく噛みつく極端で盲目的な性分の持ち主。"
        ]
      },
      {
        name: "フィレオン・フォン・アントール",
        engName: "Phileon von Anthor",
        subtitle: "皇太子",
        year: "4年生",
        age: "25歳",
        major: "政治行政学専攻",
        height: "187cm",
        mbti: "ENTJ",
        image: "https://gbe88.uk/thum/3.webp",
        desc: [
          "帝国の皇太子であり、カメリアと契約中の上級精霊士。さらに第5サークル魔法使いでもある多才な人物。",
          "妹の皇女エリラが純真無垢であると固く信じ込み、彼女を盲目的に過保護にしている。",
          "常に余裕に満ちた穏やかな態度を保つが、内面はエリート主義に染まった傲慢な策士。",
          "知的な優位と巧妙な言葉遊びで状況を支配し、相手に慇懃無礼な屈辱を与えて屈服させることを楽しむ。"
        ]
      },
      {
        name: "エリラ・フォン・アントール",
        engName: "Elyra von Anthor",
        subtitle: "皇女",
        year: "2年生",
        age: "23歳",
        major: "園芸学専攻",
        height: "163cm",
        mbti: "ESFP",
        image: "https://gbe88.uk/thum/4.webp",
        desc: [
          "帝国の宝であり、誰からも愛される天使のように愛らしい皇女。",
          "しかしその実態は、徹底した計算と計略で他人を破滅に追い込む完璧主義のソシオパス。",
          "主人公に居場所を奪われるのではないかという劣等感に苛まれ、裏で人々を操って主人公を孤立させる。",
          "人前では最後まで健気で哀れな被害者を装い、完璧な演技を貫く。"
        ],
        secret: [
          "豊胸魔法の施術を受けたという恥ずかしい秘密を主人公に知られ、凄まじい恨みを抱いている。",
          "その施術のせいで、胸がほんのり人工的なマシュマロのような触感になってしまった。"
        ]
      }
    ]
  }
};

const CharacterCard = ({ 
  char, 
  labels 
}: { 
  char: any; 
  labels: { heightLabel: string; secretTitle: string; hideSecret: string; showSecret: string }; 
  key?: React.Key;
}) => {
  const [isSecretOpen, setIsSecretOpen] = useState(false);

  return (
    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-md border border-rose-100 overflow-hidden flex flex-col sm:flex-row">
      <div className="w-full sm:w-2/5 bg-gray-200 aspect-square sm:aspect-auto flex items-center justify-center relative overflow-hidden">
        {char.image ? (
          <img src={char.image} alt={char.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        ) : (
          <User className="w-16 h-16 text-gray-400" />
        )}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/70 via-black/30 to-transparent p-4 pt-8">
          <h3 className="text-2xl font-serif text-white">{char.name}</h3>
          {char.engName && <p className="text-rose-100 text-sm italic font-serif opacity-90 mb-1">{char.engName}</p>}
          {char.subtitle && <p className="text-rose-200 text-xs font-medium">{char.subtitle}</p>}
        </div>
      </div>
      <div className="w-full sm:w-3/5 p-6 flex flex-col">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-2 py-1 bg-rose-50 text-rose-800 text-xs rounded-md border border-rose-100 font-medium">{char.year}</span>
          <span className="px-2 py-1 bg-rose-50 text-rose-800 text-xs rounded-md border border-rose-100 font-medium">{char.age}</span>
          <span className="px-2 py-1 bg-rose-50 text-rose-800 text-xs rounded-md border border-rose-100 font-medium">{char.major}</span>
          <span className="px-2 py-1 bg-rose-50 text-rose-800 text-xs rounded-md border border-rose-100 font-medium">{labels.heightLabel}{char.height}</span>
          <span className="px-2 py-1 bg-gold-50 text-yellow-700 text-xs rounded-md border border-yellow-200 font-bold">MBTI: {char.mbti}</span>
        </div>
        <div className="space-y-2 text-gray-700 text-sm flex-grow">
          {char.desc.map((d: string, i: number) => (
            <p key={i}>* {d}</p>
          ))}
          
          {char.secret && (
            <div className="mt-4 pt-4 border-t border-rose-100">
              <button 
                onClick={() => setIsSecretOpen(!isSecretOpen)}
                className="flex items-center gap-2 text-rose-600 hover:text-rose-800 font-medium text-sm transition-colors"
              >
                {isSecretOpen ? <Unlock className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                {labels.secretTitle} {isSecretOpen ? labels.hideSecret : labels.showSecret}
              </button>
              {isSecretOpen && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  className="mt-3 space-y-2 text-rose-900 bg-rose-50 p-3 rounded-lg text-sm border border-rose-100"
                >
                  {char.secret.map((s: string, i: number) => (
                    <p key={i}>* {s}</p>
                  ))}
                </motion.div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const SectionCharacters = () => {
  const { lang } = useLanguage();
  const c = characterTranslations[lang];

  return (
    <section id="characters" className="min-h-screen py-20 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif text-rose-900 mb-10 text-center border-b border-rose-200 pb-4">
        {c.sectionTitle}
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {c.list.map((char, idx) => (
          <CharacterCard key={idx} char={char} labels={c} />
        ))}
      </div>
    </section>
  );
};

const commandTranslations = {
  ko: {
    sectionTitle: "명령어 시스템",
    purposeLabel: "목적:",
    featureLabel: "특징:",
    list: [
      {
        name: "/사건",
        purpose: "서사가 루즈해졌을 때 판을 뒤흔드는 스캔들이나 치명적 위기(정치/사회적 딜레마)를 강제 발동함.",
        feature: "로코풍 코미디가 아닌, 피카레스크적 암투와 마라맛 치정이 섞인 대형 사건을 유발함.",
        example: "중앙 홀 전광판에 '특정 학우, 은밀한 노예 경매 참가설' 찌라시가 대량 살포됨. 홀의 공기가 순식간에 차갑게 얼어붙음."
      },
      {
        name: "/불운",
        purpose: "완벽주의 소시오패스인 엘리라에게 '킹받는' 카타르시스(천벌)를 사소하게 선사함.",
        feature: "물리적 고통보다 이미지 타격이나 얕은 계략이 어이없게 역풍을 맞는 사이다 연출임.",
        example: "엘리라가 우아하게 걸음을 옮기던 순간, 전날 설치해 둔 진흙 트랩이 오작동하여 엘리라 본인을 덮침. \"꺄악!\" 순백의 드레스가 순식간에 더러워짐."
      },
      {
        name: "/아카데미",
        purpose: "루민플로르 아카데미 학생들의 날것 그대로의 여론과 은밀한 소문을 확인함.",
        feature: "신입생의 질문부터 운영자에 의해 삭제된 찌라시까지 교내 생동감을 더하며, 아무말 대잔치 닉네임을 사용함.",
        code: `\`\`\`🌼\n[🗣️소문｜딸기맛마석｜제목: 야, 오늘 중앙홀에서 황녀 엎어진 거 봄?]\n👀 142 💬 6\n내용: 진짜 개웃김 ㅋㅋㅋ 혼자 우아하게 걷다가 자기 드레스 밟고 철푸덕함. \n👍 45  👎 2\n↳ 삭제된계정｜❗삭제되었음❗ 👍 12 👎 1\n↳↳ 딸기맛마석｜헐 방금 대댓글 뭐였음? 왜 썰림?\n\`\`\``
      },
      {
        name: "/사교",
        purpose: "아카데미 밖, 플로르베나 제국 귀족 사교계의 딥하고 스케일 큰 동향 및 가십을 파악함.",
        feature: "고정 닉네임과 유동닉이 혼재하며, 철학적 토론부터 입에 담기 힘든 자극적인 사교계 찌라시까지 섞여 있음.",
        code: `\`\`\`💎\n[🗣️가십｜ㅇㅇ(112.45)｜제목: 남부 로잔트 가문 소후작 요즘 폼 미친듯]\n👀 890 💬 15\n내용: 저번 가면무도회에서 핑크머리 봤는데 눈빛이 넹글 돌았던데? 무슨 일 있음?\n👍 120  👎 5\n↳ 추상화만사모음｜걔 원래 성깔 더럽기로 유명하잖아. 👍 45 👎 2\n↳↳ ㅇㅇ(45.12)｜ㄴㄴ 며칠 전부터 흑마법 손댄다는 찌라시 돌고 있음. 조심해라.\n\`\`\``
      }
    ]
  },
  en: {
    sectionTitle: "Command System",
    purposeLabel: "Purpose:",
    featureLabel: "Feature:",
    list: [
      {
        name: "/incident",
        purpose: "Forcefully triggers a board-shattering scandal or fatal crisis (political/social dilemma) whenever the narrative turns sluggish.",
        feature: "Instigates high-stakes incidents infused with picaresque conspiracies and spicy romantic melodrama, rather than lighthearted rom-com humor.",
        example: "A scandal sheet declaring 'A certain student attended a secretive slave auction' is widely broadcast across the central hall's billboard. The hall's atmosphere freezes in an instant."
      },
      {
        name: "/misfortune",
        purpose: "Inflicts a petty yet wonderfully satisfying retribution (divine retribution) upon the perfectionist sociopath Elyra.",
        feature: "Rather than physical injury, delivers an exhilarating catharsis where her public image takes a blow or her shallow scheme backfires absurdly.",
        example: "Just as Elyra took an elegant step, a mud trap she planted the day before malfunctioned and splashed over Elyra herself. \"Eek!\" Her pristine white dress was instantly ruined."
      },
      {
        name: "/academy",
        purpose: "Checks the raw student discourse and secretive campus gossip circulating through Luminflor Academy.",
        feature: "Enhances lively campus atmosphere ranging from freshmen queries to moderator-deleted tabloid posts, featuring hilarious unfiltered usernames.",
        code: `\`\`\`🌼\n[🗣️Rumor | StrawberryMagicStone | Title: Hey, anyone see the Princess faceplant in the central hall today?]\n👀 142 💬 6\nBody: LMAOO so hilarious she was walking all gracefully then tripped over her own hem and ate dirt.\n👍 45  👎 2\n↳ DeletedAccount | ❗Post Deleted by Mod❗ 👍 12 👎 1\n↳↳ StrawberryMagicStone | Bro what was that reply? Why did it get nuked?\n\`\`\``
      },
      {
        name: "/society",
        purpose: "Gathers deep, large-scale rumors, socialite gossip, and political movements across the Florebena Empire beyond the academy.",
        feature: "A wild mix of verified aristocrats and anonymous posters discussing everything from philosophical debates to scandalous high-society rumors.",
        code: `\`\`\`💎\n[🗣️Gossip | Anon(112.45) | Title: The young Marquis Rosant is acting unhinged lately]\n👀 890 💬 15\nBody: Saw that pink-haired guy at the last masquerade and his eyes were totally twisted. What happened?\n👍 120  👎 5\n↳ ArtCollector | Everyone knows he has a nasty temper. 👍 45 👎 2\n↳↳ Anon(45.12) | Nah rumor has it he started dabbling in dark magic a few days ago. Watch your back.\n\`\`\``
      }
    ]
  },
  ja: {
    sectionTitle: "コマンドシステム",
    purposeLabel: "目的:",
    featureLabel: "特徴:",
    list: [
      {
        name: "/事件",
        purpose: "物語が停滞した際、盤上を揺るがすスキャンダルや致命的な危機（政治的・社会的ジレンマ）を強制発動する。",
        feature: "ロマコメ風のコメディではなく、ピカレスク的な暗闘と刺激的な愛憎劇が絡み合う大事件を引き起こす。",
        example: "中央ホールの電光掲示板に「特定生徒、秘密の奴隷競売参加疑惑」のタブロイドが大量に拡散される。ホールの空気は一瞬にして凍りつく。"
      },
      {
        name: "/不運",
        purpose: "完璧主義のソシオパスであるエリラに、ささやかで痛快な天罰（スカッとするカタルシス）を与える。",
        feature: "肉体的な苦痛よりもイメージ失墜や浅はかな策略があっけなく裏目に出る、爽快なざまぁ演出。",
        example: "エリラが優雅に歩みを進めた瞬間、前日仕掛けた泥トラップが誤作動してエリラ本人を直撃する。「きゃあっ！」純白のドレスが一瞬で泥まみれになる。"
      },
      {
        name: "/アカデミー",
        purpose: "ルミンフロール・アカデミーの生徒たちの生々しい世論や密かな噂話を確認する。",
        feature: "新入生の質問から管理者によって削除されたゴシップまで校内の活気を演出し、自由奔放なハンドルネームを使用する。",
        code: `\`\`\`🌼\n[🗣️噂｜イチゴ味の魔石｜件名: おい、今日中央ホールで皇女がすっ転んだの見たやついる？]\n👀 142 💬 6\n本文: ガチで草生えたｗｗ 一人で優雅に歩いてて自分のドレス踏んでベチャッてこけたぞ。\n👍 45  👎 2\n↳ 削除されたアカウント｜❗削除されました❗ 👍 12 👎 1\n↳↳ イチゴ味の魔石｜え、今の返信なんだったの？ なんで消された？\n\`\`\``
      },
      {
        name: "/社交",
        purpose: "アカデミー外、フローレベナ帝国貴族社交界のディープでスケールの大きな動向やゴシップを把握する。",
        feature: "固定HNと匿名HNが混在し、高尚な哲学的議論から口にするのも憚られる過激な社交界タブロイドまでが混ざり合う。",
        code: `\`\`\`💎\n[🗣️ゴシップ｜名無し(112.45)｜件名: 南部ロザント家の小侯爵、最近ヤバすぎないか]\n👀 890 💬 15\n本文: こないだの仮面舞踏会でピンク髪見かけたけど目が完全にイッてたぞ。何があった？\n👍 120  👎 5\n↳ 抽象画コレクター｜あいつ元から気性荒いので有名じゃん。 👍 45 👎 2\n↳↳ 名無し(45.12)｜いや数日前から黒魔法に手を出してるって噂出てる。気をつけろよ。\n\`\`\``
      }
    ]
  }
};

const SectionCommands = () => {
  const { lang } = useLanguage();
  const c = commandTranslations[lang];
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="commands" className="min-h-screen py-20 px-4 relative z-10 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-rose-900 mb-10 text-center border-b border-rose-200 pb-4">
        {c.sectionTitle}
      </h2>
      
      <div className="space-y-4">
        {c.list.map((cmd, idx) => (
          <div key={idx} className="bg-white/90 backdrop-blur-sm rounded-xl shadow-sm border border-rose-100 overflow-hidden">
            <button 
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full px-6 py-4 flex justify-between items-center text-left hover:bg-rose-50 transition-colors"
            >
              <span className="text-xl font-serif text-rose-800 font-bold flex items-center gap-2">
                <Terminal className="w-5 h-5" /> {cmd.name}
              </span>
              <ChevronDown className={`w-5 h-5 text-rose-400 transition-transform ${openIdx === idx ? 'rotate-180' : ''}`} />
            </button>
            
            {openIdx === idx && (
              <div className="px-6 pb-6 pt-2 border-t border-rose-50">
                <div className="space-y-3 text-gray-700 text-sm mb-6">
                  <p>* <span className="font-bold text-rose-700">{c.purposeLabel}</span> {cmd.purpose}</p>
                  <p>* <span className="font-bold text-rose-700">{c.featureLabel}</span> {cmd.feature}</p>
                </div>
                
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm text-gray-300 overflow-x-auto">
                  <div className="text-gray-500 mb-2 text-xs uppercase tracking-wider">Output Example</div>
                  {cmd.code ? (
                    <pre className="whitespace-pre-wrap">{cmd.code}</pre>
                  ) : (
                    <p className="whitespace-pre-wrap">{cmd.example}</p>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const Footer = () => {
  const { lang } = useLanguage();
  const notices = {
    ko: "* 본 페이지는 루민플로르 아카데미 RP 봇 홍보를 위해 제작되었음.",
    en: "* This page was created to promote the Luminflor Academy RP Bot.",
    ja: "* 当ページはルミンフロール・アカデミーRPボットのプロモーションのために制作されました。"
  };

  return (
    <footer className="bg-rose-900 text-rose-100 py-8 text-center text-sm relative z-10">
      <p>{notices[lang]}</p>
      <p className="mt-2 opacity-70">© 2026 Luminflor Academy. All rights reserved.</p>
    </footer>
  );
};

export default function App() {
  const [lang, setLang] = useState<Language>('ko');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      <div className="relative w-full min-h-screen selection:bg-rose-200 selection:text-rose-900">
        <Petals />
        <Navbar />
        <main>
          <SectionHome />
          <SectionWorld />
          <SectionCharacters />
          <SectionCommands />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}
