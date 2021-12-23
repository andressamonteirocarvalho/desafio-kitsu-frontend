export interface AnimeProps {
  title: string;
  image: string;
  rating: number;
  chapters: number;
  sinopse: string;
  rank: number;
}

export interface CardProps {
  title: string;
  image: string;
  onClick: () => void;
}

export interface NavBarProps {
  onClick: (type: boolean) => void;
}

export interface ModalProps {
  item: {
    image: string;
    title: string;
    rating: number;
    chapters: number;
    sinopse: string;
    rank: number;
  };
  onClose: () => void;
}
