import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ChevronDown, Map, BookOpen, Terminal, Calendar, Castle, Crown, Sparkles, User, Lock, Unlock } from 'lucide-react';

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

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'World', href: '#world' },
    { name: 'Characters', href: '#characters' },
    { name: 'Commands', href: '#commands' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-rose-100 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-serif text-xl font-bold text-rose-800 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-gold-500" />
            Luminflor
          </a>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href}
                className="text-gray-600 hover:text-rose-600 font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-rose-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-rose-100 absolute w-full">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-rose-600 hover:bg-rose-50 rounded-md"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const SectionHome = () => (
  <section id="home" className="min-h-screen flex flex-col items-center justify-center pt-24 pb-10 px-4 relative z-10 w-full max-w-5xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="text-center mb-16"
    >
      <h1 className="text-4xl md:text-6xl font-serif font-extrabold text-rose-900 mb-6 tracking-tight leading-tight">
        악녀 사냥<br/>
        <span className="text-2xl md:text-4xl text-rose-800 font-light mt-2 block">｜황녀의 가면을 벗겨라</span>
      </h1>
      <a href="#" className="inline-block bg-gradient-to-r from-rose-400 to-rose-500 text-white px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all font-medium text-lg mt-4">
        [🔮 이미지 모아보기 바로가기]
      </a>
    </motion.div>

    <div className="w-full bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100 mb-12">
      <h2 className="text-2xl font-serif text-rose-800 mb-6 flex items-center gap-2">
        <BookOpen className="w-6 h-6" /> 프롤로그
      </h2>
      <div className="space-y-3 text-gray-700 leading-relaxed">
        <p>* 믿었던 '천사' 친구의 배신을 깨달은 순간.</p>
        <p>* 지난 학기의 지옥 같았던 고립이 그녀의 완벽한 계략이었음을 인지함.</p>
        <p>* 다시 찾아온 새 학기, 가식의 가면을 쓴 황녀와의 은밀한 사냥을 시작함.</p>
        <p>* 그녀의 가장 소중한 '말'들을 빼앗아 그녀를 나락으로 떨어뜨리는 피카레스크 로판.</p>
      </div>
    </div>

    <div className="w-full bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100">
      <h2 className="text-2xl font-serif text-rose-800 mb-6 flex items-center gap-2">
        <Castle className="w-6 h-6" /> 루민플로르 아카데미
      </h2>
      <div className="space-y-3 text-gray-700 leading-relaxed mb-8">
        <p>* 귀족 자제들만이 입학할 수 있는 4년제 종합 대학임.</p>
        <p>* 기숙사 대신 각 가문의 타운하우스에서 통학하는 시스템을 채택함.</p>
        <p>* 정해진 교복 없이 자유로운 복장이며, 마력이 깃든 학생증을 신분증으로 사용함.</p>
        <p>* 단순한 학업을 넘어 젊은 귀족들이 미래의 권력을 위해 인맥을 형성하는 사교의 중심지임.</p>
      </div>

      <h3 className="text-xl font-serif text-rose-700 mb-4 flex items-center gap-2">
        <Calendar className="w-5 h-5" /> 주요 학사일정
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {[
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
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 items-start p-3 bg-rose-50/50 rounded-lg border border-rose-100/50">
            <span className="font-bold text-rose-800 min-w-[3rem]">{item.m}</span>
            <span className="text-gray-700 text-sm">* {item.d}.</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SectionWorld = () => (
  <section id="world" className="min-h-screen py-20 px-4 relative z-10 w-full max-w-5xl mx-auto">
    <h2 className="text-3xl font-serif text-rose-900 mb-10 text-center border-b border-rose-200 pb-4">
      세계관 : 안토리아 제국
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100">
        <h3 className="text-xl font-serif text-rose-800 mb-4 flex items-center gap-2">
          <Map className="w-5 h-5" /> 제국 개요
        </h3>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>* 제국명은 안토리아, 안토르 가문이 통치하는 꽃의 제국임.</p>
          <p>* 수도는 황금 장미의 도시라 불리는 아우레 로사리안임.</p>
          <p>* 기후는 서안 해양성이며, 동북부는 화산과 드래곤 지대, 남부는 아열대, 서부 수도권은 온난함.</p>
          <p>* 주요 도시로는 군사 중심지 레드라벤, 휴양과 무역의 칼리도마레, 그리고 코프리아나가 있음.</p>
        </div>
      </div>

      <div className="bg-white/80 backdrop-blur-sm p-6 md:p-8 rounded-2xl shadow-sm border border-rose-100">
        <h3 className="text-xl font-serif text-rose-800 mb-4 flex items-center gap-2">
          <Crown className="w-5 h-5" /> 황실 특징
        </h3>
        <div className="space-y-3 text-gray-700 leading-relaxed">
          <p>* 황실은 대대로 정령 친화력이 탁월하여 꽃의 정령왕 파에오니아와 계약을 맺음.</p>
          <p>* 황제는 이 계약을 통해 제국의 끝없는 풍요를 유지함.</p>
          <p>* 황태자는 즉위식에서 정령왕과의 계약을 승계받아 정통성을 증명함.</p>
        </div>
      </div>
    </div>
  </section>
);

const CharacterCard = ({ char, key }: { char: any; key?: number | string }) => {
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
          <span className="px-2 py-1 bg-rose-50 text-rose-800 text-xs rounded-md border border-rose-100 font-medium">키: {char.height}</span>
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
                은밀한 치부 {isSecretOpen ? '숨기기' : '열람하기'}
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
  const characters = [
    {
      name: "비렉스 파이론",
      engName: "Virex Pyron",
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
      year: "4학년",
      age: "23세",
      major: "마법학 전공",
      height: "184cm",
      mbti: "ENFP",
      desc: [
        "남부 마탑주의 외동아들이자 9서클에 도달한 대마법사임.",
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
  ];

  return (
    <section id="characters" className="min-h-screen py-20 px-4 relative z-10 w-full max-w-6xl mx-auto">
      <h2 className="text-3xl font-serif text-rose-900 mb-10 text-center border-b border-rose-200 pb-4">
        등장인물
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {characters.map((char, idx) => (
          <CharacterCard key={idx} char={char} />
        ))}
      </div>
    </section>
  );
};

const SectionCommands = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const commands = [
    {
      name: "!사건",
      purpose: "서사가 루즈해졌을 때 판을 뒤흔드는 스캔들이나 치명적 위기(정치/사회적 딜레마)를 강제 발동함.",
      feature: "로코풍 코미디가 아닌, 피카레스크적 암투와 마라맛 치정이 섞인 대형 사건을 유발함.",
      example: "중앙 홀 전광판에 '특정 학우, 은밀한 노예 경매 참가설' 찌라시가 대량 살포됨. 홀의 공기가 순식간에 차갑게 얼어붙음."
    },
    {
      name: "!불운",
      purpose: "완벽주의 소시오패스인 엘리라에게 '킹받는' 카타르시스(천벌)를 사소하게 선사함.",
      feature: "물리적 고통보다 이미지 타격이나 얕은 계략이 어이없게 역풍을 맞는 사이다 연출임.",
      example: "엘리라가 우아하게 걸음을 옮기던 순간, 전날 설치해 둔 진흙 트랩이 오작동하여 엘리라 본인을 덮침. \"꺄악!\" 순백의 드레스가 순식간에 더러워짐."
    },
    {
      name: "!아카데미",
      purpose: "루민플로르 아카데미 학생들의 날것 그대로의 여론과 은밀한 소문을 확인함.",
      feature: "신입생의 질문부터 운영자에 의해 삭제된 찌라시까지 교내 생동감을 더하며, 아무말 대잔치 닉네임을 사용함.",
      code: `\`\`\`🌼\n[🗣️소문｜딸기맛마석｜제목: 야, 오늘 중앙홀에서 황녀 엎어진 거 봄?]\n👀 142 💬 6\n내용: 진짜 개웃김 ㅋㅋㅋ 혼자 우아하게 걷다가 자기 드레스 밟고 철푸덕함. \n👍 45  👎 2\n↳ 삭제된계정｜❗삭제되었음❗ 👍 12 👎 1\n↳↳ 딸기맛마석｜헐 방금 대댓글 뭐였음? 왜 썰림?\n\`\`\``
    },
    {
      name: "!사교계",
      purpose: "아카데미 밖, 플로르베나 제국 귀족 사교계의 딥하고 스케일 큰 동향 및 가십을 파악함.",
      feature: "고정 닉네임과 유동닉이 혼재하며, 철학적 토론부터 입에 담기 힘든 자극적인 사교계 찌라시까지 섞여 있음.",
      code: `\`\`\`💎\n[🗣️가십｜ㅇㅇ(112.45)｜제목: 남부 로잔트 가문 소후작 요즘 폼 미친듯]\n👀 890 💬 15\n내용: 저번 가면무도회에서 핑크머리 봤는데 눈빛이 넹글 돌았던데? 무슨 일 있음?\n👍 120  👎 5\n↳ 추상화만사모음｜걔 원래 성깔 더럽기로 유명하잖아. 👍 45 👎 2\n↳↳ ㅇㅇ(45.12)｜ㄴㄴ 며칠 전부터 흑마법 손댄다는 찌라시 돌고 있음. 조심해라.\n\`\`\``
    }
  ];

  return (
    <section id="commands" className="min-h-screen py-20 px-4 relative z-10 w-full max-w-4xl mx-auto">
      <h2 className="text-3xl font-serif text-rose-900 mb-10 text-center border-b border-rose-200 pb-4">
        명령어 시스템
      </h2>
      
      <div className="space-y-4">
        {commands.map((cmd, idx) => (
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
                  <p>* <span className="font-bold text-rose-700">목적:</span> {cmd.purpose}</p>
                  <p>* <span className="font-bold text-rose-700">특징:</span> {cmd.feature}</p>
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

export default function App() {
  return (
    <div className="relative w-full min-h-screen selection:bg-rose-200 selection:text-rose-900">
      <Petals />
      <Navbar />
      <main>
        <SectionHome />
        <SectionWorld />
        <SectionCharacters />
        <SectionCommands />
      </main>
      <footer className="bg-rose-900 text-rose-100 py-8 text-center text-sm relative z-10">
        <p>* 본 페이지는 루민플로르 아카데미 RP 봇 홍보를 위해 제작되었음.</p>
        <p className="mt-2 opacity-70">© 2026 Luminflor Academy. All rights reserved.</p>
      </footer>
    </div>
  );
}
