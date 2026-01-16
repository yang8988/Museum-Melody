export interface Artwork {
  id: number;
  title: string;
  artist: string;
  mood: string;
  era: string;
  style: string;
  imageUrl: string;
  youtubeUrl: string;
  desc: string;
}

export const artworks: Artwork[] = [
  {
    id: 1,
    title: "인상, 해돋이 (Impression, Sunrise)",
    artist: "클로드 모네",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/1280px-Monet_-_Impression%2C_Sunrise.jpg",
    youtubeUrl: "https://www.youtube.com/embed/S-Xm7s9eGxU",
    desc: "1872년에 완성된 이 작품은 인상주의 운동의 이름을 탄생시킨 역사적인 그림입니다. 모네는 르아브르 항구의 이른 아침 풍경을 담아내며, 안개 속에서 떠오르는 태양의 신비로운 빛을 포착했습니다. 붉은 오렌지색 태양이 보라빛 하늘과 물 위에 반사되며 만들어내는 색채의 조화는 당시 미술계에 큰 충격을 주었습니다. 전통적인 아카데미 화풍을 벗어나 순간적인 빛의 인상을 담아내려 한 이 작품은, 형태보다는 색채와 빛의 효과에 집중합니다. 물 위에 비치는 태양 빛의 반영, 안개 속에 흐릿하게 보이는 배와 항구 시설들, 그리고 하늘과 바다가 하나로 어우러지는 모습은 보는 이로 하여금 그 순간의 공기와 분위기를 느끼게 합니다. 드뷔시의 아라베스크 1번과 함께 감상하면, 음악의 유려한 선율이 그림의 부드러운 색채와 어우러져 마치 안개 낀 항구에서 새벽을 맞이하는 듯한 몽환적인 경험을 선사합니다. 인상주의 음악의 대표작과 인상주의 미술의 시작점이 만나는 특별한 조합입니다."
  },
  {
    id: 2,
    title: "물랭 드 라 갈레트의 무도회",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1876년에 완성된 이 대작은 파리 몽마르트르 언덕의 야외 댄스홀에서 벌어지는 일요일 오후의 무도회 장면을 담고 있습니다. 르누아르는 나무 사이로 스며드는 햇빛이 춤추는 사람들 위로 반짝이며 떨어지는 모습을 아름답게 포착했습니다. 이 작품의 특징은 빛과 그림자의 절묘한 조화입니다. 햇살이 만들어내는 둥근 빛의 점들이 사람들의 옷과 피부 위에서 춤추듯 번지며, 전체적으로 따뜻하고 생동감 넘치는 분위기를 자아냅니다. 르누아르는 친구들과 지인들을 모델로 삼아 자연스러운 파리 시민들의 모습을 그려냈으며, 당시 중산층의 여가 문화와 사교 생활을 생생하게 보여줍니다. 바흐의 브란덴부르크 협주곡 3번과 함께 감상하면, 경쾌하면서도 우아한 바로크 음악의 리듬이 그림 속 인물들의 즐거운 춤사위와 완벽하게 어우러집니다. 협주곡의 화려한 현악기 소리가 마치 그림 속에서 연주되는 것처럼 느껴지며, 19세기 파리의 활기찬 오후를 온몸으로 체험하게 합니다."
  },
  {
    id: 3,
    title: "수련 (Water Lilies)",
    artist: "클로드 모네",
    mood: "명상적인",
    era: "20세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    youtubeUrl: "https://www.youtube.com/embed/S-Xm7s9eGxU",
    desc: "모네가 말년에 자신의 지베르니 정원에서 심혈을 기울여 그린 수련 연작 중 하나입니다. 1906년에 완성된 이 작품은 연못 수면에 떠 있는 수련과 그 위로 반사되는 하늘과 구름, 주변 나무들의 모습을 담고 있습니다. 모네는 수면이라는 하나의 주제에 집중하며, 빛과 색채의 변화를 통해 시간과 계절의 흐름을 표현했습니다. 이 그림에서는 수평선이 사라지고 오직 물의 표면만이 존재합니다. 관람자는 마치 연못 위에 떠 있는 듯한 느낌을 받으며, 현실과 반영 사이의 경계가 모호해지는 신비로운 경험을 하게 됩니다. 에릭 사티의 짐노페디 1번과 함께 이 작품을 감상하면, 느리고 명상적인 피아노 선율이 고요한 연못의 분위기와 완벽하게 조화를 이룹니다. 반복되는 단순한 멜로디가 물결처럼 일렁이며, 마음을 진정시키고 깊은 평화의 상태로 이끌어 줍니다. 현대인의 지친 마음을 위로하는 최고의 예술적 조합입니다."
  },
  {
    id: 4,
    title: "별이 빛나는 밤 (The Starry Night)",
    artist: "빈센트 반 고흐",
    mood: "로맨틱한",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1889년 6월, 반 고흐가 생레미드프로방스의 정신병원에 입원해 있을 때 그린 이 작품은 그의 가장 유명한 걸작입니다. 소용돌이치는 하늘과 빛나는 별들, 초승달, 그리고 고요한 마을 풍경이 어우러져 강렬하면서도 신비로운 분위기를 자아냅니다. 반 고흐 특유의 굵은 붓질과 생동감 넘치는 색채가 하늘에 역동적인 움직임을 부여합니다. 파란색과 노란색의 대비는 밤하늘의 신비로움을 극대화하며, 마치 살아있는 것처럼 소용돌이치는 구름과 별빛은 우주의 에너지를 담아낸 것 같습니다. 화면 왼쪽의 사이프러스 나무는 하늘을 향해 불꽃처럼 솟아오르며, 삶과 죽음, 지상과 천상을 연결하는 상징적 역할을 합니다. 쇼팽의 녹턴 Op.9 No.2와 함께 감상하면, 피아노의 서정적인 선율이 밤하늘의 신비로움과 어우러져 깊은 감동을 선사합니다. 녹턴의 부드러우면서도 우울한 멜로디가 반 고흐의 고독과 열정을 음악으로 표현하는 듯합니다."
  },
  {
    id: 5,
    title: "해바라기 (Sunflowers)",
    artist: "빈센트 반 고흐",
    mood: "활기찬",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
    youtubeUrl: "https://www.youtube.com/embed/nlqfZIvTIAo",
    desc: "1888년 아를에서 그린 해바라기 연작 중 하나로, 반 고흐가 화가 공동체를 꿈꾸며 고갱을 맞이하기 위해 준비한 작품입니다. 노란색의 다양한 변주가 화면 전체를 지배하며, 생명력과 태양의 에너지를 표현합니다. 반 고흐에게 해바라기는 태양을 상징했고, 그것은 곧 희망과 감사, 우정의 표현이었습니다. 이 작품에서 그는 다양한 개화 단계의 해바라기들을 담아 생명의 순환을 보여줍니다. 활짝 핀 꽃부터 시들어가는 꽃까지, 각각의 해바라기가 저마다의 이야기를 간직하고 있습니다. 두꺼운 물감을 덧바른 임파스토 기법은 꽃잎과 꽃씨에 질감과 입체감을 부여하며, 보는 이로 하여금 손으로 만져보고 싶은 충동을 느끼게 합니다. 비발디의 사계 중 여름 협주곡과 함께 감상하면, 여름 태양 아래 활짝 피어난 해바라기의 생명력이 음악의 열정적인 리듬과 함께 더욱 빛납니다. 격렬한 바이올린 선율이 반 고흐의 붓질만큼이나 강렬하게 다가옵니다."
  },
  {
    id: 6,
    title: "진주 귀걸이를 한 소녀",
    artist: "요하네스 페르메이르",
    mood: "신비로운",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Ho3F8cLqFXQ",
    desc: "1665년경에 그려진 이 작품은 '북유럽의 모나리자'라 불리며 네덜란드 황금시대 회화의 걸작으로 손꼽힙니다. 어두운 배경에서 돌아보는 소녀의 모습은 보는 이를 사로잡는 신비로운 매력을 풍깁니다. 페르메이르 특유의 빛의 처리가 돋보이는 작품으로, 소녀의 입술과 눈에 반짝이는 하이라이트, 진주 귀걸이에 반사되는 빛의 점이 마법처럼 빛납니다. 소녀가 누구인지는 알려지지 않았지만, 그녀의 순수하면서도 의미심장한 눈빛은 350년이 지난 지금도 관람자의 마음을 움직입니다. 파란색과 노란색 터번의 이국적인 조합은 당시 네덜란드의 세계적 무역 활동을 반영하며, 동시에 신비로운 분위기를 더합니다. 바흐의 G선상의 아리아와 함께 감상하면, 현악기의 깊고 서정적인 음색이 그림의 고요하면서도 신비로운 분위기와 완벽하게 조화를 이룹니다. 음악이 흐르는 동안 소녀의 눈빛은 더욱 깊어지고, 시간을 초월한 아름다움의 본질에 가까이 다가가는 느낌을 받게 됩니다."
  },
  {
    id: 7,
    title: "아를의 별이 빛나는 밤",
    artist: "빈센트 반 고흐",
    mood: "로맨틱한",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg",
    youtubeUrl: "https://www.youtube.com/embed/4Tr0otuiQuU",
    desc: "1888년 9월, 반 고흐가 아를의 론 강변에서 밤하늘을 바라보며 그린 작품입니다. 강물에 비친 가스등 불빛과 하늘의 별빛이 어우러져 낭만적인 밤 풍경을 만들어냅니다. 더 유명한 '별이 빛나는 밤'보다 먼저 그려진 이 작품은 실제 아를의 밤 풍경을 더 사실적으로 담아내고 있습니다. 북두칠성이 하늘에 선명하게 빛나고, 그 아래로 도시의 불빛이 강물 위에 황금빛 반영을 만들어냅니다. 강변을 거니는 연인의 실루엣은 이 로맨틱한 장면에 인간적인 따스함을 더합니다. 반 고흐는 이 작품에서 밤에도 색채가 살아있음을 보여주며, 파란색과 노란색의 보색 대비를 통해 밤의 신비로움을 극대화했습니다. 드뷔시의 달빛(Clair de Lune)과 함께 감상하면, 피아노의 물결치는 듯한 선율이 강물의 반짝임과 어우러져 마치 론 강변에서 별을 바라보는 듯한 몽환적인 경험을 선사합니다."
  },
  {
    id: 8,
    title: "그네 (The Swing)",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Pierre-Auguste_Renoir_-_La_Balan%C3%A7oire.jpg/800px-Pierre-Auguste_Renoir_-_La_Balan%C3%A7oire.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1876년에 그려진 이 작품은 몽마르트르의 정원에서 그네를 타는 젊은 여인과 그녀를 바라보는 신사들의 모습을 담고 있습니다. 르누아르는 나무 사이로 스며드는 햇빛이 만들어내는 반점 효과를 아름답게 표현했습니다. 이 독특한 빛의 처리는 인상주의의 핵심적 특징을 잘 보여줍니다. 그림 속 인물들의 옷과 피부 위로 떨어지는 푸른색과 노란색의 반점들은 나뭇잎 사이로 스며드는 햇빛을 생생하게 재현합니다. 젊은 여인의 분홍빛 드레스와 리본, 그녀를 향한 신사들의 관심 어린 시선은 19세기 파리의 젊은이들의 로맨스를 엿볼 수 있게 합니다. 이 작품은 '물랭 드 라 갈레트의 무도회'와 같은 시기에 그려졌으며, 두 작품은 르누아르의 빛에 대한 탐구를 잘 보여줍니다. 모차르트의 피아노 협주곡 21번과 함께 감상하면, 우아하고 경쾌한 음악이 그림의 밝은 분위기와 어우러져 행복한 여름날 오후를 연상시킵니다."
  },
  {
    id: 9,
    title: "생트 빅투아르 산",
    artist: "폴 세잔",
    mood: "평화로운",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Route_Tournante%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg/1024px-Route_Tournante%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "세잔이 수십 번에 걸쳐 그린 생트 빅투아르 산 연작 중 하나입니다. 프로방스 지방의 상징적인 이 산은 세잔에게 끝없는 영감의 원천이었습니다. 그는 같은 산을 다양한 계절, 다양한 시간대, 다양한 시점에서 관찰하며 자연의 영원한 구조를 탐구했습니다. 세잔의 생트 빅투아르 산 그림들은 인상주의에서 큐비즘으로 넘어가는 현대 미술의 중요한 다리 역할을 합니다. 그는 자연을 원통, 구, 원뿔로 환원하여 표현하려 했으며, 이 작품에서도 산의 기하학적 구조가 드러납니다. 붓질의 방향과 색면의 구성이 화면에 견고한 구조를 부여하면서도, 프로방스의 밝은 햇빛과 맑은 공기를 느끼게 합니다. 베토벤의 교향곡 6번 '전원'과 함께 감상하면, 자연에 대한 깊은 사랑과 경외감이 음악과 그림 모두에서 느껴집니다. 평화로운 전원의 정취가 음악의 선율과 세잔의 붓질을 통해 마음 깊이 스며듭니다."
  },
  {
    id: 10,
    title: "아침 식사 전",
    artist: "베르트 모리조",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Berthe_Morisot_-_Summer%27s_Day_-_Google_Art_Project.jpg/1280px-Berthe_Morisot_-_Summer%27s_Day_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "베르트 모리조는 인상주의 운동의 핵심 멤버였던 여성 화가로, 당시 여성의 일상적인 삶을 섬세하게 담아냈습니다. 이 작품은 호수에서 보트를 타는 두 여인의 한가로운 여름날 오후를 그리고 있습니다. 모리조의 특징인 가볍고 재빠른 붓질이 화면 전체에 생동감과 신선함을 부여합니다. 밝은 파란색과 초록색, 흰색이 조화롭게 어우러져 여름 햇살 아래의 상쾌한 공기를 느끼게 합니다. 두 여인의 우아한 드레스와 편안한 자세는 19세기 부르주아 여성들의 여가 생활을 보여줍니다. 물 위에 반사되는 빛의 반짝임, 나무들의 초록빛, 여인들의 밝은 옷차림이 어우러져 평화롭고 행복한 순간을 포착합니다. 포레의 시칠리안느와 함께 감상하면, 우아하고 서정적인 선율이 그림의 부드러운 분위기와 완벽하게 조화를 이룹니다. 마치 19세기 파리의 한적한 호수가에서 여유로운 오후를 보내는 듯한 기분을 느낄 수 있습니다."
  },
  {
    id: 11,
    title: "키스 (The Kiss)",
    artist: "구스타프 클림트",
    mood: "로맨틱한",
    era: "20세기",
    style: "아르누보",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    youtubeUrl: "https://www.youtube.com/embed/izQsgE0L450",
    desc: "1907-1908년에 완성된 이 작품은 클림트의 '황금 시대'를 대표하는 걸작입니다. 금박으로 장식된 화려한 배경 속에서 한 쌍의 연인이 포옹하며 키스하는 순간을 담고 있습니다. 남성과 여성의 의상에 사용된 기하학적 문양의 대비가 두 성별의 상보적 관계를 상징적으로 표현합니다. 클림트는 비잔틴 모자이크에서 영감을 받아 금박을 사용하여 신성하면서도 관능적인 분위기를 창조했습니다. 꽃밭 끝 절벽 위에 무릎 꿇은 두 연인은 세상으로부터 격리된 자신들만의 황금빛 세계에 있는 듯합니다. 여인의 고요한 표정과 남성의 보호하는 듯한 자세는 사랑의 평화롭고 헌신적인 측면을 보여줍니다. 작품에 사용된 금색, 갈색, 녹색의 따뜻한 색조는 친밀감과 영원성을 암시합니다. 라흐마니노프의 피아노 협주곡 2번과 함께 감상하면, 음악의 풍부한 감정과 드라마틱한 전개가 그림의 격정적인 사랑과 어우러져 깊은 감동을 선사합니다."
  },
  {
    id: 12,
    title: "발코니 (The Balcony)",
    artist: "에두아르 마네",
    mood: "신비로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg/800px-Edouard_Manet_-_The_Balcony_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "1868-1869년에 그려진 이 작품은 마네가 고야의 작품에서 영감을 받아 창작한 현대적 해석입니다. 발코니에 선 세 인물은 각자 다른 방향을 바라보고 있어 묘한 긴장감과 소외감을 자아냅니다. 흰색과 초록색의 강렬한 대비, 인물들의 무표정한 얼굴은 현대인의 고독을 예견하는 듯합니다. 앞쪽에 앉아있는 여인은 화가 베르트 모리조로, 그녀의 생생한 눈빛만이 화면에 생기를 불어넣습니다. 마네는 전통적인 회화 규범을 깨트리고 평면적인 색면과 검은 윤곽선을 사용하여 현대 미술의 새로운 방향을 제시했습니다. 발코니의 초록색 난간과 셔터, 흰 드레스의 선명한 대비는 당시 미술계에 충격을 주었습니다. 드뷔시의 목신의 오후 전주곡과 함께 감상하면, 음악의 몽환적이고 신비로운 분위기가 그림 속 인물들의 알 수 없는 감정과 조화를 이루며 상상의 나래를 펼치게 합니다."
  },
  {
    id: 13,
    title: "우산을 쓴 여인",
    artist: "클로드 모네",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/nlqfZIvTIAo",
    desc: "1875년에 그려진 이 작품은 모네의 아내 카미유와 아들 장을 모델로 한 초상화입니다. 햇살 가득한 언덕 위에서 바람에 흔들리는 드레스와 양산을 든 여인의 모습이 순간의 생동감을 완벽하게 포착합니다. 하늘과 초원의 밝은 색채가 어우러져 여름날의 상쾌함이 화면 전체에서 느껴집니다. 모네는 야외에서 직접 그림을 그리는 플레인 에어 기법의 대가로, 이 작품에서 그 기법의 장점이 유감없이 발휘됩니다. 빠른 붓질로 포착한 바람에 나부끼는 옷자락, 흘러가는 구름, 흔들리는 풀잎은 마치 정지된 영화의 한 장면 같습니다. 역광을 받아 실루엣이 된 두 인물의 모습과 파란 하늘의 대비는 강렬한 시각적 효과를 만들어냅니다. 멘델스존의 바이올린 협주곡과 함께 감상하면, 경쾌하면서도 서정적인 선율이 햇살 가득한 언덕의 분위기와 어우러져 가슴 벅찬 기쁨을 선사합니다."
  },
  {
    id: 14,
    title: "아이리스 (Irises)",
    artist: "빈센트 반 고흐",
    mood: "활기찬",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg",
    youtubeUrl: "https://www.youtube.com/embed/nlqfZIvTIAo",
    desc: "1889년 5월, 생레미드프로방스 정신병원에 입원한 직후에 그린 이 작품은 병원 정원의 아이리스 꽃밭을 담고 있습니다. 보라색과 파란색의 아이리스 꽃들이 노란색과 주황색 배경과 대비를 이루며 화면에 강렬한 생명력을 불어넣습니다. 반 고흐는 이 작품을 '피뢰침'이라 불렀는데, 그림 그리기가 자신의 정신 건강에 도움이 된다고 믿었기 때문입니다. 일본 우키요에 판화에서 영감을 받은 구도와 평면적인 색면 처리가 눈에 띕니다. 꽃잎 하나하나를 섬세하게 묘사하면서도 전체적인 리듬감을 유지하는 그의 능력이 잘 드러납니다. 흰색 꽃 한 송이가 보라색 꽃들 사이에서 개성을 뽐내며, 마치 군중 속의 예술가 자신을 표현하는 듯합니다. 비발디의 사계 중 봄과 함께 감상하면, 경쾌한 바이올린 선율이 꽃밭의 생동감과 어우러져 봄의 희망찬 에너지를 전달합니다."
  },
  {
    id: 15,
    title: "풀밭 위의 점심",
    artist: "에두아르 마네",
    mood: "신비로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg/1280px-Edouard_Manet_-_Luncheon_on_the_Grass_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1863년에 그려진 이 작품은 미술사에서 가장 논쟁적인 그림 중 하나입니다. 옷을 입은 두 남성과 벌거벗은 여성이 숲 속에서 피크닉을 즐기는 장면은 당시 파리 미술계에 큰 충격을 주었습니다. 전통적인 신화나 역사화가 아닌 현대인의 모습으로 누드를 그렸다는 점이 파격적이었습니다. 마네는 르네상스 대가들의 작품에서 구도를 차용하면서도 완전히 새로운 해석을 제시했습니다. 여성의 당당한 눈빛은 관람자를 직접 마주하며, 그녀가 단순한 대상이 아닌 주체적 존재임을 암시합니다. 배경의 목욕하는 여인, 어두운 숲과 밝은 인물들의 대비, 전통을 깨뜨리는 평면적 처리 등 이 작품의 모든 요소가 현대 미술의 시작을 알렸습니다. 생상스의 동물의 사육제 중 '백조'와 함께 감상하면, 우아하고 신비로운 첼로 선율이 그림의 묘한 분위기와 어우러져 몽환적인 경험을 선사합니다."
  },
  {
    id: 16,
    title: "테라스의 두 자매",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1881년에 그려진 이 작품은 파리 교외 샤투의 센 강변 레스토랑 테라스에서 포즈를 취한 두 젊은 여인을 담고 있습니다. 르누아르 특유의 따뜻하고 밝은 색채가 화면 전체에 행복한 분위기를 불어넣습니다. 꽃으로 장식된 모자, 분홍빛 뺨, 생기 있는 눈동자는 르누아르가 추구한 아름다움의 정수를 보여줍니다. 두 여인은 실제 자매가 아니었지만, 르누아르는 그들 사이에 자연스러운 친밀감을 표현했습니다. 배경에는 센 강과 푸른 나무들이 보이고, 테라스의 붉은 난간이 화면에 따뜻한 악센트를 더합니다. 바구니에 담긴 모사 실과 뜨개질 도구는 19세기 여성들의 일상을 엿볼 수 있게 합니다. 르누아르는 인물들을 이상화하면서도 자연스러움을 잃지 않았으며, 이것이 그의 작품이 오랫동안 사랑받는 이유입니다. 모차르트의 피아노 소나타 11번과 함께 감상하면, 우아하고 밝은 선율이 화사한 오후의 분위기를 더욱 빛나게 합니다."
  },
  {
    id: 17,
    title: "뱃놀이하는 사람들의 오찬",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/1280px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1880-1881년에 그려진 이 대작은 센 강변 레스토랑의 테라스에서 점심 식사를 즐기는 르누아르의 친구들을 담고 있습니다. 14명의 인물들이 와인잔을 기울이고 대화를 나누며 여유로운 일요일 오후를 보내는 장면은 인상주의의 정수를 보여줍니다. 각 인물들의 개성 넘치는 표정과 자연스러운 포즈가 마치 사진처럼 생생합니다. 그림 왼쪽 아래의 강아지와 놀고 있는 여인은 르누아르의 미래 아내인 알린 샤리고입니다. 테이블 위의 과일, 와인병, 유리잔은 정물화의 아름다움을 보여주며, 배경에 보이는 센 강과 보트는 당시 파리 시민들의 여가 문화를 반영합니다. 햇빛이 차양막을 통과하며 만들어내는 부드러운 빛, 인물들의 다양한 모자와 의상은 19세기 프랑스 사회의 단면을 보여줍니다. 오펜바흐의 지옥의 오르페 서곡과 함께 감상하면, 경쾌하고 흥겨운 음악이 파티의 즐거운 분위기와 완벽하게 어우러집니다."
  },
  {
    id: 18,
    title: "일본 다리",
    artist: "클로드 모네",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg/1024px-Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg",
    youtubeUrl: "https://www.youtube.com/embed/S-Xm7s9eGxU",
    desc: "1899년에 그려진 이 작품은 모네가 자신의 지베르니 정원에 만든 일본식 다리와 연못을 담고 있습니다. 초록색의 아치형 다리가 수련 연못 위를 가로지르며, 수양버들과 각종 수생 식물들이 조화롭게 어우러집니다. 모네는 이 다리를 주제로 수십 점의 그림을 그렸으며, 시간과 계절에 따른 빛의 변화를 탐구했습니다. 동양 미술, 특히 일본 판화에 깊은 관심을 가졌던 모네는 자신의 정원을 살아있는 예술 작품으로 만들었습니다. 다리의 초록색과 연못의 파란색, 수련의 분홍빛이 만들어내는 색채의 조화는 평화롭고 명상적인 분위기를 자아냅니다. 물에 비친 반영과 실제의 경계가 모호해지며, 보는 이를 자연과 하나가 되는 경험으로 이끕니다. 사티의 그노시엔느와 함께 감상하면, 신비롭고 이국적인 선율이 동양적 정원의 분위기와 완벽하게 조화를 이룹니다."
  },
  {
    id: 19,
    title: "라 그르누이예르",
    artist: "클로드 모네",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/La_Grenouill%C3%A8re_MET_DT833.jpg/1280px-La_Grenouill%C3%A8re_MET_DT833.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1869년 여름, 모네와 르누아르는 파리 근교 센 강변의 인기 있는 목욕 휴양지 라 그르누이예르에서 나란히 그림을 그렸습니다. 이 작품들은 인상주의의 탄생을 알리는 역사적인 그림으로 평가됩니다. 물 위에 반사되는 햇빛, 떠다니는 보트, 휴양을 즐기는 사람들이 빠른 붓질로 생생하게 표현되어 있습니다. 모네는 이 작품에서 물의 표면을 표현하는 혁신적인 기법을 실험했습니다. 작은 점과 선들이 모여 물결치는 수면을 표현하고, 나무 그늘과 햇빛이 만들어내는 패턴을 자연스럽게 담아냈습니다. '개구리 연못'이라는 뜻의 라 그르누이예르는 당시 중산층 파리 시민들에게 인기 있는 야외 수영장이자 레스토랑이었습니다. 비제의 카르멘 서곡과 함께 감상하면, 경쾌하고 생기 넘치는 음악이 여름날의 활기찬 분위기를 더욱 생동감 있게 전달합니다."
  },
  {
    id: 20,
    title: "봄 (Primavera)",
    artist: "산드로 보티첼리",
    mood: "로맨틱한",
    era: "15세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Botticelli-primavera.jpg/1280px-Botticelli-primavera.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Ho3F8cLqFXQ",
    desc: "1477-1482년에 그려진 이 작품은 르네상스 미술의 가장 아름다운 알레고리 그림 중 하나입니다. 오렌지 나무 숲을 배경으로 그리스 로마 신화의 인물들이 등장하여 봄의 도래를 알립니다. 중앙에는 사랑의 여신 비너스가, 그 위에는 큐피드가, 오른쪽에는 봄의 여신 플로라와 님프 클로리스, 서풍의 신 제피로스가 있습니다. 보티첼리의 우아한 선과 섬세한 색채가 돋보이는 이 작품에서 500여 종의 식물과 190여 종의 꽃이 확인되었습니다. 이는 당시 피렌체의 메디치 가문이 추구했던 인문주의와 고전 문화에 대한 사랑을 반영합니다. 세 명의 여신이 춤추는 모습은 경쾌하면서도 우아하며, 머큐리가 구름을 흩어주는 장면은 봄의 도래를 상징합니다. 비발디의 사계 중 봄과 함께 감상하면, 르네상스의 아름다움과 바로크 음악의 생동감이 어우러져 봄의 기쁨을 온몸으로 느끼게 합니다."
  },
  {
    id: 21,
    title: "비너스의 탄생",
    artist: "산드로 보티첼리",
    mood: "신비로운",
    era: "15세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Ho3F8cLqFXQ",
    desc: "1485년경에 완성된 이 작품은 서양 미술사에서 가장 유명한 누드화 중 하나입니다. 그리스 신화에 따르면 비너스는 바다 거품에서 태어났으며, 보티첼리는 이 신화적 순간을 시적으로 표현했습니다. 조개껍데기 위에 서 있는 비너스의 우아한 자태, 바람의 신들이 불어주는 장미와 꽃잎, 계절의 여신이 준비한 화려한 망토가 조화를 이룹니다. 보티첼리는 고대 그리스 조각상에서 영감을 받아 이상화된 여성의 아름다움을 표현했습니다. 비너스의 길게 흘러내리는 금발, 수줍은 듯한 자세, 창백하면서도 빛나는 피부는 르네상스 미의 기준을 정립했습니다. 이 작품은 캔버스에 그려진 최초의 대형 누드화로, 당시 교회가 지배하던 예술계에서 고대 신화를 주제로 삼았다는 점에서 혁명적이었습니다. 파헬벨의 캐논과 함께 감상하면, 반복되는 화음의 아름다움이 비너스의 영원한 아름다움과 공명합니다."
  },
  {
    id: 22,
    title: "아테네 학당",
    artist: "라파엘로 산치오",
    mood: "장엄한",
    era: "16세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "1509-1511년에 바티칸 궁전에 그려진 이 프레스코화는 르네상스 예술의 정점을 보여줍니다. 고대 그리스의 위대한 철학자들과 과학자들이 웅장한 고전 건축물 아래 모여 있는 장면을 담고 있습니다. 중앙에는 플라톤과 아리스토텔레스가 대화를 나누고 있으며, 소크라테스, 피타고라스, 유클리드, 디오게네스 등 50여 명의 인물들이 각자의 특징적인 모습으로 표현되어 있습니다. 라파엘로는 당시 예술가들의 얼굴을 이 고대 철학자들에게 부여했습니다. 플라톤은 레오나르도 다 빈치를, 헤라클레이토스는 미켈란젤로를, 유클리드는 브라만테를 모델로 했습니다. 완벽한 원근법과 조화로운 구성, 인물들의 자연스러운 배치는 르네상스가 추구한 이상적 미를 구현합니다. 바흐의 토카타와 푸가 D단조와 함께 감상하면, 웅장한 오르간 음악이 이 지식의 전당에 어울리는 장엄함을 더해줍니다."
  },
  {
    id: 23,
    title: "야경 (The Night Watch)",
    artist: "렘브란트 판 레인",
    mood: "장엄한",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/The_Night_Watch_-_HD.jpg/1280px-The_Night_Watch_-_HD.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Ho3F8cLqFXQ",
    desc: "1642년에 완성된 이 대작은 암스테르담 시민 자경단의 단체 초상화입니다. 그러나 렘브란트는 단순한 단체 사진이 아닌, 극적인 행동의 순간을 담아냈습니다. 대장과 부관을 중심으로 민병대원들이 출동 준비를 하는 장면이 빛과 그림자의 대비 속에서 생생하게 펼쳐집니다. 렘브란트 특유의 키아로스쿠로(명암법) 기법이 돋보이는 이 작품에서, 빛은 마치 무대 조명처럼 주요 인물들을 비추며 드라마틱한 효과를 만들어냅니다. 황금빛 군복을 입은 부관, 밝은 드레스를 입은 신비로운 소녀, 북을 치는 소년 등 다양한 인물들이 화면에 역동성을 부여합니다. 이 작품은 너무나 유명해져서 원래 제목인 '프란스 반닝 코크 대장의 민병대'보다 '야경'이라는 별명으로 더 알려지게 되었습니다. 헨델의 수상 음악과 함께 감상하면, 바로크 시대의 장엄함이 그림과 음악 모두에서 울려 퍼집니다."
  },
  {
    id: 24,
    title: "자화상 (1660)",
    artist: "렘브란트 판 레인",
    mood: "사색적인",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg/800px-Rembrandt_van_Rijn_-_Self-Portrait_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "렘브란트는 평생에 걸쳐 80점 이상의 자화상을 남겼으며, 이 작품은 그의 말년에 그려진 것입니다. 어두운 배경에서 드러나는 그의 얼굴에는 인생의 풍파를 겪은 흔적이 역력합니다. 파산과 사랑하는 사람들의 죽음을 경험한 후에도, 그의 눈은 여전히 예술에 대한 열정과 인간에 대한 깊은 이해로 빛나고 있습니다. 렘브란트의 자화상들은 단순한 외모의 기록이 아닌, 자기 성찰의 여정을 보여줍니다. 두꺼운 물감을 쌓아 올린 기법으로 표현된 피부의 질감, 세월의 흔적이 새겨진 주름, 깊은 사색에 잠긴 눈빛은 보는 이로 하여금 인생과 예술의 의미에 대해 생각하게 합니다. 이 작품은 인간 존재의 취약함과 동시에 위엄을 담아내며, 자화상이라는 장르를 예술의 정점으로 끌어올렸습니다. 바흐의 무반주 첼로 모음곡 1번과 함께 감상하면, 고독하지만 깊이 있는 선율이 그림의 사색적인 분위기와 완벽하게 조화를 이룹니다."
  },
  {
    id: 25,
    title: "우유를 따르는 여인",
    artist: "요하네스 페르메이르",
    mood: "평화로운",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg/800px-Johannes_Vermeer_-_Het_melkmeisje_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1658년경에 그려진 이 작품은 페르메이르의 가장 사랑받는 그림 중 하나입니다. 창문을 통해 들어오는 부드러운 빛 아래, 하녀가 조심스럽게 우유를 따르는 일상적인 순간이 마치 성스러운 의식처럼 표현되어 있습니다. 단순한 장면이지만, 그 속에 담긴 고요함과 집중력은 보는 이를 명상적인 상태로 이끕니다. 페르메이르는 빛을 다루는 데 있어 타의 추종을 불허하는 대가입니다. 창문을 통해 들어온 빛이 여인의 옷과 피부에 부드럽게 반사되고, 테이블 위의 빵과 도자기 위에서 반짝입니다. 파란 앞치마와 노란 상의의 색상 대비, 거친 벽면의 질감, 테이블 위에 흩어진 음식들의 세밀한 묘사는 일상의 아름다움을 극대화합니다. 이 하녀의 강인하면서도 평화로운 모습은 노동의 존엄성을 보여줍니다. 슈베르트의 아베 마리아와 함께 감상하면, 경건하고 아름다운 선율이 그림의 신성한 일상성과 어우러져 마음에 평화를 가져다줍니다."
  },
  {
    id: 26,
    title: "거대한 파도 (신나가와 앞바다)",
    artist: "가쓰시카 호쿠사이",
    mood: "장엄한",
    era: "19세기",
    style: "우키요에",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    youtubeUrl: "https://www.youtube.com/embed/nlqfZIvTIAo",
    desc: "1831년경에 제작된 이 목판화는 세계에서 가장 유명한 일본 미술 작품입니다. 거대한 파도가 작은 배들을 삼킬 듯 위협하고, 멀리 후지산이 고요하게 솟아 있는 장면은 자연의 힘과 인간의 덧없음을 상징적으로 보여줍니다. 프러시안 블루의 깊고 신비로운 색상이 전체 화면을 지배하며 강렬한 인상을 남깁니다. 호쿠사이는 이 작품을 그릴 당시 70대 초반이었으며, 여전히 예술적 혁신을 추구하고 있었습니다. 파도의 갈고리 모양 물거품은 마치 발톱처럼 배들을 향해 뻗어 있고, 그 사이로 후지산이 또 다른 파도처럼 보입니다. 이 작품은 서양 인상주의 화가들에게 큰 영향을 미쳤으며, 반 고흐와 모네도 이 작품에 영감을 받았습니다. 드뷔시의 바다와 함께 감상하면, 오케스트라가 묘사하는 파도의 움직임과 그림 속 거대한 파도가 하나가 되어 바다의 장엄함을 온몸으로 체험하게 됩니다."
  },
  {
    id: 27,
    title: "풍죽도",
    artist: "신사임당",
    mood: "평화로운",
    era: "16세기",
    style: "동양화",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Chochungdo_8crop.jpg/640px-Chochungdo_8crop.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "조선 중기의 대표적인 여류 화가이자 율곡 이이의 어머니인 신사임당의 초충도 중 하나입니다. 대나무와 벌레, 풀을 섬세하게 그린 이 작품은 자연에 대한 깊은 관찰력과 애정을 보여줍니다. 신사임당의 초충도는 단순한 화조화가 아닌, 생명에 대한 존중과 자연과의 조화를 담고 있습니다. 조선시대 여성 예술가로서 신사임당이 남긴 작품들은 매우 희귀하며, 그녀의 예술적 재능과 교양의 깊이를 증명합니다. 바람에 흔들리는 대나무 잎사귀의 섬세한 표현, 벌레들의 생동감 있는 모습은 당시 문인화의 이상을 보여줍니다. 먹의 농담 변화를 통해 대나무의 마디와 잎을 표현하는 기법은 동양화의 정수를 담고 있습니다. 한국 전통 음악 가야금 산조와 함께 감상하면, 동양적 정서와 자연에 대한 깊은 이해가 시각과 청각을 통해 마음에 스며듭니다."
  },
  {
    id: 28,
    title: "몽유도원도",
    artist: "안견",
    mood: "신비로운",
    era: "15세기",
    style: "동양화",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Dream_Journey_to_the_Peach_Blossom_Land.jpg/1280px-Dream_Journey_to_the_Peach_Blossom_Land.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1447년에 그려진 이 작품은 조선 초기의 대표적인 산수화로, 안평대군이 꿈에서 본 복숭아꽃 만발한 이상향을 안견이 그려낸 것입니다. 현실 세계에서 시작하여 점차 신비로운 도원으로 이동하는 구성은 꿈의 여정을 시각적으로 보여줍니다. 동양 회화의 이상인 도원경을 가장 아름답게 표현한 작품으로 평가받습니다. 두루마리 형식의 이 그림은 오른쪽에서 왼쪽으로 감상하도록 되어 있으며, 현실의 산수에서 출발하여 안개 낀 협곡을 지나 마침내 복숭아꽃이 만발한 무릉도원에 도달합니다. 산과 바위, 나무, 구름의 표현에서 안견의 뛰어난 기량이 드러나며, 먹의 다양한 농담과 붓질의 변화가 자연의 다양한 면모를 담아냅니다. 국악 대금 산조와 함께 감상하면, 깊고 서정적인 대금 소리가 꿈속 여행의 신비로움과 어우러져 마치 도원에 있는 듯한 느낌을 선사합니다."
  },
  {
    id: 29,
    title: "모나리자",
    artist: "레오나르도 다 빈치",
    mood: "신비로운",
    era: "16세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Ho3F8cLqFXQ",
    desc: "1503-1519년에 그려진 이 작품은 세계에서 가장 유명한 그림입니다. 피렌체 상인 프란체스코 델 조콘도의 아내 리사 게라르디니를 모델로 한 것으로 추정되며, 그녀의 신비로운 미소는 500년 넘게 사람들의 상상력을 자극해 왔습니다. 다 빈치는 이 작품을 완성하지 않았다고 생각하여 평생 곁에 두었다고 합니다. 다 빈치가 개발한 스푸마토 기법이 이 작품에서 완벽하게 구현됩니다. 윤곽선 없이 색상이 부드럽게 녹아드는 이 기법은 얼굴과 손에 생생한 질감을 부여하며, 배경의 신비로운 풍경과 인물을 자연스럽게 연결합니다. 눈 끝과 입 끝이 흐릿하게 처리되어, 표정이 보는 각도와 감상자의 기분에 따라 달라 보입니다. 바흐의 평균율 클라비어곡집 프렐류드 1번과 함께 감상하면, 순수하고 명상적인 피아노 선율이 모나리자의 영원한 미소와 조화를 이룹니다."
  },
  {
    id: 30,
    title: "시스티나 성당 천장화 - 아담의 창조",
    artist: "미켈란젤로 부오나로티",
    mood: "장엄한",
    era: "16세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg/1280px-Michelangelo_-_Creation_of_Adam_%28cropped%29.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "1508-1512년에 바티칸 시스티나 성당 천장에 그려진 이 프레스코화는 인류 역사상 가장 위대한 예술 작품 중 하나입니다. 신이 아담에게 생명을 불어넣는 순간을 담은 이 장면에서, 두 손가락 사이의 미세한 간격은 신성과 인간성, 영원과 순간 사이의 긴장감을 절묘하게 표현합니다. 미켈란젤로는 조각가로서의 감각을 회화에 적용하여 인체의 이상적인 아름다움을 표현했습니다. 아담의 완벽한 육체는 고대 그리스 조각을 연상시키며, 그의 나른한 자세와 신을 향해 뻗은 손은 인간의 갈망과 취약함을 동시에 보여줍니다. 신을 둘러싼 천사들과 망토는 마치 인간의 뇌 형상을 연상시키는데, 이는 신이 인간에게 지성을 부여하는 순간을 암시한다는 해석도 있습니다. 헨델의 메시아 중 '할렐루야'와 함께 감상하면, 장엄한 합창이 창조의 경이로움과 어우러져 벅찬 감동을 선사합니다."
  },
  {
    id: 31,
    title: "최후의 만찬",
    artist: "레오나르도 다 빈치",
    mood: "장엄한",
    era: "15세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg/1280px-The_Last_Supper_-_Leonardo_Da_Vinci_-_High_Resolution_32x16.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "1495-1498년에 밀라노 산타 마리아 델레 그라치에 성당의 수도원 식당 벽에 그려진 이 작품은 예수가 제자들에게 '너희 중 하나가 나를 배반할 것이다'라고 선언하는 극적인 순간을 담고 있습니다. 각 제자들의 다양한 반응은 인간 심리에 대한 다 빈치의 깊은 이해를 보여줍니다. 다 빈치는 전통적인 프레스코 기법 대신 실험적인 기법을 사용했는데, 안타깝게도 이로 인해 작품은 완성 직후부터 손상되기 시작했습니다. 그럼에도 불구하고 이 작품은 원근법과 구성의 완벽한 조화로 미술사에서 가장 중요한 작품 중 하나로 남아있습니다. 예수를 중심으로 제자들이 세 명씩 그룹을 이루며, 소실점이 예수의 머리에 위치하여 자연스럽게 시선을 이끕니다. 팔레스트리나의 미사곡과 함께 감상하면, 르네상스 다성 음악의 장엄함이 성스러운 장면의 분위기를 더욱 고조시킵니다."
  },
  {
    id: 32,
    title: "밤의 카페 테라스",
    artist: "빈센트 반 고흐",
    mood: "로맨틱한",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg/800px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1888년 9월에 아를에서 그린 이 작품은 반 고흐가 밤을 주제로 한 최초의 그림입니다. 가스등 불빛 아래 빛나는 노란색 차양과 테이블, 푸른 밤하늘에 반짝이는 별들, 조약돌 거리를 거니는 사람들이 로맨틱한 밤 풍경을 만들어냅니다. 반 고흐는 검은색을 사용하지 않고도 밤을 표현할 수 있다는 것을 증명하고 싶었습니다. 노란색과 파란색의 보색 대비가 화면 전체를 지배하며, 따뜻한 인공조명과 차가운 밤하늘의 대조가 강렬한 인상을 남깁니다. 테라스에 앉은 손님들, 지나가는 행인들, 멀리 보이는 마차와 건물들이 19세기 프랑스 남부의 밤 문화를 생생하게 보여줍니다. 이 장소는 오늘날에도 '카페 반 고흐'라는 이름으로 관광 명소가 되었습니다. 사티의 짐노페디 3번과 함께 감상하면, 느리고 사색적인 피아노 선율이 별 아래 조용한 밤의 분위기와 어우러져 마음에 평화를 가져다줍니다."
  },
  {
    id: 33,
    title: "그랑드 자트 섬의 일요일 오후",
    artist: "조르주 쇠라",
    mood: "평화로운",
    era: "19세기",
    style: "신인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg/1280px-A_Sunday_on_La_Grande_Jatte%2C_Georges_Seurat%2C_1884.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1884-1886년에 완성된 이 대작은 점묘법의 탄생을 알린 역사적인 작품입니다. 파리 교외 센 강의 그랑드 자트 섬에서 여가를 즐기는 파리 시민들의 일요일 오후를 담고 있습니다. 쇠라는 수백만 개의 작은 점들로 화면을 구성하여 빛과 색채의 과학적 이론을 예술에 적용했습니다. 쇠라의 점묘법은 색상을 팔레트에서 섞지 않고 캔버스 위에 순색의 작은 점들을 나란히 찍어 관람자의 눈에서 혼합되도록 했습니다. 이 기법은 더 밝고 진동하는 듯한 색채 효과를 만들어냅니다. 화면 속 인물들은 마치 조각상처럼 정적이며, 이집트 부조를 연상시키는 측면 자세로 배치되어 있습니다. 이는 영원한 일요일 오후의 평화로움을 표현하려는 쇠라의 의도입니다. 드뷔시의 베르가마스크 모음곡 중 '달빛'과 함께 감상하면, 인상주의 음악의 빛나는 화음이 점묘화의 반짝이는 색채와 어우러져 몽환적인 오후를 경험하게 합니다."
  },
  {
    id: 34,
    title: "절규 (The Scream)",
    artist: "에드바르트 뭉크",
    mood: "격정적인",
    era: "19세기",
    style: "표현주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    youtubeUrl: "https://www.youtube.com/embed/izQsgE0L450",
    desc: "1893년에 그려진 이 작품은 현대인의 불안과 공포를 가장 강렬하게 표현한 그림으로 평가받습니다. 왜곡된 하늘과 풍경, 두 손으로 얼굴을 감싸고 입을 벌린 인물의 모습은 내면의 고통이 외부 세계로 분출되는 순간을 담아냅니다. 뭉크는 이 이미지가 실제 경험에서 비롯되었다고 밝혔습니다. 뭉크는 자신의 일기에서 이 작품의 영감에 대해 설명했습니다. 해질녘 친구들과 산책하다가 갑자기 피로를 느껴 난간에 기대어 서 있을 때, 석양이 구름을 피처럼 붉게 물들이는 것을 보았고, 자연을 관통하는 거대한 비명 소리를 들은 것 같았다고 합니다. 소용돌이치는 하늘의 붉은색과 주황색, 검푸른 피요르드의 대비는 내면의 혼란과 자연의 조화를 동시에 표현합니다. 라흐마니노프의 피아노 협주곡 3번과 함께 감상하면, 격정적이고 드라마틱한 음악이 그림의 강렬한 감정과 공명하여 깊은 카타르시스를 경험하게 합니다."
  },
  {
    id: 35,
    title: "기억의 지속",
    artist: "살바도르 달리",
    mood: "신비로운",
    era: "20세기",
    style: "초현실주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    youtubeUrl: "https://www.youtube.com/embed/4Tr0otuiQuU",
    desc: "1931년에 그려진 이 작품은 초현실주의의 가장 상징적인 이미지가 되었습니다. 녹아내리는 시계들이 황량한 풍경에 흩어져 있는 이 그림은 시간의 상대성과 무의식의 세계를 탐구합니다. 달리는 프로이트의 정신분석학에 깊이 영향받았으며, 꿈의 세계를 생생한 사실주의로 표현하는 '편집증적-비평적 방법'을 개발했습니다. 달리는 이 작품의 영감이 더운 여름날 녹아내리는 카망베르 치즈에서 왔다고 밝혔습니다. 부드럽게 녹아내리는 시계들은 딱딱한 기계적 시간이 아닌, 유동적이고 주관적인 시간 경험을 상징합니다. 배경의 황금빛 절벽은 달리의 고향인 카탈루냐의 카다케스 풍경을 닮았으며, 중앙의 녹아내리는 형상은 잠든 달리 자신의 모습이라고 합니다. 라벨의 볼레로와 함께 감상하면, 점진적으로 고조되는 반복적 선율이 꿈과 현실 사이의 모호한 경계를 음악적으로 표현합니다."
  },
  {
    id: 36,
    title: "아비뇽의 처녀들",
    artist: "파블로 피카소",
    mood: "격정적인",
    era: "20세기",
    style: "큐비즘",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/4/4c/Les_Demoiselles_d%27Avignon.jpg",
    youtubeUrl: "https://www.youtube.com/embed/izQsgE0L450",
    desc: "1907년에 완성된 이 작품은 현대 미술의 시작을 알린 혁명적인 그림입니다. 다섯 명의 여인이 기하학적으로 왜곡된 형태로 그려져 있으며, 특히 오른쪽 두 인물의 아프리카 가면 같은 얼굴은 당시 예술계에 충격을 주었습니다. 피카소는 전통적인 원근법과 해부학을 완전히 해체하고 새로운 시각 언어를 창조했습니다. 이 작품은 르네상스 이래 지배해온 서양 회화의 관습을 완전히 뒤집었습니다. 여러 시점에서 본 형태를 하나의 화면에 동시에 표현하는 큐비즘의 시작점이며, 이베리아 조각과 아프리카 조각에서 받은 영향이 명확히 드러납니다. 분절된 신체, 날카로운 각도, 평면적인 색면은 이후 20세기 미술의 방향을 결정지었습니다. 스트라빈스키의 봄의 제전과 함께 감상하면, 원시적 리듬과 불협화음이 그림의 혁명적 에너지와 공명하여 20세기 예술의 패러다임 전환을 온몸으로 느끼게 합니다."
  },
  {
    id: 37,
    title: "게르니카",
    artist: "파블로 피카소",
    mood: "격정적인",
    era: "20세기",
    style: "큐비즘",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/7/74/Guernica.jpg",
    youtubeUrl: "https://www.youtube.com/embed/izQsgE0L450",
    desc: "1937년에 그려진 이 대작은 스페인 내전 당시 독일 공군이 게르니카 마을을 폭격한 사건에 대한 피카소의 분노와 비탄을 담고 있습니다. 흑백의 거대한 화면에 고통받는 사람들, 괴로워하는 말, 부서진 조각들이 전쟁의 참상을 고발합니다. 이 작품은 20세기 가장 강력한 반전 메시지를 담은 예술 작품으로 평가받습니다. 피카소는 의도적으로 색채를 배제하고 흑백과 회색만을 사용했습니다. 이는 신문의 사진 보도를 연상시키며, 전쟁의 냉혹한 현실을 더욱 강조합니다. 화면 곳곳에서 울부짖는 어머니, 죽은 아이, 쓰러진 병사, 불에 타는 여인의 모습이 보이며, 전구 모양의 빛은 냉혹한 현대 기술을 상징합니다. 피카소는 이 작품이 프랑코 정권이 끝날 때까지 스페인에 돌아가지 않기를 원했습니다. 쇼스타코비치의 교향곡 7번 '레닌그라드'와 함께 감상하면, 전쟁의 공포와 인간 정신의 불굴함이 시각과 청각으로 강렬하게 전해집니다."
  },
  {
    id: 38,
    title: "별이 빛나는 밤의 카페 테라스",
    artist: "빈센트 반 고흐",
    mood: "평화로운",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Van_Gogh_-_The_Bedroom_in_Arles._First_version%2C_October_1888.jpg/1280px-Van_Gogh_-_The_Bedroom_in_Arles._First_version%2C_October_1888.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1888년 10월에 아를에서 그린 반 고흐의 침실 그림입니다. 단순화된 형태와 대담한 색상으로 표현된 소박한 침실은 반 고흐가 추구한 평화와 휴식의 공간을 보여줍니다. 파란색과 노란색, 초록색의 조화가 따뜻하면서도 고요한 분위기를 자아내며, 기울어진 원근법은 꿈속 같은 느낌을 줍니다. 반 고흐는 이 침실에서 절대적인 휴식을 표현하고 싶다고 편지에 썼습니다. 그는 일본 판화에서 영감을 받아 그림자를 없애고 평면적인 색면을 사용했습니다. 벽에 걸린 자화상과 풍경화, 의자와 테이블, 세면도구 등 일상적인 물건들이 반 고흐의 검소한 생활을 보여줍니다. 이 주제에 대해 그는 세 가지 버전을 그렸으며, 각각 미묘하게 다른 색상과 세부 사항을 가지고 있습니다. 슈만의 어린이 정경 중 '트로이메라이'와 함께 감상하면, 소박하면서도 아름다운 선율이 침실의 평화로운 분위기와 어우러져 마음에 안식을 가져다줍니다."
  },
  {
    id: 39,
    title: "물에 비친 인상",
    artist: "클로드 모네",
    mood: "명상적인",
    era: "20세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Claude_Monet_-_Weeping_Willow_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Weeping_Willow_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/S-Xm7s9eGxU",
    desc: "모네가 말년에 그린 수양버들 연작 중 하나입니다. 1차 세계대전의 비극 속에서 그린 이 작품들은 슬픔과 위로를 동시에 담고 있습니다. 늘어진 버드나무 가지가 화면을 가득 채우며, 그 사이로 비치는 연못과 하늘이 명상적인 분위기를 자아냅니다. 모네는 노년에 백내장으로 시력이 약해졌지만, 오히려 이것이 그의 말년 작품들에 독특한 추상적 품질을 부여했습니다. 수양버들의 가늘고 유연한 가지들은 마치 커튼처럼 화면을 덮으며, 그 너머로 연못의 깊이와 하늘의 광활함이 느껴집니다. 이 시기의 작품들은 자연에 대한 깊은 명상이자 삶과 죽음에 대한 성찰을 담고 있습니다. 전쟁으로 많은 젊은이들을 잃은 프랑스를 위한 모네의 애도이기도 합니다. 포레의 레퀴엠과 함께 감상하면, 고요하면서도 위로하는 선율이 그림의 명상적 분위기와 어우러져 마음 깊은 곳에 위안을 전합니다."
  },
  {
    id: 40,
    title: "오베르 쉬르 우아즈의 교회",
    artist: "빈센트 반 고흐",
    mood: "사색적인",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg/800px-Vincent_van_Gogh_-_The_Church_in_Auvers-sur-Oise%2C_View_from_the_Chevet_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1890년 6월에 그린 이 작품은 반 고흐가 세상을 떠나기 불과 몇 주 전에 완성되었습니다. 오베르의 12세기 교회가 검푸른 하늘을 배경으로 서 있으며, 건물의 윤곽선이 마치 움직이는 듯 일렁입니다. 깊고 진한 색채와 소용돌이치는 붓질은 반 고흐의 내면의 불안과 열정을 동시에 보여줍니다. 반 고흐는 이 교회를 '보라색 톤의 하늘에 대비되는 순수한 코발트 블루의 효과'를 실험하기 위해 그렸다고 편지에 썼습니다. 교회로 이어지는 두 갈래 길은 삶의 선택과 방향을 상징하는 듯하며, 밝은 햇빛에도 불구하고 그림자가 없는 것이 불안한 분위기를 더합니다. 전경의 녹색 풀밭과 야생화는 생명력을 보여주지만, 전체적인 분위기는 묘하게 고요하고 사색적입니다. 바흐의 골드베르크 변주곡 아리아와 함께 감상하면, 단순하면서도 깊은 선율이 반 고흐 말년의 복잡한 감정과 공명합니다."
  },
  {
    id: 41,
    title: "야드에서 점심",
    artist: "클로드 모네",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Claude_Monet_-_Women_in_the_Garden_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Women_in_the_Garden_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1866-1867년에 그린 이 대형 작품은 모네가 야외에서 직접 그린 인상주의 초기의 걸작입니다. 정원에서 시간을 보내는 네 명의 우아하게 차려입은 여성들이 햇빛 아래 다양한 포즈를 취하고 있습니다. 당시 모네의 연인이자 나중에 아내가 된 카미유가 네 인물 모두의 모델이 되었습니다. 이 작품의 크기는 높이가 2.5미터에 달하는데, 모네는 이것을 야외에서 그리기 위해 캔버스를 땅에 파 넣을 수 있는 도랑을 팠습니다. 그는 이렇게 함으로써 자연광 아래에서 직접 모든 부분을 그릴 수 있었습니다. 나뭇잎 사이로 스며드는 햇빛이 만들어내는 반점 효과, 여성들의 하얀 드레스에 비치는 초록빛 반사는 인상주의의 핵심 기법을 보여줍니다. 비제의 아를의 여인 모음곡과 함께 감상하면, 프로방스의 밝은 햇살과 경쾌한 분위기가 음악과 그림 모두에서 생생하게 전해집니다."
  },
  {
    id: 42,
    title: "부드러운 아침 빛",
    artist: "카미유 피사로",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Camille_Pissarro_-_Boulevard_Montmartre_-_Eremitage.jpg/1280px-Camille_Pissarro_-_Boulevard_Montmartre_-_Eremitage.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1897년에 그린 몽마르트르 대로 연작 중 하나입니다. 피사로는 호텔 창문에서 내려다본 파리 대로의 모습을 다양한 시간대와 날씨에 따라 여러 점 그렸습니다. 이 작품은 아침의 부드러운 빛 아래 북적이는 거리의 모습을 담고 있습니다. 보행자들, 마차들, 나무들이 빛에 물들어 평화로우면서도 활기찬 분위기를 자아냅니다. 피사로는 인상주의 운동의 원로로서 젊은 화가들을 이끌었으며, 그 자신도 끊임없이 새로운 기법을 실험했습니다. 이 연작에서 그는 같은 장소를 다른 조건에서 그리며 빛과 대기의 변화를 탐구했습니다. 높은 시점에서 바라본 도시 풍경은 이후 많은 화가들에게 영향을 주었습니다. 거리의 사람들은 작은 점들로 표현되어 있지만, 그들의 움직임과 에너지가 생생하게 느껴집니다. 드뷔시의 작은 모음곡과 함께 감상하면, 프랑스 인상주의 음악의 섬세한 색채가 파리 거리의 분위기와 조화를 이룹니다."
  },
  {
    id: 43,
    title: "무희들",
    artist: "에드가 드가",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_The_Ballet_Class_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1873-1876년에 그린 발레 수업 장면입니다. 드가는 파리 오페라 발레단의 무희들을 주제로 한 작품을 평생에 걸쳐 그렸으며, 이는 그의 가장 사랑받는 주제가 되었습니다. 연습실에서 포즈를 취하거나 스트레칭하는 발레리나들, 그리고 중앙에서 지휘봉을 들고 있는 발레 마스터의 모습이 생생하게 담겨 있습니다. 드가는 인상주의 화가들 중에서 독특한 위치를 차지합니다. 그는 야외보다는 실내 장면을, 자연보다는 인공 조명을 선호했으며, 사진처럼 잘린 구도와 비대칭적 배치를 즐겨 사용했습니다. 이 작품에서도 왼쪽 하단의 무희가 화면 밖으로 잘려 있어 마치 순간적으로 포착된 장면 같은 느낌을 줍니다. 무희들의 하얀 튀튀와 핑크색 리본, 연습실의 따뜻한 나무 바닥이 우아한 색채 조화를 이룹니다. 차이코프스키의 백조의 호수와 함께 감상하면, 발레 음악의 우아한 선율이 그림 속 무희들의 동작과 완벽하게 어우러집니다."
  },
  {
    id: 44,
    title: "압생트를 마시는 사람",
    artist: "에드가 드가",
    mood: "사색적인",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg/800px-Edgar_Degas_-_In_a_Caf%C3%A9_-_Google_Art_Project_2.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1875-1876년에 그린 이 작품은 파리 누벨 아테네 카페에서 압생트를 마시는 두 사람의 모습을 담고 있습니다. 여성의 공허한 눈빛과 무기력한 자세, 옆에 앉은 남성의 무관심한 태도는 19세기 파리 사회의 고독과 소외를 생생하게 보여줍니다. 초록빛 압생트 잔이 탁자 위에서 불길하게 빛나고 있습니다. 드가는 이 작품에서 사진적 구도를 사용하여 현대적인 느낌을 더했습니다. 테이블과 거울이 비스듬히 배치되어 깊이감을 만들고, 두 인물은 화면의 오른쪽에 치우쳐 있어 공허함을 강조합니다. 당시 압생트는 많은 예술가들이 즐기던 술이었지만, 중독성과 환각 효과로 인해 사회 문제가 되기도 했습니다. 드가는 이 장면을 판단 없이 객관적으로 관찰하며, 현대 도시 생활의 어두운 면을 담담하게 기록했습니다. 사티의 벡사시옹과 함께 감상하면, 반복적이고 최면적인 음악이 그림의 나른하고 멜랑콜릭한 분위기와 어우러집니다."
  },
  {
    id: 45,
    title: "황금빛 들판",
    artist: "빈센트 반 고흐",
    mood: "활기찬",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Vincent_van_Gogh_-_Wheatfield_with_a_Reaper_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_Wheatfield_with_a_Reaper_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/nlqfZIvTIAo",
    desc: "1889년 9월에 생레미드프로방스에서 그린 밀밭 연작 중 하나입니다. 황금빛으로 익은 밀이 파도처럼 출렁이고, 멀리서 수확하는 농부의 모습이 보입니다. 반 고흐는 밀을 수확하는 농부를 죽음의 상징으로 보았지만, 동시에 그것이 자연스럽고 평화로운 것이라고 편지에 썼습니다. 반 고흐는 정신병원에 입원해 있으면서도 창밖으로 보이는 밀밭을 지속적으로 그렸습니다. 황금색, 노란색, 초록색의 따뜻한 색조가 화면을 지배하며, 소용돌이치는 붓질은 밀이 바람에 흔들리는 모습을 생생하게 표현합니다. 먼 산과 하늘의 푸른색이 황금빛 밀밭과 대비를 이루며, 자연의 생명력과 순환을 느끼게 합니다. 이 작품은 반 고흐가 추구한 자연과의 합일, 삶과 죽음에 대한 명상을 담고 있습니다. 비발디의 사계 중 여름과 함께 감상하면, 뜨거운 햇빛 아래 출렁이는 밀밭의 에너지가 음악의 열정과 함께 가슴에 전해집니다."
  },
  {
    id: 46,
    title: "에투알 (무대 위의 무희)",
    artist: "에드가 드가",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edgar_Degas_-_L%27%C3%89toile_%28The_Star%29_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_L%27%C3%89toile_%28The_Star%29_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/3LR-JpL9e1k",
    desc: "1878년경에 그린 이 파스텔화는 드가의 무희 시리즈 중 가장 아름다운 작품 중 하나입니다. 무대 위에서 마지막 인사를 하는 프리마 발레리나의 모습을 높은 곳에서 내려다보는 시점으로 담았습니다. 하얀 튀튀와 목에 감긴 리본, 무대 조명에 빛나는 무희의 모습이 환상적인 분위기를 자아냅니다. 드가는 이 작품에서 극적인 조명과 색채를 사용하여 공연의 마법 같은 순간을 포착했습니다. 무대 조명이 무희의 드레스를 밝게 비추고, 배경의 다른 무희들은 어둠 속에 희미하게 보입니다. 왼쪽 무대 뒤에서 지켜보는 검은 옷의 남성(아마도 후원자)은 당시 발레 세계의 어두운 면을 암시하기도 합니다. 높은 시점과 비대칭적 구도는 마치 오페라 박스석에서 바라보는 듯한 느낌을 줍니다. 들리브의 발레 코펠리아와 함께 감상하면, 경쾌하고 우아한 발레 음악이 그림 속 무희의 우아한 동작과 어우러져 공연장에 있는 듯한 느낌을 선사합니다."
  },
  {
    id: 47,
    title: "양귀비 들판",
    artist: "클로드 모네",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Claude_Monet_037.jpg/1280px-Claude_Monet_037.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1873년에 아르장퇴유에서 그린 이 작품은 모네의 가장 사랑받는 그림 중 하나입니다. 붉은 양귀비꽃이 피어 있는 들판을 가로질러 걷는 여인과 아이의 모습이 평화로운 여름날의 행복을 담고 있습니다. 모네의 아내 카미유와 아들 장이 모델이 되었으며, 그들은 화면의 두 곳에 등장합니다. 모네는 빠른 붓질로 양귀비꽃의 붉은 점들을 흩뿌려 들판 전체가 살아 움직이는 듯한 효과를 만들었습니다. 푸른 하늘과 흰 구름, 초록색 풀밭 위에 점점이 찍힌 붉은 양귀비꽃은 인상주의의 색채 이론을 완벽하게 보여줍니다. 언덕 위의 모자와 양산을 쓴 여인의 실루엣은 '우산을 쓴 여인'의 모습을 떠올리게 합니다. 이 작품은 야외에서 직접 그린 플레인 에어 기법의 장점을 잘 보여줍니다. 드뷔시의 목신의 오후 전주곡과 함께 감상하면, 여름날 오후의 나른하고 평화로운 분위기가 음악과 그림 모두에서 부드럽게 전해집니다."
  },
  {
    id: 48,
    title: "카드놀이하는 사람들",
    artist: "폴 세잔",
    mood: "사색적인",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg/1280px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "1890-1895년경에 그린 카드놀이하는 사람들 연작 중 하나입니다. 세잔은 이 주제로 다섯 점의 그림을 그렸으며, 이 버전에서는 두 명의 농부가 테이블에 마주 앉아 카드 게임에 집중하고 있습니다. 단순화된 형태와 견고한 구조는 세잔 특유의 스타일을 보여줍니다. 세잔은 인상주의의 일시적인 빛의 효과보다 사물의 영원한 구조에 관심이 있었습니다. 이 작품에서 두 인물은 마치 조각상처럼 견고하게 자리 잡고 있으며, 테이블과 와인병이 화면에 안정감을 더합니다. 두 사람 사이의 와인병이 화면의 중심축을 이루며, 대칭적이면서도 미묘하게 다른 두 인물의 자세가 균형을 만들어냅니다. 프로방스의 농부들을 모델로 한 이 그림은 노동하는 사람들의 존엄성과 집중력을 담담하게 표현합니다. 브람스의 피아노 4중주와 함께 감상하면, 차분하면서도 깊이 있는 음악이 그림의 사색적인 분위기와 조화를 이룹니다."
  },
  {
    id: 49,
    title: "아를의 침실",
    artist: "빈센트 반 고흐",
    mood: "평화로운",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1888년 10월에 아를에서 그린 반 고흐의 침실 그림 첫 번째 버전입니다. 반 고흐는 동생 테오에게 보낸 편지에서 이 그림이 '절대적인 휴식'을 표현하길 바란다고 썼습니다. 파란색, 노란색, 초록색의 대담한 색상 조합과 기울어진 원근법이 꿈속 같은 분위기를 만들어냅니다. 반 고흐는 의도적으로 그림자를 없애고 평면적인 색면을 사용했습니다. 이것은 일본 판화에서 받은 영감을 반영하며, 단순함 속에서 평화를 찾으려는 그의 바람을 보여줍니다. 벽에 걸린 자화상과 풍경화, 침대 옆 테이블의 물건들, 빈 의자들은 반 고흐의 검소하면서도 예술로 가득 찬 생활을 보여줍니다. 이 소박한 침실은 그가 꿈꾸던 예술가 공동체의 시작점이기도 했습니다. 슈베르트의 즉흥곡과 함께 감상하면, 서정적이면서도 친밀한 피아노 선율이 침실의 아늑한 분위기와 어우러져 마음에 평화를 가져다줍니다."
  },
  {
    id: 50,
    title: "봄의 부케",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Pierre-Auguste_Renoir_-_Bouquet_of_Chrysanthemums_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Bouquet_of_Chrysanthemums_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/nlqfZIvTIAo",
    desc: "르누아르가 그린 화려한 국화 부케 정물화입니다. 붉은색, 분홍색, 흰색, 노란색의 국화꽃이 화병에 가득 꽂혀 있으며, 각 꽃잎이 르누아르 특유의 부드러운 붓질로 표현되어 있습니다. 배경의 따뜻한 색조가 꽃의 화려함을 더욱 돋보이게 합니다. 르누아르는 정물화를 그리면서 인물화를 위한 색채와 형태의 연습을 했습니다. 그는 꽃잎 하나하나를 섬세하게 표현하면서도 전체적인 부케의 풍성함과 생명력을 놓치지 않았습니다. 각 꽃의 다양한 색상이 조화롭게 어우러지며, 마치 자연의 팔레트를 그대로 옮겨 놓은 듯합니다. 르누아르의 정물화는 항상 생동감이 넘치며, 이 작품에서도 꽃들이 살아 숨 쉬는 것처럼 보입니다. 비발디의 사계 중 봄과 함께 감상하면, 경쾌하고 화려한 바이올린 선율이 꽃다발의 생명력과 어우러져 봄의 기쁨을 전달합니다."
  },
  {
    id: 51,
    title: "세느 강의 다리",
    artist: "알프레드 시슬레",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Alfred_Sisley_-_The_Bridge_at_Villeneuve-la-Garenne_-_Google_Art_Project.jpg/1280px-Alfred_Sisley_-_The_Bridge_at_Villeneuve-la-Garenne_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/8Z2d5C-JASM",
    desc: "1872년에 그린 이 작품은 빌뇌브라가렌의 세느 강에 걸린 다리를 담고 있습니다. 시슬레는 인상주의 화가들 중에서 가장 순수하게 풍경화에 전념한 화가입니다. 밝은 하늘과 강물에 비치는 반영, 다리를 건너는 사람들과 마차가 평화로운 프랑스 시골의 풍경을 보여줍니다. 시슬레는 영국인 부모 밑에서 태어났지만 평생 프랑스에서 살았으며, 프랑스 풍경에 대한 깊은 사랑을 작품에 담았습니다. 이 그림에서 하늘은 화면의 절반 이상을 차지하며, 구름의 움직임과 빛의 변화를 섬세하게 표현했습니다. 강물에 비친 다리와 하늘의 반영은 대칭적인 아름다움을 만들어내며, 전체적인 분위기는 고요하면서도 밝습니다. 시슬레의 작품은 모네나 르누아르에 비해 덜 알려졌지만, 그의 풍경화는 인상주의의 정수를 보여줍니다. 생상스의 동물의 사육제 중 '수족관'과 함께 감상하면, 물결치는 듯한 선율이 강물의 반짝임과 어우러져 평화로운 오후를 선사합니다."
  },
  {
    id: 52,
    title: "루앙 대성당",
    artist: "클로드 모네",
    mood: "장엄한",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Claude_Monet_-_Rouen_Cathedral_-_The_Portal_%28Sunlight%29.jpg/800px-Claude_Monet_-_Rouen_Cathedral_-_The_Portal_%28Sunlight%29.jpg",
    youtubeUrl: "https://www.youtube.com/embed/iL1V5XmjMTk",
    desc: "1892-1894년에 그린 루앙 대성당 연작 중 하나입니다. 모네는 같은 건물을 다양한 시간대와 날씨 조건에서 30점 이상 그렸으며, 이를 통해 빛이 물체의 외관을 어떻게 변화시키는지 탐구했습니다. 이 버전은 밝은 햇살이 성당 파사드를 비추는 순간을 담아, 황금빛과 분홍빛이 고딕 건축의 세부를 물들입니다. 모네는 루앙에 아파트를 빌려 대성당 맞은편 창문에서 작업했습니다. 그는 여러 개의 캔버스를 동시에 작업하며, 빛이 변할 때마다 다른 캔버스로 옮겨 그렸습니다. 두껍게 쌓인 물감은 마치 성당 자체의 돌 표면처럼 질감이 있으며, 빛과 그림자가 복잡하게 얽힌 표면을 만들어냅니다. 건축적 세부보다 빛의 효과에 집중한 이 연작은 추상 미술로 가는 중요한 단계로 평가됩니다. 바흐의 토카타와 푸가 D단조와 함께 감상하면, 오르간 음악의 웅장함이 고딕 성당의 장엄함과 완벽하게 어우러집니다."
  },
  {
    id: 53,
    title: "닥터 가셰의 초상",
    artist: "빈센트 반 고흐",
    mood: "사색적인",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Van_Gogh_-_Portrait_of_Dr._Gachet_-_Second_version.jpg/800px-Van_Gogh_-_Portrait_of_Dr._Gachet_-_Second_version.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1890년 6월에 오베르 쉬르 우아즈에서 그린 이 초상화는 반 고흐의 마지막 시기의 걸작입니다. 폴 가셰 박사는 인상주의 화가들을 치료하고 후원한 의사로, 반 고흐의 마지막 몇 주를 함께 보냈습니다. 박사의 우울한 표정은 반 고흐 자신의 내면을 반영하는 듯합니다. 반 고흐는 이 그림에서 파란색과 노란색의 보색 대비를 극대화하여 강렬한 감정적 효과를 만들어냈습니다. 가셰 박사가 턱을 괴고 있는 포즈는 전통적인 멜랑콜리의 상징이며, 그의 눈빛에서 깊은 슬픔이 느껴집니다. 테이블 위의 디기탈리스 꽃은 심장병 치료제로 사용되던 약초로, 의술과 죽음을 동시에 암시합니다. 이 작품은 1990년에 경매에서 8,250만 달러에 팔려 당시 세계에서 가장 비싼 그림이 되었습니다. 쇼팽의 발라드 1번과 함께 감상하면, 서정적이면서도 비극적인 피아노 선율이 그림의 깊은 감정과 공명합니다."
  }
];

export const allMoods = [...new Set(artworks.map(a => a.mood))];
export const allArtists = [...new Set(artworks.map(a => a.artist))];
export const allEras = [...new Set(artworks.map(a => a.era))];
export const allStyles = [...new Set(artworks.map(a => a.style))];
