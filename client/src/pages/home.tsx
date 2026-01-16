import { useState, useMemo } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, ChevronDown, Filter, X, Maximize2 } from "lucide-react";
import { artworks, allMoods, allArtists, allEras, allStyles, type Artwork } from "@/data/artworks";

export default function Home() {
  const [selectedMoods, setSelectedMoods] = useState<string[]>([]);
  const [selectedArtists, setSelectedArtists] = useState<string[]>([]);
  const [selectedEras, setSelectedEras] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [moodOpen, setMoodOpen] = useState(true);
  const [artistOpen, setArtistOpen] = useState(true);
  const [eraOpen, setEraOpen] = useState(true);
  const [styleOpen, setStyleOpen] = useState(true);
  const [fullscreenArtwork, setFullscreenArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = useMemo(() => {
    return artworks.filter(artwork => {
      const moodMatch = selectedMoods.length === 0 || selectedMoods.includes(artwork.mood);
      const artistMatch = selectedArtists.length === 0 || selectedArtists.includes(artwork.artist);
      const eraMatch = selectedEras.length === 0 || selectedEras.includes(artwork.era);
      const styleMatch = selectedStyles.length === 0 || selectedStyles.includes(artwork.style);
      return moodMatch && artistMatch && eraMatch && styleMatch;
    });
  }, [selectedMoods, selectedArtists, selectedEras, selectedStyles]);

  const toggleFilter = (value: string, selected: string[], setSelected: (val: string[]) => void) => {
    setSelected(
      selected.includes(value) 
        ? selected.filter(v => v !== value)
        : [...selected, value]
    );
  };

  const clearAllFilters = () => {
    setSelectedMoods([]);
    setSelectedArtists([]);
    setSelectedEras([]);
    setSelectedStyles([]);
  };

  const hasActiveFilters = selectedMoods.length > 0 || selectedArtists.length > 0 || selectedEras.length > 0 || selectedStyles.length > 0;

  return (
    <div className="flex min-h-screen bg-background">
      <aside 
        className={`border-r border-border bg-sidebar flex-shrink-0 transition-all duration-300 ${
          sidebarOpen ? 'w-72' : 'w-0'
        } overflow-hidden`}
      >
        <div className="w-72 p-6">
          <div className="sticky top-6">
            <div className="flex items-center justify-between mb-6 pb-3 border-b-2 border-primary">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-primary" />
                <h2 className="text-lg font-semibold text-foreground font-serif" data-testid="text-filter-header">
                  필터 옵션
                </h2>
              </div>
            </div>

            {hasActiveFilters && (
              <Button 
                variant="outline" 
                size="sm" 
                onClick={clearAllFilters}
                className="w-full mb-4"
                data-testid="button-clear-filters"
              >
                필터 초기화
              </Button>
            )}
            
            <Collapsible open={moodOpen} onOpenChange={setMoodOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover-elevate rounded px-2" data-testid="trigger-mood">
                <span>분위기</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${moodOpen ? 'rotate-0' : '-rotate-90'}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-2">
                {allMoods.map(mood => (
                  <div key={mood} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`mood-${mood}`}
                      checked={selectedMoods.includes(mood)}
                      onCheckedChange={() => toggleFilter(mood, selectedMoods, setSelectedMoods)}
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
              </CollapsibleContent>
            </Collapsible>

            <Separator className="my-4" />

            <Collapsible open={eraOpen} onOpenChange={setEraOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover-elevate rounded px-2" data-testid="trigger-era">
                <span>시대</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${eraOpen ? 'rotate-0' : '-rotate-90'}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-2">
                {allEras.map(era => (
                  <div key={era} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`era-${era}`}
                      checked={selectedEras.includes(era)}
                      onCheckedChange={() => toggleFilter(era, selectedEras, setSelectedEras)}
                      data-testid={`checkbox-era-${era}`}
                    />
                    <Label 
                      htmlFor={`era-${era}`}
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      {era}
                    </Label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator className="my-4" />

            <Collapsible open={styleOpen} onOpenChange={setStyleOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover-elevate rounded px-2" data-testid="trigger-style">
                <span>사조</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${styleOpen ? 'rotate-0' : '-rotate-90'}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 space-y-2 pl-2">
                {allStyles.map(style => (
                  <div key={style} className="flex items-center space-x-2">
                    <Checkbox 
                      id={`style-${style}`}
                      checked={selectedStyles.includes(style)}
                      onCheckedChange={() => toggleFilter(style, selectedStyles, setSelectedStyles)}
                      data-testid={`checkbox-style-${style}`}
                    />
                    <Label 
                      htmlFor={`style-${style}`}
                      className="text-sm text-muted-foreground cursor-pointer"
                    >
                      {style}
                    </Label>
                  </div>
                ))}
              </CollapsibleContent>
            </Collapsible>

            <Separator className="my-4" />

            <Collapsible open={artistOpen} onOpenChange={setArtistOpen}>
              <CollapsibleTrigger className="flex items-center justify-between w-full py-2 text-sm font-medium text-foreground hover-elevate rounded px-2" data-testid="trigger-artist">
                <span>작가</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${artistOpen ? 'rotate-0' : '-rotate-90'}`} />
              </CollapsibleTrigger>
              <CollapsibleContent className="mt-2 pl-2">
                <ScrollArea className="h-48">
                  <div className="space-y-2 pr-3">
                    {allArtists.map(artist => (
                      <div key={artist} className="flex items-center space-x-2">
                        <Checkbox 
                          id={`artist-${artist}`}
                          checked={selectedArtists.includes(artist)}
                          onCheckedChange={() => toggleFilter(artist, selectedArtists, setSelectedArtists)}
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
                </ScrollArea>
              </CollapsibleContent>
            </Collapsible>

            <Separator className="my-4" />

            <p className="text-xs text-muted-foreground text-center mt-6">
              Museum Melody
            </p>
          </div>
        </div>
      </aside>

      <main className="flex-1 overflow-auto relative">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="absolute left-4 top-4 z-10 bg-card shadow-sm"
          data-testid="button-toggle-sidebar"
        >
          {sidebarOpen ? <ChevronLeft className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
        </Button>
        <ScrollArea className="h-screen">
          <div className="max-w-6xl mx-auto px-8 py-12">
            <header className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground font-serif tracking-wide mb-3" data-testid="text-main-title">
                Museum Melody
              </h1>
              <p className="text-lg text-muted-foreground italic font-serif" data-testid="text-subtitle">
                명화와 클래식 음악의 조화로운 만남
              </p>
              <p className="text-sm text-muted-foreground mt-2">
                {filteredArtworks.length}개의 작품
              </p>
            </header>

            <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-12" />

            {filteredArtworks.length === 0 ? (
              <div className="text-center py-16">
                <p className="text-muted-foreground" data-testid="text-no-results">
                  선택한 필터에 맞는 작품이 없습니다. 필터를 조정해 주세요.
                </p>
              </div>
            ) : (
              <div className="space-y-16">
                {filteredArtworks.map(artwork => (
                  <Card key={artwork.id} className="overflow-hidden" data-testid={`card-artwork-${artwork.id}`}>
                    <CardContent className="p-0">
                      <div className="w-full aspect-[16/10] overflow-hidden bg-muted relative group">
                        <img 
                          src={artwork.imageUrl} 
                          alt={artwork.title}
                          className="w-full h-full object-contain bg-neutral-100 dark:bg-neutral-900 cursor-pointer"
                          onClick={() => setFullscreenArtwork(artwork)}
                          data-testid={`img-artwork-${artwork.id}`}
                        />
                        <Button
                          variant="secondary"
                          size="icon"
                          className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity bg-background/80 backdrop-blur-sm"
                          onClick={() => setFullscreenArtwork(artwork)}
                          data-testid={`button-fullscreen-${artwork.id}`}
                        >
                          <Maximize2 className="w-4 h-4" />
                        </Button>
                      </div>
                      
                      <div className="p-6 md:p-8">
                        <div className="flex flex-wrap items-start gap-2 mb-4">
                          <Badge variant="secondary" className="bg-primary/10 text-primary border-0" data-testid={`badge-mood-${artwork.id}`}>
                            {artwork.mood}
                          </Badge>
                          <Badge variant="outline" data-testid={`badge-era-${artwork.id}`}>
                            {artwork.era}
                          </Badge>
                          <Badge variant="outline" data-testid={`badge-style-${artwork.id}`}>
                            {artwork.style}
                          </Badge>
                        </div>

                        <h3 className="text-2xl md:text-3xl font-semibold text-foreground font-serif mb-2" data-testid={`text-title-${artwork.id}`}>
                          {artwork.title}
                        </h3>
                        <p className="text-primary font-medium text-lg mb-4" data-testid={`text-artist-${artwork.id}`}>
                          {artwork.artist}
                        </p>
                        
                        <p className="text-muted-foreground leading-relaxed mb-8 text-base" data-testid={`text-desc-${artwork.id}`}>
                          {artwork.desc}
                        </p>

                        <div>
                          <p className="text-sm font-medium text-foreground mb-3">추천 클래식 음악</p>
                          <div className="aspect-video max-w-2xl rounded-lg overflow-hidden bg-muted">
                            <iframe
                              src={artwork.youtubeUrl}
                              title={`${artwork.title} music`}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              data-testid={`video-${artwork.id}`}
                            />
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
                당신의 일상에 명화와 선율을 더합니다
              </p>
            </div>
          </div>
        </ScrollArea>
      </main>

      <Dialog open={fullscreenArtwork !== null} onOpenChange={(open) => !open && setFullscreenArtwork(null)}>
        <DialogContent className="max-w-[95vw] max-h-[95vh] p-0 bg-black/95 border-0" aria-describedby={undefined}>
          {fullscreenArtwork && (
            <div className="relative w-full h-full flex flex-col">
              <DialogTitle className="sr-only">{fullscreenArtwork.title} - 전체 화면 보기</DialogTitle>
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setFullscreenArtwork(null)}
                  className="text-white hover:bg-white/20"
                  data-testid="button-close-fullscreen"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>
              <div className="flex-1 flex items-center justify-center p-8">
                <img
                  src={fullscreenArtwork.imageUrl}
                  alt={fullscreenArtwork.title}
                  className="max-w-full max-h-[80vh] object-contain"
                  data-testid="img-fullscreen"
                />
              </div>
              <div className="p-4 text-center text-white">
                <h2 className="text-xl font-serif font-semibold">{fullscreenArtwork.title}</h2>
                <p className="text-white/70">{fullscreenArtwork.artist}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
