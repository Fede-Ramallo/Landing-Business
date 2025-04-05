export interface WhatsappButtonEntity {
  phone: number;
  message: string;
}
// button
export type ButtonProps = {
  dark?: boolean;
  light?: boolean;
  large?: boolean;
  brown?: boolean;
  white?: boolean;
  label: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit';
};

// export interface HeroComponentProps extends HeroEntity {}

export interface WhatsappButtonProps extends WhatsappButtonEntity {}