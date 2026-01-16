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
    youtubeUrl: "https://www.youtube.com/embed/A6s49OKp6aE",
    desc: "1872년에 완성된 이 작품은 인상주의 운동의 이름을 탄생시킨 역사적인 그림입니다. 모네는 르아브르 항구의 이른 아침 풍경을 담아내며, 안개 속에서 떠오르는 태양의 신비로운 빛을 포착했습니다. 붉은 오렌지색 태양이 보라빛 하늘과 물 위에 반사되며 만들어내는 색채의 조화는 당시 미술계에 큰 충격을 주었습니다. 전통적인 아카데미 화풍을 벗어나 순간적인 빛의 인상을 담아내려 한 이 작품은, 형태보다는 색채와 빛의 효과에 집중합니다. 물 위에 비치는 태양 빛의 반영, 안개 속에 흐릿하게 보이는 배와 항구 시설들, 그리고 하늘과 바다가 하나로 어우러지는 모습은 보는 이로 하여금 그 순간의 공기와 분위기를 느끼게 합니다. 드뷔시의 아라베스크 1번과 함께 감상하면, 음악의 유려한 선율이 그림의 부드러운 색채와 어우러져 마치 안개 낀 항구에서 새벽을 맞이하는 듯한 몽환적인 경험을 선사합니다."
  },
  {
    id: 2,
    title: "물랭 드 라 갈레트의 무도회",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg/1280px-Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    youtubeUrl: "https://www.youtube.com/embed/qlpbRrNDLz0",
    desc: "1876년에 완성된 이 대작은 파리 몽마르트르 언덕의 야외 댄스홀에서 벌어지는 일요일 오후의 무도회 장면을 담고 있습니다. 르누아르는 나무 사이로 스며드는 햇빛이 춤추는 사람들 위로 반짝이며 떨어지는 모습을 아름답게 포착했습니다. 이 작품의 특징은 빛과 그림자의 절묘한 조화입니다. 햇살이 만들어내는 둥근 빛의 점들이 사람들의 옷과 피부 위에서 춤추듯 번지며, 전체적으로 따뜻하고 생동감 넘치는 분위기를 자아냅니다. 르누아르는 친구들과 지인들을 모델로 삼아 자연스러운 파리 시민들의 모습을 그려냈으며, 당시 중산층의 여가 문화와 사교 생활을 생생하게 보여줍니다. 바흐의 브란덴부르크 협주곡 3번과 함께 감상하면, 경쾌하면서도 우아한 바로크 음악의 리듬이 그림 속 인물들의 즐거운 춤사위와 완벽하게 어우러집니다."
  },
  {
    id: 3,
    title: "수련 (Water Lilies)",
    artist: "클로드 모네",
    mood: "명상적인",
    era: "20세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg/1280px-Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    youtubeUrl: "https://www.youtube.com/embed/0nTDFLMLX9k",
    desc: "모네가 말년에 자신의 지베르니 정원에서 심혈을 기울여 그린 수련 연작 중 하나입니다. 1906년에 완성된 이 작품은 연못 수면에 떠 있는 수련과 그 위로 반사되는 하늘과 구름, 주변 나무들의 모습을 담고 있습니다. 모네는 수면이라는 하나의 주제에 집중하며, 빛과 색채의 변화를 통해 시간과 계절의 흐름을 표현했습니다. 이 그림에서는 수평선이 사라지고 오직 물의 표면만이 존재합니다. 관람자는 마치 연못 위에 떠 있는 듯한 느낌을 받으며, 현실과 반영 사이의 경계가 모호해지는 신비로운 경험을 하게 됩니다. 에릭 사티의 짐노페디 1번과 함께 이 작품을 감상하면, 느리고 명상적인 피아노 선율이 고요한 연못의 분위기와 완벽하게 조화를 이룹니다. 반복되는 단순한 멜로디가 물결처럼 일렁이며, 마음을 진정시키고 깊은 평화의 상태로 이끌어 줍니다."
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
    desc: "1889년 6월, 반 고흐가 생레미드프로방스의 정신병원에 입원해 있을 때 그린 이 작품은 그의 가장 유명한 걸작입니다. 소용돌이치는 하늘과 빛나는 별들, 초승달, 그리고 고요한 마을 풍경이 어우러져 강렬하면서도 신비로운 분위기를 자아냅니다. 반 고흐 특유의 굵은 붓질과 생동감 넘치는 색채가 하늘에 역동적인 움직임을 부여합니다. 파란색과 노란색의 대비는 밤하늘의 신비로움을 극대화하며, 마치 살아있는 것처럼 소용돌이치는 구름과 별빛은 우주의 에너지를 담아낸 것 같습니다. 화면 왼쪽의 사이프러스 나무는 하늘을 향해 불꽃처럼 솟아오르며, 삶과 죽음, 지상과 천상을 연결하는 상징적 역할을 합니다. 쇼팽의 녹턴 Op.9 No.2와 함께 감상하면, 피아노의 서정적인 선율이 밤하늘의 신비로움과 어우러져 깊은 감동을 선사합니다."
  },
  {
    id: 5,
    title: "해바라기 (Sunflowers)",
    artist: "빈센트 반 고흐",
    mood: "활기찬",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Vincent_Willem_van_Gogh_127.jpg/800px-Vincent_Willem_van_Gogh_127.jpg",
    youtubeUrl: "https://www.youtube.com/embed/GRxofEmo3HA",
    desc: "1888년 아를에서 그린 해바라기 연작 중 하나로, 반 고흐가 화가 공동체를 꿈꾸며 고갱을 맞이하기 위해 준비한 작품입니다. 노란색의 다양한 변주가 화면 전체를 지배하며, 생명력과 태양의 에너지를 표현합니다. 반 고흐에게 해바라기는 태양을 상징했고, 그것은 곧 희망과 감사, 우정의 표현이었습니다. 이 작품에서 그는 다양한 개화 단계의 해바라기들을 담아 생명의 순환을 보여줍니다. 활짝 핀 꽃부터 시들어가는 꽃까지, 각각의 해바라기가 저마다의 이야기를 간직하고 있습니다. 두꺼운 물감을 덧바른 임파스토 기법은 꽃잎과 꽃씨에 질감과 입체감을 부여하며, 보는 이로 하여금 손으로 만져보고 싶은 충동을 느끼게 합니다. 비발디의 사계 중 여름 협주곡과 함께 감상하면, 여름 태양 아래 활짝 피어난 해바라기의 생명력이 음악의 열정적인 리듬과 함께 더욱 빛납니다."
  },
  {
    id: 6,
    title: "진주 귀걸이를 한 소녀",
    artist: "요하네스 페르메이르",
    mood: "신비로운",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    youtubeUrl: "https://www.youtube.com/embed/pZLkR5n03jk",
    desc: "1665년경에 그려진 이 작품은 '북유럽의 모나리자'라 불리며 네덜란드 황금시대 회화의 걸작으로 손꼽힙니다. 어두운 배경에서 돌아보는 소녀의 모습은 보는 이를 사로잡는 신비로운 매력을 풍깁니다. 페르메이르 특유의 빛의 처리가 돋보이는 작품으로, 소녀의 입술과 눈에 반짝이는 하이라이트, 진주 귀걸이에 반사되는 빛의 점이 마법처럼 빛납니다. 소녀가 누구인지는 알려지지 않았지만, 그녀의 순수하면서도 의미심장한 눈빛은 350년이 지난 지금도 관람자의 마음을 움직입니다. 파란색과 노란색 터번의 이국적인 조합은 당시 네덜란드의 세계적 무역 활동을 반영하며, 동시에 신비로운 분위기를 더합니다. 바흐의 G선상의 아리아와 함께 감상하면, 현악기의 깊고 서정적인 음색이 그림의 고요하면서도 신비로운 분위기와 완벽하게 조화를 이룹니다."
  },
  {
    id: 7,
    title: "아를의 별이 빛나는 밤",
    artist: "빈센트 반 고흐",
    mood: "로맨틱한",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg",
    youtubeUrl: "https://www.youtube.com/embed/WVA_HRR6uEc",
    desc: "1888년 9월, 반 고흐가 아를의 론 강변에서 밤하늘을 바라보며 그린 작품입니다. 강물에 비친 가스등 불빛과 하늘의 별빛이 어우러져 낭만적인 밤 풍경을 만들어냅니다. 더 유명한 '별이 빛나는 밤'보다 먼저 그려진 이 작품은 실제 아를의 밤 풍경을 더 사실적으로 담아내고 있습니다. 북두칠성이 하늘에 선명하게 빛나고, 그 아래로 도시의 불빛이 강물 위에 황금빛 반영을 만들어냅니다. 강변을 거니는 연인의 실루엣은 이 로맨틱한 장면에 인간적인 따스함을 더합니다. 반 고흐는 이 작품에서 밤에도 색채가 살아있음을 보여주며, 파란색과 노란색의 보색 대비를 통해 밤의 신비로움을 극대화했습니다. 드뷔시의 달빛(Clair de Lune)과 함께 감상하면, 피아노의 물결치는 듯한 선율이 강물의 반짝임과 어우러져 마치 론 강변에서 별을 바라보는 듯한 몽환적인 경험을 선사합니다."
  },
  {
    id: 8,
    title: "키스 (The Kiss)",
    artist: "구스타프 클림트",
    mood: "로맨틱한",
    era: "20세기",
    style: "아르누보",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg/800px-The_Kiss_-_Gustav_Klimt_-_Google_Cultural_Institute.jpg",
    youtubeUrl: "https://www.youtube.com/embed/rR1GANo-fQk",
    desc: "1907-1908년에 완성된 이 작품은 클림트의 '황금 시대'를 대표하는 걸작입니다. 금박으로 장식된 화려한 배경 속에서 한 쌍의 연인이 포옹하며 키스하는 순간을 담고 있습니다. 남성과 여성의 의상에 사용된 기하학적 문양의 대비가 두 성별의 상보적 관계를 상징적으로 표현합니다. 클림트는 비잔틴 모자이크에서 영감을 받아 금박을 사용하여 신성하면서도 관능적인 분위기를 창조했습니다. 꽃밭 끝 절벽 위에 무릎 꿇은 두 연인은 세상으로부터 격리된 자신들만의 황금빛 세계에 있는 듯합니다. 여인의 고요한 표정과 남성의 보호하는 듯한 자세는 사랑의 평화롭고 헌신적인 측면을 보여줍니다. 라흐마니노프의 피아노 협주곡 2번과 함께 감상하면, 음악의 풍부한 감정과 드라마틱한 전개가 그림의 격정적인 사랑과 어우러져 깊은 감동을 선사합니다."
  },
  {
    id: 9,
    title: "우산을 쓴 여인",
    artist: "클로드 모네",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg/800px-Claude_Monet_-_Woman_with_a_Parasol_-_Madame_Monet_and_Her_Son_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/o1dBg__wsuo",
    desc: "1875년에 그려진 이 작품은 모네의 아내 카미유와 아들 장을 모델로 한 초상화입니다. 햇살 가득한 언덕 위에서 바람에 흔들리는 드레스와 양산을 든 여인의 모습이 순간의 생동감을 완벽하게 포착합니다. 하늘과 초원의 밝은 색채가 어우러져 여름날의 상쾌함이 화면 전체에서 느껴집니다. 모네는 야외에서 직접 그림을 그리는 플레인 에어 기법의 대가로, 이 작품에서 그 기법의 장점이 유감없이 발휘됩니다. 빠른 붓질로 포착한 바람에 나부끼는 옷자락, 흘러가는 구름, 흔들리는 풀잎은 마치 정지된 영화의 한 장면 같습니다. 역광을 받아 실루엣이 된 두 인물의 모습과 파란 하늘의 대비는 강렬한 시각적 효과를 만들어냅니다. 멘델스존의 바이올린 협주곡과 함께 감상하면, 경쾌하면서도 서정적인 선율이 햇살 가득한 언덕의 분위기와 어우러져 가슴 벅찬 기쁨을 선사합니다."
  },
  {
    id: 10,
    title: "일본 다리",
    artist: "클로드 모네",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg/1024px-Water-Lilies-and-Japanese-Bridge-%281897-1899%29-Monet.jpg",
    youtubeUrl: "https://www.youtube.com/embed/A6s49OKp6aE",
    desc: "1899년에 완성된 이 작품은 지베르니의 모네 정원에 있는 일본식 다리와 수련 연못을 담고 있습니다. 모네는 일본 미술에 깊은 관심을 가지고 있었고, 자신의 정원에 일본식 아치형 다리를 설치했습니다. 초록색 다리가 수련으로 가득한 연못 위를 아름답게 가로지르며, 버드나무와 다른 식물들이 무성하게 자라고 있습니다. 이 정원은 모네의 말년 예술 작업의 중심지가 되었습니다. 그는 같은 다리를 다양한 빛과 계절에서 수없이 그렸으며, 이를 통해 빛의 변화에 따른 자연의 모습을 탐구했습니다. 화면 전체를 감싸는 초록색의 다양한 색조와 물에 비친 반영은 보는 이를 자연 속으로 빠져들게 합니다. 드뷔시의 아라베스크 1번과 함께 감상하면, 우아하게 흐르는 피아노 선율이 고요한 연못의 분위기와 완벽하게 어우러져 평화로운 명상의 시간을 선사합니다."
  },
  {
    id: 11,
    title: "아이리스 (Irises)",
    artist: "빈센트 반 고흐",
    mood: "활기찬",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Irises-Vincent_van_Gogh.jpg/1280px-Irises-Vincent_van_Gogh.jpg",
    youtubeUrl: "https://www.youtube.com/embed/l0vrsO3_HpU",
    desc: "1889년 5월, 생레미드프로방스 정신병원에 입원한 직후에 그린 이 작품은 병원 정원의 아이리스 꽃밭을 담고 있습니다. 보라색과 파란색의 아이리스 꽃들이 노란색과 주황색 배경과 대비를 이루며 화면에 강렬한 생명력을 불어넣습니다. 반 고흐는 이 작품을 '피뢰침'이라 불렀는데, 그림 그리기가 자신의 정신 건강에 도움이 된다고 믿었기 때문입니다. 일본 우키요에 판화에서 영감을 받은 구도와 평면적인 색면 처리가 눈에 띕니다. 꽃잎 하나하나를 섬세하게 묘사하면서도 전체적인 리듬감을 유지하는 그의 능력이 잘 드러납니다. 흰색 꽃 한 송이가 보라색 꽃들 사이에서 개성을 뽐내며, 마치 군중 속의 예술가 자신을 표현하는 듯합니다. 비발디의 사계 중 봄과 함께 감상하면, 경쾌한 바이올린 선율이 꽃밭의 생동감과 어우러져 봄의 희망찬 에너지를 전달합니다."
  },
  {
    id: 12,
    title: "테라스의 두 자매",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg/800px-Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/df-eLzao63I",
    desc: "1881년에 그려진 이 작품은 파리 교외 샤투의 센 강변 레스토랑 테라스에서 포즈를 취한 두 젊은 여인을 담고 있습니다. 르누아르 특유의 따뜻하고 밝은 색채가 화면 전체에 행복한 분위기를 불어넣습니다. 꽃으로 장식된 모자, 분홍빛 뺨, 생기 있는 눈동자는 르누아르가 추구한 아름다움의 정수를 보여줍니다. 두 여인은 실제 자매가 아니었지만, 르누아르는 그들 사이에 자연스러운 친밀감을 표현했습니다. 배경에는 센 강과 푸른 나무들이 보이고, 테라스의 붉은 난간이 화면에 따뜻한 악센트를 더합니다. 바구니에 담긴 모사 실과 뜨개질 도구는 19세기 여성들의 일상을 엿볼 수 있게 합니다. 르누아르는 인물들을 이상화하면서도 자연스러움을 잃지 않았으며, 이것이 그의 작품이 오랫동안 사랑받는 이유입니다. 모차르트의 피아노 소나타 11번과 함께 감상하면, 우아하고 밝은 선율이 화사한 오후의 분위기를 더욱 빛나게 합니다."
  },
  {
    id: 13,
    title: "양귀비 들판",
    artist: "클로드 모네",
    mood: "평화로운",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Claude_Monet_037.jpg/1280px-Claude_Monet_037.jpg",
    youtubeUrl: "https://www.youtube.com/embed/Ywe7wPJJcGQ",
    desc: "1873년에 아르장퇴유에서 그린 이 작품은 모네의 가장 사랑받는 그림 중 하나입니다. 붉은 양귀비꽃이 피어 있는 들판을 가로질러 걷는 여인과 아이의 모습이 평화로운 여름날의 행복을 담고 있습니다. 모네의 아내 카미유와 아들 장이 모델이 되었으며, 그들은 화면의 두 곳에 등장합니다. 모네는 빠른 붓질로 양귀비꽃의 붉은 점들을 흩뿌려 들판 전체가 살아 움직이는 듯한 효과를 만들었습니다. 푸른 하늘과 흰 구름, 초록색 풀밭 위에 점점이 찍힌 붉은 양귀비꽃은 인상주의의 색채 이론을 완벽하게 보여줍니다. 언덕 위의 모자와 양산을 쓴 여인의 실루엣은 '우산을 쓴 여인'의 모습을 떠올리게 합니다. 드뷔시의 목신의 오후 전주곡과 함께 감상하면, 여름날 오후의 나른하고 평화로운 분위기가 음악과 그림 모두에서 부드럽게 전해집니다."
  },
  {
    id: 14,
    title: "시녀들 (Las Meninas)",
    artist: "디에고 벨라스케스",
    mood: "신비로운",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg/800px-Las_Meninas%2C_by_Diego_Vel%C3%A1zquez%2C_from_Prado_in_Google_Earth.jpg",
    youtubeUrl: "https://www.youtube.com/embed/JvNQLJ1_HQ0",
    desc: "1656년에 완성된 이 작품은 미술사에서 가장 분석되고 논의된 그림 중 하나입니다. 스페인 궁정 화가였던 벨라스케스가 마르가리타 공주와 그녀의 시녀들, 그리고 작업 중인 자신의 모습을 함께 담은 복잡한 구성을 보여줍니다. 거울에 비친 국왕 부부의 모습은 그림의 시점에 대한 끊임없는 질문을 던집니다. 벨라스케스는 빛과 공간을 마스터했으며, 이 작품에서 그의 기술이 최고조에 달합니다. 창문으로 들어오는 빛이 어린 공주를 비추고, 배경으로 갈수록 공간이 어두워지며 깊이감을 만들어냅니다. 화가 자신이 캔버스 앞에 서 있는 모습은 예술가의 위상에 대한 주장이기도 합니다. 비발디의 첼로 협주곡과 함께 감상하면, 바로크 시대의 우아함과 복잡성이 음악과 그림 모두에서 조화롭게 느껴집니다."
  },
  {
    id: 15,
    title: "비너스의 탄생",
    artist: "산드로 보티첼리",
    mood: "신비로운",
    era: "15세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/1280px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg",
    youtubeUrl: "https://www.youtube.com/embed/RChXiKrVYHc",
    desc: "1485년경에 완성된 이 작품은 르네상스 시대의 가장 상징적인 이미지 중 하나입니다. 조개껍데기 위에 서 있는 비너스 여신이 바다 거품에서 탄생하는 순간을 담고 있습니다. 바람의 신 제피로스와 아우라가 그녀를 해변으로 밀어주고, 계절의 여신 호라이가 망토를 들고 그녀를 맞이합니다. 보티첼리는 고대 그리스 로마 신화를 기독교적 가치와 조화시키려는 메디치 가문의 인문주의적 이상을 표현했습니다. 비너스의 수줍은 포즈와 긴 황금빛 머리카락, 창백한 피부는 순수한 아름다움의 이상을 보여줍니다. 꽃들이 흩날리는 배경과 양식화된 파도는 현실과 신화가 만나는 꿈같은 공간을 만들어냅니다. 팔레스트리나의 교황 마르첼로 미사와 함께 감상하면, 르네상스 다성음악의 천상의 아름다움이 그림의 신성한 분위기와 완벽하게 어우러집니다."
  },
  {
    id: 16,
    title: "아테네 학당",
    artist: "라파엘로 산치오",
    mood: "장엄한",
    era: "16세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg/1280px-%22The_School_of_Athens%22_by_Raffaello_Sanzio_da_Urbino.jpg",
    youtubeUrl: "https://www.youtube.com/embed/SbVZ9pDfJfg",
    desc: "1509-1511년에 바티칸 궁전의 서명의 방에 그려진 이 프레스코화는 고대 그리스의 위대한 철학자들과 과학자들의 모임을 상상한 작품입니다. 중앙에 플라톤과 아리스토텔레스가 서 있고, 소크라테스, 피타고라스, 유클리드 등이 함께합니다. 라파엘로는 고대의 지혜가 르네상스 시대에 부활했음을 웅장하게 선언합니다. 거대한 아치형 건축물은 고대 로마의 영광을 떠올리게 하며, 원근법의 완벽한 사용이 깊이감과 웅장함을 더합니다. 각 인물은 특정 철학자의 초상이면서 동시에 라파엘로 동시대인들의 얼굴을 담고 있습니다. 예를 들어 플라톤은 레오나르도 다 빈치의 모습이며, 헤라클레이토스는 미켈란젤로를 닮았습니다. 베토벤의 교향곡 9번 합창과 함께 감상하면, 인류의 위대한 이상과 형제애에 대한 찬가가 그림의 장엄함과 조화를 이룹니다."
  },
  {
    id: 17,
    title: "파도 (The Great Wave)",
    artist: "가츠시카 호쿠사이",
    mood: "격정적인",
    era: "19세기",
    style: "우키요에",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Tsunami_by_hokusai_19th_century.jpg/1280px-Tsunami_by_hokusai_19th_century.jpg",
    youtubeUrl: "https://www.youtube.com/embed/GXbwHj8YZ-c",
    desc: "1831년경에 제작된 이 목판화는 세계에서 가장 유명한 일본 미술 작품입니다. 거대한 파도가 작은 어선들을 집어삼키려 하고, 멀리 후지산이 고요하게 서 있습니다. 자연의 위력과 인간의 나약함, 그리고 영원한 산의 대비가 극적인 긴장감을 만들어냅니다. 호쿠사이는 70대에 이 걸작을 만들었으며, 후지산 36경 시리즈의 일부입니다. 프러시안 블루라는 새로운 안료의 사용이 파도의 강렬한 푸른색을 가능하게 했습니다. 파도의 물거품이 마치 손톱처럼 뻗어 나가는 모습은 자연의 폭력성을 생생하게 전달합니다. 이 작품은 드뷔시에게 영감을 주어 교향시 '바다'를 작곡하게 했습니다. 드뷔시의 바다(La Mer)와 함께 감상하면, 음악의 출렁이는 선율이 그림의 역동적인 물결과 완벽하게 일치하여 대양의 힘을 온몸으로 느끼게 합니다."
  },
  {
    id: 18,
    title: "기억의 지속",
    artist: "살바도르 달리",
    mood: "신비로운",
    era: "20세기",
    style: "초현실주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/d/dd/The_Persistence_of_Memory.jpg",
    youtubeUrl: "https://www.youtube.com/embed/0nTDFLMLX9k",
    desc: "1931년에 완성된 이 작품은 초현실주의의 가장 상징적인 이미지입니다. 녹아내리는 시계들이 황량한 풍경에 널려 있으며, 시간의 상대성과 무의식의 세계를 탐구합니다. 달리는 꿈의 논리를 따라 불가능한 장면을 극도로 사실적인 기법으로 그려 보는 이를 당혹스럽게 만듭니다. 달리에 따르면, 이 작품은 덥고 축축한 카망베르 치즈에서 영감을 받았다고 합니다. 배경의 절벽은 그의 고향 카탈루냐의 해변을 닮았으며, 중앙의 녹아내리는 형상은 자화상적 요소로 해석됩니다. 시계가 녹아내리는 것은 시간이 무의식 속에서 유동적임을 암시하며, 개미와 파리는 죽음과 부패를 상징합니다. 에릭 사티의 짐노페디 1번과 함께 감상하면, 느리고 몽환적인 피아노 선율이 꿈같은 풍경과 어우러져 무의식의 깊은 세계로 빠져들게 합니다."
  },
  {
    id: 19,
    title: "절규 (The Scream)",
    artist: "에드바르트 뭉크",
    mood: "격정적인",
    era: "19세기",
    style: "표현주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/800px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg",
    youtubeUrl: "https://www.youtube.com/embed/W-fFHeTX70Q",
    desc: "1893년에 완성된 이 작품은 현대인의 불안과 실존적 공포를 가장 강렬하게 표현한 그림입니다. 붉은 하늘 아래 다리 위에서 비명을 지르는 인물의 왜곡된 형상은 20세기 불안의 시대를 예고합니다. 뭉크는 자신이 걷다가 '자연을 관통하는 끝없는 비명'을 들었다고 기록했습니다. 소용돌이치는 하늘과 풍경은 인물의 내면 상태를 반영하며, 모든 것이 공포에 물든 듯 일렁입니다. 멀리 걸어가는 두 인물의 무관심한 모습은 현대인의 고립감을 더욱 부각시킵니다. 뭉크는 이 주제로 여러 버전을 제작했으며, 각각 다른 매체를 사용했습니다. 베르크의 바이올린 협주곡과 함께 감상하면, 불협화음과 긴장감 넘치는 현대 음악이 그림의 불안한 에너지와 공명하며 깊은 감정적 반응을 불러일으킵니다."
  },
  {
    id: 20,
    title: "밤의 카페 테라스",
    artist: "빈센트 반 고흐",
    mood: "로맨틱한",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg/800px-Van_Gogh_-_Terrasse_des_Caf%C3%A9s_an_der_Place_du_Forum_in_Arles_am_Abend1.jpeg",
    youtubeUrl: "https://www.youtube.com/embed/WVA_HRR6uEc",
    desc: "1888년 9월 아를에서 그린 이 작품은 반 고흐가 검은색을 전혀 사용하지 않고 밤 장면을 표현한 첫 번째 그림입니다. 가스등 불빛에 노란색으로 빛나는 카페 테라스와 코발트 블루의 밤하늘, 별들이 어우러져 매혹적인 밤 풍경을 만들어냅니다. 반 고흐는 밤에도 색채가 풍부하게 존재한다고 믿었습니다. 테라스의 따뜻한 노란빛과 주변 건물의 푸른 그림자, 조약돌 바닥의 다양한 색조는 밤이 결코 단순히 어둡지 않음을 보여줍니다. 카페에 앉아 있는 사람들과 거리를 지나가는 인물들은 아를의 일상적인 밤 풍경에 생명력을 더합니다. 이 장소는 오늘날에도 카페 반 고흐로 남아있어 방문객들을 맞이합니다. 드뷔시의 달빛과 함께 감상하면, 부드럽게 흐르는 피아노 선율이 별빛 아래 카페의 낭만적인 분위기와 완벽하게 조화를 이룹니다."
  },
  {
    id: 21,
    title: "아를의 침실",
    artist: "빈센트 반 고흐",
    mood: "평화로운",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg/1280px-Vincent_van_Gogh_-_De_slaapkamer_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/2bosouX_d8Y",
    desc: "1888년 10월에 아를에서 그린 반 고흐의 침실 그림 첫 번째 버전입니다. 반 고흐는 동생 테오에게 보낸 편지에서 이 그림이 '절대적인 휴식'을 표현하길 바란다고 썼습니다. 파란색, 노란색, 초록색의 대담한 색상 조합과 기울어진 원근법이 꿈속 같은 분위기를 만들어냅니다. 반 고흐는 의도적으로 그림자를 없애고 평면적인 색면을 사용했습니다. 이것은 일본 판화에서 받은 영감을 반영하며, 단순함 속에서 평화를 찾으려는 그의 바람을 보여줍니다. 벽에 걸린 자화상과 풍경화, 침대 옆 테이블의 물건들, 빈 의자들은 반 고흐의 검소하면서도 예술로 가득 찬 생활을 보여줍니다. 슈베르트의 즉흥곡과 함께 감상하면, 서정적이면서도 친밀한 피아노 선율이 침실의 아늑한 분위기와 어우러져 마음에 평화를 가져다줍니다."
  },
  {
    id: 22,
    title: "모나리자",
    artist: "레오나르도 다 빈치",
    mood: "신비로운",
    era: "16세기",
    style: "르네상스",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/800px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg",
    youtubeUrl: "https://www.youtube.com/embed/kHIigNqaW2Y",
    desc: "1503-1519년경에 완성된 이 작품은 세계에서 가장 유명한 그림입니다. 피렌체 상인의 아내로 추정되는 리사 게라르디니의 초상화로, 그녀의 신비로운 미소는 500년 넘게 관람자들을 매료시켜 왔습니다. 레오나르도 다 빈치는 스푸마토 기법을 사용하여 윤곽선을 부드럽게 처리했습니다. 그녀의 눈가와 입가에 사용된 이 기법은 표정을 모호하게 만들어, 보는 각도와 관람자의 기분에 따라 다르게 느껴지게 합니다. 배경의 풍경은 실제 장소가 아닌 상상의 공간으로, 구불구불한 길과 다리, 산봉우리가 몽환적인 분위기를 더합니다. 다 빈치는 이 그림을 죽을 때까지 가지고 다니며 계속 수정했다고 전해집니다. 라벨의 죽은 왕녀를 위한 파반과 함께 감상하면, 우아하고 신비로운 오케스트라 선율이 모나리자의 수수께끼 같은 미소와 완벽하게 어우러집니다."
  },
  {
    id: 23,
    title: "루앙 대성당",
    artist: "클로드 모네",
    mood: "장엄한",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Claude_Monet_-_Rouen_Cathedral_-_The_Portal_%28Sunlight%29.jpg/800px-Claude_Monet_-_Rouen_Cathedral_-_The_Portal_%28Sunlight%29.jpg",
    youtubeUrl: "https://www.youtube.com/embed/-LXl4y6D-QI",
    desc: "1892-1894년에 그린 루앙 대성당 연작 중 하나입니다. 모네는 같은 건물을 다양한 시간대와 날씨 조건에서 30점 이상 그렸으며, 이를 통해 빛이 물체의 외관을 어떻게 변화시키는지 탐구했습니다. 이 버전은 밝은 햇살이 성당 파사드를 비추는 순간을 담아, 황금빛과 분홍빛이 고딕 건축의 세부를 물들입니다. 모네는 루앙에 아파트를 빌려 대성당 맞은편 창문에서 작업했습니다. 그는 여러 개의 캔버스를 동시에 작업하며, 빛이 변할 때마다 다른 캔버스로 옮겨 그렸습니다. 두껍게 쌓인 물감은 마치 성당 자체의 돌 표면처럼 질감이 있으며, 빛과 그림자가 복잡하게 얽힌 표면을 만들어냅니다. 바흐의 토카타와 푸가 D단조와 함께 감상하면, 오르간 음악의 웅장함이 고딕 성당의 장엄함과 완벽하게 어우러집니다."
  },
  {
    id: 24,
    title: "카드놀이하는 사람들",
    artist: "폴 세잔",
    mood: "사색적인",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg/1280px-Les_Joueurs_de_cartes%2C_par_Paul_C%C3%A9zanne%2C_Yorck.jpg",
    youtubeUrl: "https://www.youtube.com/embed/R9fhSfTZONY",
    desc: "1890-1895년경에 그린 카드놀이하는 사람들 연작 중 하나입니다. 세잔은 이 주제로 다섯 점의 그림을 그렸으며, 이 버전에서는 두 명의 농부가 테이블에 마주 앉아 카드 게임에 집중하고 있습니다. 단순화된 형태와 견고한 구조는 세잔 특유의 스타일을 보여줍니다. 세잔은 인상주의의 일시적인 빛의 효과보다 사물의 영원한 구조에 관심이 있었습니다. 이 작품에서 두 인물은 마치 조각상처럼 견고하게 자리 잡고 있으며, 테이블과 와인병이 화면에 안정감을 더합니다. 두 사람 사이의 와인병이 화면의 중심축을 이루며, 대칭적이면서도 미묘하게 다른 두 인물의 자세가 균형을 만들어냅니다. 프로방스의 농부들을 모델로 한 이 그림은 노동하는 사람들의 존엄성과 집중력을 담담하게 표현합니다. 브람스의 피아노 4중주와 함께 감상하면, 차분하면서도 깊이 있는 음악이 그림의 사색적인 분위기와 조화를 이룹니다."
  },
  {
    id: 25,
    title: "진주 목걸이를 한 여인",
    artist: "요하네스 페르메이르",
    mood: "명상적인",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Jan_Vermeer_van_Delft_-_Young_Woman_with_a_Pearl_Necklace_-_Google_Art_Project.jpg/800px-Jan_Vermeer_van_Delft_-_Young_Woman_with_a_Pearl_Necklace_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/pZLkR5n03jk",
    desc: "1664년경에 완성된 이 작품은 페르메이르의 빛에 대한 탁월한 이해를 보여줍니다. 창가에 선 젊은 여인이 진주 목걸이를 들고 거울을 바라보는 순간을 담고 있습니다. 왼쪽 창문에서 들어오는 부드러운 빛이 그녀의 모습을 은은하게 비춥니다. 페르메이르는 일상의 순간을 신성한 것처럼 표현하는 데 탁월했습니다. 여인이 목걸이를 바라보는 모습은 단순한 허영심의 표현이 아니라, 자아 성찰의 순간으로 읽힐 수 있습니다. 노란 재킷의 부드러운 질감, 진주의 은은한 광택, 그리고 벽에 걸린 그림과 거울의 어두운 프레임이 조화로운 색채의 앙상블을 만들어냅니다. 바흐의 G선상의 아리아와 함께 감상하면, 현의 깊은 울림이 그림의 고요하고 명상적인 분위기와 완벽하게 조화를 이룹니다."
  },
  {
    id: 26,
    title: "에투알 (무대 위의 무희)",
    artist: "에드가 드가",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Edgar_Degas_-_L%27%C3%89toile_%28The_Star%29_-_Google_Art_Project.jpg/800px-Edgar_Degas_-_L%27%C3%89toile_%28The_Star%29_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/YdpwtPqvgno",
    desc: "1878년경에 그린 이 파스텔화는 드가의 무희 시리즈 중 가장 아름다운 작품 중 하나입니다. 무대 위에서 마지막 인사를 하는 프리마 발레리나의 모습을 높은 곳에서 내려다보는 시점으로 담았습니다. 하얀 튀튀와 목에 감긴 리본, 무대 조명에 빛나는 무희의 모습이 환상적인 분위기를 자아냅니다. 드가는 이 작품에서 극적인 조명과 색채를 사용하여 공연의 마법 같은 순간을 포착했습니다. 무대 조명이 무희의 드레스를 밝게 비추고, 배경의 다른 무희들은 어둠 속에 희미하게 보입니다. 왼쪽 무대 뒤에서 지켜보는 검은 옷의 남성은 당시 발레 세계의 복잡한 측면을 암시하기도 합니다. 들리브의 발레 코펠리아와 함께 감상하면, 경쾌하고 우아한 발레 음악이 그림 속 무희의 우아한 동작과 어우러져 공연장에 있는 듯한 느낌을 선사합니다."
  },
  {
    id: 27,
    title: "그네 (The Swing)",
    artist: "장 오노레 프라고나르",
    mood: "로맨틱한",
    era: "18세기",
    style: "로코코",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Fragonard%2C_The_Swing.jpg/800px-Fragonard%2C_The_Swing.jpg",
    youtubeUrl: "https://www.youtube.com/embed/K-Hn0r1nM0E",
    desc: "1767년에 완성된 이 작품은 로코코 미술의 가장 상징적인 이미지입니다. 무성한 정원에서 그네를 타는 젊은 여인, 그녀의 신발이 공중으로 날아가고, 덤불 속에 숨어 그녀를 올려다보는 젊은 남성, 그리고 뒤에서 그네를 밀어주는 나이 든 남성(아마도 그녀의 남편)이 등장합니다. 이 작품은 당시 프랑스 귀족 사회의 유희적이고 관능적인 분위기를 완벽하게 포착합니다. 분홍빛 드레스의 풍성한 주름, 신비로운 빛으로 가득한 정원, 큐피드 조각상이 입에 손가락을 대고 비밀을 지키라는 듯 서 있습니다. 프라고나르의 유려한 붓질과 파스텔 색조는 꿈같은 분위기를 만들어냅니다. 모차르트의 피아노 협주곡 21번과 함께 감상하면, 우아하고 경쾌한 선율이 18세기 귀족 문화의 화려함과 완벽하게 어우러집니다."
  },
  {
    id: 28,
    title: "음악 레슨",
    artist: "요하네스 페르메이르",
    mood: "평화로운",
    era: "17세기",
    style: "바로크",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Jan_Vermeer_-_The_Music_Lesson.jpg/800px-Jan_Vermeer_-_The_Music_Lesson.jpg",
    youtubeUrl: "https://www.youtube.com/embed/pZLkR5n03jk",
    desc: "1662-1665년경에 완성된 이 작품은 버지널(작은 하프시코드)을 연주하는 젊은 여인과 그녀의 선생님으로 보이는 남성을 담고 있습니다. 왼쪽 창문에서 들어오는 빛이 방 안을 부드럽게 비추며, 바닥의 기하학적 타일과 악기, 거울이 완벽한 조화를 이룹니다. 페르메이르는 빛과 공간의 마스터였으며, 이 작품에서 그의 기술이 정점에 달합니다. 거울에 비친 여인의 얼굴은 그녀가 악기보다 남성을 더 바라보고 있음을 암시하여 미묘한 로맨스를 더합니다. 테이블 위의 페르시아 카펫, 첼로, 흰 물병은 17세기 네덜란드의 부유한 가정을 보여줍니다. 바흐의 G선상의 아리아와 함께 감상하면, 바로크 현악의 우아한 선율이 그림 속 음악 레슨의 고요한 분위기와 완벽하게 어우러집니다."
  },
  {
    id: 29,
    title: "뱃놀이하는 사람들의 오찬",
    artist: "피에르 오귀스트 르누아르",
    mood: "활기찬",
    era: "19세기",
    style: "인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg/1280px-Pierre-Auguste_Renoir_-_Luncheon_of_the_Boating_Party_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/qlpbRrNDLz0",
    desc: "1880-1881년에 그려진 이 대작은 센 강변 레스토랑의 테라스에서 점심 식사를 즐기는 르누아르의 친구들을 담고 있습니다. 14명의 인물들이 와인잔을 기울이고 대화를 나누며 여유로운 일요일 오후를 보내는 장면은 인상주의의 정수를 보여줍니다. 각 인물들의 개성 넘치는 표정과 자연스러운 포즈가 마치 사진처럼 생생합니다. 그림 왼쪽 아래의 강아지와 놀고 있는 여인은 르누아르의 미래 아내인 알린 샤리고입니다. 테이블 위의 과일, 와인병, 유리잔은 정물화의 아름다움을 보여주며, 배경에 보이는 센 강과 보트는 당시 파리 시민들의 여가 문화를 반영합니다. 햇빛이 차양막을 통과하며 만들어내는 부드러운 빛, 인물들의 다양한 모자와 의상은 19세기 프랑스 사회의 단면을 보여줍니다. 바흐의 브란덴부르크 협주곡 3번과 함께 감상하면, 경쾌하고 흥겨운 음악이 파티의 즐거운 분위기와 완벽하게 어우러집니다."
  },
  {
    id: 30,
    title: "닥터 가셰의 초상",
    artist: "빈센트 반 고흐",
    mood: "사색적인",
    era: "19세기",
    style: "후기인상주의",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Van_Gogh_-_Portrait_of_Dr._Gachet_-_Second_version.jpg/800px-Van_Gogh_-_Portrait_of_Dr._Gachet_-_Second_version.jpg",
    youtubeUrl: "https://www.youtube.com/embed/9E6b3swbnWg",
    desc: "1890년 6월에 오베르 쉬르 우아즈에서 그린 이 초상화는 반 고흐의 마지막 시기의 걸작입니다. 폴 가셰 박사는 인상주의 화가들을 치료하고 후원한 의사로, 반 고흐의 마지막 몇 주를 함께 보냈습니다. 박사의 우울한 표정은 반 고흐 자신의 내면을 반영하는 듯합니다. 반 고흐는 이 그림에서 파란색과 노란색의 보색 대비를 극대화하여 강렬한 감정적 효과를 만들어냈습니다. 가셰 박사가 턱을 괴고 있는 포즈는 전통적인 멜랑콜리의 상징이며, 그의 눈빛에서 깊은 슬픔이 느껴집니다. 테이블 위의 디기탈리스 꽃은 심장병 치료제로 사용되던 약초로, 의술과 죽음을 동시에 암시합니다. 쇼팽의 녹턴 Op.9 No.2와 함께 감상하면, 서정적이면서도 우울한 피아노 선율이 그림의 깊은 감정과 공명합니다."
  }
];

export const allMoods = Array.from(new Set(artworks.map(a => a.mood)));
export const allArtists = Array.from(new Set(artworks.map(a => a.artist)));

const eraOrder = ["20세기", "19세기", "18세기", "17세기", "16세기", "15세기"];
export const allEras = eraOrder.filter(era => artworks.some(a => a.era === era));

export const allStyles = Array.from(new Set(artworks.map(a => a.style)));
