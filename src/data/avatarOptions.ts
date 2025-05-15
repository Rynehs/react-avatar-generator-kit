
export interface AvatarConfig {
  avatarStyle: string;
  topType: string;
  accessoriesType: string;
  hairColor: string;
  facialHairType: string;
  facialHairColor: string;
  clotheType: string;
  clotheColor: string;
  eyeType: string;
  eyebrowType: string;
  mouthType: string;
  skinColor: string;
}

export const avatarOptions = {
  topType: [
    'NoHair', 'Eyepatch', 'Hat', 'Hijab', 'Turban', 'WinterHat1', 'WinterHat2', 'WinterHat3', 'WinterHat4', 
    'LongHairBigHair', 'LongHairBob', 'LongHairBun', 'LongHairCurly', 'LongHairCurvy', 'LongHairDreads', 
    'LongHairFrida', 'LongHairFro', 'LongHairFroBand', 'LongHairNotTooLong', 'LongHairShavedSides', 
    'LongHairMiaWallace', 'LongHairStraight', 'LongHairStraight2', 'LongHairStraightStrand', 
    'ShortHairDreads01', 'ShortHairDreads02', 'ShortHairFrizzle', 'ShortHairShaggyMullet', 
    'ShortHairShortCurly', 'ShortHairShortFlat', 'ShortHairShortRound', 'ShortHairShortWaved', 
    'ShortHairSides', 'ShortHairTheCaesar', 'ShortHairTheCaesarSidePart'
  ],
  accessoriesType: [
    'Blank', 'Kurt', 'Prescription01', 'Prescription02', 'Round', 'Sunglasses', 'Wayfarers'
  ],
  hairColor: [
    'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 
    'PastelPink', 'Platinum', 'Red', 'SilverGray'
  ],
  facialHairType: [
    'Blank', 'BeardMedium', 'BeardLight', 'BeardMajestic', 'MoustacheFancy', 'MoustacheMagnum'
  ],
  facialHairColor: [
    'Auburn', 'Black', 'Blonde', 'BlondeGolden', 'Brown', 'BrownDark', 'Platinum', 'Red'
  ],
  clotheType: [
    'BlazerShirt', 'BlazerSweater', 'CollarSweater', 'GraphicShirt', 'Hoodie', 
    'Overall', 'ShirtCrewNeck', 'ShirtScoopNeck', 'ShirtVNeck'
  ],
  clotheColor: [
    'Black', 'Blue01', 'Blue02', 'Blue03', 'Gray01', 'Gray02', 'Heather', 
    'PastelBlue', 'PastelGreen', 'PastelOrange', 'PastelRed', 'PastelYellow', 'Pink', 
    'Red', 'White'
  ],
  eyeType: [
    'Close', 'Cry', 'Default', 'Dizzy', 'EyeRoll', 'Happy', 'Hearts', 
    'Side', 'Squint', 'Surprised', 'Wink', 'WinkWacky'
  ],
  eyebrowType: [
    'Angry', 'AngryNatural', 'Default', 'DefaultNatural', 'FlatNatural', 
    'RaisedExcited', 'RaisedExcitedNatural', 'SadConcerned', 'SadConcernedNatural', 
    'UnibrowNatural', 'UpDown', 'UpDownNatural'
  ],
  mouthType: [
    'Concerned', 'Default', 'Disbelief', 'Eating', 'Grimace', 'Sad', 'ScreamOpen', 
    'Serious', 'Smile', 'Tongue', 'Twinkle', 'Vomit'
  ],
  skinColor: [
    'Tanned', 'Yellow', 'Pale', 'Light', 'Brown', 'DarkBrown', 'Black'
  ]
};

// Color mapping for the color selection buttons
export const colorMap: Record<string, string> = {
  // Hair colors
  Auburn: '#A55728',
  Black: '#2C1B18',
  Blonde: '#B58143',
  BlondeGolden: '#D6B370',
  Brown: '#724133',
  BrownDark: '#4A312C',
  PastelPink: '#F59797',
  Platinum: '#ECDCBF',
  Red: '#C93305',
  SilverGray: '#E8E1E1',
  
  // Skin colors
  Tanned: '#FD9841',
  Yellow: '#F8D25C',
  Pale: '#FFDBB4',
  Light: '#EDB98A',
  Brown: '#D08B5B',
  DarkBrown: '#AE5D29',
  
  // Clothes colors
  Blue01: '#65C9FF',
  Blue02: '#5199E4',
  Blue03: '#25557C',
  Gray01: '#E6E6E6',
  Gray02: '#929598',
  Heather: '#3C4F5C',
  PastelBlue: '#B1E2FF',
  PastelGreen: '#A7FFC4',
  PastelOrange: '#FFDEB5',
  PastelRed: '#FFAFB9',
  PastelYellow: '#FFFFB1',
  Pink: '#FF488E',
  White: '#FFFFFF'
};
