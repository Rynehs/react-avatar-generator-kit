
import React from 'react';
import { cn } from '@/lib/utils';
import { colorMap } from '@/data/avatarOptions';

interface AvatarOptionsProps {
  title: string;
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  isColor?: boolean;
}

const AvatarOptions: React.FC<AvatarOptionsProps> = ({ 
  title, 
  options, 
  selected, 
  onChange,
  isColor = false
}) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg font-medium mb-3">{title}</h3>
      <div className="option-grid">
        {options.map((option) => {
          const isSelected = option === selected;
          
          return isColor ? (
            <button
              key={option}
              className={cn(
                "w-full h-10 rounded-md border-2 transition-all",
                isSelected 
                  ? "border-primary ring-2 ring-primary/30" 
                  : "border-border hover:border-primary/50"
              )}
              style={{ 
                backgroundColor: colorMap[option] || '#ccc',
              }}
              onClick={() => onChange(option)}
              title={option}
            />
          ) : (
            <button
              key={option}
              className={cn(
                "bg-background text-xs py-2 px-3 rounded-md border transition-all truncate",
                isSelected 
                  ? "border-primary bg-primary/10 font-medium" 
                  : "border-border hover:border-primary/50"
              )}
              onClick={() => onChange(option)}
              title={option}
            >
              {option.replace(/([A-Z])/g, ' $1').trim()}
            </button>
          )}
        })}
      </div>
    </div>
  );
};

export default AvatarOptions;
