/* Design Philosophy: Brutalism + Pixel Art Fusion
 * Asymmetric layout, bold typography, limited color palette
 * Diagonal cuts, geometric shapes, CRT scanline effects
 */

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Download, Sparkles, Code2, Palette, Zap } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [activeEngine, setActiveEngine] = useState("unity");

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Asymmetric diagonal split */}
      <section 
        className="relative min-h-[600px] overflow-hidden scanlines"
        style={{
          clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)"
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-80"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NYK1lghTGmKtbWPGGFfJGC/sandbox/Ec7Nj5ZxZWx2rvgfeuP3sI-img-1_1770866336000_na1fn_aGVyby1waXhlbC1ycGc.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTllLMWxnaFRHbUt0YldQR0dGZkpHQy9zYW5kYm94L0VjN05qNVp4Wld4MnJ2Z2ZldVAzc0ktaW1nLTFfMTc3MDg2NjMzNjAwMF9uYTFmbl9hR1Z5Ynkxd2FYaGxiQzF5Y0djLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=eaqAmxJVCPOOU-VedHb~i0O6JKJKfSIGZh7115muma-JTcAM-02F783TjxeEL8Pe-54iTtU3F4h6x9-yEouHEROS5FAgtyI9jJlpUOfxuOkkpSyLvnAocScGdxurhnanZH7QzeqQHvWxyrYqA9boCNfd5CC0LH1ky2XjWSkLaq9cWkPzzrU9eXg2aaGdyva90U3jlOyZk7312MICrCsD5uYh-pQ69CUFvR~1XYgh4a2Mu5LLnbI6cpzVWe3oN8Ml64No81T7neX6yXMmXVyHZ-47cwycVbmZtDOEIVGaCnIuIH~T4XvM8xR6Eqzo7SNOu0wVdMsMBYD2LzENPByb6A__')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/60 to-transparent" />
        
        <div className="container relative z-10 flex flex-col justify-center min-h-[600px] py-20">
          <div className="max-w-3xl">
            <Badge className="mb-6 bg-primary text-primary-foreground font-mono text-sm px-4 py-2">
              <Code2 className="w-4 h-4 mr-2" />
              遊戲開發指南 2026
            </Badge>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-foreground">
              像素風格<br />
              <span className="text-primary">2D RPG</span><br />
              遊戲製作指南
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-sans max-w-2xl">
              從引擎選擇到AI輔助工具，完整掌握像素藝術遊戲開發的技術與創意流程
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="brutalist-border bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base px-8"
                onClick={() => document.getElementById('engines')?.scrollIntoView({ behavior: 'smooth' })}
              >
                開始探索
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="brutalist-border font-mono text-base px-8"
                onClick={() => document.getElementById('ai-tools')?.scrollIntoView({ behavior: 'smooth' })}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                AI工具推薦
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Game Engines Section */}
      <section id="engines" className="py-24 bg-card">
        <div className="container">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">遊戲引擎選擇</h2>
            <div className="h-1 w-32 bg-primary" />
          </div>

          <Tabs value={activeEngine} onValueChange={setActiveEngine} className="w-full">
            <TabsList className="grid w-full max-w-md grid-cols-2 mb-12 h-auto p-1 bg-muted">
              <TabsTrigger value="unity" className="font-mono text-base py-3">
                Unity
              </TabsTrigger>
              <TabsTrigger value="cocos" className="font-mono text-base py-3">
                Cocos Creator
              </TabsTrigger>
            </TabsList>

            <TabsContent value="unity" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div 
                    className="aspect-[3/4] bg-cover bg-center mb-6 pixel-border border-primary"
                    style={{
                      backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NYK1lghTGmKtbWPGGFfJGC/sandbox/Ec7Nj5ZxZWx2rvgfeuP3sI-img-2_1770866331000_na1fn_dW5pdHktZW5naW5lLWFic3RyYWN0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTllLMWxnaFRHbUt0YldQR0dGZkpHQy9zYW5kYm94L0VjN05qNVp4Wld4MnJ2Z2ZldVAzc0ktaW1nLTJfMTc3MDg2NjMzMTAwMF9uYTFmbl9kVzVwZEhrdFpXNW5hVzVsTFdGaWMzUnlZV04wLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=X9gAuzooL1wCQqyohfotJVOwFzf84ziX~u0U~XO2D7dV4ojxNLd7HVCUe8Nu-ACO86rvEmVMjNJHrXdpkkRz0~KlK3pcGFzv6B9s07dsXSNqfbObSnBouUaQDOD~EyL2ou91UFlK9SPMPlxVwc4scYyR73JdoAlkTTlSQmfuLZrP1aiPF4IxYSqRMfT7Z53maE19yKVC6XNxo3nclVPLMwmjJXzJi~HUVdPZeKpcBQrUCMwbjfalGuw5kt8xX5Jccc7AMpusG4sSFicfvZ18dvK~anK6KpOe84027HmGCTLi8Ec~YE0zNM6i20d0-dj6xTFpdN0vFUrHRLOZbWVNww__')`
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Unity 2D Pixel Perfect</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Unity作為業界標準的3D引擎,同樣為2D遊戲開發提供了強大的原生工具集。要實現完美的像素藝術風格,精確的專案設定至關重要。
                    </p>
                  </div>

                  <Card className="p-6 bg-background border-2 border-border">
                    <h4 className="font-mono font-bold text-lg mb-4 text-primary">核心設定步驟</h4>
                    <div className="space-y-4">
                      <div className="border-l-4 border-secondary pl-4">
                        <div className="font-mono font-semibold text-sm text-secondary mb-1">Sprite素材準備</div>
                        <div className="text-sm text-muted-foreground">Filter Mode: Point | Compression: None | Pivot Unit: Pixels</div>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <div className="font-mono font-semibold text-sm text-secondary mb-1">2D Pixel Perfect套件</div>
                        <div className="text-sm text-muted-foreground">透過Package Manager安裝官方套件</div>
                      </div>
                      <div className="border-l-4 border-secondary pl-4">
                        <div className="font-mono font-semibold text-sm text-secondary mb-1">Pixel Perfect Camera</div>
                        <div className="text-sm text-muted-foreground">PPU: 16 | Reference Resolution: 320x180</div>
                      </div>
                    </div>
                  </Card>

                  <Button 
                    variant="outline" 
                    className="w-full font-mono border-2"
                    onClick={() => window.open('https://unity.com/blog/games/2d-pixel-perfect-how-to-set-up-your-unity-project-for-retro-8-bits-games', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    查看Unity官方教學
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="cocos" className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div 
                    className="aspect-[3/4] bg-cover bg-center mb-6 pixel-border border-primary"
                    style={{
                      backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NYK1lghTGmKtbWPGGFfJGC/sandbox/Ec7Nj5ZxZWx2rvgfeuP3sI-img-3_1770866332000_na1fn_Y29jb3MtY3JlYXRvci1hYnN0cmFjdA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTllLMWxnaFRHbUt0YldQR0dGZkpHQy9zYW5kYm94L0VjN05qNVp4Wld4MnJ2Z2ZldVAzc0ktaW1nLTNfMTc3MDg2NjMzMjAwMF9uYTFmbl9ZMjlqYjNNdFkzSmxZWFJ2Y2kxaFluTjBjbUZqZEEucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=dRQs5TN6vuvKqvqbY500QhyRPB2KeejJvJi3b0sLCBIXYcIizBd8QX9vheSOeLad9CYWsAZ7lYvELITi2cYDpibQGgf5Pjl2sbQ6xksAloCx~SJxTRbiNcF3scRULgSB6R9SX-XiP8nfGWsOduYzvRfcmZz7JSaagI2DwLpHt7kVD44vCQ4setJIg5OlYy2iLfeAG3Ksz4biPHLDkFZ5O2peRE4hx1W0zHekcXzY94FJFUrthf5RHMRfTEU2B1fRVkpRuov00GxVy3qUB~4IisVVqPaQJupCvo4j~v0XKyizAG7InXshnNx5RspvfaBC2CifIflBMYsJQBWNqovSJw__')`
                    }}
                  />
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-4 text-foreground">Cocos Creator 2D專精</h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Cocos Creator是專注於2D遊戲開發的整合式開發環境,其核心設計理念使其在2D領域具有天然優勢。華語市場超過一半的手機遊戲由此引擎開發。
                    </p>
                  </div>

                  <Card className="p-6 bg-background border-2 border-border">
                    <h4 className="font-mono font-bold text-lg mb-4 text-primary">核心優勢</h4>
                    <div className="space-y-4">
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm mb-1">完全免費</div>
                          <div className="text-sm text-muted-foreground">無需授權費用,中小型團隊首選</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm mb-1">輕量高效</div>
                          <div className="text-sm text-muted-foreground">底層由Cocos2d-x演化,保持原生級性能</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm mb-1">跨平台發佈</div>
                          <div className="text-sm text-muted-foreground">一次開發,發佈到Web/iOS/Android/PC</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Zap className="w-5 h-5 text-secondary mt-1 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-sm mb-1">易於上手</div>
                          <div className="text-sm text-muted-foreground">JavaScript/TypeScript開發,動態調試</div>
                        </div>
                      </div>
                    </div>
                  </Card>

                  <Button 
                    variant="outline" 
                    className="w-full font-mono border-2"
                    onClick={() => window.open('https://acupun.site/lecture/CocosCreator/', '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    查看Cocos教學資源
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* AI Tools Section */}
      <section id="ai-tools" className="py-24 bg-background relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NYK1lghTGmKtbWPGGFfJGC/sandbox/Ec7Nj5ZxZWx2rvgfeuP3sI-img-5_1770866327000_na1fn_cGl4ZWwtcGF0dGVybi10ZXh0dXJl.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTllLMWxnaFRHbUt0YldQR0dGZkpHQy9zYW5kYm94L0VjN05qNVp4Wld4MnJ2Z2ZldVAzc0ktaW1nLTVfMTc3MDg2NjMyNzAwMF9uYTFmbl9jR2w0Wld3dGNHRjBkR1Z5YmkxMFpYaDBkWEpsLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=U35WZP09hYUawS9vJE0Xd4v3O08ULr1EQWqcO9cDjpI6Gzbj4DROP6jfmvgZSCv6yXjR5F6Vwd63Y0WbLrPRk~ZVTiG6M5Y9naXeCo93~aD4HPqxi6c7dexNQBHgO~KlFEAwlj4GhTERS4geDJhQLLNx27LlJRLTsE9~9Ho5GjdhO7MG3SaiTfczzTHZ7VF5PWE-abNYJ8HzHXGQaxocTWX6v6Kri5h6VaW1LW56anFzN6kKsW~6-qAqIWnzrp~3iLys6E2lNTyQ7FHp0ruyyHjQJ-habZzBV~uw0wRfH47F5v7W2NkuO8UkaRBK1v~S~OfJk9esM5kfnhqOqBupvw__')`,
            backgroundRepeat: 'repeat'
          }}
        />
        
        <div className="container relative z-10">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">免費AI輔助工具</h2>
            <div className="h-1 w-32 bg-primary" />
            <p className="text-xl text-muted-foreground mt-6 max-w-3xl">
              生成式AI為遊戲開發帶來革命性變化。以下工具提供免費方案,涵蓋素材生成、自動化測試等多個領域。
            </p>
          </div>

          <div 
            className="aspect-[3/2] bg-cover bg-center mb-12 pixel-border border-primary"
            style={{
              backgroundImage: `url('https://private-us-east-1.manuscdn.com/sessionFile/NYK1lghTGmKtbWPGGFfJGC/sandbox/Ec7Nj5ZxZWx2rvgfeuP3sI-img-4_1770866342000_na1fn_YWktdG9vbHMtcGl4ZWwtYXJ0.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvTllLMWxnaFRHbUt0YldQR0dGZkpHQy9zYW5kYm94L0VjN05qNVp4Wld4MnJ2Z2ZldVAzc0ktaW1nLTRfMTc3MDg2NjM0MjAwMF9uYTFmbl9ZV2t0ZEc5dmJITXRjR2w0Wld3dFlYSjAucG5nP3gtb3NzLXByb2Nlc3M9aW1hZ2UvcmVzaXplLHdfMTkyMCxoXzE5MjAvZm9ybWF0LHdlYnAvcXVhbGl0eSxxXzgwIiwiQ29uZGl0aW9uIjp7IkRhdGVMZXNzVGhhbiI6eyJBV1M6RXBvY2hUaW1lIjoxNzk4NzYxNjAwfX19XX0_&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=K~dTGlX3q2kr3LVPONi8tn8v0leM3JJXbWRT8aj5NTsw5oBE9fO2PcQVqaPqVrPzY2oZPGMphM8JekEcfCZA-Qc9aaERt2vVp2sh7HGu7f1~GJzUrI0FcLoXwj9hOPxfqNeWa-wEBHDvLpjvqgXBEiq0YhYoCK4JeR~vvnHLqaVH-mTKL0OWd78JQEJO0-3W-78oRiXmR6vDiGX82Y9DTgyn9rHFXYggZCmR-L2g~bl0wT4wM2xetvVpQ4wk77GSkEQjIBupHlgIdNQQIrzYzd0psuZrPFk4V7sRhVRsfREqEG5ZVuYwIbbYwSatRZHS0UVSR4QajzmIgnaAOZI1OA__')`
            }}
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* GDevelop */}
            <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">整合式引擎</Badge>
              <h3 className="text-xl font-bold mb-3 text-foreground">GDevelop</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                開源無代碼AI遊戲引擎,使用事件系統建構遊戲,無需編寫程式碼。完全免費,支援2D/3D/多人遊戲開發。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">無代碼</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">AI輔助</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">跨平台</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full font-mono"
                onClick={() => window.open('https://gdevelop.io/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                訪問官網
              </Button>
            </Card>

            {/* PixelLab */}
            <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">素材生成</Badge>
              <h3 className="text-xl font-bold mb-3 text-foreground">PixelLab</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                專門的像素藝術AI生成器,提供動畫、多角度旋轉、風格一致性編輯等功能。已被3,000+獨立開發者使用。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">像素藝術</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">動畫</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">免費試用</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full font-mono"
                onClick={() => window.open('https://www.pixellab.ai/', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                訪問官網
              </Button>
            </Card>

            {/* PixelVibe */}
            <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">素材生成</Badge>
              <h3 className="text-xl font-bold mb-3 text-foreground">PixelVibe</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Rosebud AI推出的2D遊戲素材生成器,提供角色、道具、環境等多種素材類型,並有大量免費素材包可下載。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">2D素材</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">免費包</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">多樣化</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full font-mono"
                onClick={() => window.open('https://rosebud.ai/ai-game-assets', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                訪問官網
              </Button>
            </Card>

            {/* Unity AI Tools */}
            <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">Unity插件</Badge>
              <h3 className="text-xl font-bold mb-3 text-foreground">Unity AI工具集</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                Unity Asset Store提供9款免費AI工具,包括Convai對話系統、Layer AI美術生成、Modl.ai自動測試等。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">對話AI</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">美術生成</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">自動測試</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full font-mono"
                onClick={() => window.open('https://www.incgmedia.com/new-release/9-ai-tools-in-unity', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                查看詳情
              </Button>
            </Card>

            {/* Recraft AI */}
            <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">線上工具</Badge>
              <h3 className="text-xl font-bold mb-3 text-foreground">Recraft AI</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                免費線上遊戲素材生成器,一次可創建最多6個獨特素材,只需描述願景即可快速生成。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">線上</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">快速</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">免費</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full font-mono"
                onClick={() => window.open('https://www.recraft.ai/generate/game-assets', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                訪問官網
              </Button>
            </Card>

            {/* OpenArt */}
            <Card className="p-6 bg-card border-2 border-border hover:border-primary transition-colors">
              <Badge className="mb-4 bg-secondary text-secondary-foreground">線上工具</Badge>
              <h3 className="text-xl font-bold mb-3 text-foreground">OpenArt</h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                免費文字轉遊戲素材AI生成器,可開發獨特元素和紋理,適合快速原型製作。
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">文字轉圖</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">紋理</span>
                <span className="text-xs px-2 py-1 bg-muted text-muted-foreground font-mono">元素</span>
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="w-full font-mono"
                onClick={() => window.open('https://openart.ai/generator/game-asset', '_blank')}
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                訪問官網
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Download Section */}
      <section className="py-24 bg-card">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <Palette className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">下載完整指南</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              獲取包含詳細設定步驟、工具比較表格和參考資料的完整Markdown文件
            </p>
            <Button 
              size="lg" 
              className="brutalist-border bg-primary text-primary-foreground hover:bg-primary/90 font-mono text-base px-8"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/api/download-guide';
                link.download = '2D_Pixel_RPG_Dev_Guide.md';
                link.click();
              }}
            >
              <Download className="w-5 h-5 mr-2" />
              下載Markdown文件
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-background border-t-2 border-border">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="font-mono text-sm text-muted-foreground">
              © 2026 像素風格2D RPG遊戲製作指南 | 由 Manus AI 編撰
            </div>
            <div className="flex gap-6">
              <a href="#engines" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                遊戲引擎
              </a>
              <a href="#ai-tools" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                AI工具
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
