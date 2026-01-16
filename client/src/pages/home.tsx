import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Artwork {
  id: number;
  title: string;
  artist: string;
  mood: string;
  imageUrl: string;
  youtubeUrl: string;
  desc: string;
}

const artworks: Artwork[] = [
  {
    id: 1,
    title: "인상, 해돋이 (Impression, Sunrise)",
    artist: "클로드 모네 (Claude Monet)",
    mood: "평화로운",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/5/59/Monet_-_Impression%2C_Sunrise.jpg",
    youtubeUrl: "https://www.youtube.com/embed/ygEL8xMqzVE",
    desc: "모네의 대표작으로, 아침 안개 속에 떠오르는 태양의 부드러운 빛을 담았습니다. 드뷔시의 아라베스크와 함께 감상하면, 인상주의 미술과 음악이 만들어내는 몽환적인 아침 풍경 속으로 빠져들게 됩니다."
  },
  {
    id: 2,
    title: "물랭 드 라 갈레트의 무도회 (Bal du moulin de la Galette)",
    artist: "피에르 오귀스트 르누아르 (Pierre-Auguste Renoir)",
    mood: "활기찬",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Pierre-Auguste_Renoir%2C_Le_Moulin_de_la_Galette.jpg",
    youtubeUrl: "https://www.youtube.com/embed/O6txOvK-mAk",
    desc: "파리 몽마르트르의 활기찬 댄스 파티를 담은 이 작품은 바흐의 경쾌한 브란덴부르크 협주곡과 완벽한 조화를 이룹니다. 그림 속 인물들의 즐거운 움직임이 음악과 함께 살아 움직이는 듯합니다."
  },
  {
    id: 3,
    title: "수련 (Water Lilies)",
    artist: "클로드 모네 (Claude Monet)",
    mood: "평화로운",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Claude_Monet_-_Water_Lilies_-_1906%2C_Ryerson.jpg",
    youtubeUrl: "https://www.youtube.com/embed/2bosouX_d8Y",
    desc: "모네가 말년에 심혈을 기울여 그린 수련 연작은 고요하고 명상적인 분위기를 자아냅니다. 사티의 짐노페디와 함께 감상하면 마치 평화로운 연못가에 앉아있는 듯한 깊은 평온함을 느낄 수 있습니다."
  },
  {
    id: 4,
    title: "별이 빛나는 밤 (The Starry Night)",
    artist: "빈센트 반 고흐 (Vincent van Gogh)",
    mood: "로맨틱한",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg/1280px-Van_Gogh_-_Starry_Night_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/rJ5C_Z6FqEg",
    desc: "반 고흐의 격정적인 붓터치로 그려진 밤하늘은 쇼팽의 녹턴과 함께할 때 더욱 깊은 감동을 선사합니다. 소용돌이치는 별빛과 피아노 선율이 어우러져 로맨틱한 밤의 정취를 완성합니다."
  },
  {
    id: 5,
    title: "봄 (Spring)",
    artist: "피에르 오귀스트 르누아르 (Pierre-Auguste Renoir)",
    mood: "로맨틱한",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Pierre-Auguste_Renoir_-_Spring_Bouquet.jpg",
    youtubeUrl: "https://www.youtube.com/embed/HLUX0y4EptA",
    desc: "르누아르가 담아낸 화사한 봄의 풍경은 비발디의 사계 중 봄과 최고의 조합을 이룹니다. 꽃과 따스한 햇살이 가득한 그림이 경쾌한 바이올린 선율과 만나 봄의 설렘을 전해줍니다."
  },
  {
    id: 6,
    title: "생트 빅투아르 산 (Mont Sainte-Victoire)",
    artist: "폴 세잔 (Paul Cezanne)",
    mood: "평화로운",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Paul_C%C3%A9zanne_-_Mont_Sainte-Victoire_-_1904_-_Philadelphia_Museum_of_Art.jpg",
    youtubeUrl: "https://www.youtube.com/embed/kSE15tLBdso",
    desc: "세잔이 수십 번에 걸쳐 그린 생트 빅투아르 산은 베토벤의 전원 교향곡과 함께 감상하기 좋습니다. 프로방스의 고요한 자연 풍경이 전원적인 선율과 어우러져 평화로운 힐링의 시간을 선사합니다."
  },
  {
    id: 7,
    title: "테라스에서 (Two Sisters on the Terrace)",
    artist: "피에르 오귀스트 르누아르 (Pierre-Auguste Renoir)",
    mood: "활기찬",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/8/85/Pierre-Auguste_Renoir_-_Two_Sisters_%28On_the_Terrace%29_-_Google_Art_Project.jpg",
    youtubeUrl: "https://www.youtube.com/embed/7maJOI3QMu0",
    desc: "두 자매가 파리 교외의 테라스에서 보내는 화창한 오후를 담은 이 작품은 모차르트의 밝고 우아한 협주곡과 잘 어울립니다. 햇살 가득한 행복한 순간이 음악과 함께 더욱 생생하게 다가옵니다."
  }
];

const allMoods = [...new Set(artworks.map(a => a.mood))];
const allArtists = [...new Set(artworks.map(a => a.artist))];

export default function Home() {
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);

  const filteredArtworks = useMemo(() => {
    return artworks.filter(artwork => {
      const moodMatch = selectedMoods.length === 0 || selectedMoods.includes(artwork.mood);
      const artistMatch = selectedArtists.length === 0 || selectedArtists.includes(artwork.artist);
      return moodMatch && artistMatch;
    });
  }, [selectedMoods, selectedArtists]);

  const toggleMood = (mood: string) => {
    setSelectedMoods(prev => 
      prev.includes(mood) 
        ? prev.filter(m => m !== mood)
        : [...prev, mood]
    );
  };

  const toggleArtist = (artist: string) => {
    setSelectedArtists(prev => 
      prev.includes(artist) 
        ? prev.filter(a => a !== artist)
        : [...prev, artist]
    );
  };

  return (
    <div className="flex min-h-screen bg-background">
      <aside className="w-72 border-r border-border bg-sidebar p-6 flex-shrink-0">
        <div className="sticky top-6">
          <h2 className="text-lg font-semibold text-foreground mb-6 pb-3 border-b-2 border-primary font-serif" data-testid="text-filter-header">
            Filter Options
          </h2>
          
          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">분위기 선택</h3>
            <div className="space-y-2">
              {allMoods.map(mood => (
                <div key={mood} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`mood-${mood}`}
                    checked={selectedMoods.includes(mood)}
                    onCheckedChange={() => toggleMood(mood)}
                    data-testid={`checkbox-mood-${mood}`}
                  />
                  <Label 
                    htmlFor={`mood-${mood}`}
                    className="text-sm text-muted-foreground cursor-pointer"
                  >
                    {mood}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          <div className="mb-6">
            <h3 className="text-sm font-medium text-foreground mb-3">작가 선택</h3>
            <div className="space-y-2">
              {allArtists.map(artist => (
                <div key={artist} className="flex items-center space-x-2">
                  <Checkbox 
                    id={`artist-${artist}`}
                    checked={selectedArtists.includes(artist)}
                    onCheckedChange={() => toggleArtist(artist)}
                    data-testid={`checkbox-artist-${artist}`}
                  />
                  <Label 
                    htmlFor={`artist-${artist}`}
                    className="text-sm text-muted-foreground cursor-pointer leading-snug"
                  >
                    {artist}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          <Separator className="my-6" />

          <p className="text-xs text-muted-foreground text-center mt-6">
            Museum Melody
          </p>
        </div>
      </aside>

      <main className="flex-1 overflow-auto">
        <ScrollArea className="h-screen">
          <div className="max-w-5xl mx-auto px-8 py-12">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif tracking-wide mb-3" data-testid="text-main-title">
                Museum Melody
              </h1>
              <p className="text-lg text-muted-foreground italic font-serif" data-testid="text-subtitle">
                당신의 일상에 명화와 선율을 더합니다.
              </p>
            </header>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground" data-testid="text-no-results">
                  선택한 조건에 맞는 작품이 없습니다. 필터를 조정해 주세요.
                </p>
              </div>
            ) : (
              <div className="space-y-12">
                {filteredArtworks.map(artwork => (
                  <Card key={artwork.id} className="overflow-hidden" data-testid={`card-artwork-${artwork.id}`}>
                    <CardContent className="p-0">
                      <div className="grid md:grid-cols-2 gap-0">
                        <div className="aspect-[4/3] overflow-hidden">
                          <img 
                            src={artwork.imageUrl} 
                            alt={artwork.title}
                            className="w-full h-full object-cover"
                            data-testid={`img-artwork-${artwork.id}`}
                          />
                        </div>
                        <div className="p-6 flex flex-col">
                          <div>
                            <h3 className="text-xl font-semibold text-foreground font-serif mb-1" data-testid={`text-title-${artwork.id}`}>
                              {artwork.title}
                            </h3>
                            <p className="text-primary font-medium mb-3" data-testid={`text-artist-${artwork.id}`}>
                              {artwork.artist}
                            </p>
                            <Badge variant="secondary" className="bg-primary/10 text-primary border-0 mb-4" data-testid={`badge-mood-${artwork.id}`}>
                              {artwork.mood}
                            </Badge>
                            <p className="text-sm text-muted-foreground leading-relaxed mb-4" data-testid={`text-desc-${artwork.id}`}>
                              {artwork.desc}
                            </p>
                          </div>
                          <div className="mt-auto">
                            <p className="text-sm font-medium text-foreground mb-2">추천 클래식 음악</p>
                            <div className="aspect-video rounded-md overflow-hidden bg-muted">
                              <iframe
                                src={artwork.youtubeUrl}
                                title={`${artwork.title} 추천 음악`}
                                className="w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                data-testid={`video-${artwork.id}`}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}

            <div className="text-center py-12 mt-8">
              <p className="text-sm text-muted-foreground">
                명화와 클래식 음악의 조화로운 만남
              </p>
            </div>
          </div>
        </ScrollArea>
      </main>
    </div>
  );
}
