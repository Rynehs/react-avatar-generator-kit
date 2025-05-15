
import React, { useState } from 'react';
import Avatar from 'avataaars';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';
import { toast } from 'sonner';
import { Download, Shuffle } from 'lucide-react';
import AvatarOptions from './AvatarOptions';
import { avatarOptions, AvatarConfig } from '@/data/avatarOptions';

const defaultAvatar: AvatarConfig = {
  avatarStyle: 'Circle',
  topType: 'LongHairMiaWallace',
  accessoriesType: 'Prescription02',
  hairColor: 'Brown',
  facialHairType: 'Blank',
  facialHairColor: 'Black',
  clotheType: 'Hoodie',
  clotheColor: 'PastelBlue',
  eyeType: 'Default',
  eyebrowType: 'Default',
  mouthType: 'Smile',
  skinColor: 'Light'
};

const AvatarGenerator: React.FC = () => {
  const [avatarConfig, setAvatarConfig] = useState<AvatarConfig>(defaultAvatar);
  
  const randomizeAvatar = () => {
    const newConfig: AvatarConfig = {
      avatarStyle: 'Circle',
      topType: getRandomOption('topType'),
      accessoriesType: getRandomOption('accessoriesType'),
      hairColor: getRandomOption('hairColor'),
      facialHairType: getRandomOption('facialHairType'),
      facialHairColor: getRandomOption('facialHairColor'),
      clotheType: getRandomOption('clotheType'),
      clotheColor: getRandomOption('clotheColor'),
      eyeType: getRandomOption('eyeType'),
      eyebrowType: getRandomOption('eyebrowType'),
      mouthType: getRandomOption('mouthType'),
      skinColor: getRandomOption('skinColor')
    };
    
    setAvatarConfig(newConfig);
    toast.success('Avatar randomized!');
  };
  
  const getRandomOption = (optionType: keyof typeof avatarOptions) => {
    const options = avatarOptions[optionType];
    return options[Math.floor(Math.random() * options.length)];
  };
  
  const handleOptionChange = (category: keyof AvatarConfig, value: string) => {
    setAvatarConfig(prev => ({ ...prev, [category]: value }));
  };
  
  const downloadAvatar = () => {
    const svgElement = document.getElementById('avatar-svg');
    if (!svgElement) return;
    
    const svgData = new XMLSerializer().serializeToString(svgElement);
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    canvas.width = 300;
    canvas.height = 300;
    
    img.onload = () => {
      if (ctx) {
        ctx.drawImage(img, 0, 0, 300, 300);
        const pngFile = canvas.toDataURL('image/png');
        
        const downloadLink = document.createElement('a');
        downloadLink.download = 'my-avatar.png';
        downloadLink.href = pngFile;
        downloadLink.click();
        
        toast.success('Avatar downloaded successfully!');
      }
    };
    
    img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
  };
  
  return (
    <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
      <div className="flex flex-col md:flex-row gap-6 w-full">
        <Card className="flex-1 min-w-[300px]">
          <CardContent className="flex items-center justify-center p-6">
            <div className="avatar-wrapper bg-accent p-8 rounded-full shadow-lg" style={{ width: '280px', height: '280px' }}>
              <div id="avatar-svg">
                <Avatar
                  style={{ width: '100%', height: '100%' }}
                  {...avatarConfig}
                />
              </div>
            </div>
          </CardContent>
        </Card>
        
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex items-center gap-2">
            <Button 
              variant="default" 
              className="w-full bg-primary hover:bg-primary/90" 
              onClick={randomizeAvatar}
            >
              <Shuffle className="mr-2 h-4 w-4" /> Randomize
            </Button>
            <Button 
              variant="outline" 
              className="w-full" 
              onClick={downloadAvatar}
            >
              <Download className="mr-2 h-4 w-4" /> Download
            </Button>
          </div>
          
          <Separator className="my-2" />
          
          <Tabs defaultValue="top">
            <TabsList className="grid grid-cols-3">
              <TabsTrigger value="top">Head</TabsTrigger>
              <TabsTrigger value="face">Face</TabsTrigger>
              <TabsTrigger value="clothes">Clothes</TabsTrigger>
            </TabsList>
            
            <ScrollArea className="h-[400px] mt-2 pr-4">
              <TabsContent value="top" className="mt-0">
                <AvatarOptions
                  title="Hair Style"
                  options={avatarOptions.topType}
                  selected={avatarConfig.topType}
                  onChange={(value) => handleOptionChange('topType', value)}
                />
                
                <AvatarOptions
                  title="Hair Color"
                  options={avatarOptions.hairColor}
                  selected={avatarConfig.hairColor}
                  onChange={(value) => handleOptionChange('hairColor', value)}
                  isColor
                />
                
                <AvatarOptions
                  title="Skin Tone"
                  options={avatarOptions.skinColor}
                  selected={avatarConfig.skinColor}
                  onChange={(value) => handleOptionChange('skinColor', value)}
                  isColor
                />
                
                <AvatarOptions
                  title="Accessories"
                  options={avatarOptions.accessoriesType}
                  selected={avatarConfig.accessoriesType}
                  onChange={(value) => handleOptionChange('accessoriesType', value)}
                />
              </TabsContent>
              
              <TabsContent value="face" className="mt-0">
                <AvatarOptions
                  title="Eyes"
                  options={avatarOptions.eyeType}
                  selected={avatarConfig.eyeType}
                  onChange={(value) => handleOptionChange('eyeType', value)}
                />
                
                <AvatarOptions
                  title="Eyebrows"
                  options={avatarOptions.eyebrowType}
                  selected={avatarConfig.eyebrowType}
                  onChange={(value) => handleOptionChange('eyebrowType', value)}
                />
                
                <AvatarOptions
                  title="Mouth"
                  options={avatarOptions.mouthType}
                  selected={avatarConfig.mouthType}
                  onChange={(value) => handleOptionChange('mouthType', value)}
                />
                
                <AvatarOptions
                  title="Facial Hair"
                  options={avatarOptions.facialHairType}
                  selected={avatarConfig.facialHairType}
                  onChange={(value) => handleOptionChange('facialHairType', value)}
                />
                
                <AvatarOptions
                  title="Facial Hair Color"
                  options={avatarOptions.facialHairColor}
                  selected={avatarConfig.facialHairColor}
                  onChange={(value) => handleOptionChange('facialHairColor', value)}
                  isColor
                />
              </TabsContent>
              
              <TabsContent value="clothes" className="mt-0">
                <AvatarOptions
                  title="Clothes"
                  options={avatarOptions.clotheType}
                  selected={avatarConfig.clotheType}
                  onChange={(value) => handleOptionChange('clotheType', value)}
                />
                
                <AvatarOptions
                  title="Clothes Color"
                  options={avatarOptions.clotheColor}
                  selected={avatarConfig.clotheColor}
                  onChange={(value) => handleOptionChange('clotheColor', value)}
                  isColor
                />
              </TabsContent>
            </ScrollArea>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default AvatarGenerator;
