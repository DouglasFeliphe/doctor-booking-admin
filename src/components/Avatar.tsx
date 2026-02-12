import React from 'react';

type Props = { children?: React.ReactNode };

interface AvatarProps extends React.FC<Props> {
  Img: React.FC<React.ImgHTMLAttributes<HTMLImageElement>>;
  Container: React.FC<Props>;
  Name: React.FC<Props>;
  Description: React.FC<Props>;
}

export const Avatar: AvatarProps = ({ children }) => (
  <div className="flex items-center gap-2">{children}</div>
);

Avatar.Img = ({ ...props }) => (
  <img {...props} className="size-8 rounded-full" />
);

Avatar.Container = ({ children }) => (
  <div className="flex flex-col">{children}</div>
);

Avatar.Name = ({ children }) => <span className="font-medium">{children}</span>;

Avatar.Description = ({ children }) => (
  <span className="text-xs text-muted-foreground">{children}</span>
);
