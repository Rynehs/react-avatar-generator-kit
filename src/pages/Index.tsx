
import React from 'react';
import { Card } from '@/components/ui/card';
import AvatarGenerator from '@/components/AvatarGenerator';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="py-6 px-4 border-b bg-white">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            Avatar Generator
          </h1>
          <p className="text-center text-muted-foreground mt-2">
            Create and customize your personal avatar
          </p>
        </div>
      </header>
      
      <main className="flex-1 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-background/50 p-6 shadow-sm">
            <AvatarGenerator />
          </Card>
          
          <div className="mt-12 text-center text-muted-foreground text-sm">
            <p>
              Made with Avataaars library. Customize and download your unique avatar!
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
